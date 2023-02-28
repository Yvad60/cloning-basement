import Image from "next/image";
import Link from "next/link";
import CenterContent from "../wrappers/CenterContent";
import logo from "/public/assets/images/logo.svg";

export default function Navbar() {
  const navLinks = ["Services", "Results", "About", "Insights", "Careers"];

  return (
    <header className="bg-primary-dark text-white py-[7px]">
      <CenterContent>
        <div className="flex justify-between items-center">
          <Image src={logo} alt="Brainhub logo" />
          <nav className="flex gap-10 leading-[20px] font-bold items-center">
            {navLinks.map((navLink, index) => (
              <Link key={index} href="">
                {navLink}
              </Link>
            ))}
            <button className="border-2 border-current py-[2px] px-[32px] h-[44px]">
              CONTACT US
            </button>
          </nav>
        </div>
      </CenterContent>
    </header>
  );
}
