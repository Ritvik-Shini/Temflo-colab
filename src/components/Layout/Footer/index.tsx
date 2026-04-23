import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: FC = () => {
    return (
        <footer className="bg-secondary">
            <div className="container">
                {/* Top Section - Logo, Navigation, Contact, Social */}
                <div className="grid md:grid-cols-12 gap-8 md:pt-44 pt-16 md:pb-20 pb-12 border-b border-solid border-dark_border">
                    {/* Logo Section */}
                    <div className="md:col-span-3 col-span-1 flex justify-start md:justify-start">
                        <Link href="/">
                            <Image
                                src="/images/logo/TSPL-Logo.png"
                                alt="logo"
                                width={68}
                                height={22}
                                quality={100}
                                className='dark'
                            />
                        </Link>
                    </div>

                    {/* Navigation Links Section */}
                    <div className="md:col-span-3 col-span-12">
                        <h4 className="text-white font-semibold text-lg mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            <li className="text-PaleCerulean text-base font-normal hover:text-ElectricAqua transition-all duration-300">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="text-PaleCerulean text-base font-normal hover:text-ElectricAqua transition-all duration-300">
                                <Link href="/blog">Projects</Link>
                            </li>
                            <li className="text-PaleCerulean text-base font-normal hover:text-ElectricAqua transition-all duration-300">
                                <Link href="/schedules">About</Link>
                            </li>
                            <li className="text-PaleCerulean text-base font-normal hover:text-ElectricAqua transition-all duration-300">
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Get In Touch Section */}
                    <div className="md:col-span-3 col-span-12">
                        <h4 className="text-white font-semibold text-lg mb-4">Get In Touch</h4>
                        <ul className="space-y-2">
                            <li className="text-PaleCerulean text-base font-normal">
                                <span className="text-white">Phone:</span> +91-120-4217441
                            </li>
                            <li className="text-PaleCerulean text-base font-normal">
                                <span className="text-white">Email:</span> info@temflo.co.in
                            </li>
                            <li className="text-PaleCerulean text-base font-normal">
                                <span className="text-white">Website:</span> www.temflo.co.in
                            </li>
                        </ul>
                    </div>

                    {/* Support & Social Section */}
                    <div className="md:col-span-3 col-span-12">
                        <h4 className="text-white font-semibold text-lg mb-4">Support</h4>
                        <ul className="space-y-3">
                            <li className="text-PaleCerulean text-base font-normal hover:text-ElectricAqua transition-all duration-300">
                                <Link href="/">Terms of Use</Link>
                            </li>
                            <li className="text-PaleCerulean text-base font-normal hover:text-ElectricAqua transition-all duration-300">
                                <Link href="/">Privacy Statement</Link>
                            </li>
                            <li className="text-white font-semibold text-lg mt-6 mb-3">Follow Us</li>
                            <li>
                                <ul className="flex items-center gap-4">
                                    <li>
                                        <Link href="/" className="group">
                                            <svg
                                                width="26"
                                                height="27"
                                                fill="white"
                                                viewBox="0 0 26 27"
                                                className="group-hover:fill-ElectricAqua transition-colors"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_7_993)">
                                                    <path d="M23.8293 1.63855H2.14412C1.40159 1.639 0.799656 2.24123 0.799805 2.98405V24.6692C0.800251 25.4118 1.40248 26.0137 2.14531 26.0135H13.8204V16.5873H10.6545V12.8977H13.8204V10.1824C13.8204 7.03366 15.7427 5.31979 18.5516 5.31979C19.8969 5.31979 21.053 5.42007 21.39 5.46485V8.75586H19.4531C17.9249 8.75586 17.629 9.48202 17.629 10.5478V12.8977H21.2829L20.8068 16.5873H17.629V26.0135H23.8293C24.5723 26.0137 25.1747 25.4116 25.1748 24.6686C25.1748 24.6685 25.1748 24.6683 25.1748 24.668V2.98286C25.1745 2.24034 24.5721 1.6384 23.8293 1.63855Z" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_7_993">
                                                        <rect
                                                            width="26"
                                                            height="26"
                                                            fill="white"
                                                            transform="translate(0 0.838745)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="group">
                                            <svg
                                                width="26"
                                                height="27"
                                                viewBox="0 0 26 27"
                                                fill="#fff"
                                                className="group-hover:fill-ElectricAqua transition-colors"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_7_995)">
                                                    <path d="M24.1249 0.838745H1.87514C0.839478 0.838745 0 1.67822 0 2.71388V24.9636C0 25.9993 0.839478 26.8387 1.87514 26.8387H24.1249C25.1605 26.8387 26 25.9993 26 24.9636V2.71388C26 1.67822 25.1605 0.838745 24.1249 0.838745V0.838745ZM18.9357 10.9748C18.9414 11.1027 18.9442 11.2312 18.9442 11.3604C18.9442 15.3033 15.9429 19.85 10.4544 19.8502H10.4546H10.4544C8.76929 19.8502 7.20122 19.3562 5.88071 18.5098C6.11418 18.5374 6.35182 18.5511 6.59244 18.5511C7.99051 18.5511 9.2771 18.0742 10.2985 17.2738C8.99225 17.2496 7.89093 16.3869 7.51086 15.2013C7.69276 15.2362 7.87982 15.2553 8.07164 15.2553C8.34399 15.2553 8.60782 15.2186 8.85855 15.1501C7.49321 14.8768 6.46469 13.6701 6.46469 12.2253C6.46469 12.2118 6.46469 12.1997 6.46509 12.1872C6.86717 12.4107 7.32698 12.5452 7.81654 12.5603C7.01535 12.0257 6.48869 11.1118 6.48869 10.0766C6.48869 9.52988 6.63647 9.0177 6.89276 8.57674C8.36423 10.3822 10.5633 11.5697 13.0432 11.6944C12.9921 11.4758 12.9657 11.2481 12.9657 11.014C12.9657 9.36682 14.3021 8.03044 15.9499 8.03044C16.8082 8.03044 17.5834 8.39325 18.1279 8.97327C18.8077 8.83917 19.446 8.59082 20.0227 8.24904C19.7995 8.9455 19.3266 9.52988 18.7105 9.89943C19.3141 9.82722 19.8894 9.66714 20.424 9.4295C20.0247 10.028 19.5182 10.5536 18.9357 10.9748Z" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_7_995">
                                                        <rect
                                                            width="26"
                                                            height="26"
                                                            fill="white"
                                                            transform="translate(0 0.838745)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="group">
                                            <svg
                                                width="26"
                                                height="28"
                                                viewBox="0 0 26 28"
                                                fill="#fff"
                                                className="group-hover:fill-ElectricAqua transition-colors"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_7_997)">
                                                    <path d="M24.1249 0H1.87514C0.839478 0 0 0.893637 0 1.99611V25.6813C0 26.7838 0.839478 27.6774 1.87514 27.6774H24.1249C25.1605 27.6774 26 26.7838 26 25.6813V1.99611C26 0.893637 25.1605 0 24.1249 0ZM9.22235 20.9202H6.05626V10.7805H9.22235V20.9202ZM7.6394 9.39586H7.61877C6.55634 9.39586 5.8692 8.61731 5.8692 7.64427C5.8692 6.64928 6.57736 5.89226 7.66043 5.89226C8.7435 5.89226 9.41 6.64928 9.43063 7.64427C9.43063 8.61731 8.7435 9.39586 7.6394 9.39586ZM20.6386 20.9202H17.4729V15.4957C17.4729 14.1324 17.0145 13.2027 15.8689 13.2027C14.9944 13.2027 14.4734 13.8298 14.2445 14.4352C14.1608 14.6519 14.1404 14.9547 14.1404 15.2577V20.9202H10.9745C10.9745 20.9202 11.016 11.7317 10.9745 10.7805H14.1404V12.2161C14.5611 11.5252 15.3139 10.5425 16.9937 10.5425C19.0767 10.5425 20.6386 11.9917 20.6386 15.1061V20.9202Z" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_7_997">
                                                        <rect width="26" height="27.6774" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section - Newsletter & Copyright */}
                <div className="grid md:grid-cols-12 gap-8 py-8 md:py-12">
                    {/* Copyright Section */}
                    <div className="md:col-span-6 col-span-12">
                        <p className="text-base font-normal text-PaleCerulean mb-2">
                            © All rights reserved. Made by{" "}
                            <Link
                                href="/"
                                className="hover:text-white transition-colors"
                            >
                                info@TSLP
                            </Link>
                        </p>
                        <p className="text-base font-normal text-PaleCerulean">
                            Distributed by{" "}
                            <Link
                                href="/"
                                className="hover:text-white transition-colors"
                            >
                                Temflo System Pvt. Ltd.
                            </Link>
                        </p>
                    </div>

                    {/* Newsletter Section */}
                    <div className="md:col-span-6 col-span-12">
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-end">
                            <p className="text-base sm:text-lg text-PaleCerulean font-normal whitespace-nowrap">
                                Subscribe Newsletter
                            </p>
                            <form className="newsletter-form w-full sm:w-auto flex rounded-md overflow-hidden">
                                <input
                                    type="email"
                                    placeholder="Email address*"
                                    className="flex-1 sm:flex-none p-3 sm:p-4 text-sm sm:text-base border-0 rounded-l-md outline-0 dark:bg-darkmode dark:text-white"
                                />
                                <button
                                    type="submit"
                                    className="btn btn-1 hover-filled-slide-down bg-primary rounded-r-md"
                                >
                                    <span className="!border-0 !text-white text-sm sm:text-base">Subscribe</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;