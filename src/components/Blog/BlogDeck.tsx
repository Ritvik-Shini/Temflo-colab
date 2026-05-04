"use client";

import React, { useEffect, useRef, useState } from 'react';
import BlogCard from '@/components/SharedComponent/Blog/blogCard';
import { Blog } from '@/types/blog';

interface BlogDeckProps {
  posts: Blog[];
}

const ANIMATION_DURATION = 520;
const HALF_ANIMATION_DURATION = ANIMATION_DURATION / 2;

const BlogDeck: React.FC<BlogDeckProps> = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const fullTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const halfTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (halfTimeoutRef.current) clearTimeout(halfTimeoutRef.current);
      if (fullTimeoutRef.current) clearTimeout(fullTimeoutRef.current);
    };
  }, []);

  const handleSelect = (index: number) => {
    const normalizedIndex = (index + posts.length) % posts.length;
    if (normalizedIndex === currentIndex || isFlipping) return;

    setNextIndex(normalizedIndex);
    setIsFlipping(true);
    setRotation((value) => value + 180);

    halfTimeoutRef.current = setTimeout(() => {
      setCurrentIndex(normalizedIndex);
    }, HALF_ANIMATION_DURATION);

    fullTimeoutRef.current = setTimeout(() => {
      setIsFlipping(false);
    }, ANIMATION_DURATION);
  };

  if (!posts.length) return null;

  const previousIndex = (currentIndex - 1 + posts.length) % posts.length;
  const followingIndex = (currentIndex + 1) % posts.length;
  const cardTransform = `rotateY(${rotation}deg)`;

  return (
    <section className="pt-8 dark:bg-darkmode pb-10" id="blog">
      <div className="container mx-auto px-4">
        {/* Changed grid layout: Sidebar (0.9fr) is now first, Card (1.7fr) is second */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-[0.9fr_1.7fr] lg:items-start">
          
          {/* SIDEBAR LIST: Placed first in the DOM for left-side positioning */}
          <div className="order-2 lg:order-1 space-y-4 rounded-[28px] border border-slate-200 bg-white/90 p-4 shadow-xl backdrop-blur-xl lg:max-h-[720px] lg:overflow-hidden dark:border-slate-700 dark:bg-slate-950/90">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
             
            </div>
            <div className="space-y-4 lg:max-h-[calc(720px-5.5rem)] lg:overflow-y-auto lg:pr-2">
              {posts.map((blog, index) => (
                <button
                  key={blog.slug}
                  type="button"
                  onClick={() => handleSelect(index)}
                  className={`group flex w-full items-center gap-3 rounded-3xl border p-3 text-left transition ${
                    index === currentIndex 
                      ? 'border-primary bg-primary/10' 
                      : 'border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900'
                  }`}
                >
                  <div className="h-16 w-16 overflow-hidden rounded-2xl flex-shrink-0">
                    <img 
                      src={blog.coverImage || '/images/hero/Black_1.png'} 
                      alt={blog.title} 
                      className="h-full w-full object-cover" 
                    />
                  </div>
                  <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                    {blog.title}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* MAIN CARD: Placed second in the DOM for right-side positioning */}
          <div className="order-1 lg:order-2 relative">
            {/* Navigation buttons */}
            <div className="absolute -left-4 md:-left-16 top-1/2 z-20 -translate-y-1/2">
              <button
                type="button"
                onClick={() => handleSelect(previousIndex)}
                className="h-10 w-10 md:h-14 md:w-14 flex items-center justify-center rounded-full border border-slate-200 bg-white shadow-xl hover:text-primary dark:border-slate-700 dark:bg-slate-950"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 stroke-current">
                  <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="absolute -right-4 md:-right-16 top-1/2 z-20 -translate-y-1/2">
              <button
                type="button"
                onClick={() => handleSelect(followingIndex)}
                className="h-10 w-10 md:h-14 md:w-14 flex items-center justify-center rounded-full border border-slate-200 bg-white shadow-xl hover:text-primary dark:border-slate-700 dark:bg-slate-950"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 stroke-current">
                  <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="relative min-h-[500px] md:min-h-[720px] rounded-[32px]">
              <div
                className="relative h-full w-full transition-transform ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: cardTransform,
                  transitionDuration: `${ANIMATION_DURATION}ms`,
                  transitionProperty: 'transform',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="absolute inset-0 h-full w-full" style={{ backfaceVisibility: 'hidden' }}>
                  <BlogCard blog={posts[currentIndex]} />
                </div>
                <div
                  className="absolute inset-0 h-full w-full"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <BlogCard blog={posts[nextIndex]} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogDeck;