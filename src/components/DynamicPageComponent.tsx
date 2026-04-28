"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageEntry } from "@/lib/pagesData";
import { generateBreadcrumbs } from "@/lib/pageUrls";
import TicketSection from "@/components/Home/TicketSection";

interface DynamicPageProps {
  page: PageEntry;
}

const DynamicPageComponent: React.FC<DynamicPageProps> = ({ page }) => {
  const breadcrumbs = generateBreadcrumbs(page);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  return (
    <main className="bg-white dark:bg-darklight min-h-screen pt-24">
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
             
            </div>

            {/* Right - Image */}
            <div className="md:col-span-6 col-span-12 flex justify-center md:justify-start">
              <div className="relative w-full h-64 sm:h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image
                  src={page.image}
                  alt={page.title}
                  fill
                  quality={100}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 768px) calc(100vw - 2rem), 50vw"
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
     

      {/* Gallery Section */}
      {page.galleryImages && page.galleryImages.length > 0 && (
        <section id="gallery" className="scroll-mt-24 py-12 md:py-24 bg-white dark:bg-darklight">
          <div className="container px-4 md:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Gallery
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary/50 to-primary mx-auto rounded-full"></div>
            </div>

            {/* Main Image */}
            <div className="mb-6">
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group bg-slate-100 dark:bg-slate-800">
                <Image
                  src={page.galleryImages[activeGalleryIndex]}
                  alt={`Gallery ${activeGalleryIndex + 1}`}
                  fill
                  quality={100}
                  className="object-contain object-center transition-all duration-500"
                  sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 768px) calc(100vw - 2rem), (max-width: 1024px) calc(100vw - 2rem), 100vw"
                />
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 pointer-events-none"></div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-2 px-1">
              {page.galleryImages.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveGalleryIndex(idx)}
                  className={`relative flex-shrink-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    activeGalleryIndex === idx
                      ? "border-primary shadow-lg"
                      : "border-gray-300 dark:border-gray-600 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    quality={75}
                    className="object-cover"
                    sizes="100px"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Video Section */}
      {page.videoLink && (
        <section className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900">
          <div className="container px-4 md:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Video
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary/50 to-primary mx-auto rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden shadow-2xl bg-black">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={page.videoLink}
                  title="Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Location Section */}
      {page.location && (
        <section className="py-12 md:py-24 bg-white dark:bg-darklight">
          <div className="container px-4 md:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Location
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary/50 to-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Map Section */}
              <div className="order-2 md:order-1">
                <div className="max-w-lg mx-auto">
                  <div style={{ position: 'relative', paddingBottom: '66.66%', height: 0, overflow: 'hidden', borderRadius: '12px' }}>
                    <iframe
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(page.location.name)}&output=embed`}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Location Info */}
              <div className="order-1 md:order-2">
                <div className="bg-gradient-to-br from-primary/5 to-transparent dark:from-slate-700/30 p-8 rounded-2xl border border-primary/10">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="text-3xl">📍</span>
                    {page.location.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                    Coordinates: <span className="font-semibold text-primary">{page.location.coordinates}</span>
                  </p>
                  <Link
                    href={page.location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
                  >
                    <span>Open in Google Maps</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

    <TicketSection />
    </main>
  );
};

export default DynamicPageComponent;
