import Image from "next/image";
import Link from "next/link";
import CenterContent from "../wrappers/CenterContent";
import heroBg from "/public/assets/images/hero_bg.webp";
export default function Hero() {
  return (
    <section className="bg-primary">
      <CenterContent>
        <div className="h-[512px] relative">
          <Image
            src={heroBg}
            alt="hero background image"
            className="w-full h-full object-cover"
          />
          <div className="bg-black py-8 px-10 absolute bottom-0 flex flex-col gap-4 w-[680px] text-white left-[3%] -bottom-10">
            <h1 className="text-[36px]">Interested in doctoral studies?</h1>
            <p className="text-[21px] leading-[25px]">
              Doctoral studies pave the way for self-development and research
              geared toward solving demanding problems. Apply to our programmes!
            </p>
            <Link href="">How to apply?</Link>
            <Link href="">Doctoral programmes</Link>
          </div>
        </div>
      </CenterContent>
    </section>
  );
}
