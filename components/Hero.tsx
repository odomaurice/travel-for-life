"use client";
import { useState, useEffect } from "react";

import { FaPlayCircle } from "react-icons/fa";
import { images } from "@/constants/index";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

interface ImageProps {
  src: string;
  width?: number;
}

const Hero: React.FC<{ image?: ImageProps }> = ({ image }) => {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth >= 768); // Tailwind's `md` breakpoint is 768px
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex font-header flex-col bg-transparent overflow-hidden  px-4 text-white text-start mt-[80px]  md:mt-[190px] space-y-5">
      {/* Heading */}
      <div className="">
        <h2 className="md:text-[66px] text-[40px] md:ml-[82px] md:leading-[99px] font-extrabold">
          Travel for Life
        </h2>
        <p className="md:text-[18px] text-[16px] leading-[27px] md:w-[275px] mt-[20px] md:ml-[81px] font-normal">
          Book your desired travel place
        </p>
        <div className="flex md:space-x-6">
          <button className="mt-[50px]  bg-[#FF5C00] md:ml-[82px]  w-full md:w-[179px] h-[43px] px-4 py-2 rounded-full font-extrabold text-[16px] leading-[24px] hover:bg-black hover:text-white transition">
            Book a trip
          </button>
          <button className="mt-[50px] hidden md:block border  border-white w-full md:w-[179px] h-[43px] px-4 py-2 rounded-full font-extrabold text-[15px] hover:bg-black hover:border-transparent hover:text-white transition">
            Learn more
          </button>
          <div className="mt-[50px]   w-full md:w-[179px] h-[43px] px-4  rounded-full font-extrabold text-[15px] cursor-pointer hover:border-transparent hover:text-white transition">
            <FaPlayCircle className="inline size-[41px] text-white mr-2" />
            Watch Intro
          </div>
        </div>
      </div>

      <div className="relative w-full h-screen  flex flex-col justify-between text-white">
        {/* Numbered Progress Bar */}
        <div className="absolute top-8 left-36 md:ml-[82px] md:mt-[40px] mt-[80px] transform -translate-x-1/2 flex items-center space-x-6 text-white text-sm">
          <span className="opacity-80">01</span>
          <div className="w-32 border-b-2 border-white"></div>
          <span className="opacity-80">02</span>

          <span className="opacity-80">03</span>

          <span className="opacity-80">04</span>
        </div>

        <h1 className="relative md:hidden mx-auto top-64 text-[30px] md:text-[68px]  md:ml-[82px] font-bold md:leading-[77px]">
          <button className="mx-auto md:size-[94px]  size-[70px] bg-[#FF5C00] text-white p-4 rounded-full shadow-xl hover:bg-orange-500 transition">
            <ArrowDown className="md:size-[50px] size-[40px]" size={24} />
          </button>
        </h1>

        {/* Text Section at Bottom Left */}
        <div className="absolute md:bottom-16 bottom-20    flex md:flex-row flex-col justify-between  md:w-[1030px] ">
          <h1 className="text-[30px] md:text-[68px]  md:ml-[82px] font-bold md:leading-[77px]">
            Explore top <br className="hidden md:block" /> destination
          </h1>
          <div className="flex flex-col md:ml-[50px] justify-between md:w-[506px]">
            <p className="text-[18px] leading-[27px]  font-normal  text-gray-200 mt-4">
              Explore your suitable and dream places around the world. Here you
              can find your right destination.
            </p>

            {/* Learn More Button */}
            <button className="mt-6 px-6 py-3 md:w-[271px] w-full h-[53px] font-bold border border-white text-white text-[16px] leading-[24px] rounded-full hover:bg-white hover:text-black transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="relative flex  md:flex-row  flex-col w-full justify-between  md:justify-center md:space-x-6">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <Image
              src={image?.src || "/default.jpg"}
              alt={`Image ${index + 1}`}
              width={300}
              height={300}
              className="rounded-2xl md:mt-16 mt-8 object-cover h-[413px] w-full md:w-auto"
              style={
                isMd ? { width: image.width ? `${image.width}px` : "auto" } : {}
              }
            />

            {/* Floating Arrow Button (on middle image) */}
            {index === 1 && (
              <button className="absolute bottom-8 right-8 bg-[#FF5C00] size-[94px] text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition">
                <ArrowUpRight className="size-[55px]" size={50} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
