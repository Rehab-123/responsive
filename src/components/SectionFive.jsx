import { PiGreaterThanLight } from "react-icons/pi";
import ahmed from "../assets/ahmed.jpg";
import sara from "../assets/sara.jpg";
import omar from "../assets/omar.jpg";
import { IoBookOutline } from "react-icons/io5";
import { PiMedalThin } from "react-icons/pi";

export default function SectionFive() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full lg:w-300 container py-16 lg:py-20 px-4 lg:px-8 font-jakarta">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 mb-10">
          <h2 className="font-bold text-[30px] lg:text-[38px] leading-12 text-[#0F172B]">
            Learn From Experienced Instructors
          </h2>
          <button className="w-full lg:w-44.25 flex items-center justify-center gap-1 font-semibold text-[14px] leading-5 text-[#4F39F6] py-2.5 px-5 bg-white border rounded-[10px] border-[#C6D2FF]">
            All Instructors <PiGreaterThanLight />
          </button>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <div className="bg-[#EEF2FF] h-47 pt-8 pb-5 flex flex-col items-center">
              <img
                src={ahmed}
                className="w-20 h-20 rounded-full border-2 border-white mb-3"
              />
              <h4 className="font-bold text-[16px] leading-6 text-[#0F172B]">
                Ahmed Mohamed
              </h4>
              <p className="font-semibold text-[14px] leading-5 text-[#4F39F6]">
                WordPress Developer & Instructor
              </p>
            </div>
            <div className="p-6 ">
              <p className="text-[14px] text-[#62748E] leading-5.75 mb-4">
                Ahmed is a WordPress developer and instructor with seven years
                of experience building dynamic websites and teaching practical
                web development.
              </p>
              <div className="flex gap-2 mb-4">
                <div className="font-medium text-[12px] leading-4 text-[#45556C] bg-[#F1F5F9] border border-[#E2E8F0] rounded-lg px-2.5 py-0.5">
                  WordPress
                </div>
                <div className="font-medium text-[12px] leading-4 text-[#45556C] bg-[#F1F5F9] border border-[#E2E8F0] rounded-lg px-2.5 py-0.5">
                  Elementor
                </div>
                <div className="font-medium text-[12px] leading-4 text-[#45556C] bg-[#F1F5F9] border border-[#E2E8F0] rounded-lg px-2.5 py-0.5">
                  ACF
                </div>
              </div>
              <div className="flex justify-between mb-5">
                <div className="flex text-[#90A1B9] text-[12px] leading-4 gap-1.5 items-center">
                  <IoBookOutline />
                  <h6>3 courses</h6>
                </div>
                <div className="flex text-[#90A1B9] text-[12px] leading-4 gap-1.5 items-center">
                  <PiMedalThin />
                  <h6>7 yrs exp.</h6>
                </div>
              </div>
              <button className="w-full flex justify-center items-center font-semibold text-[14px] leading-5 text-[#4F39F6] py-2.5 px-5 bg-white border rounded-[10px] border-[#C6D2FF]">
                View Profile
              </button>
            </div>
          </div>
          <div>
            <div className="bg-[#EEF2FF] h-47 pt-8 pb-5 flex flex-col items-center">
              <img
                src={sara}
                className="w-20 h-20 rounded-full border-2 border-white mb-3"
              />
              <h4 className="font-bold text-[16px] leading-6 text-[#0F172B]">
                Sara Ali
              </h4>
              <p className="font-semibold text-[14px] leading-5 text-[#4F39F6]">
                Senior Frontend Developer
              </p>
            </div>
            <div className="p-6 ">
              <p className="text-[14px] text-[#62748E] leading-5.75 mb-4">
                Sara is a senior frontend developer with six years of experience
                in modern web technologies. She specializes in building
                performant.
              </p>
              <div className="flex gap-2 mb-4">
                <div className="font-medium text-[12px] leading-4 text-[#45556C] bg-[#F1F5F9] border border-[#E2E8F0] rounded-lg px-2.5 py-0.5">
                  HTML
                </div>
                <div className="font-medium text-[12px] leading-4 text-[#45556C] bg-[#F1F5F9] border border-[#E2E8F0] rounded-lg px-2.5 py-0.5">
                  CSS
                </div>
                <div className="font-medium text-[12px] leading-4 text-[#45556C] bg-[#F1F5F9] border border-[#E2E8F0] rounded-lg px-2.5 py-0.5">
                  JavaScript
                </div>
                <div className="font-medium text-[12px] leading-4 text-[#45556C] bg-[#F1F5F9] border border-[#E2E8F0] rounded-lg px-2.5 py-0.5">
                  React
                </div>
              </div>
              <div className="flex justify-between mb-5">
                <div className="flex text-[#90A1B9] text-[12px] leading-4 gap-1.5 items-center">
                  <IoBookOutline />
                  <h6>2 courses</h6>
                </div>
                <div className="flex text-[#90A1B9] text-[12px] leading-4 gap-1.5 items-center">
                  <PiMedalThin />
                  <h6>6 yrs exp.</h6>
                </div>
              </div>
              <button className="w-full flex justify-center items-center font-semibold text-[14px] leading-5 text-[#4F39F6] py-2.5 px-5 bg-white border rounded-[10px] border-[#C6D2FF]">
                View Profile
              </button>
            </div>
          </div>
          <div>
            <div className="bg-[#EEF2FF] h-47 pt-8 pb-5 flex flex-col items-center">
              <img
                src={omar}
                className="w-20 h-20 rounded-full border-2 border-white mb-3"
              />
              <h4 className="font-bold text-[16px] leading-6 text-[#0F172B]">
                Omar Hassan
              </h4>
              <p className="font-semibold text-[14px] leading-5 text-[#4F39F6]">
                Senior Frontend Developer
              </p>
            </div>
            <div className="p-6 ">
              <p className="text-[14px] text-[#62748E] leading-5.75 mb-4">
                Omar is a certified business and leadership trainer with nine
                years of experience working with teams and organizations across
                the region.
              </p>
              <div className="flex gap-2 mb-4">
                <div className="font-medium text-[12px] leading-4 text-[#45556C] bg-[#F1F5F9] border border-[#E2E8F0] rounded-lg px-2.5 py-0.5">
                  Leadership
                </div>
                <div className="font-medium text-[12px] leading-4 text-[#45556C] bg-[#F1F5F9] border border-[#E2E8F0] rounded-lg px-2.5 py-0.5">
                  Communication
                </div>
                <div className="font-medium text-[12px] leading-4 text-[#45556C] bg-[#F1F5F9] border border-[#E2E8F0] rounded-lg px-2.5 py-0.5">
                  Entrepreneurship
                </div>
              </div>
              <div className="flex justify-between mb-5">
                <div className="flex text-[#90A1B9] text-[12px] leading-4 gap-1.5 items-center">
                  <IoBookOutline />
                  <h6>2 courses</h6>
                </div>
                <div className="flex text-[#90A1B9] text-[12px] leading-4 gap-1.5 items-center">
                  <PiMedalThin />
                  <h6>9 yrs exp.</h6>
                </div>
              </div>
              <button className="w-full flex justify-center items-center font-semibold text-[14px] leading-5 text-[#4F39F6] py-2.5 px-5 bg-white border rounded-[10px] border-[#C6D2FF]">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
