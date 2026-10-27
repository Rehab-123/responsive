import { PiGreaterThanLight } from "react-icons/pi";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import ahmed from "../assets/ahmed.jpg";
import sara from "../assets/sara.jpg";
import { FiClock } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";

export default function SectionThree() {
  return (
    <div className="w-full flex justify-center">
      <div className="container py-16 lg:py-20 px-4 lg:px-8 font-jakarta">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-10">
          <div className="flex flex-col gap-3 mb-4 lg:mb-0">
            <h1 className="font-bold text-[30px] lg:text-[38px] text-[#0F172B] leading-12">
              Featured Courses
            </h1>
            <p className="text-[16px] leading-6.5 text-[#62748E]">
              Explore practical courses designed to help you build real skills.
            </p>
          </div>
          <button className="w-full lg:w-44.25 flex items-center justify-center gap-1 font-semibold text-[14px] leading-5 text-[#4F39F6] py-2.5 px-5 bg-white border rounded-[10px] border-[#C6D2FF]">
            View All Courses <PiGreaterThanLight />
          </button>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-[#E2E8F0] rounded-[14px]">
            <img src={img1} className="w-full h-44 rounded-t-[14px]" />
            <div className="p-5">
              <div className="flex gap-4 mb-3">
                <div className="font-semibold text-[12px] leading-4 text-[#0069A8] bg-[#DFF2FE] rounded-lg px-2.5 py-0.5">
                  WordPress
                </div>
                <div className="font-semibold text-[12px] leading-4 text-[#008236] bg-[#DCFCE7] rounded-lg px-2.5 py-0.5">
                  Beginner
                </div>
              </div>
              <h2 className="font-bold mb-2 text-[16px] text-[#0F172B] leading-5.5">
                WordPress Website Development
              </h2>
              <p className="text-[14px] text-[#62748E] leading-5.75 mb-4">
                Build complete, professional WordPress websites from scratch.
                Learn installation, theme customization, plugins, and publishing
                a live site.
              </p>
              <div className="flex gap-4 mb-8">
                <div className="flex text-[#90A1B9] text-[12px] leading-4 gap-1.5 items-center">
                  <FiClock />
                  <h6>24 Hours</h6>
                </div>
                <div className="flex text-[#90A1B9] text-[12px] leading-4 gap-1.5 items-center">
                  <IoBookOutline />
                  <h6>8 sessions</h6>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                  <img
                    src={ahmed}
                    className="w-7 h-7 object-cover rounded-full"
                  />
                  <p className="font-medium text-[12px] leading-4 text-[#45556C]">
                    Ahmed Mohamed
                  </p>
                </div>
                <div className="flex gap-2.5 items-center">
                  <h1 className="font-extrabold text-[16px] leading-6 text-[#0F172B]">
                    $120
                  </h1>
                  <button className="font-semibold text-[12px] leading-4 bg-[#4F39F6] rounded-[10px] px-3 py-1.5 text-white">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#E2E8F0] rounded-[14px]">
            <img src={img2} className="w-full h-44 rounded-t-[14px]" />
            <div className="p-5">
              <div className="flex gap-4 mb-3">
                <div className="font-semibold text-[12px] leading-4 text-[#0069A8] bg-[#DFF2FE] rounded-lg px-2.5 py-0.5">
                  WordPress
                </div>
                <div className="font-semibold text-[12px] leading-4 text-[#BB4D00] bg-[#FEF3C6] rounded-lg px-2.5 py-0.5">
                  Intermediate
                </div>
              </div>
              <h2 className="font-bold mb-2 text-[16px] text-[#0F172B] leading-5.5">
                Dynamic Websites with ACF
              </h2>
              <p className="text-[14px] text-[#62748E] leading-5.75 mb-4">
                Master Advanced Custom Fields to create flexible, data-driven
                WordPress sites. Build Custom Post Types, Taxonomies, and
                dynamic Elementor templates.
              </p>
              <div className="flex gap-4 mb-8">
                <div className="flex text-[#90A1B9] text-[12px] leading-4 gap-1.5 items-center">
                  <FiClock />
                  <h6>18 Hours</h6>
                </div>
                <div className="flex text-[#90A1B9] text-[12px] leading-4 gap-1.5 items-center">
                  <IoBookOutline />
                  <h6>6 sessions</h6>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                  <img
                    src={ahmed}
                    className="w-7 h-7 object-cover rounded-full"
                  />
                  <p className="font-medium text-[12px] leading-4 text-[#45556C]">
                    Ahmed Mohamed
                  </p>
                </div>
                <div className="flex gap-2.5 items-center">
                  <h1 className="font-extrabold text-[16px] leading-6 text-[#0F172B]">
                    $100
                  </h1>
                  <button className="font-semibold text-[12px] leading-4 bg-[#4F39F6] rounded-[10px] px-3 py-1.5 text-white">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#E2E8F0] rounded-[14px]">
            <img src={img3} className="w-full h-44 rounded-t-[14px]" />
            <div className="p-5">
              <div className="flex gap-4 mb-3">
                <div className="font-semibold text-[12px] leading-4 text-[#7008E7] bg-[#DFF2FE] rounded-lg px-2.5 py-0.5">
                  Frontend
                </div>
                <div className="font-semibold text-[12px] leading-4 text-[#008236] bg-[#DCFCE7] rounded-lg px-2.5 py-0.5">
                  Beginner
                </div>
              </div>
              <h2 className="font-bold mb-2 text-[16px] text-[#0F172B] leading-5.5">
                Frontend Development Fundamentals
              </h2>
              <p className="text-[14px] text-[#62748E] leading-5.75 mb-4">
                Start your web development journey with HTML, CSS, and
                JavaScript. Build real projects and develop solid foundations
                for modern web work.
              </p>
              <div className="flex gap-4 mb-8">
                <div className="flex text-[#90A1B9] text-[12px] leading-4 gap-1.5 items-center">
                  <FiClock />
                  <h6>30 Hours</h6>
                </div>
                <div className="flex text-[#90A1B9] text-[12px] leading-4 gap-1.5 items-center">
                  <IoBookOutline />
                  <h6>10 sessions</h6>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                  <img
                    src={sara}
                    className="w-7 h-7 object-cover rounded-full"
                  />
                  <p className="font-medium text-[12px] leading-4 text-[#45556C]">
                    Sara Ali
                  </p>
                </div>
                <div className="flex gap-2.5 items-center">
                  <h1 className="font-extrabold text-[16px] leading-6 text-[#0F172B]">
                    $140
                  </h1>
                  <button className="font-semibold text-[12px] leading-4 bg-[#4F39F6] rounded-[10px] px-3 py-1.5 text-white">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
