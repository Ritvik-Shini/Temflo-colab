import React from "react";

import Image from "next/image";

const Industries = () => {
    return (
        <>
               <div className="container">
                    <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-30"></div>
                          <div className="col-span-6"></div>
                             <h1
                            className="text-center pb-12"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            
                        >
                            Industries We Serve
                        </h1>
                                <div className="bg-ElectricAqua relative rounded-tl-166 rounded-br-166 w-full">
                                    <Image
                                        src="/images/hero/industries.png"
                                        alt="hero"
                                        width={0}
                                        height={0}
                                        quality={100}
                                        layout="responsive"
                                        sizes="100vh"
                                        className="w-full h-full"
                                    />
                                  
                                </div>
                </div>
        </>
             );
};

export default Industries;       