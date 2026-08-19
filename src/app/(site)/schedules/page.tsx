import BoxSlider from "@/components/SharedComponent/BoxSlider";
import HeroSub from "@/components/SharedComponent/HeroSub";
import React from "react";
import '@/Style/style.css';
import Schedules from "@/components/Home/Schedules";
import TicketSection from "@/components/Home/TicketSection";
import Testimonial from "@/components/SharedComponent/Testimonial";
import Testimonials from "@/components/Home/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why us | Temflo",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "" },
  ];

  return (
    <div className="pt-10 md:pt-14">
      <HeroSub
        title="Why Choose Us ?"
        description="Temflo is committed to meet or exceed customers' expectations by providing quality products and services. Service support is a vital aspect of Temflo's Philosophy. We further engage in rendering end-to-end Annual Comprehensive Maintenance Contracts, Sales & Services of all items to our clients on contractual basis. We are backed by a team of experienced Process and Instrumentation trained professionals, who have profound expertise in this domain."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="dark:bg-darkmode">
        <div className="container upcoming">
          <BoxSlider />
          <Schedules />
        </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default page;