"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ThumbnailCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const mainSliderRef = useRef<Slider | null>(null);
    const navSliderRef = useRef<Slider | null>(null);

    const settingsFor = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: navSliderRef.current as Slider, // Ensure proper typing
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: navSliderRef.current as Slider,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: navSliderRef.current as Slider,
                },
            },
        ],
    };

    const settingsNav = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: mainSliderRef.current as Slider, // Ensure proper typing
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        beforeChange: (oldIndex: number, newIndex: number) =>
            setActiveIndex(newIndex),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                },
            },
        ],
    };

    useEffect(() => {
        if (mainSliderRef.current) {
            mainSliderRef.current.slickGoTo(activeIndex);
        }
    }, [activeIndex]);

    return (
        <>
            <div className="min-h-[320px] sm:min-h-[400px] md:min-h-[500px] flex flex-col">
                <Slider {...settingsFor} ref={mainSliderRef} className="pb-2 flex-1">
                    <div className="h-full">
                        <Image
                            src="/images/ThumbnailSlider/water_1.png"
                            alt="Conference"
                            width={0}
                            height={0}
                            quality={100}
                            layout="responsive"
                            sizes="100vh"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="h-full">
                        <Image
                            src="/images/ThumbnailSlider/water_2.jpg"
                            alt="Conference"
                            width={0}
                            height={0}
                            quality={100}
                            layout="responsive"
                            sizes="100vh"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="h-full">
                        <Image
                            src="/images/ThumbnailSlider/water_3.jpg"
                            alt="Conference"
                            width={0}
                            height={0}
                            quality={100}
                            layout="responsive"
                            sizes="100vh"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="h-full">
                        <Image
                            src="/images/ThumbnailSlider/water_4.png"
                            alt="Conference"
                            width={0}
                            height={0}
                            quality={100}
                            layout="responsive"
                            sizes="100vh"
                            className="rounded-lg"
                        />
                    </div>
                </Slider>
                <div className="mt-2 sm:mt-3">
                    <Slider {...settingsNav} ref={navSliderRef} className="thumb">
                        <div className="px-1 sm:px-2">
                            <Image
                                src="/images/ThumbnailSlider/water_1.png"
                                alt="Thumbnail"
                                width={0}
                                height={0}
                                quality={100}
                                layout="responsive"
                                sizes="100vh"
                                className="rounded-lg h-16 sm:h-20 md:h-24 object-cover"
                            />
                        </div>
                        <div className="px-1 sm:px-2">
                            <Image
                                src="/images/ThumbnailSlider/water_2.jpg"
                                alt="Thumbnail"
                                width={0}
                                height={0}
                                quality={100}
                                layout="responsive"
                                sizes="100vh"
                                className="rounded-lg h-16 sm:h-20 md:h-24 object-cover"
                            />
                        </div>
                        <div className="px-1 sm:px-2">
                            <Image
                                src="/images/ThumbnailSlider/water_3.jpg"
                                alt="Thumbnail"
                                width={0}
                                height={0}
                                quality={100}
                                layout="responsive"
                                sizes="100vh"
                                className="rounded-lg h-16 sm:h-20 md:h-24 object-cover"
                            />
                        </div>
                        <div className="px-1 sm:px-2">
                            <Image
                                src="/images/ThumbnailSlider/water_4.png"
                                alt="Thumbnail"
                                width={0}
                                height={0}
                                quality={100}
                                layout="responsive"
                                sizes="100vh"
                                className="rounded-lg h-16 sm:h-20 md:h-24 object-cover"
                            />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default ThumbnailCarousel;
