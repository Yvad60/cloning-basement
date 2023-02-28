import Image from "next/image";
import CenterContent from "../wrappers/CenterContent";
import heroBg from "/public/assets/images/hero_bg.webp";

export default function Hero() {
  return (
    <section className="bg-primary-dark">
      <CenterContent>
        <div className="flex py-10 text-white">
          <div className="max-w-[729px] flex-auto flex flex-col gap-5">
            <h4 className="text-[#949494] leading-6">
              BRAINHUB IS A SOFTWARE DEVELOPMENT AGENCY
            </h4>
            <h1 className="text-[40px] font-semibold leading-[48pxS]">
              Development teams for projects with{" "}
              <span className="text-[#61f5e4]">ambitious roadmaps.</span>
            </h1>
            <ul className="list-disc list-inside text-lg leading-7">
              <li>Narrow-and-deep expertise: React, Node.js, .NET and AWS</li>
              <li>Lean software development approach</li>
              <li>1.36% applicant-to-hire ratio</li>
            </ul>
            <button className="px-[34px] max-w-fit py-4 bg-[#61f5e4] uppercase text-primary-dark font-bold leading-6 tracking-[0.5px]">
              Estimate your project
            </button>
          </div>
          <Image src={heroBg} alt="Hero bg" className="w-[345px]" />
        </div>
      </CenterContent>
    </section>
  );
}
