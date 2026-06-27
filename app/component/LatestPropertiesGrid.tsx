import Image from "next/image";
import Link from "next/link";

const properties = [
  {
    image: "/whitehouse.jpg",
    price: "$590,693",
    title: "92 ALLIUM PLACE, ORLANDO FL 32827",
    beds: 4,
    baths: 3,
    sqft: "2,096.00 ft",
    agent: "Janne Wilson",
    agentImage: "/whitehouse.jpg",
  },
  {
    image: "/house2.jpg",
    price: "$ 590, 693",
    title: "92 ALLIUM PLACE, ORLANDO FL 32827",
    beds: 3,
    baths: 2,
    sqft: "2,096.00 ft",
    agent: "Janne Wilson",
    agentImage: "/house2.jpg",
  },
  {
    image: "/wishingtone.jpg",
    price: "$ 590, 693",
    title: "92 ALLIUM PLACE, ORLANDO FL 32827",
    beds: 5,
    baths: 4,
    sqft: "2,096.00 ft",
    agent: "Janne Wilson",
    agentImage: "/wishingtone.jpg",
  },
  {
    image: "/lobby.jpg",
    price: "$ 590, 693",
    title: "92 ALLIUM PLACE, ORLANDO FL 32827",
    beds: 2,
    baths: 2,
    sqft: "2,096.00 ft",
    agent: "Janne Wilson",
    agentImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
  },
  {
    image: "/latesthouse.jpg",
    price: "$ 590, 693",
    title: "92 ALLIUM PLACE, ORLANDO FL 32827",
    beds: 3,
    baths: 2,
    sqft: "2,096.00 ft",
    agent: "Janne Wilson",
    agentImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
  },
  {
    image: "/poolhouse.jpg",
    price: "$ 590, 693",
    title: "92 ALLIUM PLACE, ORLANDO FL 32827",
    beds: 4,
    baths: 3,
    sqft: "2,096.00 ft",
    agent: "Janne Wilson",
    agentImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80",
  },
];

function PropertyCard({
  image,
  price,
  title,
  beds,
  baths,
  sqft,
  agent,
  agentImage,
}: (typeof properties)[0]) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#e2e8f0] bg-white">
      <div className="relative h-[200px]">
        <Image src={image} alt={title} fill className="object-cover" />
        {/* <span className="absolute left-4 top-4 rounded bg-[#4A60A1] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
        Hot Offer Sell
        </span> */}
      </div>
      <div className="p-5">
        <p className="mb-1 text-[18px] font-bold text-[#4A60A1]">{price}</p>
        <h3 className="mb-4 text-[15px] font-semibold text-[#1b2559]">{title}</h3>

        <div className="mb-5 flex items-center gap-5 text-[13px] text-[#64748b]">
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 10v11M21 10v11M3 10l9-6 9 6M7 21V14h10v7" />
            </svg>
            {beds} Bed
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12h16M6 12V8a2 2 0 012-2h8a2 2 0 012 2v4M6 20v-4h12v4" />
            </svg>
            {baths} Bath
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
            </svg>
            {sqft} sqft
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-[#e2e8f0] pt-4">
          <div className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image src={agentImage} alt={agent} fill className="object-cover" />
            </div>
            <span className="text-[13px] font-medium text-[#1e293b]">{agent}</span>
          </div>
          <div className="flex items-center gap-3 text-[#64748b]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LatestPropertiesGrid() {
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

        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.title} {...property} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/properties">
            <button className="rounded bg-[#4A60A1] px-8 py-3 text-[14px] font-medium text-white">
              Load More Listing
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
