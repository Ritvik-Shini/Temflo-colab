"use client";

import React, { useState } from "react";

const Beapartofus = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        company: "",
        jobTitle: "",
    });

    const [consent, setConsent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "phone") {
            // Only allow numeric characters and limit to 10 digits
            const numericValue = value.replace(/\D/g, "").slice(0, 10);
            setFormData((prev) => ({
                ...prev,
                [name]: numericValue,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your submission logic here
    };

    return (
        <div className="min-h-screen bg-white dark:bg-darkmode pt-32 pb-20">
            <div className="container mx-auto px-4">
            
                <div className="text-center mb-16">
                    <h1
                        className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                    >
                        Join Us
                    </h1>
                    <p className="text-lg text-primary dark:text-MistyTealText max-w-2xl mx-auto">
                        Be a part of our growing community and make an impact
                    </p>
                </div>

             
                <div className="flex justify-center">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-2xl bg-white dark:bg-darklight rounded-lg shadow-lg dark:shadow-darkmd p-8 md:p-12 border-2 border-primary dark:border-primary"
                    >
                        {/* Name Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label className="block text-sm font-semibold text-primary mb-3">
                                    First Name <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Enter your first name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-stroke dark:border-dark_border rounded-lg bg-white dark:bg-dark_input text-dark dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary dark:focus:border-primary transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-primary mb-3">
                                    Last Name <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Enter your last name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-stroke dark:border-dark_border rounded-lg bg-white dark:bg-dark_input text-dark dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary dark:focus:border-primary transition-colors"
                                />
                            </div>
                        </div>

                        {/* Contact Info Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label className="block text-sm font-semibold text-primary mb-3">
                                    Phone Number <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    maxLength={10}
                                    pattern="[0-9]{10}"
                                    className="w-full px-4 py-3 border-2 border-stroke dark:border-dark_border rounded-lg bg-white dark:bg-dark_input text-dark dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary dark:focus:border-primary transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-primary mb-3">
                                    Email Address <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-stroke dark:border-dark_border rounded-lg bg-white dark:bg-dark_input text-dark dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary dark:focus:border-primary transition-colors"
                                />
                            </div>
                        </div>

                        {/* Company Info Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            <div>
                                <label className="block text-sm font-semibold text-primary mb-3">
                                    Current Company <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Enter your company name"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-stroke dark:border-dark_border rounded-lg bg-white dark:bg-dark_input text-dark dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary dark:focus:border-primary transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-primary mb-3">
                                    Job Title <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="jobTitle"
                                    placeholder="Enter your job title"
                                    value={formData.jobTitle}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-stroke dark:border-dark_border rounded-lg bg-white dark:bg-dark_input text-dark dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary dark:focus:border-primary transition-colors"
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
                                By submitting my personal information, I consent to receive job-related communication from Temflo. By submitting this form you agree that your information is being used in accordance with Temflo Recruitment Policy.
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={!consent}
                                className={`btn btn-1 hover-filled-slide-down text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
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
            </div>
        </div>
    );
};

export default Beapartofus;

