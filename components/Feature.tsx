import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const Feature = () => {
  return (
    <div className="md:mt-36  mt-20 font-header mb-8">
      <h3 className="md:text-[66px] text-[36px] my-8 py-12 font-header font-extrabold md:leading-[99px] text-center">
        Best Trip Package
      </h3>

      {/* 1st Row */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
        {/* Left: Text Content */}
        <div className="bg-[#FF5C00] text-white p-6 md:p-10  rounded-3xl w-[90%] md:w-[439px] h-[321px] relative">
          <h2 className="md:text-[36px] text-[28px] leading-[54px] w-[193px] h-[54px] font-extrabold">
            Singapore
          </h2>
          <p className="mt-2 text-[16px] leading-[24px] md:w-[373px] w-full h-[72px] font-medium">
            A cultural melting pot on a strategic maritime crossroads, Singapore
            is a singular city-state.
          </p>

          {/* Price Button */}
          <button className="mt-6 px-6 w-[179px] h-[43px] py-2 border border-white rounded-full text-lg">
            420$
          </button>

          {/* Floating Arrow Button */}
          <button className="absolute bottom-6 right-6 md:size-[94px] size-[70px] bg-white text-[#FF5C00] p-4 rounded-full shadow-lg hover:bg-gray-200 transition">
            <ArrowUpRight className="md:size-[54px] size-[40px] " size={24} />
          </button>
        </div>

        {/* Right: Image */}
        <div className="rounded-3xl overflow-hidden">
          <Image
            src="/popular-2.jpeg" // Replace with actual image
            alt="Singapore"
            width={500}
            height={300}
            className="object-cover md:w-[551px] w-[90%] mx-auto mt-8 h-[321px] rounded-3xl"
          />
        </div>
      </div>

      {/* 2nd Row */}

      <div className="flex flex-col md:flex-row items-center justify-center mt-16 space-y-6 md:space-y-0 md:space-x-6">
        {/* Left: Text Content */}
        <div className="bg-white text-[#FF5C00] p-6 md:p-10  rounded-3xl md:w-[439px] w-[90%] h-[321px] relative">
          <h2 className="md:text-[36px] text-[28px] leading-[54px] w-[264px] h-[54px] font-extrabold">
            Kuala Lumpur
          </h2>
          <p className="mt-2 text-[16px] leading-[24px] md:w-[373px] w-full h-[48px] font-medium">
            Kuala Lumpur is the capital city of Malaysia. Its tropical climate
            makes it summer all year round. There is verdant plant life
            everywhere
          </p>

          {/* Price Button */}
          <button className="md:mt-12 mt-20 px-6 w-[179px] h-[43px] py-2 border border-[#FF5C00] rounded-full text-lg">
            350$
          </button>

          {/* Floating Arrow Button */}
          <button className="absolute bottom-6 right-6 md:size-[94px] size-[70px] bg-[#FF5C00] text-white p-4 rounded-full shadow-lg hover:bg-orange-500 transition">
            <ArrowUpRight className="md:size-[54px] size-[40px]" size={24} />
          </button>
        </div>

        {/* Right: Image */}
        <div className="rounded-3xl overflow-hidden">
          <Image
            src="/popular-1.png" // Replace with actual image
            alt="Kuala Lumpur"
            width={500}
            height={300}
            className="object-cover md:w-[551px] w-[90%] mx-auto h-[321px] mt-8 rounded-3xl"
          />
        </div>
      </div>
      <button className="mt-16 flex items-center text-center justify-center bg-white px-6 mx-auto  md:w-[271px] w-[90%] h-[53px] py-2 border text-[#FF5C00] font-bold rounded-full text-[16px] leading-[24px]">
        View all
      </button>
    </div>
  );
};

export default Feature;
