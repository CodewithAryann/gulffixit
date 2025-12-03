"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* COMPANY INFO */}
        <div>
          <Image
            src="/gulf-logo-white.svg"
            width={150}
            height={60}
            alt="Gulf Fixit Logo"
            className="mb-5"
          />

          <p className="text-gray-400 leading-relaxed">
            We’re a trusted provider of professional technical services tailored to meet the 
            clients’ requirements anytime & anywhere in Dubai.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition">
              <FaFacebookF className="text-white w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition">
              <FaInstagram className="text-white w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition">
              <FaTiktok className="text-white w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition">
              <FaLinkedinIn className="text-white w-4 h-4" />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              "Home",
              "About",
              "Services",
              "Fit-out & Renovation",
              "What’s New",
              "Our Expertise",
            ].map((item, i) => (
              <li key={i} className="hover:text-red-500 transition cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            {[
              "Interior Fit-Outs",
              "Painting & Carpentry",
              "Air Conditioning",
              "Electrical Works",
              "Plumbing Works",
              "Plaster & Tiling Works",
              "Partitions & False Ceiling Works",
              "Handyman Services",
            ].map((item, i) => (
              <li key={i} className="hover:text-red-500 transition cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Get In Touch</h3>

          <p className="text-gray-400 mb-3">
            For any requirements or inquiries reach us anytime.
          </p>

          <p className="text-gray-300 mb-2">
            <span className="font-semibold text-white">Call / WhatsApp:</span>
            <br />
            <a href="tel:+971545999795" className="hover:text-red-500 transition">
              +971 54 599 9795
            </a>
          </p>

          <p className="text-gray-300">
            <span className="font-semibold text-white">Email:</span>
            <br />
            <a href="mailto:help@gulffixit.com" className="hover:text-red-500 transition">
              help@gulffixit.com
            </a>
          </p>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="mt-14 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
        © Copyright 2025
        <span className="text-white font-semibold"> Gulf Fixit</span>,  
        All Rights Reserved — <span className="text-red-500 cursor-pointer">Privacy Policy</span>
      </div>
    </footer>
  );
}
