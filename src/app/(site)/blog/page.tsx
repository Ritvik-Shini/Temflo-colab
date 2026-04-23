import React from "react";
import BlogList from "@/components/Blog/BlogList";
import Link from "next/link";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import TicketSection from "@/components/Home/TicketSection";
export const metadata: Metadata = {
  title: "Project | Temflo",
};

const BlogPage = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/Project", text: "Project" },
    ];
    return (
        <>
            <HeroSub
                title="Welcome to Our Project"
                description="Each of our project is distinguishable, every facility different, and each client unique. Through these projects, we have developed a strong understanding of the procedures and strategies to position our project teams and clients for success."
                breadcrumbLinks={breadcrumbLinks}
            />
            <div className="container mx-auto py-10 flex flex-wrap justify-center gap-4">
  {/* Link to the specialized monitoring solutions page */}
  <Link href="/display-monitoring-solutions">
    <button className="border-2 border-gray-200 text-gray-500 px-6 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all active:scale-95">
      Display & Monitoring Solutions.
    </button>
  </Link>

  {/* Category Filter: Digital Museums */}
  <Link href="/digital-museum">
  <button className="border-2 border-gray-200 text-gray-500 px-6 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all active:scale-95">
    DIGITAL MUSEUMS
  </button>
  </Link>

  {/* Category Filter: Light and Sound Show */}
  <Link href="/light-sound-show">
  <button className="border-2 border-gray-200 text-gray-500 px-6 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all active:scale-95">
    LIGHT AND SOUND SHOW
  </button>
  </Link>
 
  {/* Category Filter: Control Command Center  */}
  <Link href="/control-command-center">
  <button className="border-2 border-gray-200 text-gray-500 px-6 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all active:scale-95">
   Control Command Center
  </button>
   </Link>

  {/* Category Filter: Emergency Warning System */}
  <Link href="/emergency-warning-system">
  <button className="border-2 border-gray-200 text-gray-500 px-6 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all active:scale-95">
   Emergency warning system
  </button>
  </Link>

 {/* Category Filter: workspace Solution */}
    <Link href="/workspace-solution">
  <button className="border-2 border-gray-200 text-gray-500 px-6 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all active:scale-95">
   workspace solution
  </button>
  </Link>

   {/* Category Filter: Energy Portfolio Management */}
    <Link href="/energy-portfolio-management">
  <button className="border-2 border-gray-200 text-gray-500 px-6 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all active:scale-95">
   Energy Portfolio management.
  </button>
  </Link>

   {/* Category Filter: Control and instrumentation */}
    <Link href="/control-and-instrumentation">
  <button className="border-2 border-gray-200 text-gray-500 px-6 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all active:scale-95">
   Control and instrumentation
  </button>
  </Link>


 {/* Category Filter: PLC SCADA DCS Based Automation*/}
    <Link href="/plc-scada-dcs-based-automation">
  <button className="border-2 border-gray-200 text-gray-500 px-6 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all active:scale-95">
   PLC SCADA /DCS BASED AUTOMATION
  </button>
  </Link>

{/* Category Filter: City beautification*/}
    <Link href="/city-beautification">
  <button className="border-2 border-gray-200 text-gray-500 px-6 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all active:scale-95">
   City beautification
  </button>
  </Link>

</div>
            <BlogList />
            <TicketSection/>
        </>
    );
};

export default BlogPage;