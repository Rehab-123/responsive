import logo from "../assets/Container.svg";
import { LuMenu } from "react-icons/lu";
let linkStyle = "hover:text-[#4F39F6] transition cursor-pointer";

export default function Header() {
  return (
    <div className="w-full flex justify-center border-b-2 border-[#E2E8F0]">
      <div className="container w-300 py-4 px-4 lg:px-0 flex justify-between font-jakarta items-center">
        <div className="flex gap-2 items-center">
          <img src={logo} alt="Logo" />
          <h1 className="font-bold text-[20px] leading-7 text-[#0F172B]">
            SkillUp <span className="text-[#4F39F6]">Academy</span>
          </h1>
        </div>
        <nav className="hidden lg:flex gap-7  font-semibold text-[14px] leading-5">
          <a className={linkStyle}>Home</a>
          <a className={linkStyle}>Courses</a>
          <a className={linkStyle}>Instructors</a>
          <a className={linkStyle}>About</a>
          <a className={linkStyle}>Contact</a>
        </nav>
        <button className="py-2.5 px-5 bg-[#4F39F6] rounded-[10px] font-semibold text-[14px] leading-5 text-white hidden lg:flex justify-center">
          Explore Courses
        </button>
        <LuMenu className="flex lg:hidden" />
      </div>
    </div>
  );
}
