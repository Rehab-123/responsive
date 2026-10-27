import { FaArrowRightLong } from "react-icons/fa6";

export default function SectionSix() {
  return (
    <div className="w-full  bg-[#4F39F6] flex justify-center">
        <div className="container flex flex-col items-center py-16 px-4 lg:py-20 font-jakarta">
            <h1 className="font-bold text-[30px] lg:text-[36px] leading-11.25 text-white mb-4">Ready to Start Learning?</h1>
            <p className="w-full lg:w-xl text-center text-[18px] leading-[29.25px] text-[#E0E7FF] mb-8">Explore our available courses and choose the learning path that fits your goals.</p>
            <button className="py-3.5 px-7 bg-white rounded-[10px] font-bold text-[16px] leading-6 text-[#4F39F6] flex items-center gap-2">Browse All Courses
                <FaArrowRightLong />
            </button>
        </div>
    </div>
  )
}
