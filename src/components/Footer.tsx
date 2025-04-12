"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      className="relative z-10 w-full bg-black text-white py-10"
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-10">
        <div className="flex flex-col gap-1">
          <p className="text-sm">Available For Work</p>
          <Link
            href="tel:+919654811386"
            className="text-sm opacity-70 hover:opacity-100 transition-opacity"
          >
            +919654811386
          </Link>
          <Link
            href="mailto:tejasgarg421@gmail.com"
            className="text-sm opacity-70 hover:opacity-100 transition-opacity"
          >
            tejasgarg421@gmail.com
          </Link>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm">Designed & Developed</p>
          <Link
            href="https://www.linkedin.com/in/tejas-garg-861a90255/"
            className="text-sm opacity-70 hover:opacity-100 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            by Tejas Garg
          </Link>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm">TG · 2025</p>
          <p className="text-sm opacity-70">Tinkering Ideas</p>
        </div>
      </div>

      <div className="container mx-auto mt-20 flex flex-col md:flex-row justify-between items-center gap-4 px-5 md:px-10">
        <div className="flex gap-6">
          <Link
            href="https://www.linkedin.com/in/tejas-garg-861a90255/"
            className="text-sm opacity-70 hover:opacity-100 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </Link>
          <Link
            href="https://github.com/Tejasgarg"
            className="text-sm opacity-70 hover:opacity-100 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
          <Link
            href="https://www.behance.net/tejasgarg3"
            className="text-sm opacity-70 hover:opacity-100 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <h4 className="text-sm md:text-base">
            Let’s team up and make something amazing.
          </h4>
          <Link
            href="/contact"
            className="bg-white text-black px-4 py-2 text-sm hover:bg-opacity-90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
