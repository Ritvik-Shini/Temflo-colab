import React from 'react';
import Image from 'next/image'; 
import { getPageUrl } from "@/lib/pageUrls";
import Link from "next/link";

const conferenceboardroom = [
  { 
    id: 67, 
    title: 'Facade Lighting at Jhansi fort.', 
    src: '/images/hero/mug_1.png',
    href:'/solutions/67'
  },  
  { 
    id: 68, 
    title: 'Light and sound show at Bareilly jail', 
    src: '/images/hero/mug_2.png',
    href:'/solutions/68' 
  },
  { 
    id: 69, 
    title: 'sound show at Bareilly jail', 
    src: '/images/hero/mug_3.png', 
    href:'/solutions/69'
  },
  { 
    id: 70, 
    title: 'Water screen based light and sound show at Suryakund Ayodhya.', 
    src: '/images/hero/mug_4.png', 
    href:'/solutions/70'
  }, 
  { 
    id: 71, 
    title: 'Water screen based sound show in prayagraj.', 
    src: '/images/hero/mug_5.png', 
    href:'/solutions/71'
  }, 
  { 
    id: 72, 
    title: 'Water screen based light and sound show in Moradabad.', 
    src: '/images/hero/mug_6.png',
    href:'/solutions/72' 
  },  
];
export default function ConferenceBoardRoomPage() {
  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <div className="text-center mb-12">
        <br></br><br></br><br></br><br></br>
        <p className="text-lg md:text-4xl font-extrabold text-primary-gray-900">
          Conference Board Room
        </p>
        <p className="mt-5 text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our advanced display systems and command-and-control monitoring solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {conferenceboardroom.map((solution) => (
          <div key={solution.id} className="bg-white overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="relative h-72 md:h-48 w-full"> 
             <Link href={solution.href}>
              <Image 
                src={solution.src} 
                alt={solution.title}
                layout="fill" 
                objectFit="cover" 
                className="transition-transform duration-300 group-hover:scale-105"
                quality={80} 
              />
              </Link>
            </div>
            <div className="p-6">
              <Link href={solution.href}>
              <h3 className="text-2xl font-bold text-gray-800">{solution.title}</h3>
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}