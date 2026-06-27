import Image from "next/image";

export default function PropertyListingCard() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      <div className="relative h-[200px]">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80"
          alt="92 Allium Place"
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-[13px] font-bold uppercase leading-snug tracking-wide text-[#1e293b]">
          92 ALLIUM PLACE, ORLANDO FL 32827
        </h3>
        <p className="mb-4 text-[18px] font-bold text-[#3563e9]">$ 590,693</p>

        <div className="mb-5 flex items-center gap-5 text-[13px] text-[#64748b]">
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 10v11M21 10v11M3 10l9-6 9 6M7 21V14h10v7" />
            </svg>
            4
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 12h16M6 12V8a2 2 0 012-2h8a2 2 0 012 2v4M6 20v-4h12v4" />
            </svg>
            4
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
            </svg>
            2,096.00 ft
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-[#e2e8f0] pt-4">
          <div className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80"
                alt="Jenny Wilson"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-[13px] font-medium text-[#1e293b]">Jenny Wilson</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef4ff] text-[#3563e9]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
              </svg>
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef4ff] text-[#3563e9]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef4ff] text-[#3563e9]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
