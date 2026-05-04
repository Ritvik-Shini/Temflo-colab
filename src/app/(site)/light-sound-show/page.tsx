import React from 'react';
import Image from 'next/image'; 
import { getPageUrl } from "@/lib/pageUrls";
import Link from "next/link";

const lightandsoundshow = [
  { 
    id: 13, 
    title: 'Patna Smart City Ltd.', 
    src: '/images/hero/mug_1.png',
    href:'/solutions/13'
  },  
  { 
    id: 14, 
    title: 'Portblair Smart City Project', 
    src: '/images/hero/mug_2.png',
    href:'/solutions/14' 
  },
  { 
    id: 15, 
    title: 'Project ICT for RRVPNL', 
    src: '/images/hero/mug_3.png', 
    href:'/solutions/15'
  },
  { 
    id: 16, 
    title: 'Bhopal Smart City Ltd.', 
    src: '/images/hero/mug_4.png', 
    href:'/solutions/16'
  }, 
  { 
    id: 17, 
    title: 'Negpur Metro Rail Corporation Ltd.', 
    src: '/images/hero/mug_5.png', 
    href:'/solutions/7'
  }, 
  { 
    id: 18, 
    title: 'Delhi Jai Board.', 
    src: '/images/hero/mug_6.png',
    href:'/solutions/18' 
  },  
];
export default function LightandsoundshowPage() {
  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <div className="text-center mb-12">
        <br></br><br></br><br></br><br></br>
        <p className="text-lg md:text-4xl font-extrabold text-primary-gray-900">
          Light & Sound Show
        </p>
        <p className="mt-5 text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our advanced display systems and command-and-control monitoring solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {lightandsoundshow.map((solution) => (
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