import { MdCode } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { AiOutlineTeam } from "react-icons/ai";
import { GiElectric } from "react-icons/gi";
import { LuBuilding2 } from "react-icons/lu";

export default function SectionTwo() {
  return (
    <div className="w-ful bg-[#F8FAFC] border-t-2 border-b-2 border-[#F1F5F9] flex justify-center">
        <div className="container w-300 py-12 px-4 lg:px-49 items-center font-jakarta">
            <h1 className="text-center font-bold text-[11px] mb-6 leading-[16.5px] tracking-[1.1px] text-[#90A1B9] uppercase">Browse by Category</h1>
            <div className="flex items-center justify-center gap-3 flex-wrap">
            <button className="py-2.5 px-4 text-[#7F22FE] border border-[#EDE9FE] cursor-pointer rounded-[14px] bg-[#F5F3FF] flex gap-2 items-center">
                <MdCode className="w-3.75 "/>
                <p className="font-semibold text-[14px] leading-5">Frontend</p>
                <h6 className="text-[12px] leading-4">2</h6>
            </button>
            <button className="py-2.5 px-4 text-[#0084D1] border border-[#DFF2FE] cursor-pointer rounded-[14px] bg-[#F0F9FF] flex gap-2 items-center">
                <CiGlobe className="w-3.75 "/>
                <p className="font-semibold text-[14px] leading-5">WordPress</p>
                <h6 className="text-[12px] leading-4">2</h6>
            </button>
            <button className="py-2.5 px-4 text-[#F54900] border border-[#FFEDD4] cursor-pointer rounded-[14px] bg-[#FFF7ED] flex gap-2 items-center">
                <AiOutlineTeam  className="w-3.75 "/>
                <p className="font-semibold text-[14px] leading-5">Leadership</p>
                <h6 className="text-[12px] leading-4">1</h6>
            </button>
            <button className="py-2.5 px-4 text-[#009966] border border-[#D0FAE5] cursor-pointer rounded-[14px] bg-[#ECFDF5] flex gap-2 items-center">
                <LuBuilding2 className="w-3.75 "/>
                <p className="font-semibold text-[14px] leading-5">Entrepreneurship</p>
                <h6 className="text-[12px] leading-4">1</h6>
            </button>
            <button className="py-2.5 px-4 text-[#4F39F6] border border-[#E0E7FF] cursor-pointer rounded-[14px] bg-[#EEF2FF] flex gap-2 items-center">
                <GiElectric  className="w-3.75"/>
                <p className="font-semibold text-[14px] leading-5">Backend</p>
                <h6 className="text-[12px] leading-4">0</h6>
            </button>
            </div>
        </div>
    </div>
  )
}
