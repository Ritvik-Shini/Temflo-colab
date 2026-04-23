"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageEntry } from "@/lib/pagesData";
import { generateBreadcrumbs } from "@/lib/pageUrls";

interface DynamicPageProps {
  page: PageEntry;
}

const DynamicPageComponent: React.FC<DynamicPageProps> = ({ page }) => {
  const breadcrumbs = generateBreadcrumbs(page);

  return (
    <main className="bg-white dark:bg-darklight min-h-screen">
      {/* Breadcrumb Section */}
      <section className="bg-gradient-to-r from-primary/5 to-transparent dark:from-slate-900 dark:to-transparent py-6 md:py-10 border-b border-primary/10">
        <div className="container px-4 md:px-0">
          <nav className="flex items-center gap-2 text-sm md:text-base">
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Link
                  href={crumb.href}
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  {crumb.label}
                </Link>
                {idx < breadcrumbs.length - 1 && (
                  <span className="text-primary/40">/</span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/8 via-white to-primary/5 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl -z-10"></div>
        <div className="container px-4 md:px-0 relative z-10">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left - Content */}
            <div className="md:col-span-6 col-span-12">
              <div className="mb-6 inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <span className="text-2xl">{page.icon}</span>
                <span className="text-primary font-semibold text-sm">{page.category}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-primary to-gray-900 dark:from-white dark:via-primary dark:to-gray-300 bg-clip-text text-transparent mb-6">
                {page.title}
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {page.description}
              </p>
              <button className="bg-gradient-to-r from-primary to-primary/80 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1">
                Get Started
              </button>
            </div>

            {/* Right - Image */}
            <div className="md:col-span-6 col-span-12">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image
                  src={page.image}
                  alt={page.title}
                  fill
                  quality={100}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Decorative border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Overview
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {page.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 py-12 md:py-24 relative">
        {/* Decorative background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="container px-4 md:px-0 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-primary dark:from-white dark:to-primary bg-clip-text text-transparent mb-4">
              Key Features
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary/50 to-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {page.features.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-slate-700 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-lg shadow-lg group-hover:shadow-primary/50 transition-shadow">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold pt-1 group-hover:text-primary transition-colors">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-gradient-to-r from-primary via-primary to-primary/80 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="container px-4 md:px-0 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover how {page.title} can transform your operations and unlock new possibilities.
          </p>
          <button className="bg-white text-primary px-10 py-4 rounded-lg font-semibold hover:bg-primary/10 hover:text-white transition-all duration-300 transform hover:-translate-y-1 border-2 border-white/20">
            Contact Us Today
          </button>
        </div>
      </section>
    </main>
  );
};

export default DynamicPageComponent;
