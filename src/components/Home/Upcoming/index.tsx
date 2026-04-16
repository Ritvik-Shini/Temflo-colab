import React from "react";
import BoxSlider from "../../SharedComponent/BoxSlider";
import Image from "next/image";
import Link from "next/link";
import { conferences } from "../../../app/api/data";

const Upcoming = () => {
  return (
    <>
      <section className="upcoming dark:bg-darkmode">
        <div className="max-w-1068 m-auto">
          <div className="container">
            <h2 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className="text-center pb-10">Our Major Clients</h2>
            <div>
              
             
              <div>
                <div>
                  <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <BoxSlider />
             
                    
                  
                 </div>
                
                  </div>
                

               
                
                </div>
              </div>
            </div>
          </div>
      
      </section>
    </>
  );
};

export default Upcoming;
