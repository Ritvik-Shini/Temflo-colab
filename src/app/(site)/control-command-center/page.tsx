import React from 'react';
import Image from 'next/image'; 
import { getPageUrl } from "@/lib/pageUrls";
import Link from "next/link";

const controlcommandcenter = [
  { 
    id: 19, 
    title: 'Patna Smart City Ltd.', 
    src: '/images/hero/mug_1.png',
    href:'/solutions/19'
  },
  { 
    id: 20, 
    title: 'Portblair Smart City Project', 
    src: '/images/hero/mug_2.png',
    href:'/solutions/20' 
  },
  { 
    id: 21, 
    title: 'Project ICT for RRVPNL', 
    src: '/images/hero/mug_3.png',
    href:'/solutions/21' 
  },
  { 
    id: 22, 
    title: 'Bhopal Smart City Ltd.', 
    src: '/images/hero/mug_4.png',
    href:'/solutions/22' 
  }, 
  { 
    id: 23, 
    title: 'Negpur Metro Rail Corporation Ltd.', 
    src: '/images/hero/mug_5.png',
    href:'/solutions/23' 
  }, 
  { 
    id: 24, 
    title: 'Delhi Jai Board.', 
    src: '/images/hero/mug_6.png',
    href:'/solutions/24' 
  },  
];

export default function ControlcommandcenterPage() {
  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <div className="text-center mb-12">
        <br></br><br></br><br></br><br></br>
        <p className="text-lg md:text-4xl font-extrabold text-primary-gray-900">
          Control Command Center
        </p>
        <p className="mt-5 text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our advanced display systems and command-and-control monitoring solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {controlcommandcenter.map((solution) => (
          <div key={solution.id} className="bg-white overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="relative h-72 md:h-48 w-full">  
              <Image 
                src={solution.src} 
                alt={solution.title}
                layout="fill" 
                objectFit="cover" 
                className="transition-transform duration-300 group-hover:scale-105"
                quality={80} 
              />
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