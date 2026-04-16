import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import ThumbnailCarousel from '@/components/Home/Conferences';
import WorkSpeakers from '@/components/Home/WorkSpeakers';

import Highlight from '@/components/Home/YearHighlight/page';
import Upcoming from '@/components/Home/Upcoming';
import Testimonials from '@/components/Home/Testimonials';
import TicketSection from '@/components/Home/TicketSection';
import Industries from '@/components/Home/industries/industriesweserve';
export const metadata: Metadata = {
  title: "Temflo",
  icons:"C:\Users\info\OneDrive\Desktop\website\symposium-nextjs\public\images\logo\TSPL-Logo.png",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ThumbnailCarousel/>
      <WorkSpeakers/>
    
      <Industries/>
      <Highlight/>
      <Upcoming/>
      <Testimonials/>
      <TicketSection/>
    </main>
  )
}
