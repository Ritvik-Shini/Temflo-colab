"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";
import { speakers } from "@/app/api/data";
import { getPageHrefById } from "@/lib/pageIdLinks";

const BlogCard = ({ blog }: { blog: Blog }) => {
  const { title, coverImage, excerpt, slug, pageId } = blog;
  const detailsHref = pageId ? getPageHrefById(Number(pageId)) ?? `/blog/${slug}` : `/blog/${slug}`;
  const galleryHref = pageId ? `/solutions/${pageId}#gallery` : `/blog/${slug}#gallery`;
  return null;
};

export default function BlogPage() {
    useEffect(() => {
        document.title = "Projects - Temflo "; 
      }, []);
  const allProjects = speakers.map((item: any) => ({
    title: item.name,
    description:
      item.designation ||
      "An advanced engineered solution designed for high performance, real-time control, and safety.",
    images:
      item.images && item.images.length > 0
        ? item.images
        : [item.src, item.src, item.src, item.src],
    features: item.features || [
      "Interactive Displays & Touchscreens",
      "Immersive Sound Systems",
      "Automated Control Systems",
    ],
    link: item.href || "#",
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const activeProject = allProjects[currentIndex] || allProjects[0];
  const source = speakers[currentIndex] || ({} as any);
  const galleryHref = source.id ? `/solutions/${source.id}#gallery` : activeProject.link ? `${activeProject.link}#gallery` : '#gallery';

  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    setImgIdx(0);
  }, [currentIndex]);

  const handleImagePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIdx((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1
    );
  };

  const handleImageNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIdx((prev) =>
      prev === activeProject.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white pt-40 px-4 lg:px-12 pb-20 selection:bg-[#883FFC] selection:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-[#883FFC] dark:text-white mb-2">
            Projects
          </h1>
          <p className="text-slate-600 dark:text-neutral-400 text-sm lg:text-base leading-relaxed max-w-4xl">
            Each of our project is distinguishable, every facility different,
            and each client unique. Through these projects, we have developed a
            strong understanding of the procedures and strategies to position
            our project teams and clients for success.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-white/70 dark:bg-[#09090b]/80 backdrop-blur-md border border-slate-200 dark:border-neutral-800 rounded-3xl p-4 shadow-lg flex flex-col h-[630px]">
            <div className="h-full overflow-y-auto pr-2 space-y-3 scrollbar-thin scrollbar-thumb-purple-400 dark:scrollbar-thumb-neutral-700">
              {allProjects.map((proj: any, idx: number) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-full text-left p-3.5 rounded-2xl transition-all duration-300 flex items-center justify-between gap-3 border flex-shrink-0 ${
                      isActive
                        ? "bg-purple-50 dark:bg-purple-950/40 border-[#883FFC] text-[#883FFC] shadow-md scale-[1.01]"
                        : "bg-white dark:bg-neutral-900/60 border-slate-100 dark:border-neutral-800/80 text-slate-700 dark:text-neutral-300 hover:border-purple-300 dark:hover:border-neutral-700"
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="relative w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 border border-slate-200 dark:border-neutral-800">
                        <Image
                          src={proj.images[0] || "/images/default.jpg"}
                          alt={proj.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="font-semibold text-sm lg:text-base truncate leading-snug">
                        {proj.title}
                      </span>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#883FFC] text-white"
                          : "bg-slate-100 dark:bg-neutral-800 text-slate-400 dark:text-neutral-500"
                      }`}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="lg:col-span-7 bg-white dark:bg-[#09090b] border border-slate-200 dark:border-neutral-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between h-[630px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-400 dark:scrollbar-thumb-neutral-700">
            
            <div>
              <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-5 border border-slate-100 dark:border-neutral-800 bg-slate-100 dark:bg-neutral-950 group flex-shrink-0">
                <Image
                  src={activeProject.images[imgIdx] || "/images/default.jpg"}
                  alt={activeProject.title}
                  fill
                  className="object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-white border border-white/20">
                    Image {imgIdx + 1} of {activeProject.images.length}
                  </span>
                </div>

                {/* Prev / Next Buttons */}
                {activeProject.images.length > 1 && (
                  <>
                    <button
                      onClick={handleImagePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black text-slate-800 dark:text-white flex items-center justify-center shadow-lg transition-all border border-slate-200 dark:border-neutral-700 z-10"
                    >
                      ❮
                    </button>
                    <button
                      onClick={handleImageNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black text-slate-800 dark:text-white flex items-center justify-center shadow-lg transition-all border border-slate-200 dark:border-neutral-700 z-10"
                    >
                      ❯
                    </button>
                  </>
                )}
              </div>

              {/* Details Section */}
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                {activeProject.title}
              </h2>

              <p className="text-slate-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                {activeProject.description}
              </p>

              {/* Features Bullet List */}
              {activeProject.features && activeProject.features.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {activeProject.features.map((feat: string, fIdx: number) => (
                    <li
                      key={fIdx}
                      className="flex items-center gap-2.5 text-xs lg:text-sm text-slate-700 dark:text-neutral-300 font-medium"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#883FFC] flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

           {/* Action Buttons */}
           <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
              {/* View Details Button */}
                 <Link
                     href={activeProject.link || "#"}
                    className="inline-flex items-center justify-center gap-2 bg-[#883FFC] text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all shadow-md"
            >
          <span>View Details</span>
          <span>→</span>
       </Link>

        {/* Open Gallery Button */}
       <Link
        href={galleryHref}
        className="inline-flex items-center justify-center gap-2 bg-[#883FFC] text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all shadow-md"
       >
      <span>Open Gallery</span>
        </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}