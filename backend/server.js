import express from 'express';
import cors from 'cors';
import { speakers, conferences } from './data.js';
import {
  db,
  createCategory,
  createPage,
  deleteCategory,
  deletePage,
  getAllCategories,
  getAllGalleryImages,
  getAllMedia,
  getAllPages,
  getPageById,
  getPageBySlug,
} from './db.js';

const app = express();
const PORT = Number(process.env.PORT) || 5005;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Backend is running',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/data', (_req, res) => {
  res.status(200).json({
    success: true,
    speakers,
    conferences,
  });
});

app.get('/api/categories', (_req, res) => {
  const categories = getAllCategories();
  res.status(200).json({
    success: true,
    data: categories,
  });
});

app.post('/api/categories', (req, res) => {
  try {
    const category = createCategory(req.body);
    return res.status(201).json({ success: true, data: category });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});

app.delete('/api/categories/:id', (req, res) => {
  const deleted = deleteCategory(req.params.id);

  if (!deleted) {
    return res.status(404).json({ success: false, message: 'Category not found' });
  }

  return res.status(200).json({ success: true, message: 'Category deleted' });
});

app.get('/api/pages', (_req, res) => {
  const pages = getAllPages();
  res.status(200).json({
    success: true,
    data: pages,
    total: pages.length,
  });
});

app.post('/api/pages', (req, res) => {
  try {
    const page = createPage(req.body);
    return res.status(201).json({ success: true, data: page });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});

app.delete('/api/pages/:id', (req, res) => {
  const deleted = deletePage(req.params.id);

  if (!deleted) {
    return res.status(404).json({ success: false, message: 'Page not found' });
  }

  return res.status(200).json({ success: true, message: 'Page deleted' });
});

app.get('/api/pages/:id', (req, res) => {
  const param = req.params.id;
  const page = Number.isNaN(Number(param)) ? getPageBySlug(param) : getPageById(param);

  if (!page) {
    return res.status(404).json({ success: false, message: 'Page not found' });
  }

  return res.status(200).json({ success: true, data: page });
});

app.get('/api/pages/slug/:slug', (req, res) => {
  const page = getPageBySlug(req.params.slug);

  if (!page) {
    return res.status(404).json({ success: false, message: 'Page not found' });
  }

  return res.status(200).json({ success: true, data: page });
});

app.get('/api/gallery-images', (_req, res) => {
  res.status(200).json({ success: true, data: getAllGalleryImages() });
});

app.get('/api/media', (_req, res) => {
  res.status(200).json({ success: true, data: getAllMedia() });
});

app.get('/api/db-status', (_req, res) => {
  const tables = [
    'categories',
    'pages',
    'gallery_images',
    'media',
  ];

  const status = tables.reduce((acc, table) => {
    try {
      const row = db.prepare(`SELECT COUNT(*) AS count FROM ${table}`).get();
      acc[table] = row.count;
    } catch (error) {
      acc[table] = 0;
    }
    return acc;
  }, {});

  res.status(200).json({
    success: true,
    database: 'data/symposium.db',
    tables: status,
  });
});

app.listen(PORT, () => {
  console.log(`Node backend running on http://localhost:${PORT}`);
});
