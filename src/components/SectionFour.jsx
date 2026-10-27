import icon0 from "../assets/Icon0.svg";
import icon1 from "../assets/Icon1.svg";
import icon2 from "../assets/Icon2.svg";
import icon3 from "../assets/Icon3.svg";
let gridStyle = "bg-white flex flex-col items-center p-6 border border-[#E2E8F0] rounded-[14px] shadow shadow-[#0000001A]";

export default function SectionFour() {
  return (
    <div className="w-full flex justify-center bg-[#F7F9FC]">
      <div className="container w-300 max-w-full py-16 lg:py-20 px-4 lg:px-8 font-jakarta flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3">
          <h1 className="font-bold text-[38px] leading-12 text-[#0F172B]">
            Why Learn With Us
          </h1>
          <p className="text-[16px] leading-6.5 text-[#62748E] text-center">
            Everything we build is designed around one goal — helping you get
            results you can use.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className={gridStyle}>
            <div className="w-12 h-12 bg-[#EEF2FF] flex justify-center rounded-[14px] mb-4">
              <img src={icon0} className="w-5.5" />
            </div>
            <h4 className="font-bold text-[16px] leading-6 text-[#0F172B] mb-2">
              Practical Projects
            </h4>
            <p className="text-[14px] leading-5.75 text-[#62748E] text-center">
              Every course includes real-world projects you can add directly to
              your portfolio.
            </p>
          </div>
          <div className={gridStyle}>
            <div className="w-12 h-12 bg-[#EEF2FF] flex justify-center rounded-[14px] mb-4">
              <img src={icon1} className="w-5.5" />
            </div>
            <h4 className="font-bold text-[16px] leading-6 text-[#0F172B] mb-2">
              Expert Instructors
            </h4>
            <p className="text-[14px] leading-5.75 text-[#62748E] text-center">
             Learn from professionals with years of industry and teaching experience.
            </p>
          </div>
          <div className={gridStyle}>
            <div className="w-12 h-12 bg-[#EEF2FF] flex justify-center rounded-[14px] mb-4">
              <img src={icon2} className="w-5.5" />
            </div>
            <h4 className="font-bold text-[16px] leading-6 text-[#0F172B] mb-2">
              Career-Focused Content
            </h4>
            <p className="text-[14px] leading-5.75 text-[#62748E] text-center">
             Curriculum designed around the skills that employers and clients actually need.
            </p>
          </div>
          <div className={gridStyle}>
            <div className="w-12 h-12 bg-[#EEF2FF] flex justify-center rounded-[14px] mb-4">
              <img src={icon3} className="w-5.5" />
            </div>
            <h4 className="font-bold text-[16px] leading-6 text-[#0F172B] mb-2">
              Flexible Learning
            </h4>
            <p className="text-[14px] leading-5.75 text-[#62748E] text-center">
             Study at your own pace with structured sessions and clear learning objectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
