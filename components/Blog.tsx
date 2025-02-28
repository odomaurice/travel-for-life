import Image from "next/image";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="bg-black font-header md:ml-[82px] text-white  md:p-10">
      <h1 className="text-4xl w-[290px] h-[99px] md:text-[66px] md:px-0 px-6 text-[36px] leading-[99px] font-bold mb-6">
        Our blog
      </h1>

      {/* 1st Row */}

      <div className="flex flex-col mt-8 md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
        {/* Left: Image */}
        <div className="rounded-3xl overflow-hidden">
          <Image
            src="/feature-3.png" // Replace with actual image path
            alt="Adventure Woman"
            width={500}
            height={300}
            className="object-cover md:w-[551px] w-[90%] mx-auto rounded-3xl"
          />
        </div>

        {/* Right: Text Section */}
        <div className="max-w-md">
          <h2 className="md:text-[36px] text-[28px] font-header leading-[40px] text-start md:w-[287px] md:h-[80px] px-6 font-extrabold">
            Adventure woman
          </h2>
          <div className="md:w-[434px] w-[90%] mx-auto md:h-[6px] h-[4px] font-header rounded-full bg-[#FF5C00] md:my-2 mt-2 mb-4"></div>
          <p className="md:text-[22px] text-[18px] md:inline-block font-header text-start md:leading-[33px] leading-[28px] font-medium md:w-[310px] px-6  w-[100%] h-[99px]">
            In row boat taking photo on smartphone of beautiful fjord lake for
            social media. {/* Floating Arrow Button */}
          </p>

          {/* Floating Arrow Button */}
          <button className=" ml-6 md:inline-block mt-2 md:size-[95px] size-[70px]  bg-[#FF5C00]  rounded-full shadow-lg hover:bg-orange-600 transition">
            <ArrowUpRight
              size={24}
              className="text-white size-[50px] mx-auto"
            />
          </button>
        </div>
      </div>

      {/* 2nd Row */}

      <div className="flex flex-col mt-16 md:flex-row  items-center space-y-6 md:space-y-0 md:space-x-10">
        {/* Right: Text Section */}
        <div className="max-w-md">
          <h2 className="md:text-[36px] text-[28px] font-header text-start px-6 leading-[40px] md:w-[287px] h-[40px] font-extrabold">
            5 Lakes
          </h2>
          <div className="md:w-[434px] w-[90%] mx-auto h-[6px] font-header rounded-full bg-[#FF5C00] md:my-2 mt-2 mb-4"></div>
          <p className="md:text-[22px] text-[18px] md:inline-block font-header md:leading-[33px] leading-[28px] font-medium md:w-[318px] px-6 w-full h-[165px]">
            Located in Cumbria, United Kingdom, Lakes is home to an impressive
            selection of attractions and experiences, making it well worth a
            visit. {/* Floating Arrow Button */}
          </p>

          {/* Floating Arrow Button */}
          <button className="float-right mr-6 md:hidden mt-2 md:size-[95px] size-[70px] mb-12  bg-[#FF5C00]  rounded-full shadow-lg hover:bg-orange-600 transition">
            <ArrowUpLeft
              size={24}
              className="text-white size-[50px]  mx-auto"
            />
          </button>
          <button className=" ml-6 md:inline-block hidden mt-2 md:size-[95px] size-[70px]  bg-[#FF5C00]  rounded-full shadow-lg hover:bg-orange-600 transition">
            <ArrowUpRight
              size={24}
              className="text-white size-[50px] mx-auto"
            />
          </button>
        </div>
        {/* Left: Image */}
        <div className="rounded-3xl overflow-hidden">
          <Image
            src="/feature-1.png" // Replace with actual image path
            alt="Lake"
            width={500}
            height={300}
            className="object-cover md:w-[551px] w-[90%] mx-auto rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
