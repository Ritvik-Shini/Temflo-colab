import React from "react";
import Link from "next/link";
import Image from "next/image";
import { pagesData, getAllCategories } from "@/lib/pagesData";
import { getPageUrl } from "@/lib/pageUrls";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Solutions | Temflo",
  description: "Explore our comprehensive suite of solutions for smart city management, energy optimization, and more.",
};

export default function SolutionsPage() {
  const categories = getAllCategories();

  return (
    <main className="bg-white dark:bg-darklight min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16 md:py-28 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container px-4 md:px-0 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-primary to-gray-900 dark:from-white dark:via-primary dark:to-gray-300 bg-clip-text text-transparent mb-6">
            Our Solutions
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions designed to transform your operations and drive growth
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary/50 to-primary mx-auto mt-8 rounded-full"></div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 md:py-28">
        <div className="container px-4 md:px-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {pagesData.map((solution) => (
              <Link
                key={solution.id}
                href={getPageUrl(solution.id)}
                className="group"
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col border border-gray-100 dark:border-slate-700 hover:border-primary/50">
                  {/* Image */}
                  <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      quality={100}
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Icon & Category */}
                    <div className="mb-4 flex items-center gap-2">
                      <span className="text-3xl">{solution.icon}</span>
                      <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/30">
                        {solution.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-400 text-sm flex-grow mb-4 line-clamp-3 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More
                      <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Categories Section */}
          <div className="mt-24 pt-20 border-t-2 border-primary/20">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-primary dark:from-white dark:to-primary bg-clip-text text-transparent mb-12">
              Browse by Category
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => {
                const categoryPages = pagesData.filter(
                  (p) => p.category === category
                );
                return (
                  <div
                    key={category}
                    className="bg-gradient-to-br from-primary/5 to-white dark:from-slate-800 dark:to-slate-900 p-8 rounded-xl border-2 border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-primary to-primary/50 rounded-full"></span>
                      {category}
                    </h3>
                    <ul className="space-y-3">
                      {categoryPages.map((page) => (
                        <li key={page.id}>
                          <Link
                            href={getPageUrl(page.id)}
                            className="text-gray-700 dark:text-gray-300 hover:text-primary hover:font-semibold transition-all text-sm flex items-center gap-2 group"
                          >
                            <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                            {page.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
