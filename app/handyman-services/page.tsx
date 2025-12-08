"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wrench, Hammer, Settings } from "lucide-react";
import Head from "next/head";
import ContactForm from "@/components/contactform"; // Reusable contact form
// import { useState } from "react";

export default function HandymanServicesPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  const services = [
    { icon: <Wrench className="w-12 h-12 text-red-600" />, title: "General Repairs", desc: "Quick and reliable repairs for all household or office needs." },
    { icon: <Hammer className="w-12 h-12 text-red-600" />, title: "Installations", desc: "Professional installation of furniture, fixtures, and equipment." },
    { icon: <Settings className="w-12 h-12 text-red-600" />, title: "Maintenance", desc: "Routine and urgent maintenance services to keep everything running smoothly." },
  ];

  return (
    <>
      <Head>
        <title>Handyman Services | Gulf Fixit Dubai</title>
        <meta
          name="description"
          content="Gulf Fixit offers professional handyman services in Dubai, handling all repairs, installations, and maintenance tasks efficiently."
        />
        <link rel="canonical" href="https://www.gulffixit.com/handyman-services" />
      </Head>

      <div className="w-full bg-black text-white overflow-hidden">
        {/* HERO */}
        <motion.section
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className="relative w-full min-h-dvh flex items-center justify-center overflow-hidden px-4"
                >
                  {/* Background Image */}
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/handyman/handyman.png')" }}
                    initial={{ scale: 1.2, opacity: 0.4 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
        
                  {/* Black Overlay */}
                  <div className="absolute inset-0 bg-black/70" />
        
                  {/* Text */}
                  <motion.div
                    className="relative z-10 text-center max-w-3xl px-6"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                  >
                    <h1 className="text-[2.2rem] md:text-5xl lg:text-6xl font-bold text-red-600 leading-tight">
                      Handyman Services
                    </h1>
                    <p className="mt-4 text-base md:text-2xl text-gray-200 font-light">
                      Fast & Reliable Repairs, Installations & Maintenance
                    </p>
                  </motion.div>
                </motion.section>

        {/* ABOUT */}
        <section className="py-14 md:py-20 px-4 md:px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">Professional Handyman Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">Gulf Fixit provides reliable handyman services across Dubai. From minor repairs to major installations, our skilled team ensures your home or office stays in perfect condition.</p>
            <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">Our services include plumbing fixes, electrical repairs, furniture assembly, painting, carpentry, and much more.</p>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">We prioritize efficiency, safety, and high-quality workmanship, delivering quick solutions for any maintenance or repair need.</p>
          </motion.div>

          <motion.div initial={{ x: 80, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="flex justify-center">
            <Image src="/images/slider/handyman.png" width={600} height={450} alt="Handyman Services by Gulf Fixit" className="rounded-2xl shadow-xl border border-white/10 hover:scale-105 transition duration-500 w-full max-w-[450px] md:max-w-full" />
          </motion.div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" variants={fadeUp} className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-10">
            Our Handyman Services
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {services.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" variants={fadeUp} className="bg-white text-black p-8 rounded-2xl shadow-xl border border-gray-200 hover:scale-105 transition duration-300 cursor-pointer">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-red-600 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-base md:text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT FORM */}
        <ContactForm />
      </div>
    </>
  );
}
