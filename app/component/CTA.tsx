import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative min-h-[320px] py-24">
      <Image
        src="/livingbackground.jpg"
        alt="CTA background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#1b2559]/75" />

      <div className="relative z-10 mx-auto max-w-[1170px] px-4 text-center text-white">
        <h2 className="mb-4 text-[36px] font-bold">Find Best Place for Living</h2>
        <p className="mx-auto mb-8 max-w-[520px] text-[15px] leading-relaxed text-white/85">
          Spend vacations in best hotels and resorts find the great place of your
choice using different searching options.
        </p>
        <button className="rounded bg-gray px-8 py-3 text-[14px] font-semibold text-[#FFFFFF]" style={{backgroundColor: "gray"}}>
          Contact Us
        </button>
      </div>
    </section>
  );
}



