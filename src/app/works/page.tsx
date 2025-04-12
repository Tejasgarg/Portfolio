import Link from "next/link";
import Image from "next/image";

export default function WorksPage() {
  return (
    <div className="container mx-auto px-5 md:px-10">
      <section className="pb-16 pt-10 md:pt-20 md:pb-32">
        <h1 className="mb-10">WORK</h1>

        <div className="flex items-end justify-between mb-14">
          <h5 className="text-sm font-medium opacity-70">work 2022 - 2025</h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Link href="/works/Kyo" className="relative group block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/Kyo.jpeg"
                alt="Kyo"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5">
              <h4 className="text-lg font-medium">Kyo</h4>
            </div>
          </Link>

          <Link href="/works/Game-Boy" className="relative group block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/Game-Boy.jpeg"
                alt="Game-Boy"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5">
              <h4 className="text-lg font-medium">Game-Boy</h4>
            </div>
          </Link>

          <Link href="/works/IOT-Power-Moniter" className="relative group block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/Power-Moniter.jpeg"
                alt="IOT-Power-Moniter"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5">
              <h4 className="text-lg font-medium">IOT-Power-Moniter</h4>
            </div>
          </Link>

          <Link href="/works/Public-Web-Server" className="relative group block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/ESP8266.jpg"
                alt="Public-Web-Server"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5">
              <h4 className="text-lg font-medium">Public-Web-Server</h4>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
