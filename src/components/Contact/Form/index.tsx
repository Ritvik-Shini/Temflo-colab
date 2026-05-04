"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ContactForm = () => {

    const [consent, setConsent] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        designation: "",
        date: "",
        time: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
       
    };

    return (
        <>
            <section className="dark:bg-darkmode lg:pb-24 pb-16 pt-0">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
                        <div className="col-span-6">
                            <h2 className="max-w-72 text-[40px] leading-[3.4rem] font-bold mb-9 text-primary">Request a Call Back</h2>
                            <form className="flex flex-wrap w-full m-auto justify-between" onSubmit={handleSubmit}>
                                <div className="sm:flex gap-3 w-full">
                                    <div className="mx-0 my-2.5 flex-1">
                                        <label htmlFor="firstName" className="pb-3 inline-block text-base text-primary">First Name*</label>
                                        <input
                                            id="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full text-base px-4 rounded-lg py-2.5 border-border dark:border-dark_border border-solid dark:text-white  dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0"
                                            type="text"
                                        />
                                    </div>
                                    <div className="mx-0 my-2.5 flex-1">
                                        <label htmlFor="lastName" className="pb-3 inline-block text-base text-primary">Last Name*</label>
                                        <input
                                            id="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full text-base px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white  dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="sm:flex gap-3 w-full">
                                    <div className="mx-0 my-2.5 flex-1">
                                        <label htmlFor="email" className="pb-3 inline-block text-base text-primary">Email address*</label>
                                        <input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full text-base px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white  dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0"
                                        />
                                    </div>
                                    <div className="mx-0 my-2.5 flex-1">
                                        <label htmlFor="designation" className="pb-3 inline-block text-base text-primary">Designation*</label>
                                        <select id="designation" value={formData.designation} onChange={handleChange} className="w-full text-base px-4 py-2.5 text-primary rounded-lg border-border dark:text-white border-solid dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0">
                                            <option value="">Choose a designation</option>
                                            <option value="Baking &amp; Pastry">
                                                Client
                                            </option>
                                            <option value="Exotic Cuisine">Customer</option>
                                            <option value="French Desserts">Employee</option>
                                           
                                        </select>
                                    </div>
                                </div>
                                <div className="sm:flex gap-3 w-full">
                                    <div className="mx-0 my-2.5 flex-1">
                                        <label htmlFor="date" className="pb-3 inline-block text-base text-primary">Date*</label>
                                        <input
                                            id="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full text-base text-primary px-4 rounded-lg py-2.5 outline-none dark:text-white dark:bg-darkmode border-border border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0"
                                            type="date"
                                        />
                                    </div>
                                    <div className="mx-0 my-2.5 flex-1">
                                        <label htmlFor="time" className="pb-3 inline-block text-base text-primary">Time*</label>
                                        <input
                                            id="time"
                                            value={formData.time}
                                            onChange={handleChange}
                                            className="w-full text-base px-4 rounded-lg py-2.5 border-border outline-none dark:text-white dark:bg-darkmode border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0"
                                            type="time"
                                        />
                                    </div>
                                </div>
                               
                            <div className="mb-8 flex items-start gap-3">
                            <input
                                type="checkbox"
                                id="consent"
                                checked={consent}
                                onChange={(e) => setConsent(e.target.checked)}
                                className="w-5 h-5 mt-1 border-2 border-stroke dark:border-dark_border rounded accent-primary cursor-pointer"
                            />
                            <label htmlFor="consent" className="text-sm text-dark dark:text-white leading-relaxed">
                                By submitting my personal information, I consent to receive communication from Temflo. By submitting this form you agree that your information is being used in accordance with Temflo Policy.
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={!consent}
                                className={`btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden transition-all duration-300 ${
                                    consent
                                        ? "bg-primary hover:shadow-lg cursor-pointer"
                                        : "bg-gray-400 dark:bg-gray-600 cursor-not-allowed opacity-60"
                                }`}
                            >
                                <span className="!border-0 !text-white">Submit</span>
                            </button>
                        </div>
                            </form>
                        </div>
                        <div className="col-span-6">
                            <Image
                                src="/images/contact-page/contact.jpg"
                                alt="Contact"
                                width={1300}
                                height={0}
                                quality={100}
                                style={{ width: '100%', height: 'auto' }}
                                className="bg-no-repeat bg-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactForm;
