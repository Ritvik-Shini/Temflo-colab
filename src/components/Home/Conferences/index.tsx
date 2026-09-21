"use client";
import React, { useState } from "react";
import Link from "next/link";
import ThumbnailCarousel, { carouselData } from "../ThumbnailCarousel";

const Conferences = () => {
  // Local state to track which slide content to show
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="bg-IcyBreeze dark:bg-darklight relative overflow-hidden before:absolute before:content-[''] before:bg-SereneSky before:dark:bg-secondary before:w-687 before:h-687 before:-bottom-1/2 before:rounded-full before:xl:inline-block before:hidden py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center lg:gap-24 gap-5">
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            {/* Pass the setter function to the carousel */}
            <ThumbnailCarousel onSlideChange={(index) => setCurrentIndex(index)} />
          </div>
          <div
            className="md:pt-0 pt-6"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            {/* Display text based on current slide index */}
            <h2 className="font-bold text-2xl transition-all duration-300">
              {carouselData[currentIndex].title}
            </h2>
            <p className="text-lg font-normal text-SlateBlueText dark:text-opacity-80 max-w-506 md:pt-9 pt-5 md:pb-14 pb-6 transition-all duration-300">
              {carouselData[currentIndex].description}
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-medium text-white bg-[#883FFC] hover:bg-purple-700 transition-all duration-300 shadow-md"
            >
              <span>Explore</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conferences;