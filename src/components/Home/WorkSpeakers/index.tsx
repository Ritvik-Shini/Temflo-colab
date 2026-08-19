"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { speakers } from "@/app/api/data";
import { usePathname } from "next/navigation";

const WorkSpeakers = ({ showTitle = true }) => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [mobilePage, setMobilePage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 1024;
      setIsMobile(mobileView);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobilePageSize = mobilePage === 2 ? 3 : 5;
  const mobileStartIndex = mobilePage === 0 ? 0 : mobilePage === 1 ? 5 : 10;
  const visibleSpeakersOnMobile = speakers.slice(
    mobileStartIndex,
    mobileStartIndex + mobilePageSize
  );

  const renderSpeakerCard = (speaker: (typeof speakers)[number], index: number) => (
    <div
      key={speaker.id}
      data-aos="fade-up"
      data-aos-delay={`${index * 300}`}
      data-aos-duration="1000"
      className={`col-span-1 group overflow-hidden ${
        index % 2 === 1 ? "lg:mt-28 mt-0" : ""
      }`}
    >
      <div className="overflow-hidden rounded-lg">
        <Image
          src={speaker.src}
          alt={speaker.alt}
          width={0}
          height={0}
          quality={100}
          layout="responsive"
          sizes="100vh"
          className=" object-cover w-full h-full transition-all duration-0.4s group-hover:scale-110"
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
    </div>
  );

  return (
    <>
      <section className={` dark:bg-darkmode ${pathname === "/" ? "" : ""}`}>
        {showTitle && (
          <h2 className="text-center pb-12">Project Division</h2>
        )}

        <div className="hidden lg:grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 items-stretch gap-8 mx-7">
          {speakers.map((speaker, index) => renderSpeakerCard(speaker, index))}
        </div>

        {isMobile && (
          <div className="lg:hidden mx-7">
            <div className="grid grid-cols-1 items-stretch gap-8">
              {visibleSpeakersOnMobile.map((speaker, index) =>
                renderSpeakerCard(speaker, index)
              )}
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              {mobilePage > 0 && (
                <button
                  type="button"
                  onClick={() => setMobilePage((prev) => Math.max(prev - 1, 0))}
                  className="inline-flex items-center justify-center gap-1 px-2 py-1 rounded-lg font-medium text-white bg-[#883FFC] hover:bg-purple-700 transition-all duration-300 shadow-md"
            >
                  Previous
                </button>
              )}

              {mobilePage < 2 && (
                <button
                  type="button"
                  onClick={() => setMobilePage((prev) => Math.min(prev + 1, 2))}
                  className="inline-flex items-center justify-center gap-1 px-2 py-1 rounded-lg font-medium text-white bg-[#883FFC] hover:bg-purple-700 transition-all duration-300 shadow-md"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default WorkSpeakers;