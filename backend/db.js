import fs from 'fs';
import path from 'path';
import { DatabaseSync } from 'node:sqlite';
import { categories, pages, galleryImages, media } from './data.js';

const dataDir = path.join(process.cwd(), 'data');
const dbPath = path.join(dataDir, 'symposium.db');

fs.mkdirSync(dataDir, { recursive: true });

export const db = new DatabaseSync(dbPath);
db.exec(`
  PRAGMA journal_mode = WAL;
  PRAGMA foreign_keys = ON;
  PRAGMA busy_timeout = 3000;
`);

const schemaPath = path.join(import.meta.dirname, 'schema.sql');
db.exec(fs.readFileSync(schemaPath, 'utf8'));

const insertCategory = db.prepare('INSERT OR IGNORE INTO categories (id, name, slug) VALUES (?, ?, ?)');
const insertPage = db.prepare(`
  INSERT OR IGNORE INTO pages (
    id, slug, title, description, full_description, image_url,
    category_id, location_name, location_coordinates, location_maps_url,
    video_link, created_at
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);
const insertGalleryImage = db.prepare('INSERT OR IGNORE INTO gallery_images (id, page_id, image_url, sort_order) VALUES (?, ?, ?, ?)');
const insertMedia = db.prepare('INSERT OR IGNORE INTO media (id, file_name, original_name, mime_type, size, url, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)');

export function ensureDatabaseReady() {
  if (db.prepare('SELECT COUNT(*) FROM categories').get()['COUNT(*)'] === 0) {
    for (const category of categories) {
      insertCategory.run(category.id, category.name, category.slug);
    }
  }

  if (db.prepare('SELECT COUNT(*) FROM pages').get()['COUNT(*)'] === 0) {
    for (const page of pages) {
      const categoryRow = db.prepare('SELECT id FROM categories WHERE slug = ?').get(page.category.toLowerCase());
      insertPage.run(
        page.id,
        page.slug,
        page.title,
        page.description,
        page.fullDescription,
        page.image,
        categoryRow ? categoryRow.id : null,
        page.location?.name ?? null,
        page.location?.coordinates ?? null,
        page.location?.mapsUrl ?? null,
        page.videoLink ?? null,
        page.createdAt ?? new Date().toISOString()
      );
    }
  }

  if (db.prepare('SELECT COUNT(*) FROM gallery_images').get()['COUNT(*)'] === 0) {
    for (const image of galleryImages) {
      insertGalleryImage.run(image.id, image.pageId, image.imageUrl, image.sortOrder);
    }
  }

  if (db.prepare('SELECT COUNT(*) FROM media').get()['COUNT(*)'] === 0) {
    for (const item of media) {
      insertMedia.run(item.id, item.file_name, item.original_name, item.mime_type, item.size, item.url, item.created_at);
    }
  }

  return true;
}

export function getAllCategories() {
  return db.prepare('SELECT id, name, slug FROM categories ORDER BY id ASC').all();
}

export function createCategory({ name, slug }) {
  const normalizedName = String(name ?? '').trim();
  const normalizedSlug = String(slug ?? normalizedName)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  if (!normalizedName || !normalizedSlug) {
    throw new Error('Category name is required');
  }

  const result = db.prepare(
    'INSERT INTO categories (name, slug) VALUES (?, ?)'
  ).run(normalizedName, normalizedSlug);

  return db.prepare('SELECT id, name, slug FROM categories WHERE id = ?').get(Number(result.lastInsertRowid));
}

export function deleteCategory(id) {
  const result = db.prepare('DELETE FROM categories WHERE id = ?').run(Number(id));
  return result.changes > 0;
}

export function getAllPages() {
  return db.prepare(`
    SELECT p.*, c.name AS category
    FROM pages p
    LEFT JOIN categories c ON c.id = p.category_id
    ORDER BY p.id ASC
  `).all();
}

export function createPage({
  slug,
  title,
  description,
  fullDescription,
  image,
  categoryId,
  locationName,
  locationCoordinates,
  locationMapsUrl,
  videoLink,
}) {
  const normalizedTitle = String(title ?? '').trim();
  const normalizedSlug = String(slug ?? normalizedTitle)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  if (!normalizedTitle || !normalizedSlug) {
    throw new Error('Page title is required');
  }

  const result = db.prepare(`
    INSERT INTO pages (
      slug, title, description, full_description, image_url, category_id,
      location_name, location_coordinates, location_maps_url, video_link
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    normalizedSlug,
    normalizedTitle,
    description ?? null,
    fullDescription ?? null,
    image ?? null,
    categoryId ? Number(categoryId) : null,
    locationName ?? null,
    locationCoordinates ?? null,
    locationMapsUrl ?? null,
    videoLink ?? null
  );

  return getPageById(Number(result.lastInsertRowid));
}

export function deletePage(id) {
  const result = db.prepare('DELETE FROM pages WHERE id = ?').run(Number(id));
  return result.changes > 0;
}

export function getAllGalleryImages() {
  return db.prepare(`
    SELECT id, page_id, image_url, sort_order, created_at
    FROM gallery_images
    ORDER BY page_id ASC, sort_order ASC
  `).all();
}

export function getAllMedia() {
  return db.prepare(`
    SELECT id, file_name, original_name, mime_type, size, url, created_at
    FROM media
    ORDER BY id ASC
  `).all();
}

export function getPageById(id) {
  return db.prepare(`
    SELECT p.*, c.name AS category
    FROM pages p
    LEFT JOIN categories c ON c.id = p.category_id
    WHERE p.id = ?
  `).get(Number(id));
}

export function getPageBySlug(slug) {
  return db.prepare(`
    SELECT p.*, c.name AS category
    FROM pages p
    LEFT JOIN categories c ON c.id = p.category_id
    WHERE p.slug = ?
  `).get(slug);
}

ensureDatabaseReady();