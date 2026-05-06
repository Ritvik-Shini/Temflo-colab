import React from 'react';


import Link from "next/link";


export default function TermsOfUse() {
    return (
        <>
            <div className="min-h-screen bg-white dark:bg-darkmode pt-32 pb-20">
                <div className="container mx-auto px-4">
                
                    <div className="text-center mb-16">
                    <h1
                        className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                    >
                        Terms of Use
                    </h1>
                    <p className="text-lg text-primary dark:text-MistyTealText max-w-2xl mx-auto">
                        Please read these terms and conditions carefully before using our services.
                    </p>
                </div>
                </div>
            </div>
        </>
    );
};


