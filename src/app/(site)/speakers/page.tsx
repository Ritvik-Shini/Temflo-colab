import Testimonials from "@/components/Home/Testimonials";
import TicketSection from "@/components/Home/TicketSection";
import HeroSub from "@/components/SharedComponent/HeroSub";
import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { speakers } from "@/app/api/data";

export const metadata: Metadata = {
  title: "Division | Temflo",
};

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "" },
   
  ];

  // Logic: IDs 1, 2, 3, 4, 5
  const firstSet = speakers.filter(s => s.id >= 1 && s.id <= 5);
  
  // Logic: IDs 6, 7, 8, 9, 10
  const secondSet = speakers.filter(s => s.id >= 6 && s.id <= 10);

  return (
    <>
      <HeroSub
        title="Division "
        description="Explore our project categories showcasing innovative solutions, custom developments, and scalable systems."
        breadcrumbLinks={breadcrumbLinks}
      />
      
      <div className="py-20">
        {/* FIRST SECTION (IDs 1-5) */}
        <div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 items-stretch gap-8 mx-7">
          {firstSet.map((speaker, index) => (
            <div
              key={`first-${speaker.id}`}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
              className={`col-span-1 group overflow-hidden ${
                index % 2 === 1 ? "lg:mt-28 mt-0" : ""
              }`}
            >
              <div className="overflow-hidden rounded-lg">
               <Link href={speaker.href}> 
                <Image
                  
                  src={speaker.src}
                  alt={speaker.alt}
                  width={400}
                  height={500}
                  className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
                />
                </Link>
                
              </div>
           
             
              <div className="pt-6">
              <Link href={speaker.href}> 
                <h6 className="text-[28px] font-bold text-secondary dark:text-white">
                  {speaker.name}
                </h6>
              
                <span className="text-lg text-SlateBlueText dark:text-opacity-80">
                  {speaker.designation}
                </span>
              </Link>
              
              </div>
            </div>
          ))}
        </div>

        <div className="my-20" />

        {/* SECOND SECTION (IDs 6-10) */}
        <div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 items-stretch gap-8 mx-7">
          {secondSet.map((speaker, index) => (
            <div
              key={`second-${speaker.id}`}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
              className={`col-span-1 group overflow-hidden ${
                index % 2 === 1 ? "lg:mt-28 mt-0" : ""
              }`}
            >
              <div className="overflow-hidden rounded-lg">
                <Link href={speaker.href}> 
                <Image
                  src={speaker.src}
                  alt={speaker.alt}
                  width={400}
                  height={500}
                  className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
                />
                </Link>
              </div>
              <div className="pt-6">
               <Link href={speaker.href}> 
                <h6 className="text-[28px] font-bold text-secondary dark:text-white">
                  {speaker.name}
                </h6>
                <span className="text-lg text-SlateBlueText dark:text-opacity-80">
                  {speaker.designation}
                </span>
               </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Testimonials />
      <div>
        <br></br><br></br><br></br>
      </div>
    
    </>
  );
};

export default Page;