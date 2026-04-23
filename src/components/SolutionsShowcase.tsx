"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { pagesData } from "@/lib/pagesData";
import { getPageUrl } from "@/lib/pageUrls";

/**
 * Example: Featured Solutions Component
 * Use this in your homepage or any other page to showcase solutions
 */
export const FeaturedSolutions = () => {
  // Get first 3 solutions (or customize as needed)
  const featured = pagesData.slice(0, 3);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-primary/5 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl -z-10"></div>

      <div className="container px-4 md:px-0 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-primary dark:from-white dark:to-primary bg-clip-text text-transparent mb-4">
            Our Solutions
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover innovative solutions designed to transform your business
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary/50 to-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {featured.map((solution) => (
            <Link
              key={solution.id}
              href={getPageUrl(solution.id)}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col border border-gray-100 dark:border-slate-700 hover:border-primary/50">
                {/* Image */}
                <div className="relative w-full h-40 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    quality={100}
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3 w-fit border border-primary/30">
                    {solution.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/solutions"
            className="inline-block bg-gradient-to-r from-primary to-primary/80 text-white px-10 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1 border-2 border-primary"
          >
            View All Solutions →
          </Link>
        </div>
      </div>
    </section>
  );
};

/**
 * Example: Solution Categories Component
 * Display solutions organized by category
 */
export const SolutionsByCategory = ({ category }: { category: string }) => {
  const categoryPages = pagesData.filter((p) => p.category === category);

  if (categoryPages.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-20 relative">
      <div className="container px-4 md:px-0">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-primary dark:from-white dark:to-primary bg-clip-text text-transparent mb-12">
          {category} Solutions
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {categoryPages.map((solution) => (
            <Link
              key={solution.id}
              href={getPageUrl(solution.id)}
              className="group"
            >
              <div className="flex gap-6 p-8 bg-white dark:bg-slate-800 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border border-gray-100 dark:border-slate-700 hover:border-primary/50 group">
                <div className="flex-shrink-0">
                  <div className="text-5xl bg-gradient-to-br from-primary to-primary/50 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 text-sm mb-3 leading-relaxed">
                    {solution.description}
                  </p>
                  <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Example: Related Solutions Component
 * Show related solutions (same category or featured)
 */
export const RelatedSolutions = ({
  currentId,
  maxItems = 3,
}: {
  currentId: string;
  maxItems?: number;
}) => {
  const current = pagesData.find((p) => p.id === currentId);
  if (!current) return null;

  // Get other pages in the same category
  const related = pagesData
    .filter((p) => p.id !== currentId && p.category === current.category)
    .slice(0, maxItems);

  if (related.length === 0) return null;

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-primary/5 dark:from-slate-900 dark:to-slate-800 relative">
      <div className="container px-4 md:px-0">
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-primary dark:from-white dark:to-primary bg-clip-text text-transparent mb-10">
          Related Solutions
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {related.map((solution) => (
            <Link
              key={solution.id}
              href={getPageUrl(solution.id)}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 hover:border-primary/50 hover:-translate-y-2">
                <div className="relative w-full h-32 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    quality={100}
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="33vw"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {solution.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Example: Solutions Breadcrumb
 * Show navigation breadcrumbs for a solution page
 */
export const SolutionBreadcrumb = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <nav className="flex items-center gap-2 text-sm mb-8">
      <Link href="/" className="text-primary hover:text-primary/80">
        Home
      </Link>
      <span className="text-gray-400">/</span>
      <Link href="/solutions" className="text-primary hover:text-primary/80">
        Solutions
      </Link>
      <span className="text-gray-400">/</span>
      <span className="text-gray-900 dark:text-white">{pageTitle}</span>
    </nav>
  );
};
