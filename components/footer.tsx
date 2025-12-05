"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  // State to toggle mobile accordion
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Fit-out & Renovation", href: "/fitout" },
    { label: "What’s New", href: "/whats-new" },
    // { label: "Our Expertise", href: "/expertise" },
  ];

  const servicesLinks = [
    { label: "Interior Fit-Outs", href: "/fit-outs" },
    { label: "Painting & Carpentry", href: "/painting-carpentry" },
    { label: "Air Conditioning", href: "/air-conditioning" },
    { label: "Electrical Works", href: "/electrical-works" },
    { label: "Plumbing Works", href: "/plumbing-works" },
    { label: "Plaster & Tiling Works", href: "/plaster-tiling" },
    { label: "Partitions & False Ceiling Works", href: "/partitions-ceilings" },
    { label: "Handyman Services", href: "/handyman-services" },
  ];

  type FooterLink = {
    label: string;
    href?: string;
  };

  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-12">
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
              We’re a trusted provider of professional technical services tailored to meet clients’ requirements anytime & anywhere in Dubai.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.facebook.com/people/Gulf-Duqors/pfbid0QasK6SD33JAcL2uhqwXceLVGSoY6n1NfSCY4mS9DLmANyXY3iqPHUCSdrsE5CjCrl/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition">
                <FaFacebookF className="text-white w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/gulffixit1/?next=%2F" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition">
                <FaInstagram className="text-white w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@gulffixit?utm_campaign=tt4d_open_api&utm_source=7111606065669619714&refer=player_v1&referrer_url=https%3A%2F%2Fwww.tiktok.com%2Fplayer%2Fv1%2F7578968585012251915%3Fmusic_info%3D1%26description%3D1%26autoplay%3D1%26loop%3D1%26utm_campaign%3Dtt4d_open_api%26utm_source%3D7111606065669619714&referer_video_id=7578968585012251915" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition">
                <FaTiktok className="text-white w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/gulffixit/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition">
                <FaLinkedinIn className="text-white w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-red-500 transition">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-red-500 transition">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-400 mb-3">For any requirements or inquiries reach us anytime.</p>

            <p className="text-gray-300 mb-2">
              <span className="font-semibold text-white">Call / WhatsApp:</span>
              <br />
              <a href="tel:+971545999795" className="hover:text-red-500 transition">+971 54 599 9795</a>
              <br />
              <a href="tel:+97148823427" className="hover:text-red-500 transition">+971 4 8823 427</a> {/* New number */}
            </p>

            <p className="text-gray-300">
              <span className="font-semibold text-white">Email:</span>
              <br />
              <a href="mailto:help@gulffixit.com" className="hover:text-red-500 transition">help@gulffixit.com</a>
            </p>
          </div>

        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {/* COMPANY INFO */}
          <div>
            <Image
              src="/gulf-logo-white.svg"
              width={150}
              height={60}
              alt="Gulf Fixit Logo"
              className="mb-5"
            />
            <p className="text-gray-400 leading-relaxed mb-4">
              We’re a trusted provider of professional technical services tailored to meet clients’ requirements anytime & anywhere in Dubai.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/people/Gulf-Duqors/pfbid0QasK6SD33JAcL2uhqwXceLVGSoY6n1NfSCY4mS9DLmANyXY3iqPHUCSdrsE5CjCrl/" className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition">
                <FaFacebookF className="text-white w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/gulffixit1/?next=%2F" className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition">
                <FaInstagram className="text-white w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@gulffixit?utm_campaign=tt4d_open_api&utm_source=7111606065669619714&refer=player_v1&referrer_url=https%3A%2F%2Fwww.tiktok.com%2Fplayer%2Fv1%2F7578968585012251915%3Fmusic_info%3D1%26description%3D1%26autoplay%3D1%26loop%3D1%26utm_campaign%3Dtt4d_open_api%26utm_source%3D7111606065669619714&referer_video_id=7578968585012251915" className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition">
                <FaTiktok className="text-white w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/gulffixit/" className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition">
                <FaLinkedinIn className="text-white w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Accordion Sections */}
          {[
            { title: "Quick Links", items: quickLinks },
            { title: "Services", items: servicesLinks },
            {
              title: "Get In Touch",
              items: [
                { label: "Call / WhatsApp: +971 54 599 9795", href: "tel:+971545999795" },
                { label: "Call: +971 4 8823 427", href: "tel:+97148823427" },
                { label: "Email: help@gulffixit.com", href: "mailto:help@gulffixit.com" }
              ]

            }
          ].map((section, i) => (
            <div key={i} className="border-t border-white/10">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex justify-between items-center py-4 text-white font-semibold text-lg focus:outline-none"
              >
                {section.title}
                <span className="text-red-500 font-bold text-xl">
                  {openSection === section.title ? "-" : "+"}
                </span>
              </button>

              {openSection === section.title && (
                <ul className="pl-4 pb-4 space-y-2 text-gray-300">
                  {section.items.map((item: FooterLink, idx: number) => (
                    <li key={idx}>
                      {item.href ? (
                        <Link href={item.href} className="hover:text-red-500 transition">
                          {item.label}
                        </Link>
                      ) : (
                        <span>{item.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}

            </div>
          ))}
        </div>

        {/* COPYRIGHT */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          © 2025 <span className="text-white font-semibold">Gulf Fixit</span>, All Rights Reserved —{" "}
          <Link href="/privacy" className="text-red-500 hover:underline cursor-pointer">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
