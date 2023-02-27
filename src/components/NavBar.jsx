import Link from "next/link";

export default function NavBar() {
  return (
    <header className="bg-primary py-[35px] text-white px-[56px]">
      <div className="flex justify-between">
        <span className="logo"></span>
        <div className="flex gap-12 items-center leading-5">
          <div>
            <span>For personnel</span>
          </div>
          <div>
            <span>Support us</span>
          </div>
          <div className="h-[26px] w-[1px] bg-white"></div>
          <div>
            <span>EN</span>
          </div>
          <div>
            <span>Search</span>
          </div>
          <div>
            <span>Menu</span>
          </div>
          <div className="text-primary bg-white px-[31px] py-[10px] rounded-full hover:bg-[#0058ad] hover:text-white">
            <Link className="" href="">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
