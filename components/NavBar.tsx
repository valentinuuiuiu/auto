
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion'
import { slideInFromRight } from "@/utils/motion";

const Navbar = () => {
  return (
    <nav className="flex flex-col max-container padding-container relative z-30 py-2 ml-0 ">
        <div className="flex justify-center">
            <ul className="hidden h-full gap-12 lg:flex">{NAV_LINKS.map((link) =>(
                <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5  transition-all hover:font-bold">{link.label}</Link>
            ))}</ul>
           
        </div>
        <div className="flex justify-left">
        
        </div>
        
     
    </nav>
  );
};

export default Navbar;
