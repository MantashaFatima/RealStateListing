import Image from "next/image";

const carouselItems = [
  {
    image: "/crouslehouse.jpg",
    title: "Modern Villa",
    tag: "Hot Offer",
    tagColor: "bg-[#4A60A1]",
  },
  {
    image: "/kitchen.jpg",
    title: "Luxury Home",
    tag: "FOR SALE",
    tagColor: "bg-[#10b981]",
  },
  {
    image: "/washingtoneCrousle.jpg",
    title: "Cozy Apartment",
    tag: "Hot offer",
    tagColor: "bg-[#4A60A1]",
  },
  {
    image: "/crousleThirdHouse.jpg",
    title: "Family House",
    tag: "FOR SALE",
    tagColor: "bg-[#10b981]",
  },
  {
    image: "/crousleLastHouse.jpg",
    title: "Downtown Loft",
    tag: "Hot Offer",
    tagColor: "bg-[#4A60A1]",
  },
];

export default function PropertyCarousel() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-[32px] font-bold text-[#1b2559]">Latest Properties of Rent</h2>
          <p className="mx-auto max-w-[560px] text-[15px] leading-relaxed text-[#64748b]">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Proin sodales ultrices nulla blandit volutpat.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {carouselItems.map((item) => (
            <div key={item.title} className="relative h-[320px] overflow-hidden rounded-xl">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <span
                className={`absolute left-3 top-3 rounded px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white ${item.tagColor}`}
              >
                {item.tag}
              </span>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-[13px] text-white/85">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded bg-[#4A60A1] text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded bg-[#4A60A1] text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>
      </div>

    </section>
  );
}
