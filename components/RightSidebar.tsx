
import { FaFacebookSquare } from "react-icons/fa";
import {  FaInstagram, FaTwitter } from "react-icons/fa6";

const RightSidebar = () => {
  return (
    <div className="fixed top-0 right-0 w-[80px] h-full  bg-black/20 hidden md:flex flex-col items-center justify-center  space-y-6">
      <a href="#" className="text-white w-[23.89px] mb-4  h-[19.47px]"><FaTwitter size={24} /></a>
      <a href="#" className="text-white w-[23.89px] pb-6 h-[19.47px]"><FaInstagram size={24} /></a>
      <a href="#" className="text-white w-[23.89px] pt-4 h-[19.47px]"><FaFacebookSquare size={24} /></a>
    </div>
  );
};

export default RightSidebar;
