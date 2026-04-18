import BoxSlider from "@/components/SharedComponent/BoxSlider";
import HeroSub from "@/components/SharedComponent/HeroSub";
import React from "react";
import '@/Style/style.css'
import Schedules from "@/components/Home/Schedules";
import TicketSection from "@/components/Home/TicketSection";
import Testimonial from "@/components/SharedComponent/Testimonial";
import Testimonials from "@/components/Home/Testimonials";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Why us | Symposium",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/schedules", text: "Why Us" },
  ];
  return (
    <>
      <HeroSub
        title="Why Choose Us ?"
        description="Choosing us means partnering with a company that combines extensive experience with a commitment to pushing the boundaries of what is possible, delivering exceptional value, and creating impactful experiences."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="dark:bg-darkmode">  
        <div className="container upcoming">
          <BoxSlider/>
          <Schedules/>        
        </div>
      </section>      
      <div>
        <Testimonials />
        <TicketSection/>
      </div>
    </>
  );
};

export default page;
