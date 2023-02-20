export default function Hero() {
  return (
    <section className="leading-[60px] text-[#333333] bg-[#fcfcfd]">
      <h1 className="pt-[30px] max-w-[904px] text-[45px] mx-auto font-light">
        You don’t just become something, you become someone
      </h1>
      <div className="flex mx-[132px] mt-[60px] bg-green-500 w-full">
        <div>
          <input
            type="text"
            name=""
            placeholder="Search"
            className="bg-[#0177b2] px-[40px] py-[30px] text-white placeholder:text-white h-4 border-b border-red-400 outline-none"
          />
        </div>
        <div className="bg-white text-[#0177b2] px-[40px]">
          <p>About VU Amsterdam</p>
        </div>
      </div>
    </section>
  );
}
