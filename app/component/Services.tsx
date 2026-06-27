import { SectionHeading } from "./PropertiesByArea";

const services = [
  {
    title: "Sell your home",
    description:
      "We do a free evaluation to be sure you want to start selling",
    highlighted: true,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="20" width="32" height="20" rx="2" stroke="#3563e9" strokeWidth="2" />
        <path d="M24 8L8 20h32L24 8z" stroke="#3563e9" strokeWidth="2" strokeLinejoin="round" />
        <path d="M18 28h12M18 32h8" stroke="#3563e9" strokeWidth="2" strokeLinecap="round" />
        <rect x="30" y="26" width="8" height="10" rx="1" stroke="#3563e9" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Rent a home",
    description:
      "We do a free evaluation to be sure you want to start selling.",
    highlighted: false,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="16" r="6" stroke="#3563e9" strokeWidth="2" />
        <path d="M12 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#3563e9" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 22l4-4 4 4" stroke="#3563e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Buy a home",
    description:
      "We do a free evaluation to be sure you want to start selling",
    highlighted: false,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 6L6 22v20h12V30h12v12h12V22L24 6z" stroke="#3563e9" strokeWidth="2" strokeLinejoin="round" />
        <rect x="20" y="26" width="8" height="8" stroke="#3563e9" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Free marketing",
    description:
      "We do a free evaluation to be sure you want to start selling",
    highlighted: false,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="28" rx="2" stroke="#3563e9" strokeWidth="2" />
        <path d="M6 18h36M14 26h8M14 30h12" stroke="#3563e9" strokeWidth="2" strokeLinecap="round" />
        <circle cx="36" cy="30" r="4" stroke="#3563e9" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="bg-[#f4f7fc] py-20">
      <div className="mx-auto max-w-[1170px] px-4">
        <SectionHeading />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className={`rounded-xl p-7 ${service.highlighted
                  ? "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
                  : "bg-transparent"
                }`}
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="mb-3 text-[18px] font-bold text-[#1b2559]">{service.title}</h3>
              <p className="mb-5 text-[14px] leading-relaxed text-[#889099]">{service.description}</p>
              <a href="#" className="text-[14px] font-medium text-[#4A60A1]">
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


