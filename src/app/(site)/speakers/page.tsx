import Testimonials from "@/components/Home/Testimonials";
import TicketSection from "@/components/Home/TicketSection";
import WorkSpeakers from "@/components/Home/WorkSpeakers";
import HeroSub from "@/components/SharedComponent/HeroSub";
import React from "react";
import { Metadata } from "next";

import Image from "next/image";
import { speakers } from "@/app/api/data";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Division | Temflo",
};

const page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/Division", text: "Division" },
      ];
  return (
    <>
      <HeroSub
        title="Project Category"
        description="Explore our project categories showcasing innovative solutions, custom developments, and scalable systems. Discover how we turn ideas into practical results across various domains."
        breadcrumbLinks={breadcrumbLinks}
      />
      <br></br><br></br><br></br>
       <div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 items-stretch gap-8 mx-7">
          {speakers.map((speaker, index) => (
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
          ))}
        </div>
        <br></br><br></br>
   
        <div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 items-stretch gap-8 mx-7">
          {speakers.map((speaker, index) => (
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
          ))}
        </div>
        <br></br><br></br><br></br>
     
    
      <Testimonials/>
      <TicketSection/>
    </>
  );
};

export default page;
