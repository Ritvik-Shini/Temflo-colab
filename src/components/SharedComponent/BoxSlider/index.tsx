"use client"
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BoxSlider = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // screen width <= 1024px
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // screen width <= 768px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,          
        },
      },
      {
        breakpoint: 480, // screen width <= 480px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} className="text-center">
        
           <div className="mt-14 relative">
                                                                <Image
                                                                    src="/images/hero/Delhi Metro.jpeg"
                                                                    alt="Product"
                                                                    width={75}
                                                                    height={55}
                                                                    style={{width:'75', height:'55'}}
                                                                    quality={100}
                                                                    sizes="100vh"
                                                                    className="dark"
                                                                ></Image>
            </div>
        
        
        
         <div className="mt-14 relative">
                                                               <Image
                                                                    src="/images/hero/EFKON.jpeg"
                                                                    alt="Product"
                                                                    width={75}
                                                                    height={55}
                                                                    style={{width:'75', height:'55'}}
                                                                    quality={100}
                                                                    sizes="100vh"
                                                                    className="dark"
                                                                ></Image>
          </div>
          
        
        
         <div className="mt-14 relative">
                                                               <Image
                                                                    src="/images/hero/Honey Well.jpeg"
                                                                    alt="Product"
                                                                    width={75}
                                                                    height={55}
                                                                    style={{width:'75', height:'55'}}
                                                                    quality={100}
                                                                    sizes="100vh"
                                                                    className="dark"
                                                                ></Image>
        </div>
       
        
          <div className="mt-14 relative">
                                                               <Image
                                                                    src="/images/hero/LT.jpeg"
                                                                    alt="Product"
                                                                    width={75}
                                                                    height={55}
                                                                    style={{width:'75', height:'55'}}
                                                                    quality={100}
                                                                    sizes="100vh"
                                                                    className="dark"
                                                                ></Image>
         </div>
       
        
          <div className="mt-14 relative">
                                                               <Image
                                                                    src="/images/hero/NTPC.jpeg"
                                                                    alt="Product"
                                                                    width={75}
                                                                    height={55}
                                                                    style={{width:'75', height:'55'}}
                                                                    quality={100}
                                                                    sizes="100vh"
                                                                    className="dark"
                                                                ></Image>
         </div>
        
      
          <div className="mt-14 relative">
                                                               <Image
                                                                    src="/images/hero/Tech Mahindra.jpeg"
                                                                    alt="Product"
                                                                    width={75}
                                                                    height={55}
                                                                    style={{width:'75', height:'55'}}
                                                                    quality={100}
                                                                    sizes="100vh"
                                                                    className="dark"
                                                                ></Image>
         </div>
        
    
           <div className="mt-14 relative">
                                                               <Image
                                                                    src="/images/hero/SIEMENS.jpeg"
                                                                    alt="Product"
                                                                    width={75}
                                                                    height={55}
                                                                    style={{width:'75', height:'55'}}
                                                                    quality={100}
                                                                    sizes="100vh"
                                                                    className="dark"
                                                                ></Image>
         </div>
        
        
          <div className="mt-14 relative">
                                                               <Image
                                                                    src="/images/hero/Welspun.jpeg"
                                                                    alt="Product"
                                                                    width={75}
                                                                    height={55}
                                                                    style={{width:'75', height:'55'}}
                                                                    quality={100}
                                                                    sizes="100vh"
                                                                    className="dark"
                                                                ></Image>
         </div>
        
        
           <div className="mt-14 relative">
                                                               <Image
                                                                    src="/images/hero/Techno Sys.jpeg"
                                                                    alt="Product"
                                                                    width={75}
                                                                    height={55}
                                                                    style={{width:'75', height:'55'}}
                                                                    quality={100}
                                                                    sizes="100vh"
                                                                    className="dark"
                                                                ></Image>
         </div>
      
      </Slider>
    </>
  );
};

export default BoxSlider;
