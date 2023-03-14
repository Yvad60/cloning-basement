import Image from "next/image";
import heroBg from "public/images/hero-bg.svg";
import CenterContent from "../layout/CenterContent";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="mt-[30px] relative">
      <Image
        src={heroBg}
        alt="People at Wikimedia"
        className="h-[454px] object-cover"
      />
      <CenterContent>
        <div className="bg-[#202122] max-w-[454px] text-[1.5rem] font-bold p-4 text-white absolute top-20">
          <h1>
            Meet the people making Wikimedia projects more equitable. Discover
            Open the Knowledge: Stories.
          </h1>
        </div>
        <div className="flex mt-[42px] justify-between">
          <p className="max-w-[619px] text-lg leading-8">
            The nonprofit Wikimedia Foundation provides the essential
            infrastructure for free knowledge. We host Wikipedia, the free
            online encyclopedia, created, edited, and verified by volunteers
            around the world, as well as many other vital community projects.
            All of which is made possible thanks to donations from individuals
            like you. We welcome anyone who shares our vision to join us in
            collecting and sharing knowledge that fully represents human
            diversity.
          </p>
          <div>
            <h4 className="text-[#202122] text-xl leading-[30px] font-bold">
              Protect and sustain Wikipedia
            </h4>
            <Button className="text-white bg-[#3a25ff] mt-2">
              <i className="bi bi-lock-fill mr-2"></i>Donate now
            </Button>

            <p className="text-sm">Donation are secure</p>
          </div>
        </div>
      </CenterContent>
    </section>
  );
}
