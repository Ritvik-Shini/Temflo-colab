import React from "react";
import Link from "next/link";
import Image from "next/image";

const TicketSection = () => {
    return (
        <>
            <section  className="dark:bg-darkmode pt-0">
                <div className="container mx-auto px-4">
                    <div className="bg-primary relative md:mx-auto mx-0 overflow-hidden py-10 rounded-[22px] lg:-mb-48 md:mt-20 mt-10">
                        <div className="flex flex-wrap items-center justify-center md:p-10 p-5">
                            <div className="bg- white relative rounded-tl-[166px] rounded-br-[166px] w-full max-w-[500px] overflow-hidden">
                              <div  className="p-6 flex justify-center items-center">
                                 <Image
                                    src="/images/ticket-section/33333.png"
                                    alt="hero"
                                    width={0}
                                    height={0}
                                    quality={100}
                                    layout="responsive"
                                    sizes="100vh"
                                    className="object-cover"
                                />
                               </div>
                            </div>
                            <div className="md:w-2/5 w-full ml-auto lg:text-start text-center">
                                <p className="sm:text-4xl text-[28px] leading-[2.25rem] font-bold text-white lg:max-w-364 max-w-full pb-9">
                                    Become a Part of Temflo System
                                </p>
                                <Link
                                    href="/"
                                    className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden before:bg-white"
                                >
                                    <span className="sm:!px-20 px-10 !border-ElectricAqua !text-ElectricAqua ">
                                        Join Us 
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TicketSection;
