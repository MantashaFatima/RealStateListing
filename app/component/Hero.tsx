import Image from "next/image";
import TopBar from "./TopBar";
import Header from "./Header";

export default function Hero() {
  return (
    <section className="relative">
      <TopBar />

      <div className="relative min-h-[580px]">
        <Image
          src="/house.jpg"
          alt="house"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1b2559]/60" />

        <div className="relative z-10">
          <Header light />

          <div className="mx-auto max-w-[1170px] px-4 pb-32 pt-16 text-center text-white">
            <h1 className="mb-4 text-[42px] font-bold leading-tight tracking-tight md:text-[48px]">
              Find Your Dream Home
            </h1>
           
            <p className="mx-auto mb-10 max-w-[620px] text-[15px] leading-relaxed text-white/85">
              We provide a complete service for the sale, purchase or rental of real estate.
              We have been operating more than 15 years.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto -mt-16 max-w-[900px] px-4">
        <div className="rounded-lg bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          <div className="mb-4 flex justify-center gap-1">
            <button className="rounded bg-[#5f73b0] px-5 py-2 text-[13px] font-medium text-white">
              Rent
            </button>
            <button className="rounded bg-white px-5 py-2 text-[13px] font-medium text-[#64748b]">
              Sale
            </button>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-end">
            <div className="flex-1">
              <label className="mb-1.5 block text-[12px] font-medium text-[#64748b]">Location</label>
              <div className="relative">
                <select className="w-full appearance-none rounded border border-[#e2e8f0] bg-white px-4 py-3 pr-10 text-[14px] text-[#94a3b8] outline-none">
                  <option>Select your city</option>
                </select>
                <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#64748b]" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </div>
            </div>

            <div className="flex-1">
              <label className="mb-1.5 block text-[12px] font-medium text-[#64748b]">Property Type</label>
              <div className="relative">
                <select className="w-full appearance-none rounded border border-[#e2e8f0] bg-white px-4 py-3 pr-10 text-[14px] text-[#94a3b8] outline-none">
                  <option>Select property type</option>
                </select>
                <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#64748b]" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </div>
            </div>

            <div className="flex-1">
              <label className="mb-1.5 block text-[12px] font-medium text-[#64748b]">Rent Range</label>
              <div className="relative">
                <select className="w-full appearance-none rounded border border-[#e2e8f0] bg-white px-4 py-3 pr-10 text-[14px] text-[#94a3b8] outline-none">
                  <option>Select rent range</option>
                </select>
                <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#64748b]" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </div>
            </div>

            <button className="rounded bg-[#3563e9] px-10 py-3 text-[14px] font-medium text-white md:mb-0">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
