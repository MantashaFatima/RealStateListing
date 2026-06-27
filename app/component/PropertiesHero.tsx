import Image from "next/image";
import Link from "next/link";

export default function PropertiesHero() {
  return (
    <section className="relative flex min-h-[220px] items-center justify-center">
      <Image
        src="/lobby.jpg"
        alt="Properties hero"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#1b2559]/65" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-[40px] font-bold tracking-tight">Propertice</h1>
        <p className="mt-2 text-[14px] text-white/85">
          <Link href="/" className="text-white/85">
            Home
          </Link>
          {" / "}
          <span>Propertice</span>
        </p>
      </div>
    </section>
  );
}
