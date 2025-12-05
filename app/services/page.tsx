"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Wrench,
  Paintbrush,
  Hammer,
  Fan,
  Plug,
  ShowerHead,
  Drill,
  Layers,
  PhoneCall,
} from "lucide-react";

export default function ServicesPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15 } }),
  };

  const services = [
    {
      icon: <Wrench className="w-12 h-12 text-red-600" />,
      title: "MEP Services",
      desc: "Ensuring continuous and hassle-free operations with round-the-clock MEP maintenance for residential, commercial and industrial properties.",
      image: "/images/services/MEP.png",
    },
    {
      icon: <Hammer className="w-12 h-12 text-red-600" />,
      title: "Interior Fit-Outs",
      desc: "Complete interior fit-out services with precise planning and finishing for functional and visually appealing spaces.",
      image: "/images/services/interior-fit-Outs.png",
    },
    {
      icon: <Paintbrush className="w-12 h-12 text-red-600" />,
      title: "Painting & Carpentry",
      desc: "Professional painting and carpentry solutions delivering flawless finishing and premium-grade custom woodwork.",
      image: "/images/services/Painting-1.png",
    },
    {
      icon: <Fan className="w-12 h-12 text-red-600" />,
      title: "Air Conditioning",
      desc: "HVAC and air conditioning installation, repairs, and maintenance ensuring comfort and energy efficiency.",
      image: "/images/services/ac.png",
    },
    {
      icon: <Plug className="w-12 h-12 text-red-600" />,
      title: "Electrical Works",
      desc: "Certified electrical services from wiring to lighting installations for safe and efficient operations.",
      image: "/images/services/electrical-1.png",
    },
    {
      icon: <ShowerHead className="w-12 h-12 text-red-600" />,
      title: "Plumbing Works",
      desc: "Reliable plumbing installations, repairs and maintenance ensuring leak-free, efficient water systems.",
      image: "/images/services/Plumbing.png",
    },
    {
      icon: <Drill className="w-12 h-12 text-red-600" />,
      title: "Handyman Services",
      desc: "Fast and efficient handyman services for minor to major repairs, installations and maintenance tasks.",
      image: "/images/services/Handyman.png",
    },
    {
      icon: <Layers className="w-12 h-12 text-red-600" />,
      title: "Partitions & False Ceilings",
      desc: "Expertly designed and installed partitions and false ceilings for residential, commercial and industrial spaces.",
      image: "/images/services/Partitions-1.png",
    },
    {
      icon: <Layers className="w-12 h-12 text-red-600" />,
      title: "Plaster & Tiling Works",
      desc: "Premium plastering and tiling services ensuring clean finishes, smooth application and aesthetic enhancement.",
      image: "/images/services/Plaster.png",
    },
  ];

  return (
    <div className="w-full bg-black text-white">
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/services/services-page.png')" }}
          initial={{ scale: 1.2, opacity: 0.4 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          className="relative z-10 text-center max-w-3xl px-6"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-red-600">Our Services</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Professional MEP, Fit-Out, Renovation & Maintenance Services Across Dubai
          </p>
        </motion.div>
      </motion.section>

      {/* SERVICE GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-12"
        >
          Gulf Fixit Service Categories
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              className="bg-white text-black rounded-2xl shadow-xl border border-gray-200 overflow-hidden group cursor-pointer"
            >
              <div className="overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  width={500}
                  height={350}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-8">
                <div className="mb-3">{s.icon}</div>
                <h3 className="text-xl font-bold text-red-600 mb-2">{s.title}</h3>
                <p className="text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-600 text-white text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Need Assistance?
        </motion.h2>
        <motion.a
          href="tel:+971545999795"
          className="inline-flex items-center gap-3 bg-black px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-white hover:text-black transition"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
        >
          <PhoneCall className="w-6 h-6" /> +971 54 599 9795
        </motion.a>
        <p className="mt-4 max-w-2xl mx-auto text-white/90">
          Need help with repairs, installations or complete upgrades? Contact our experts for
          immediate assistance or request a quote.
        </p>
      </section>
    </div>
  );
}
