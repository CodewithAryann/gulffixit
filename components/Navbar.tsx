"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openExpertise, setOpenExpertise] = useState(false);

  // Expertise links with their corresponding pages
  const expertiseLinks = [
    { label: "Interior Fit-Outs", href: "/fit-outs" },
    { label: "Painting & Carpentry", href: "/painting-carpentry" },
    { label: "Air Conditioning", href: "/air-conditioning" },
    { label: "Electrical Works", href: "/electrical-works" },
    { label: "Plumbing Works", href: "/plumbing-works" },
    { label: "Plaster & Tiling Works", href: "/plaster-tiling" },
    { label: "Partitions & False Ceiling Works", href: "/partitions-ceilings" },
    { label: "Handyman Services", href: "/handyman-services" },
  ];

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
        <div className="hidden md:flex items-center gap-8 text-white font-medium text-[15px] relative">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["What’s New", "/whats-new"],
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

          {/* Our Expertise Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-red-600 transition font-medium">
              Our Expertise
              <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 top-full mt-2 w-60 bg-black/90 rounded-xl border border-white/20 shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
              {expertiseLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="block px-4 py-2 text-gray-200 hover:text-red-600 hover:bg-black/60 transition-all duration-200 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/get-estimate"
            className="bg-red-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get a Free Estimate
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute h-[3px] w-7 bg-white rounded-md transition-all duration-300 
              ${open ? "rotate-45 translate-y-0" : "-translate-y-2.5"}`}
          ></span>
          <span
            className={`absolute h-[3px] w-7 bg-white rounded-md transition-all duration-300 
              ${open ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`absolute h-[3px] w-7 bg-white rounded-md transition-all duration-300 
              ${open ? "-rotate-45 translate-y-0" : "translate-y-2.5"}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-black/80 backdrop-blur-xl border-t border-white/10 shadow-xl
        ${open ? "max-h-[900px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}
      >
        <div className="px-6 space-y-4 text-white font-medium">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["What’s New", "/whats-new"],
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

          {/* Our Expertise Accordion */}
          <div>
            <button
              onClick={() => setOpenExpertise(!openExpertise)}
              className="w-full flex justify-between items-center hover:text-red-600 transition font-medium"
            >
              Our Expertise
              <ChevronDown
                className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                  openExpertise ? "rotate-180" : ""
                }`}
              />
            </button>
            {openExpertise && (
              <ul className="pl-4 mt-2 space-y-2 text-gray-300">
                {expertiseLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="block hover:text-red-500 transition"
                      onClick={() => {
                        setOpen(false);
                        setOpenExpertise(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            href="/get-estimate"
            className="block bg-red-600 text-white px-4 py-2 rounded-md font-semibold text-center hover:bg-red-700 hover:scale-105 transition-all"
            onClick={() => setOpen(false)}
          >
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </nav>
  );
}
