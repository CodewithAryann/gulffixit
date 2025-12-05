"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Paintbrush, Ruler, Wrench } from "lucide-react";
import Head from "next/head";
import ContactForm from "@/components/contactform";

export default function FitOutPage() {
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
        <title>Fit-Out Services | Gulf Fixit Dubai</title>
        <meta
          name="description"
          content="Gulf Fixit provides professional fit-out, renovation, and interior design services in Dubai. Transform your spaces with expert solutions."
        />
        <link rel="canonical" href="https://www.gulffixit.com/fit-outs" />
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
            style={{ backgroundImage: "url('/images/about/about.png')" }}
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
              Transform Your Spaces
            </h1>
            <p className="mt-3 text-lg md:text-2xl text-gray-200 font-light">
              Customized & Inspiring Fit-Out Solutions
            </p>
          </motion.div>
        </motion.section>

        {/* ABOUT FITOUT */}
        <section className="py-14 md:py-20 px-4 md:px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
              Professional Fit-Out Services
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">
              Gulf Fixit fit-out services are designed to transform interior and
              exterior spaces into functional & visually appealing environments
              tailored to your unique needs.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">
              From concept to completion, we manage every detail with high
              standards of design, materials and craftsmanship.
            </p>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              We specialize in space planning, interior design, construction and
              project management to deliver cost-effective, timely and stunning
              results.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <Image
              src="/images/fit-out-1.png"
              width={600}
              height={450}
              alt="Gulf Fixit fit-out project example"
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
            Premier Fit-Out & Renovation Services
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                icon: <Ruler className="w-12 h-12 text-red-600" />,
                title: "Space Planning",
                desc: "Optimize layouts for beauty and function",
              },
              {
                icon: <Paintbrush className="w-12 h-12 text-red-600" />,
                title: "Interior Design",
                desc: "Creative and cohesive design concepts",
              },
              {
                icon: <Wrench className="w-12 h-12 text-red-600" />,
                title: "Renovation Works",
                desc: "Transform homes, offices & commercial spaces",
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

        {/* CONTACT FORM (WHITE THEME) */}
        <section className="py-20 bg-white text-black relative overflow-hidden px-4">
          <ContactForm/>
        </section>
      </div>
    </>
  );
}
