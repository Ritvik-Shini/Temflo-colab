"use client";

import React, { useState } from "react";


export default function CareersPage() {
  return (
    <main >
        <br></br><br></br><br></br><br></br>
      <div className="container mx-auto py-16 px-4">
       
        {/* Hero Section */}
        <div className="mb-16 text-left">
          <h1 className="text-5xl font-bold text-primary mb-4">
            Welcome to Our Career Page
          </h1>
          <p className="text-xl text-SlateBlueText max-w ">
          Welcome to our Career Page, the gateway to exciting opportunities that could shape your professional journey. At TEMFLO, we believe that a fulfilling career is built on passion, innovation, and collaboration, and this ethos permeates everything we do. As you navigate through this page, you'll discover a spectrum of roles - from cutting-edge technical positions to creative roles that breathe life into our brand.We take pride in our commitment to employee growth, offering mentorship, workshops, and resources that fuel your advancement. As you browse current openings, envision the meaningful projects you could contribute to and the relationships you could cultivate. Join us on this enriching expedition towards innovation. Your future career starts right here, at the intersection of your aspirations and our shared vision.
          </p>
        </div>

        {/* Jobs List */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          <div className="p-8 border rounded-xl hover:border-purple-500 transition-all shadow-sm bg-gray-50">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Software Engineer</h3>
                <p className="text-gray-500">Full-time • Remote / Noida</p>
              </div>
              <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700">
                Apply
              </button>
            </div>
          </div>

          <div className="p-8 border rounded-xl hover:border-purple-500 transition-all shadow-sm bg-gray-50">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Project Manager</h3>
                <p className="text-gray-500">Full-time • On-site</p>
              </div>
              <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}