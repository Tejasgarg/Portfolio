import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function VioletOrbitPage() {
  return (
    <div className="container mx-auto px-5 md:px-10">
      <section className="pb-16 pt-10 md:pt-20 md:pb-32">
        <div className="mb-10">
          <Link
            href="/works"
            className="inline-flex items-center text-sm hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all works
          </Link>
        </div>

        <h1 className="mb-14">Custom-Built Handheld Console: Gameboy</h1>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-16">
          <div className="w-full md:w-1/3">
            <div className="space-y-6">
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Year</h5>
                <p>2024</p>
              </div>
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Technologies</h5>
                <p>C++, Electronics, Embedded hardware, 3D Modeling, AutoCAD</p>
              </div>
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Website</h5>
                <Link
                  href="https://github.com/Tejasgarg/Game-Boy-project"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/Tejasgarg/Game-Boy-project
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
            This project reimagines the retro handheld gaming experience through a custom-built console powered by modern DIY electronics. Inspired by the iconic Game Boy, the device was designed and built from scratch, blending nostalgic aesthetics with hands-on hardware development.
            </p>

            <div className="relative aspect-[16/9] mb-8">
              <Image
                src="/images/Game-Boy-3.jpeg"
                alt="Gameboy project header"
                fill
                className="object-cover"
              />
            </div>

            <p className="mb-8">
            At its core, the console uses an Arduino Nano as the main microcontroller, driving a custom LED display built using WS2812 programmable LED strips. The screen was carefully soldered and coded to simulate pixel-based graphics, enabling simple animations and game-like visuals.
            </p>

            <p className="mb-8">
            The chassis was designed in Fusion 360 and 3D-printed using PLA, giving it a tactile, handheld feel while housing all components securely. I focused on the design, internal cable management, and maintaining a compact form factor while ensuring easy access to the electronics for future upgrades or modifications.The main challenge was creating a responsive and visually cohesive display system using individually addressable LEDs, while also managing timing and performance on a lightweight microcontroller like the Nano. Careful optimization of the code and tight integration of hardware components led to a playable and fully portable console.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative aspect-square">
                <Image
                  src="/images/Game-Boy-1.jpeg"
                  alt="Gameboy on white background"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square bg-black">
                <Image
                  src="/images/Game-Boy-2.jpeg"
                  alt="Gameboy protype"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
            This project helped me dive deeper into hardware-level design, display logic, and microcontroller programming. It was also a fun exploration of how creative constraints—like limited pixels or processing power—can lead to clever solutions and unique user experiences.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-10 border-t border-gray-200">
          <div>
            <Link
              href="/works/Kyo"
              className="inline-flex items-center text-sm hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous Project
            </Link>
          </div>
          <div>
            <Link
              href="/works/IOT-Power-Moniter"
              className="inline-flex items-center text-sm hover:underline"
            >
              Next Project
              <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
