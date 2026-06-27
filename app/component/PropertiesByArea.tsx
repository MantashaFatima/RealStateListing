import Image from "next/image";

const areas = [
  {
    name: "Washington",
    count: 25,
    image: "/wishingtone.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "Franklin",
    count: 18,
    image: "/franklin.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    name: "Clinton",
    count: 32,
    image: "/clintone.jpg",
    className: "col-span-2 row-span-1",
  },
  {
    name: "Madisos",
    count: 24,
    image: "/house.jpg",
    className: "col-span-3 row-span-1",
    
  },
  {
    name: "Arlington",
    count: 16,
    image: "/centervelle.jpg",
    className: "col-span-1 row-span-1",
  },
];

function AreaCard({
  name,
  count,
  image,
  className,
}: {
  name: string;
  count: number;
  image: string;
  className: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <Image src={image} alt={name} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute left-5 top-5 text-white">
        <h3 className="text-[20px] font-semibold">{name}</h3>
        <p className="mt-1 text-[13px] text-white/85">{count} properties</p>
      </div>
    </div>
  );
}

function SectionHeading() {
  return (
    <div className="mb-12 text-center">
      <h2 className="mb-3 text-[32px] font-bold text-[#1b2559]">Properties by Area</h2>
      <p className="mx-auto max-w-[560px] text-[15px] leading-relaxed text-[#64748b]">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Proin sodales ultrices nulla blandit volutpat.
      </p>
    </div>
  );
}

export default function PropertiesByArea() {
  return (
    <section className="bg-white pb-20 pt-28">
      <div className="mx-auto max-w-[1170px] px-4">
        <SectionHeading />

        <div className="grid h-[480px] grid-cols-4 grid-rows-2 gap-4">
          {areas.map((area) => (
            <AreaCard key={area.name} {...area} />
          ))}
           
        </div>
      
      </div>
      
    </section>
  );
}

export { SectionHeading };
