// Utility functions for linking to dynamic pages
import { PageEntry } from "./pagesData";

/**
 * Generate URL path for a page
 * @param id - The page ID
 * @returns The URL path string
 */
export const getPageUrl = (id: string): string => {
  return `/solutions/${id}`;
};

/**
 * Generate URL path by slug
 * @param slug - The page slug
 * @returns The URL path string
 */
export const getPageUrlBySlug = (slug: string): string => {
  return `/solutions/${slug}`;
};

/**
 * Generate breadcrumb data for a page
 * @param page - The page data
 * @returns Breadcrumb array
 */
export const generateBreadcrumbs = (page: PageEntry) => {
  return [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: page.title, href: getPageUrl(page.id) }
  ];
};
