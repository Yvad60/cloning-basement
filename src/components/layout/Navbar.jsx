/* eslint-disable @next/next/no-img-element */
import { CiSearch, CiUser } from "react-icons/ci";
import { HiOutlineMenu } from "react-icons/hi";

export default function Navbar() {
  return (
    <header>
      <div className="flex justify-between bg-white items-center shadow-md relative z-30">
        <img
          src="https://vu.nl/assets/images/VU-logo-nobg.svg"
          alt="vu logo"
          className="w-[185px] py-[10px] pl-[30px]"
        />
        <nav className="flex gap-[30px] items-center text-2xl bg-[#f3efec] py-[16px] px-[30px]">
          <span>NL</span>
          <CiUser />
          <CiSearch />
          <HiOutlineMenu />
        </nav>
      </div>
    </header>
  );
}
