import React from "react";
import { getPageById, getAllPageIds, PageEntry } from "@/lib/pagesData";
import DynamicPageComponent from "@/components/DynamicPageComponent";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageParams {
  params: Promise<{
    id: string;
  }>;
}

/**
 * Generate static parameters for all pages
 * This enables static generation (SSG) for all pages at build time
 */
export async function generateStaticParams() {
  const pageIds = getAllPageIds();
  return pageIds.map((id) => ({
    id: id,
  }));
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { id } = await params;
  const page = getPageById(id);

  if (!page) {
    return {
      title: "Page Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  return {
    title: `${page.title} | Temflo Solutions`,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      images: [
        {
          url: page.image,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
  };
}

/**
 * Dynamic page component
 */
export default async function SolutionPage({ params }: PageParams) {
  const { id } = await params;
  const page = getPageById(id);

  // Show 404 if page not found
  if (!page) {
    notFound();
  }

  return <DynamicPageComponent page={page} />;
}
