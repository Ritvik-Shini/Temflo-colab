import React from 'react';
import Image from 'next/image'; 

const lightandsoundshow = [
  { 
    id: 1, 
    title: 'Patna Smart City Ltd.', 
    src: '/images/hero/mug_1.png',
  },  
  { 
    id: 2, 
    title: 'Portblair Smart City Project', 
    src: '/images/hero/mug_2.png', 
  },
  { 
    id: 3, 
    title: 'Project ICT for RRVPNL', 
    src: '/images/hero/mug_3.png', 
  },
  { 
    id: 4, 
    title: 'Bhopal Smart City Ltd.', 
    src: '/images/hero/mug_4.png', 
  }, 
  { 
    id: 5, 
    title: 'Negpur Metro Rail Corporation Ltd.', 
    src: '/images/hero/mug_5.png', 
  }, 
  { 
    id: 6, 
    title: 'Delhi Jai Board.', 
    src: '/images/hero/mug_6.png', 
  },  
];
export default function LightandsoundshowPage() {
  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      
     
      <div className="text-center mb-12">
        <br></br><br></br><br></br><br></br>
        <p className="text-lg md:text-4xl font-extrabold text-gray-900">
          Light & Sound Show
        </p>
        <p className="mt-5 text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our advanced display systems and command-and-control monitoring solutions.
        </p>
      </div>

      {/* 4. Gallery Grid (Crucial Part: grid layout for the gallery) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {lightandsoundshow.map((solution) => (
          // 5. Individual Card Style
          <div key={solution.id} className="bg-white overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="relative h-72 md:h-48 w-full">
              {/* Image using standard next/image component for better performance and quality management */}
              <Image 
                src={solution.src} 
                alt={solution.title}
                layout="fill" // Ensures the image fills its container (h-72)
                objectFit="cover" // Important: Crops the image to fit perfectly without stretching
                className="transition-transform duration-300 group-hover:scale-105"
                quality={80} // Adjust quality to avoid large file warnings (terminal error fix)
              />
            </div>
            
            {/* 6. Title/Text below the image */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">{solution.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}