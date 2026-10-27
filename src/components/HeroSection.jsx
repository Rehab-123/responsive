import { TiStarFullOutline } from "react-icons/ti";
import img from "../assets/img.jpg";
import icon from "../assets/icon.svg";
import { FaArrowRightLong } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <div className="w-full justify-center">
      <div className="container font-jakarta flex flex-col lg:flex-row justify-between items-center py-16 px-4 lg:py-24 lg:px-8">
        <div className="w-136.25 max-w-full h-full flex flex-col items-start">
          <div className="border-2 border-[#E0E7FF] bg-[#EEF2FF] mb-6 rounded-[15px] flex gap-2 items-center py-1.5 px-3">
            <TiStarFullOutline className="text-[#615FFF]" />
            <h4 className="font-bold text-[12px] leading-4 text-[#4F39F6]">
              Trusted by 700+ students
            </h4>
          </div>
          <h1 className="font-bold text-[40px] lg:text-[52px] leading-[44.8px] lg:leading-[58.24px] mb-5 tracking-[-1.3px] text-[#0F172B]">
            Learn Skills That Move Your Career Forward
          </h1>
          <p className="text-[18px] mb-8 leading-[29.3px] text-[#62748E]">
            Practical technology and business courses delivered by experienced
            instructors and designed around real-world projects.
          </p>
          <div className="flex flex-col lg:flex-row mb-16.25 gap-3">
            <button className="py-3.25 px-6 flex items-center justify-center gap-2 font-semibold text-[16px] leading-6 mb-3 lg:mb-0 bg-[#4F39F6] rounded-[10px] text-white">
              Explore Courses
              <FaArrowRightLong />
            </button>
            <button className="w-49.5 h-12.5 b font-semibold text-[16px] border-2 border-[#C6D2FF] leading-6 bg-white rounded-[10px] text-[#4F39F6]">
              Meet Our Instructors
            </button>
          </div>
          <div className="flex gap-8 mb-12 lg:mb-0">
            <div>
              <h1 className="font-extrabold text-[24px] leading-8 text-[#0F172B]">
                20+
              </h1>
              <p className="text-[#62748E] text-[12px] leading-4">
                Practical Courses
              </p>
            </div>
            <div>
              <h1 className="font-extrabold text-[24px] leading-8 text-[#0F172B]">
                10+
              </h1>
              <p className="text-[#62748E] text-[12px] leading-4">
                Expert Instructors
              </p>
            </div>
            <div>
              <h1 className="font-extrabold text-[24px] leading-8 text-[#0F172B]">
                700+
              </h1>
              <p className="text-[#62748E] text-[12px] leading-4">
                Students Enrolled
              </p>
            </div>
          </div>
        </div>
        <div className="w-[544.01px] max-w-full py-8.25 relative">
          <img src={img} className="w-full rounded-2xl" />
          <div className="w-63 flex gap-2 px-4 py-4 bg-white rounded-[14px] border-2 border-[#F1F5F9] absolute bottom-3 -left-4.5">
            <img src={icon} className="w-10" />
            <div className="flex flex-col">
              <h5 className="font-bold text-[#0F172B] text-[14px] leading-5">
                Project-Based Learning
              </h5>
              <p className="text-[#90A1B9] text-[12px] leading-4">
                Build real things from day one
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
