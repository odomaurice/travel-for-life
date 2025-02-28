import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black font-header text-white  md:py-12 py-6 ">
      <div className="md:w-[1200px] w-full  flex flex-col  md:flex-row justify-around items-start">
        {/* Left Section */}
        <div className="space-y-4">
          <h2 className="md:text-[60px] text-[32px] md:px-0 px-6 leading-[65px] md:w-[398px] w-full md:h-[130px] font-extrabold">
            How we can help you?
          </h2>
          <div className="md:w-[434px] w-[90%] mx-auto md:h-[6px] h-[4px] bg-[#FF5C00]"></div>
          <h3 className="md:text-[22px] text-[20px] md:text-start text-center leading-[33px]">
            Contact us
          </h3>

          {/* Social Icons */}
          <div className="flex md:justify-start justify-center space-x-4">
            <div className="w-10 h-10  bg-white rounded-full flex items-center justify-center">
              <FaLinkedinIn size={20} className="text-orange-500" />
            </div>
            <div className="w-10 h-10  bg-white rounded-full flex items-center justify-center">
              <FaTwitter size={20} className="text-orange-500" />
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <FaFacebookF size={20} className="text-orange-500" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <div className="md:flex md:justify-between grid grid-cols-2 gap-24 px-6  md:w-[327px] w-[100%] text-[20px] leading-[30px]  h-[191px]  items-center">
            <div className="flex h-[30px]  flex-col ">
              <p className="pb-6">Other Services</p>
              <p>About</p>
            </div>
            <div className="flex h-[30px]  flex-col ">
              <p className="pb-6">Why us</p>
              <p>Contact us</p>
            </div>
          </div>

          {/* Contact Button */}
          <button className="px-6 ml-6 py-3 md:w-[323px]  h-[53px] w-[90%]  bg-white rounded-full text-orange-500 font-bold hover:bg-gray-200 transition">
            Contact
          </button>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="text-gray-400 text-center mt-8">
        © Copyright Travel | <span className="underline">Terms of Use</span>
      </div>
    </footer>
  );
};

export default Footer;
