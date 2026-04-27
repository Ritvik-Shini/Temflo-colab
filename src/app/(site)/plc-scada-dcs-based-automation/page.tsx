import React from 'react';
import Image from 'next/image'; 
import { getPageUrl } from "@/lib/pageUrls";
import Link from "next/link";
const plcscadadcsbasedautomation = [
  { 
    id: 49, 
    title: 'Patna Smart City Ltd.', 
    src: '/images/hero/mug_1.png',
    href:'/solutions/49'
  },
  { 
    id: 50, 
    title: 'Portblair Smart City Project', 
    src: '/images/hero/mug_2.png', 
    href:'/solutions/50'

  },
  { 
    id: 51, 
    title: 'Project ICT for RRVPNL', 
    src: '/images/hero/mug_3.png', 
    href:'/solutions/51'
  },
  { 
    id: 52, 
    title: 'Bhopal Smart City Ltd.', 
    src: '/images/hero/mug_4.png', 
    href:'/solutions/52'
  }, 
  { 
    id: 53, 
    title: 'Negpur Metro Rail Corporation Ltd.', 
    src: '/images/hero/mug_5.png',  
    href:'/solutions/53'

  }, 
  { 
    id: 54, 
    title: 'Delhi Jai Board.', 
    src: '/images/hero/mug_6.png', 
    href:'/solutions/54'
  },  
];

export default function PlcscadadcsbasedautomationPage() {
  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <div className="text-center mb-12">
        <br></br><br></br><br></br><br></br>
        <p className="text-lg md:text-4xl font-extrabold text-primary-gray-900">
          Plc SCADA DCS Based Automation
        </p>
        <p className="mt-5 text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our advanced display systems and command-and-control monitoring solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {plcscadadcsbasedautomation.map((solution) => (
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