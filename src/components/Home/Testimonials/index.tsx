"use client";
import React from "react";
import Image from "next/image";
// @ts-ignore
import "slick-carousel/slick/slick.css";
// @ts-ignore
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
    const slides = [
        {
            id: 1,
            items: [
                {
                    year: "2001",
                    description: "We founded in 2001 and started the organization as a distributor in process instrumentation.",
                },
                {
                    year: "2006",
                    description: "Consultancy and Engineering\nProduct and Project Sales\nSCADA, Historian, Report\nEnergy management System\nIoT based supervision & monitoring",
                }
            ]
        },
        {
            id: 2,
            items: [
                {
                    year: "2011",
                    description: "Control Panel Manufacturing for PLC/RTU/SCADA\nEnergy management System\nUnified systems for CCTV, Data & analytics\nTurnkey Automation Solution Provider",
                },
                {
                    year: "2016",
                    description: "Smart City / Safe City / ITMS Solutions Provider\nCommand & Control Centre solutions\nSoftware solutions\nOutdoor & Indoor display solutions",
                }
            ]
        }
    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };

    return (
        <section className="bg-IcyBreeze dark:bg-darklight py-8 md:py-24">
            <div className="container px-4 md:px-0">
                {/* Mobile Layout */}
                <div className="block md:hidden">
                    <div className="mb-6 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            TimeLine
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                            Our Company Milestones
                        </p>
                    </div>

                    <div className="grid grid-cols-12 gap-4 items-start">
                        {/* Mobile Image - Full width on mobile */}
                        <div className="col-span-12 flex justify-center mb-6">
                            <Image
                                src="/images/hero/Black_1.png"
                                alt="Company Timeline"
                                width={320}
                                height={400}
                                quality={100}
                                priority
                                className="w-full h-auto rounded-lg shadow-xl"
                            />
                        </div>
                        
                        {/* Mobile Slider */}
                        <div className="col-span-12">
                            <Slider {...settings}>
                                {slides.map((slide, idx) => (
                                    <div key={idx} className="px-1">
                                        <div className="space-y-3">
                                            {slide.items.map((item, itemIdx) => (
                                                <div
                                                    key={itemIdx}
                                                    className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary"
                                                >
                                                    <h3 className="text-lg font-bold text-primary mb-2">
                                                        {item.year}
                                                    </h3>
                                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-xs whitespace-pre-line">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-12 gap-12 items-start">
                    {/* Left Side - Image (Static) */}
                    <div className="md:col-span-4 flex justify-start sticky top-20">
                        <div className="relative w-full max-w-sm h-auto rounded-xl overflow-hidden shadow-2xl mt-32">
                            <Image
                                src="/images/hero/Black_1.png"
                                alt="Timeline"
                                width={350}
                                height={600}
                                quality={100}
                                priority
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side - Timeline Slider */}
                    <div className="md:col-span-8">
                        <div className="mb-10">
                            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                                TimeLine
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
                                Our Company Milestones
                            </p>
                        </div>

                        <Slider {...settings}>
                            {slides.map((slide, idx) => (
                                <div key={idx} className="px-2">
                                    <div className="space-y-6">
                                        {slide.items.map((item, itemIdx) => (
                                            <div
                                                key={itemIdx}
                                                className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-primary"
                                            >
                                                <h3 className="text-2xl font-bold text-primary mb-3">
                                                    {item.year}
                                                </h3>
                                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base whitespace-pre-line">
                                                    {item.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;