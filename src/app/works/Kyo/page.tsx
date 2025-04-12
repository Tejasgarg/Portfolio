import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetailPage() {
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

        <h1 className="mb-14">The Fully Autonomous Air Purifier: KYO</h1>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-16">
          <div className="w-full md:w-1/3">
            <div className="space-y-6">
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Year</h5>
                <p>2024</p>
              </div>
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Technologies</h5>
                <p>C++, Embedded Systems, Arduino</p>
              </div>
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Website</h5>
                <Link
                  href="https://github.com/Tejasgarg/Kyo-Project"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/Tejasgarg/Kyo-Project
                </Link>
              </div>
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Design</h5>
                <Link
                  href="https://www.behance.net/gallery/209441083/Kyo-Subtle-intelligence"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.behance.net/gallery/209441083/Kyo-Subtle-intelligence
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
            The Autonomous Air Purifier is a practical tech project designed to address indoor air quality using a fusion of hardware innovation and real-time environmental sensing. Built on a custom-designed, 3D-printed PLA chassis, the device embodies a balance of functional engineering and compact mobility.
            </p>

            <div className="relative aspect-[16/9] mb-8">
              <Image
                src="/images/kyo-modules.jpg"
                alt="kyo main poster"
                fill
                className="object-cover"
              />
            </div>

            <p className="mb-8">
            For this project, I developed a self-navigating system that detects and responds to varying levels of particulate matter. The purifier is equipped with a PM2.5 sensor for air quality monitoring, which displays real-time data on an LCD screen. An array of IR sensors allows it to detect obstacles and autonomously move toward areas with higher pollutant concentration.
            </p>

            <p className="mb-8">
            The key challenge was integrating mobility, sensing, and user feedback into a single compact form. I approached this by carefully aligning the sensor array, optimizing the chassis design for movement, and ensuring consistent communication between modules. The result is a fully independent system capable of reacting to its environment without external input.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative aspect-square">
                <Image
                  src="/images/Kyo-render-2.jpg"
                  alt="Kyo close-up"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/images/Kyo-render-1.jpg"
                  alt="Kyo perspective"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
            This project deepened my interest in the intersection of electronics, embedded systems, and real-world problem-solving. It also gave me hands-on experience in rapid prototyping, sensor integration, and system-level thinking—all essential skills for building smarter hardware solutions.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-10 border-t border-gray-200">
          <div>
            <Link
              href="/works/Public-Web-Server"
              className="inline-flex items-center text-sm hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous Project
            </Link>
          </div>
          <div>
            <Link
              href="/works/Game-Boy"
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
