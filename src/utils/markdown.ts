import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "markdown", "Blog");

export function getPostSlugs() {
  try {
    return fs.readdirSync(postsDirectory);
  } catch (error) {
    console.error('Failed to read blog posts directory:', error);
    return [];
  }
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    console.warn(`Blog post file not found: ${fullPath}`);
    return {} as any;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    // [key: string]: string;
    [key: string]: string | object;
  };

  const items: any = {};

  function processImages(content: string) {
    // You can modify this function to handle image processing
    // For example, replace image paths with actual HTML image tags
    return content.replace(/!\[.*?\]\((.*?)\)/g, '<img src="$1" alt="" />');
  }

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      // You can modify the content here to include Images
      items[field] = processImages(content);
    }

    if (field === "metadata") {
      // Include metadata, including the image information
      items[field] = { ...data, coverImage: data.coverImage || null };
    }

    if (field === "date" && typeof data[field] !== "undefined") {
      const dateValue = data[field];
      items[field] = dateValue instanceof Date ? dateValue.toISOString().slice(0, 10) : String(dateValue);
    } else if (typeof data[field] !== "undefined" && field !== "date") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1: any, post2: any) => {
      const date1 = typeof post1.date === "string" ? post1.date : "";
      const date2 = typeof post2.date === "string" ? post2.date : "";
      return date1 > date2 ? -1 : 1;
    });

  return posts;
}
