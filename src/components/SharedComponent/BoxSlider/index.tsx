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
        <div className="bg-IcyBreeze dark:bg-darklight pt-2 pb-4 rounded-lg text-center group hover:bg-primary">
           <div className="mt-14 relative">
                                                                <Image
                                                                    src="/images/hero/Delhi Metro.png"
                                                                    alt="Product"
                                                                    width={85}
                                                                    height={65}
                                                                    style={{width:'85', height:'65'}}
                                                                    quality={100}
                                                                    sizes="100vh"
                                                                    className="dark"
                                                                ></Image>
            </div>
        
        </div>
        <div className="bg-IcyBreeze dark:bg-darklight pt-0 pb-2 rounded-lg text-center group hover:bg-primary">
         <div className="mt-14 relative">
                                                               <Image
                                                                    src="/images/hero/Bharat_Electronics.png"
                                                                    alt="Product"
                                                                    width={85}
                                                                    height={75}
                                                                    style={{width:'85', height:'75'}}
                                                                    quality={100}
                                                                    sizes="100vh"
                                                                    className="dark"
                                                                ></Image>
          </div>
          
        </div>
        <div className="bg-IcyBreeze dark:bg-darklight pt-4 pb-6 rounded-lg text-center group hover:bg-primary">
         <div className="mt-14 relative">
                                                               <Image
                                                                    src="/images/hero/Honeywell.png"
                                                                    alt="Product"
                                                                    width={95}
                                                                    height={75}
                                                                    style={{width:'95', height:'75'}}
                                                                    quality={100}
                                                                    sizes="100vh"
                                                                    className="dark"
                                                                ></Image>
        </div>
       </div>
        <div className="bg-IcyBreeze dark:bg-darklight pt-2 pb-4 rounded-lg text-center group hover:bg-primary">
          <div className="mt-14 relative">
                                                               <Image
                                                                    src="/images/hero/hfcl.png"
                                                                    alt="Product"
                                                                    width={35}
                                                                    height={25}
                                                                    style={{width:'35', height:'25'}}
                                                                    quality={100}
                                                                    sizes="100vh"
                                                                    className="dark"
                                                                ></Image>
         </div>
       </div>
        <div className="bg-IcyBreeze dark:bg-darklight pt-2 pb-4 rounded-lg text-center group hover:bg-primary">
          <div className="mt-14 relative">
                                                               <Image
                                                                    src="/images/hero/NTPC.png"
                                                                    alt="Product"
                                                                    width={45}
                                                                    height={25}
                                                                    style={{width:'45', height:'25'}}
                                                                    quality={100}
                                                                    sizes="100vh"
                                                                    className="dark"
                                                                ></Image>
         </div>
        </div>
        <div className="bg-IcyBreeze dark:bg-darklight pt-2 pb-4 rounded-lg text-center group hover:bg-primary">
          <div className="mt-14 relative">
                                                               <Image
                                                                    src="/images/hero/Tech mahindra.png"
                                                                    alt="Product"
                                                                    width={165}
                                                                    height={145}
                                                                    style={{width:'165', height:'145'}}
                                                                    quality={100}
                                                                    sizes="100vh"
                                                                    className="dark"
                                                                ></Image>
         </div>
        </div>
        <div className="bg-IcyBreeze dark:bg-darklight pt-2 pb-4 rounded-lg text-center group hover:bg-primary">
           <div className="mt-14 relative">
                                                               <Image
                                                                    src="/images/hero/LT.png"
                                                                    alt="Product"
                                                                    width={75}
                                                                    height={55}
                                                                    style={{width:'75', height:'55'}}
                                                                    quality={100}
                                                                    sizes="100vh"
                                                                    className="dark"
                                                                ></Image>
         </div>
        </div>
        <div className="bg-IcyBreeze dark:bg-darklight pt-1 pb-3 rounded-lg text-center group hover:bg-primary">
          <div className="mt-14 relative">
                                                               <Image
                                                                    src="/images/hero/WELSPUN.png"
                                                                    alt="Product"
                                                                    width={45}
                                                                    height={25}
                                                                    style={{width:'45', height:'25'}}
                                                                    quality={100}
                                                                    sizes="100vh"
                                                                    className="dark"
                                                                ></Image>
         </div>
        </div>
        <div className="bg-IcyBreeze dark:bg-darklight pt-2 pb-4 rounded-lg text-center group hover:bg-primary">
           <div className="mt-14 relative">
                                                               <Image
                                                                    src="/images/hero/Ujvn Limited.png"
                                                                    alt="Product"
                                                                    width={85}
                                                                    height={65}
                                                                    style={{width:'85', height:'65'}}
                                                                    quality={100}
                                                                    sizes="100vh"
                                                                    className="dark"
                                                                ></Image>
         </div>
        </div>
      </Slider>
    </>
  );
};

export default BoxSlider;
