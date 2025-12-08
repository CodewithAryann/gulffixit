"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Layers, Paintbrush, Wrench } from "lucide-react";
import Head from "next/head";
import ContactForm from "@/components/contactform"; // Optional reusable form

export default function PlasterTilingPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  const services = [
    {
      icon: <Layers className="w-12 h-12 text-red-600" />,
      title: "Wall Plastering",
      desc: "Smooth, even, and durable plaster finishes for walls.",
    },
    {
      icon: <Paintbrush className="w-12 h-12 text-red-600" />,
      title: "Floor & Wall Tiling",
      desc: "Professional tiling for floors and walls with precision and aesthetics.",
    },
    {
      icon: <Wrench className="w-12 h-12 text-red-600" />,
      title: "Maintenance & Repairs",
      desc: "Plaster and tile repair services for long-lasting surfaces.",
    },
  ];

  return (
    <>
      <Head>
        <title>Plaster & Tiling Works | Gulf Fixit Dubai</title>
        <meta
          name="description"
          content="Gulf Fixit provides expert plastering and tiling services in Dubai for residential, commercial, and industrial properties."
        />
        <link rel="canonical" href="https://www.gulffixit.com/plaster-tiling" />
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
            style={{ backgroundImage: "url('/images/partitions/bg.png')" }}
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
              Plaster & Tiling Works
            </h1>
            <p className="mt-4 text-base md:text-2xl text-gray-200 font-light">
              High-Quality Finishes for Walls & Floors
            </p>
          </motion.div>
        </motion.section>

        {/* ABOUT */}
        <section className="py-14 md:py-20 px-4 md:px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
              Expert Plastering & Tiling Services
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">
              Gulf Fixit specializes in professional plastering and tiling services for residential, commercial, and industrial properties across Dubai.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">
              Our team ensures smooth plaster finishes, durable tiles, and precise alignment, delivering flawless and visually appealing results.
            </p>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Whether you need wall plastering, floor tiling, or decorative finishes, we provide tailored solutions that enhance the beauty and functionality of your spaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <Image
              src="/images/plaster/1.png"
              width={600}
              height={450}
              alt="Plaster & Tiling Works by Gulf Fixit"
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
            Our Plaster & Tiling Services
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {services.map((item, i) => (
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
