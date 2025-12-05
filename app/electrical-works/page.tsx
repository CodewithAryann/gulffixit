"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plug, Wrench, Bolt } from "lucide-react";
import Head from "next/head";
import ContactForm from "@/components/contactform"; // Import the white-themed ContactForm

export default function ElectricalWorksPage() {
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
        <title>Electrical Works | Gulf Fixit Dubai</title>
        <meta
          name="description"
          content="Gulf Fixit provides professional electrical services in Dubai, including wiring, installations, maintenance, and repairs for homes and businesses."
        />
        <link rel="canonical" href="https://www.gulffixit.com/electrical-works" />
      </Head>

      <div className="w-full bg-black text-white overflow-hidden">
        {/* HERO */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden px-4"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/services/electrical-1.png')" }}
            initial={{ scale: 1.2, opacity: 0.4 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/70" />

          <motion.div
            className="relative z-10 text-center max-w-3xl px-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-red-600 leading-tight">
              Electrical Works
            </h1>
            <p className="mt-3 text-lg md:text-2xl text-gray-200 font-light">
              Safe, Certified & Professional Electrical Services Across Dubai
            </p>
          </motion.div>
        </motion.section>

        {/* ABOUT ELECTRICAL WORKS */}
        <section className="py-14 md:py-20 px-4 md:px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
              Reliable Electrical Services
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">
              Gulf Fixit provides comprehensive electrical services, including wiring, installations, repairs, and maintenance for residential, commercial, and industrial properties.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">
              Our certified electricians ensure safety and efficiency in every project, using high-quality materials and modern techniques.
            </p>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              From small repairs to large-scale installations, we deliver timely, cost-effective, and reliable electrical solutions tailored to your needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <Image
              src="/images/services/electrical-1.png"
              width={600}
              height={450}
              alt="Electrical Works by Gulf Fixit"
              className="rounded-2xl shadow-xl border border-white/10 hover:scale-105 transition duration-500 w-full max-w-[450px] md:max-w-full"
            />
          </motion.div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-10"
          >
            Our Electrical Services
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                icon: <Plug className="w-12 h-12 text-red-600" />,
                title: "Wiring & Installations",
                desc: "Complete electrical wiring, outlets, and installations for safety and efficiency.",
              },
              {
                icon: <Bolt className="w-12 h-12 text-red-600" />,
                title: "Repairs & Troubleshooting",
                desc: "Fast and reliable repair services for all types of electrical issues.",
              },
              {
                icon: <Wrench className="w-12 h-12 text-red-600" />,
                title: "Maintenance Packages",
                desc: "Scheduled maintenance for uninterrupted power and safe operations.",
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
