import React from 'react';
import Image from 'next/image'; 
import { getPageUrl } from "@/lib/pageUrls";
import Link from "next/link";

const itandnetworkingsolution = [
  { 
    id: 79, 
    title: 'Facade Lighting at Jhansi fort.', 
    src: '/images/hero/mug_1.png',
    href:'/solutions/79'
  },  
  { 
    id: 80, 
    title: 'Light and sound show at Bareilly jail', 
    src: '/images/hero/mug_2.png',
    href:'/solutions/80' 
  },
  { 
    id: 81, 
    title: 'sound show at Bareilly jail', 
    src: '/images/hero/mug_3.png', 
    href:'/solutions/81'
  },
  { 
    id: 82, 
    title: 'Water screen based light and sound show at Suryakund Ayodhya.', 
    src: '/images/hero/mug_4.png', 
    href:'/solutions/82'
  }, 
  { 
    id: 83, 
    title: 'Water screen based sound show in prayagraj.', 
    src: '/images/hero/mug_5.png', 
    href:'/solutions/83'
  }, 
  { 
    id: 84, 
    title: 'Water screen based light and sound show in Moradabad.', 
    src: '/images/hero/mug_6.png',
    href:'/solutions/84' 
  },  
];
export default function ITAndNetworkingSolutionPage() {
  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <div className="text-center mb-12">
        <br></br><br></br><br></br><br></br>
        <p className="text-lg md:text-4xl font-extrabold text-primary-gray-900">
          IT & Networking Solution
        </p>
        <p className="mt-5 text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our advanced display systems and command-and-control monitoring solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {itandnetworkingsolution.map((solution) => (
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