import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-5 md:px-10">
      <section className="pb-16 pt-10 md:pt-20 md:pb-32">
        <h1 className="mb-10">
          TEJAS<br />GARG
        </h1>

        <div className="flex items-baseline justify-between mb-14">
          <h5 className="text-sm font-medium opacity-70">about.</h5>
          <Link
            href="https://drive.google.com/file/d/1qCuvftpwQbPnDeQPhFyF0RZ2MSQmR1z0/view?usp=sharing"
            className="text-sm font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read.resume
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          <div>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
            I'm an technology and electronics enthusiast. I love collaborating on innovative projects and building practical solutions using the latest tech.
            </p>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/tejas1.jpg"
                alt="Me"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
            I'm dedicated to creating efficient and innovative tech solutions that blend hardware and software, tailored to real-world needs and long-term impact.            </p>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/tejas2.jpeg"
                alt="Hi,there"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h5 className="text-sm font-medium opacity-70 mb-14">services.</h5>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-0">
            <h3 className="text-3xl md:text-4xl font-medium">C</h3>
            <h3 className="text-3xl md:text-4xl font-medium">C++</h3>
            <h3 className="text-3xl md:text-4xl font-medium">PYTHON</h3>
            <h3 className="text-3xl md:text-4xl font-medium">EMBEDDED SYSTEMS</h3>
            <h3 className="text-3xl md:text-4xl font-medium">HARDWARE DESIGN</h3>
          </div>
        </div>

        <div>
          <h5 className="text-sm font-medium opacity-70 mb-14">FAQs.</h5>

          <div className="space-y-8">
            <details className="group cursor-pointer">
              <summary className="text-xl font-medium flex items-center justify-between">
              How do you approach problem-solving in your projects?
                <span className="transition-transform group-open:rotate-180">
                  +
                </span>
              </summary>
              <div className="mt-3 text-muted-foreground">
                <p>I start by breaking down the problem into its core components—whether it's a hardware bottleneck or a software constraint. From there, I research existing solutions, brainstorm alternatives, and test different approaches through iterative prototyping. I believe the best solutions are both elegant and efficient.</p>
              </div>
            </details>

            <details className="group cursor-pointer">
              <summary className="text-xl font-medium flex items-center justify-between">
                What is your typical project timeline?
                <span className="transition-transform group-open:rotate-180">
                  +
                </span>
              </summary>
              <div className="mt-3 text-muted-foreground">
                <p>Timelines vary depending on the project’s complexity—whether it’s a quick prototype or a full-fledged embedded system. Smaller builds or firmware tweaks usually take 1–3 weeks, while more advanced hardware-software integrations can span 4–8 weeks. I always lay out a clear roadmap at the start, including milestones for design, development, and testing.</p>
              </div>
            </details>

            <details className="group cursor-pointer">
              <summary className="text-xl font-medium flex items-center justify-between">
                What’s the first thing you do when starting a new hardware-software project?
                <span className="transition-transform group-open:rotate-180">
                  +
                </span>
              </summary>
              <div className="mt-3 text-muted-foreground">
                <p>I begin by defining the end goal and understanding the user interaction. Then I map out the system architecture—deciding what needs to happen in hardware, what can be offloaded to software, and how everything communicates. From there, I move into schematic design and firmware development in parallel.</p>
              </div>
            </details>

            <details className="group cursor-pointer">
              <summary className="text-xl font-medium flex items-center justify-between">
                How do I get started on a project with you?
                <span className="transition-transform group-open:rotate-180">
                  +
                </span>
              </summary>
              <div className="mt-3 text-muted-foreground">
                <p>It's super simple—just drop me a message with a brief overview of what you're working on or hoping to build. I'm always excited to collaborate and learn through real-world projects. From there, we can chat, exchange ideas, and see how I can contribute. If it’s a good fit, I’ll put together a plan and we can take it from there!</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
