"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Define the structure for our slides
export const carouselData = [
    {
        id: 1,
        src: "/images/ThumbnailSlider/water_1.png",
        title: "Digital & Monitoring Solutions",
        description: "Temflo provides future proof display system. Offering a variety of products like immersive display, Outdoor LED display and DLP based video walls"
    },
    {
        id: 2,
        src: "/images/ThumbnailSlider/water_2.jpg",
        title: "Digital Museum",
        description: "Our company creates futurist digital museums offering immersive experiences. Utilizing advanced technology, we design interactive exhibits that engage visitors, bringing history, art, and science to life in captivating and educational ways"
    },
    {
        id: 3,
        src: "/images/ThumbnailSlider/water_3.jpg",
        title: "Control command center",
        description: "Our idea of command centre is based on a sustainable, safe and contemporary workspace for both operators and equipment. We specialise in providing state of the art control command centres with ergonomic designs and modular desk and consoles."
    },
    {
        id: 4,
        src: "/images/ThumbnailSlider/water_4.png",
        title: "Emergency warning system",
        description: "Our company specializes in turnkey emergency warning system solution. Our comprehensive solutions involve detection, monitoring, and alert dissemination, ensuring timely warnings to safeguard communities and mitigate disaster impacts. We are proud to share that we have also been a part Samarth 2024."
    }
];

interface Props {
    onSlideChange: (index: number) => void;
}

const ThumbnailCarousel: React.FC<Props> = ({ onSlideChange }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [nav1, setNav1] = useState<Slider | null>(null);
    const [nav2, setNav2] = useState<Slider | null>(null);
    
    const mainSliderRef = useRef<Slider | null>(null);
    const navSliderRef = useRef<Slider | null>(null);

    // Syncing sliders on mount
    useEffect(() => {
        setNav1(mainSliderRef.current);
        setNav2(navSliderRef.current);
    }, []);

    const settingsFor = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,           // Enables auto-changing
        autoplaySpeed: 6000,      // Changes every 4 seconds
        pauseOnHover: true,       // Pauses autoplay when mouse is over the slider
        asNavFor: nav2 as Slider,
    };

    const settingsNav = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: nav1 as Slider,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        beforeChange: (oldIndex: number, newIndex: number) => {
            setActiveIndex(newIndex);
            onSlideChange(newIndex); 
        },
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="min-h-[320px] sm:min-h-[400px] md:min-h-[500px] flex flex-col">
            {/* Main Image Slider */}
            <Slider {...settingsFor} ref={mainSliderRef} className="pb-2 flex-1">
                {carouselData.map((item) => (
                    <div key={item.id} className="h-full">
                        <div className="relative w-full aspect-video">
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className="rounded-lg object-cover"
                                priority={item.id === 1}
                            />
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Thumbnail Navigation Slider */}
            <div className="mt-2 sm:mt-3">
                <Slider {...settingsNav} ref={navSliderRef} className="thumb">
                    {carouselData.map((item, idx) => (
                        <div key={item.id} className="px-1 sm:px-2 cursor-pointer">
                            <div className={`relative h-16 sm:h-20 md:h-24 transition-opacity duration-300 ${activeIndex === idx ? 'opacity-100 ring-2 ring-blue-500 rounded-lg' : 'opacity-50'}`}>
                                <Image
                                    src={item.src}
                                    alt="Thumbnail"
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ThumbnailCarousel;