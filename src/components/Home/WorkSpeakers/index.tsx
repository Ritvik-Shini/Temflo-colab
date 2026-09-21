"use client";
import React, { useState } from "react";
import Image from "next/image";
import { speakers } from "@/app/api/data";
import { usePathname } from "next/navigation";
import Link from "next/link";

const WorkSpeakers = ({ showTitle = true }) => {
  const pathname = usePathname(); 
  const [visibleCount, setVisibleCount] = useState(5);
  const totalSpeakers = speakers.length;

  return (
    <section className="dark:bg-darkmode">
      {showTitle && (
        <h2 className="text-center pb-12">Project Division</h2>
      )}

      {/* MOBILE VIEW */}
      <div className="block md:hidden">
        <div className="grid grid-cols-1 gap-8 mx-7">
          {speakers.slice(0, visibleCount).map((speaker) => (
            <div key={speaker.id} className="col-span-1 group overflow-hidden">
              <Link href={speaker.href || "#"}>
                <div className="overflow-hidden rounded-lg">
                  <Image 
                    src={speaker.src} 
                    alt={speaker.alt} 
                    width={500} 
                    height={500} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="pt-6">
                  <h6 className="text-[28px] font-bold text-secondary dark:text-white">
                    {speaker.name}
                  </h6>
                  <span className="text-lg text-SlateBlueText dark:text-opacity-80">
                    {speaker.designation}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Buttons Section */}

          {visibleCount < totalSpeakers && (
            <button
              onClick={() => {
                if (visibleCount === 5) setVisibleCount(10);
                else if (visibleCount === 10) setVisibleCount(totalSpeakers);
              }}
              className="mx-auto block px-6 py-2 bg-[#883FFC] text-white rounded-lg font-bold text-sm"
            >
              {visibleCount === 5 ? "More 5" : "More 3"}
            </button>
          )}
        </div>
    

      {/* DESKTOP VIEW */}
      <div className="hidden md:grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 items-stretch gap-8 mx-7">
        {speakers.map((speaker, index) => (
          <div
            key={speaker.id}
            data-aos="fade-up"
            data-aos-delay={index * 300}
            data-aos-duration="1000"
            className={`col-span-1 group overflow-hidden ${
              index % 2 === 1 ? "lg:mt-28 mt-0" : ""
            }`}
          >
            <Link href={speaker.href || "#"}>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={speaker.src}
                  alt={speaker.alt}
                  width={0}
                  height={0}
                  quality={100}
                  layout="responsive"
                  sizes="100vh"
                  className="object-cover w-full h-full transition-all duration-400 group-hover:scale-110"
                />
              </div>
              <div className="pt-6">
                <h6 className="text-[28px] leading-[2.25rem] font-bold text-secondary dark:text-white">
                  {speaker.name}
                </h6>
                <span className="text-lg font-normal text-SlateBlueText dark:text-opacity-80">
                  {speaker.designation}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSpeakers;