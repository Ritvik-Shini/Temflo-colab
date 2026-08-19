import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="dark:bg-darkmode pt-28 md:pt-36">
            <div className="container">
                <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-30">
                    <div className="col-span-6">
                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            className="relative z-0  inline-block text-primary text-lg font-bold before:absolute before:content-[''] before:bg-primary/20  before:w-full before:h-2 before:-z-1 dark:before:-z-1 before:bottom-0"
                        >
            
                            
                        </p>
                        <h1
                            className="py-4 text-primary dark:text-white"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                        >
                           " Empowering Industries With Innovative Solutions "
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-duration="1000"
                            className="text-xl text-SlateBlueText dark:text-opacity-80 font-normal md:pb-14 pb-6"
                        >
                            Choosing us means partnering with a company that combines extensive experience with a commitment to pushing the boundaries of what is possible,
                            delivering exceptional value, and creating impactful experiences.
                        </p>
                        <div className="flex items-center md:justify-normal lg:justify-center justify-start gap-4">
                         {/* Services Button */}
                           <Link
                            href="/schedules"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                            className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-medium text-white bg-[#883FFC] hover:bg-purple-700 transition-all duration-300 shadow-md"
                       >
                         <i className="w-5 h-5 bg-[url('/images/hero/tickets.svg')] bg-no-repeat bg-center inline-block brightness-0 invert" />
                         <span>Services</span>
                           </Link>

                         {/* Projects Button */}
                           <Link
                            href="/blog"
                           data-aos="fade-up"
                           data-aos-delay="600"
                           data-aos-duration="1000"
                           className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-medium text-white bg-[#883FFC] hover:bg-purple-700 transition-all duration-300 shadow-md"
                        >
                            <i className="w-5 h-5 bg-[url('/images/hero/calander.svg')] bg-no-repeat bg-center inline-block brightness-0 invert" />
                           <span>Projects</span>
                         </Link>
                       </div>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className="col-span-6  lg:flex hidden items-center gap-3"
                    >
            
                        <div className="bg-PaleCerulean relative rounded-tl-166 rounded-br-166 w-full">
                            <Image
                                src="/images/hero/temflo1.png"
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
                </div>
            </div>
        </section>
    );
};

export default Hero;
