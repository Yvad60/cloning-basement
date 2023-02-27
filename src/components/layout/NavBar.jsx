import Image from "next/image";
import Link from "next/link";
import CenterContent from "./wrappers/CenterContent";
import adobeLogo from "/public/images/adobe_logo.svg";

export default function Navbar() {
  const navLinks = [
    "Creativity and design",
    "PDF & E-signature",
    "Marketing & Commerce",
    "Help and support",
  ];

  return (
    <header className="py-[22px] shadow-sm">
      <CenterContent>
        <div className="flex text-[14px] justify-between">
          <div className="flex gap-10">
            <Image src={adobeLogo} alt="adobe logo" className="w-[25px]" />
            {navLinks.map((navLink, index) => (
              <Link key={index} href="">
                {navLink}
              </Link>
            ))}
          </div>
          <div className="flex gap-10">
            <p>Search</p>
            <p>Sign in</p>
          </div>
        </div>
      </CenterContent>
    </header>
  );
}
