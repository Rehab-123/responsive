import logo from "../assets/Container.svg";
import { CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="w-full bg-[#0F172B] flex justify-center">
      <div className="container w-300 max-w-full py-14 px-8 font-jakarta">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex gap-2 items-center mb-3">
              <img src={logo} alt="Logo" />
              <h1 className="font-bold text-[18px] leading-7 text-white">
                SkillUp Academy
              </h1>
            </div>
            <p className="text-[14px] leading-[22.75px] text-[#90A1B9] mb-5">
              Practical technology and business courses built around real-world
              projects, delivered by experienced instructors.
            </p>
            <div className="flex gap-2.5">
                <div className="bg-[#1D293D] w-8 h-8 rounded-full text-[#90A1B9] flex items-center justify-center">
                    <CiTwitter className="text-[20px]"/>
                </div>
                <div className="bg-[#1D293D] w-8 h-8 rounded-full text-[#90A1B9] flex items-center justify-center">
                    <SlSocialFacebook  className="text-[20px]"/>
                </div>
                <div className="bg-[#1D293D] w-8 h-8 rounded-full text-[#90A1B9] flex items-center justify-center">
                    <IoLogoInstagram  className="text-[20px]"/>
                </div>
                <div className="bg-[#1D293D] w-8 h-8 rounded-full text-[#90A1B9] flex items-center justify-center">
                    <AiOutlineYoutube  className="text-[20px]"/>
                </div>
            </div>
          </div>
          <div>
            <h6 className="font-bold text-[12px] leading-4 tracking-[1.2px] uppercase text-white mb-5.75">Quick Links</h6>
            <nav className="font-medium text-[14px] leading-5 text-[#90A1B9] flex flex-col gap-3.75">
                <a>Home</a>
                <a>Courses</a>
                <a>Instructors</a>
                <a>About Us</a>
                <a>Contact</a>
            </nav>
          </div>
          <div>
            <h6 className="font-bold text-[12px] leading-4 tracking-[1.2px] uppercase text-white mb-5.75">Categories</h6>
            <div className="font-medium text-[14px] leading-5 text-[#90A1B9] flex flex-col gap-3.75">
                <p>Frontend</p>
                <p>WordPress</p>
                <p>Backend</p>
                <p>Leadership</p>
                <p>Entrepreneurship</p>
            </div>
          </div>
          <div>
            <h6 className="font-bold text-[12px] leading-4 tracking-[1.2px] uppercase text-white mb-5.75">Contact</h6>
            <div className="flex text-[#90A1B9] items-center gap-2 mb-3">
                <MdOutlineEmail />
                <p className="text-[14px] leading-5">info@skillupacademy.com</p>
            </div>
                <p className="text-[14px] leading-5 text-[#90A1B9]">Available Sun - Thu, 9am - 5pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}
