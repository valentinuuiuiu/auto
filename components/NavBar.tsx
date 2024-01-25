
import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion'
import { slideInFromRight } from "@/utils/motion";

const Navbar = () => {
  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417]
    z-50 px-10 backdrop-blur-md">
     <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="/about-me" className="h-auto flex flex-row items-center">
          <Image 
           src='/logo.png'
           alt="logo"
           width={220}
           height={90}
           className="cursor-pointer hover:animate-slowspin rounded-full"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Auto Locksmith
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20 " >
          <div className="flex items-center w-full h-auto justify-between border border-[#7042f861] bg-[#0300145e]
          mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="/about-me" className="cursor-poiner ">About Us</a>
            <a href="skills" className="cursor-poiner ">Skills</a>
            <a href="/projects" className="cursor-poiner ">Projects</a>
          </div>
        </div>
        <div className="flex flex-row gap-5">
        <div className="flex flex-row gap-5">
  {Socials.map((social) => {
    return (
      <Image 
        src={social.src}
        alt={social.name}
        key={social.name}
        width={40}
        height={40}
      />
    );
  })}
</div>

        </div>
     </div>
    </nav>
  );
};

export default Navbar;
