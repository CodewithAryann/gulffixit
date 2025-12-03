"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.6)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/gulf-logo-white.svg"
            alt="Gulffixit Logo"
            width={150}
            height={150}
            className="object-contain drop-shadow-xl hover:opacity-80 transition-all"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium text-[15px]">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["Fit-Out & Renovation", "/fitout"],
            ["What’s New", "/whats-new"],
            ["Contact", "/contact"]
          ].map(([label, url]) => (
            <Link
              key={url}
              href={url}
              className="relative hover:text-red-600 transition-all duration-300 group"
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <Link
            href="/get-estimate"
            className="bg-red-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get a Free Estimate
          </Link>
        </div>

        {/* Hamburger Button */}
       {/* Hamburger Button */}
<button
  className="md:hidden relative w-10 h-10 flex items-center justify-center"
  onClick={() => setOpen(!open)}
  aria-label="Toggle menu"
>
  {/* Line 1 */}
  <span
    className={`absolute h-[3px] w-7 bg-white rounded-md transition-all duration-300 
      ${open ? "rotate-45 translate-y-0" : "-translate-y-2.5"}
    `}
  ></span>

  {/* Line 2 */}
  <span
    className={`absolute h-[3px] w-7 bg-white rounded-md transition-all duration-300 
      ${open ? "opacity-0" : ""}
    `}
  ></span>

  {/* Line 3 */}
  <span
    className={`absolute h-[3px] w-7 bg-white rounded-md transition-all duration-300 
      ${open ? "-rotate-45 translate-y-0" : "translate-y-2.5"}
    `}
  ></span>
</button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl px-6 pb-6 pt-3 space-y-4 text-white font-medium border-t border-white/10 shadow-xl animate-slideDown">

          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["Fit-Out & Renovation", "/fitout"],
            ["What’s New", "/whats-new"],
            ["Contact", "/contact"],
          ].map(([label, url]) => (
            <Link
              key={url}
              href={url}
              className="block hover:text-red-600 transition"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/get-estimate"
            className="block bg-red-600 text-white px-4 py-2 rounded-md font-semibold text-center hover:bg-red-700 hover:scale-105 transition-all"
            onClick={() => setOpen(false)}
          >
            Get a Free Estimate
          </Link>
        </div>
      )}
    </nav>
  );
}
