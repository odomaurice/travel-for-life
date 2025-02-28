import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import React from "react";

import Blog from "@/components/Blog";

const Page = () => {
  return (
    <div>
      <div className="relative h-full flex flex-col ">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Ensure Header is above the overlay */}
        <div className="sticky z-50 ">
          <Header />
        </div>

        {/* Ensure Hero is also above the overlay */}
        <div className="md:relative md:w-full overflow-hidden z-10    mt-20">
          <Hero />
        </div>

        <div className="bg-black"></div>
      </div>

      <div className="bg-black rounded-md  text-white">
        <Feature />
        <Blog />
        <hr className="text-white md:w-[1200px] w-full md:my-16 my-12 " />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
