"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { divisionCategories } from "@/app/api/data";



export default function DivisionPage() {
  useEffect(() => {
    document.title = "Division - Temflo "; 
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-[#07090e] text-gray-900 dark:text-white pt-44 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12 text-left">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#883FFC]">
          Division
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Explore our project categories showcasing innovative solutions
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {divisionCategories.map((solution: any, idx: number) => (
          <TechCard key={solution.id || idx} solution={solution} />
        ))}
      </div>
    </div>
  );
}

function TechCard({ solution }: { solution: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const activeImages = solution.images && solution.images.length > 0 
    ? solution.images 
    : ["/images/upcoming/Bear_1.jpeg"];

  useEffect(() => {
    if (activeImages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % activeImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [activeImages]);

  return (
    <div className="bg-white dark:bg-[#0e131f] border border-gray-200 dark:border-gray-800 rounded-2xl p-5 flex flex-col justify-between shadow-lg dark:shadow-xl">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 min-h-[50px] flex items-center">
          {solution.title}
        </h2>

        <div className="relative h-44 w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-black mb-5">
          <Image
            src={activeImages[currentImageIndex]}
            alt={solution.title}
            fill
            className="object-cover transition-all duration-700 ease-in-out"
          />
        </div>

        <ul className="space-y-2.5 mb-4">
          {solution.items && solution.items.map((item: any, index: number) => (
            <li key={index}>
              <Link 
                href={item.href || "#"} 
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}