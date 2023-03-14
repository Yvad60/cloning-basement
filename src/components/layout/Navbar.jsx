import Image from "next/image";
import wikimediaLogo from "public/images/wikimedia-logo.svg";
import Button from "../ui/Button";
import CenterContent from "./CenterContent";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <CenterContent>
        <div className="flex items-center justify-between py-4">
          <Image
            src={wikimediaLogo}
            alt="Wikimedia logo"
            className="w-[144px]"
          />
          <div className="flex gap-2">
            <div className="items-center px-3 py-1 border rounded-sm">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search site"
                className="outline-none"
              />
              <i class="bi bi-search"></i>
            </div>
            <select name="" id=""></select>
            <Button className="text-white bg-[#d50357]">Donate now</Button>
          </div>
        </div>
      </CenterContent>
    </header>
  );
}
