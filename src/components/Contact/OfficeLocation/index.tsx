import React from "react";
import Link from "next/link";

const Location = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <section className="md:py-24 py-10 dark:bg-darkmode">
        <div className="container">
            <div className="">
                <div className="grid lg:grid-cols-9 md:grid-cols-6 grid-cols-1 xl:gap-30 gap-0 border-b border-solid border-white border-opacity-50 pb-11 dark:border-dark_border">
                    <div className="col-span-3">
                        <h2 className="text-secondary dark:text-white max-w-219 sm:text-[40px] sm:leading-[3.4rem] text-[28px] leading-[2.25rem] font-bold">Ghaziabad Office</h2>
                    </div>
                    <div className="col-span-3">
                        <p className="sm:text-2xl text-xl text-secondary dark:text-darktext font-normal max-w-266 leading-10">Pioneer Complex, 12/19, Plot Alpha, Sahibabad Industrial Area Site 4, Ghaziabad Uttar Pradesh, India,<br></br> Zip code 201010</p>
                    </div>
                    <div className="col-span-3">
                        <Link href="mailto:info@temflo.co.in" className="sm:text-2xl text-xl text-secondary dark:text-primary font-medium underline hover:dark:text-white hover:text-primary">info@temflo.co.in</Link>
                        <Link href="tel:+91-120-4217441" className="sm:text-2xl text-xl text-secondary dark:text-primary flex items-center gap-2 hover:text-opacity-100 w-fit hover:dark:text-white"><span className="text-primary">Call</span>+91-120-4217441</Link>
                    </div>
                </div>
               
            </div>
        </div>
      </section>
    </>
  );
};

export default Location;
