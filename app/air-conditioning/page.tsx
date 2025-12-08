"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Fan, Wrench, Plug } from "lucide-react";
import Head from "next/head";
import ContactForm from "@/components/contactform";

export default function AirConditioningPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  return (
    <>
      <Head>
        <title>Air Conditioning Services | Gulf Fixit Dubai</title>
        <meta
          name="description"
          content="Gulf Fixit provides professional air conditioning installation, repair, and maintenance services across Dubai. Keep your spaces cool and efficient."
        />
        <link rel="canonical" href="https://www.gulffixit.com/air-conditioning" />
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
            style={{ backgroundImage: "url('/images/ac/ac.png')" }}
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
              Air Conditioning Solutions
            </h1>
            <p className="mt-4 text-base md:text-2xl text-gray-200 font-light">
              Professional Installation, Repair & Maintenance Across UAE
            </p>
          </motion.div>
        </motion.section>

        {/* ABOUT AC */}
        <section className="py-14 md:py-20 px-4 md:px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
              Expert Air Conditioning Services
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">
              Gulf Fixit provides comprehensive air conditioning services including installation, repair, and maintenance for residential and commercial properties across Dubai.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">
              Our certified technicians ensure your HVAC systems operate efficiently, keeping your spaces comfortable year-round while reducing energy costs.
            </p>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              We handle all major brands and types of air conditioners, delivering timely service with high-quality workmanship.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <Image
              src="/images/ac/ac-2.png"
              width={600}
              height={450}
              alt="Air Conditioning Installation & Maintenance"
              className="rounded-2xl shadow-xl border border-white/10 hover:scale-105 transition duration-500 w-full max-w-[450px] md:max-w-full"
            />
          </motion.div>
        </section>

        {/* SERVICES */}
        <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-10"
          >
            Our Air Conditioning Solutions
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                icon: <Fan className="w-12 h-12 text-red-600" />,
                title: "AC Installation",
                desc: "Professional setup of residential and commercial AC systems for optimal cooling.",
              },
              {
                icon: <Wrench className="w-12 h-12 text-red-600" />,
                title: "AC Repairs",
                desc: "Fast troubleshooting and repair services to restore efficiency and comfort.",
              },
              {
                icon: <Plug className="w-12 h-12 text-red-600" />,
                title: "Maintenance Packages",
                desc: "Regular preventive maintenance to keep your AC running efficiently year-round.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-white text-black p-8 rounded-2xl shadow-xl border border-gray-200 hover:scale-105 transition duration-300 cursor-pointer"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-red-600 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-base md:text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <ContactForm />
        </section>
      </div>
    </>
  );
}
