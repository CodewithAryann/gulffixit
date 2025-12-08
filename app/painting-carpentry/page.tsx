"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Paintbrush, Hammer, Wrench } from "lucide-react";
import Head from "next/head";
import ContactForm from "@/components/contactform"; // Import the white-themed ContactForm

export default function PaintingCarpentryPage() {
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
        <title>Painting & Carpentry | Gulf Fixit Dubai</title>
        <meta
          name="description"
          content="Gulf Fixit provides professional painting and carpentry services in Dubai. Transform your spaces with premium finishes and custom woodwork."
        />
        <link rel="canonical" href="https://www.gulffixit.com/painting-carpentry" />
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
            style={{ backgroundImage: "url('/images/slider/Painting-1.png')" }}
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
              Painting & Carpentry
            </h1>
            <p className="mt-4 text-base md:text-2xl text-gray-200 font-light">
              Premium Finishes & Custom Woodwork Across UAE
            </p>
          </motion.div>
        </motion.section>

        {/* ABOUT PAINTING & CARPENTRY */}
        <section className="py-14 md:py-20 px-4 md:px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
              Expert Painting & Carpentry Services
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">
              Gulf Fixit delivers professional painting and carpentry services for residential and commercial spaces in Dubai. Our team ensures flawless finishes and durable, high-quality craftsmanship.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">
              From interior wall painting to custom woodwork, we tailor every project to your unique style and functional requirements.
            </p>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              We use premium materials, skilled techniques, and attention to detail to guarantee stunning results that last.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            {/* FIXED IMAGE CONTAINER */}
            <div className="relative w-full max-w-[450px] md:max-w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl border border-white/10">
              <Image
                src="/images/painting/painting.png"
                alt="Painting & Carpentry Project"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                style={{ objectPosition: "30% 20%" }} // custom x% y%
              />
            </div>
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
            Our Painting & Carpentry Solutions
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                icon: <Paintbrush className="w-12 h-12 text-red-600" />,
                title: "Wall & Surface Painting",
                desc: "Expert painting with smooth, lasting finishes for homes and offices.",
              },
              {
                icon: <Hammer className="w-12 h-12 text-red-600" />,
                title: "Custom Carpentry",
                desc: "Tailor-made wooden furniture, cabinets, and fixtures for your space.",
              },
              {
                icon: <Wrench className="w-12 h-12 text-red-600" />,
                title: "Repairs & Maintenance",
                desc: "Painting touch-ups and carpentry repairs to keep your property flawless.",
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
