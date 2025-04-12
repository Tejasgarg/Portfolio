import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function FlexibleAreaModelsPage() {
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

        <h1 className="mb-14">Public Web Server: Using ESP8266</h1>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-16">
          <div className="w-full md:w-1/3">
            <div className="space-y-6">
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Year</h5>
                <p>2025</p>
              </div>
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Technologies</h5>
                <p>Embedded Systems, Web Development, Internet of Things (IoT)</p>
              </div>
              <div>
                <h5 className="text-sm font-medium opacity-70 mb-2">Website</h5>
                <Link
                  href="https://github.com/Tejasgarg/Web-Server_using_esp8266"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/Tejasgarg/Web-Server_using_esp8266
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
            This project explores the potential of hosting a fully functional webpage directly on an ESP8266 Wi-Fi module. Designed to operate as a standalone web server, it eliminates the need for external hosting. The webpage includes a clean, modern layout with interactive elements such as sliders, navigation menus, and multiple sections highlighting BMW models, promotional sales, and contact information—all optimized for lightweight performance.
            </p>

            <div className="relative aspect-[16/9] mb-8">
              <Image
                src="/images/web-server.png"
                alt="web-server"
                fill
                className="object-cover"
              />
            </div>

            <p className="mb-8">
            At the heart of the system is the ESP8266, using the ESPAsyncWebServer library to efficiently manage HTTP requests. The entire webpage—composed of HTML, CSS, and JavaScript—is embedded directly into the microcontroller’s flash memory using PROGMEM, enabling fast local rendering. To keep memory usage minimal, images are not stored locally but are dynamically fetched using standard HTTP protocols from online sources.
            </p>

            <p className="mb-8">
            This approach allowed for a highly responsive and mobile-friendly UI, featuring CSS grid layouts, smooth transitions, and a minimalistic design. The project focuses on delivering a seamless user experience while showcasing how embedded devices can power modern web interfaces. The page loads quickly and adapts well to various screen sizes, making it suitable for IoT dashboards or touch-based control systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative aspect-square">
                <Image
                  src="/images/web-server2.png"
                  alt="wifi connected"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/images/web-server1.png"
                  alt="Port forwarding"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
            This project deepened my understanding of embedded web development, memory optimization, and asynchronous server handling. It also reinforced the importance of balancing performance with user experience in resource-constrained environments. The result is a compact, standalone solution that opens doors to creating smart home panels, connected kiosks, and real-time IoT interfaces using minimal hardware.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-10 border-t border-gray-200">
          <div>
            <Link
              href="/works/IOT-Power-Moniter"
              className="inline-flex items-center text-sm hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous Project
            </Link>
          </div>
          <div>
            <Link
              href="/works/Kyo"
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
