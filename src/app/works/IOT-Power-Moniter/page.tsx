import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function VisualScreenModelsPage() {
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

        <h1 className="mb-14">IoT-Based Smart Energy Meter</h1>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-16">
          <div className="w-full md:w-1/3">
            <div className="space-y-6">
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Year</h5>
                <p>2025</p>
              </div>
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Technologies</h5>
                <p>C++, ESP32, Sensors, </p>
              </div>
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Website</h5>
                <Link
                  href="https://github.com/Tejasgarg/IOT_Energy_meter"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/Tejasgarg/IOT_Energy_meter
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
            This project transforms traditional electricity monitoring into a smart, real-time, and remotely accessible system using IoT technology. Designed for efficiency and scalability, the energy meter provides detailed insights into power consumption through a web and mobile interface, offering a data-driven approach to energy management.
            </p>

            <div className="relative aspect-[16/9] mb-8">
              <Image
                src="/images/IOT-meter.jpeg"
                alt="IOT meter"
                fill
                className="object-cover"
              />
            </div>

            <p className="mb-8">
            At the core of the system is the ESP32 microcontroller, paired with an SCT-013 current sensor and a ZMPT101B voltage sensor to measure voltage, current, power, and total energy usage (kWh). This data is processed and displayed locally on an I2C-based LCD, while simultaneously being transmitted to the Blynk platform for remote access. To ensure consistent performance, the system uses EEPROM for data retention during power outages and integrates communication protocols like Wi-Fi (IEEE 802.11), UART for debugging, and TCP/IP for secure cloud transmission.
            </p>

            <p className="mb-8">
            The main challenge was combining reliable sensing with smooth real-time communication in a compact, cost-effective solution. Careful calibration, streamlined data handling, and microcontroller optimization allowed for a fully functional prototype suitable for real-world deployment. This solution paves the way for smarter, user-friendly energy tracking in homes, offices, and community spaces.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative aspect-square">
                <Image
                  src="/images/IOT2.jpeg"
                  alt="IOT meter closeup"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/images/IOT1.jpeg"
                  alt="meter prototype"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
            This project deepened my understanding of sensor calibration, embedded communication protocols, and cloud-based IoT integration. It’s a step toward smarter, more transparent energy usage—helping users make informed decisions and reduce wastage in homes, offices, and shared spaces.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-10 border-t border-gray-200">
          <div>
            <Link
              href="/works/Game-Boy"
              className="inline-flex items-center text-sm hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous Project
            </Link>
          </div>
          <div>
            <Link
              href="/works/Public-Web-Server"
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
