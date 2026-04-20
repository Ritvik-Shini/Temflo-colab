"use client";
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <section className="bg-IcyBreeze dark:bg-darklight testimonial">
                <div className="container">
                    <Slider {...settings}>
                        <div>
                            <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                                <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" className="col-span-4 bg-LightSkyBlue sm:rounded-br-214 rounded-br-182 sm:rounded-tl-214 rounded-tl-182 relative before:content-[''] before:absolute before:bg-[url('/images/testimonials/quotes.png')] before:w-109 before:h-109 before:-right-10 before:top-32 lg:inline-block hidden">
                                    <Image
                                        src="/images/hero/Black_1.png"
                                        alt="testimonials"
                                        width={0}
                                        height={0}
                                        quality={100}
                                        layout="responsive"
                                        sizes="100vh"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000" className="col-span-8 md:ml-28 ml-0">
                                    <h2 className="max-w-100 text-center">TimeLine <br></br> Our Company Milestones</h2>
                                    <br></br>
                                  <div className="bg-white dark:bg-darklight pt-2 pb-4 rounded-lg text-center group hover:bg-white py-3 max-w-80">
                                    <p className="text-lg font-normal text-primary dark:text-opacity-80 py-3 max-w-80">
                                        <h2>2001</h2>
                                        We founded in 2001 and start the organization as a distributor in process instrumentation .
                                    </p>
                                   </div>
                                   <br></br><br></br>
                                   <div className="bg-white dark:bg-darklight pt-2 pb-4 rounded-lg text-center group hover:bg-white py-3 max-w-80">
                                    <p className="text-lg font-normal text-primary text-center dark:text-opacity-80 py-3 max-w-80">
                                       <h2>2006</h2>
                                       Consultancy and Engineering <br></br>
                                       Product and Project Sales <br></br>
                                       SCADA,Historian,Report <br></br>
                                       Energy management System <br></br>
                                       IoT based supervision & monitoring.     
                                    </p>
                                   </div>
                                    <div className="flex items-center gap-8">
                                     
                                        <div>
                                            
                                            <div className="flex items-center">
                                                
                                                
                                               
                                        
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                                <div className="col-span-4 bg-LightSkyBlue sm:rounded-br-214 rounded-br-182 sm:rounded-tl-214 rounded-tl-182 relative before:content-[''] before:absolute before:bg-[url('/images/testimonials/quotes.png')] before:w-109 before:h-109 before:-right-10 before:top-32 lg:inline-block hidden">
                                    <Image
                                        src="/images/hero/Black_1.png"
                                        alt="testimonials"
                                        width={0}
                                        height={0}
                                        quality={100}
                                        layout="responsive"
                                        sizes="100vh"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="col-span-8 md:ml-28 ml-0">
                                    <h2 className="max-w-100 text-center">TimeLine <br></br> Our Company Milestones</h2>
                                    <br></br>
                                 <div className="bg-white dark:bg-darklight pt-2 pb-4 rounded-lg text-center group hover:bg-white py-3 max-w-80">
                                    <p className="text-lg font-normal text-primary text-center dark:text-opacity-80 py-3 max-w-80">
                                        <h2>2011</h2>
                                         Control Panel Manufacturing for PLC/ RTU/SCADA <br></br>
                                          Energy management System.<br></br>
                                         Unified systems for CCTV. Data & analytics.<br></br>
                                          Turnkey Automation Solution Provider.<br></br>                                           
                                    </p>
                                  </div>
                                  <br></br><br></br>
                                <div className="bg-white dark:bg-darklight pt-2 pb-4 rounded-lg text-center group hover:bg-white py-3 max-w-80">
                                    <p className="text-lg font-normal text-primary text-center dark:text-opacity-80 py-3 max-w-80">
                                        <h2>2016</h2>
                                            Smart City / Safe City /ITMS Solutions Provider<br></br>
                                            Command & Control Centre solutions<br></br>
                                            Software solutions<br></br>
                                            Outdoor & Indoor display solutions<br></br>
                                    </p>
                                </div>
                                    <div className="flex items-center gap-8">
                                       
                                        <div>
                                           
                                            <div className="flex items-center">
                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
