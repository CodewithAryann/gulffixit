"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { CheckCircle, PhoneCall, ShieldCheck, Users, Wrench } from "lucide-react";

export default function AboutUs() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } }),
  };

  return (
    <div className="w-full bg-black text-white">
      {/* SEO HEAD */}
      <Head>
        <title>About Gulf Fixit | Expert MEP Services in Dubai</title>
        <meta
          name="description"
          content="Gulf Fixit provides expert mechanical, electrical, and plumbing (MEP) design, installation, and maintenance services in Dubai."
        />
        <link rel="canonical" href="https://www.gulffixit.com/about-us" />
      </Head>

      {/* HERO SECTION */}
     <section
  className="
    relative w-full 
    min-h-dvh  /* TRUE full height on all devices */
    flex items-center justify-center 
    bg-cover bg-center bg-no-repeat
  "
  style={{ backgroundImage: "url('/images/about/worker.png')" }}
>
  <div className="absolute inset-0 bg-black/70" />

  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeUp}
    className="relative z-10 text-center max-w-4xl px-6"
  >
    <h1 className="text-4xl md:text-6xl font-bold text-red-600">Gulf Fixit</h1>

    <p className="mt-4 text-xl md:text-2xl font-light text-gray-200">
      Delivering Expert MEP Design, Installation & Maintenance Services
    </p>
  </motion.div>
</section>


      {/* ABOUT SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">Who We Are</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Gulf Fixit is a leading provider of mechanical, electrical and plumbing (MEP) services across Dubai, dedicated to delivering innovative and sustainable solutions for residential, commercial, and industrial projects.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            With a team of highly skilled engineers and technicians, we take pride in designing, installing and maintaining efficient systems that enhance building performance and ensure long-term reliability.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our expertise includes electrical, plumbing, mechanical works and complete renovation services for projects of all sizes. We offer tailored solutions that support Dubai’s growing infrastructure and meet each client&apos;s unique needs.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Image
            src="/images/about/about-section.png"
            alt="Gulf Fixit MEP Team working on installation"
            width={600}
            height={450}
            className="rounded-2xl shadow-xl border border-white/10"
          />
        </motion.div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-white text-black px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} className="p-8 rounded-xl bg-gray-100 shadow-lg border-l-4 border-red-600">
            <h3 className="text-2xl font-bold mb-4 text-red-600">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide reliable, sustainable and innovative MEP solutions that enhance comfort, safety and efficiency of residential and commercial projects in Dubai, while exceeding client expectations.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} className="p-8 rounded-xl bg-gray-100 shadow-lg border-l-4 border-red-600">
            <h3 className="text-2xl font-bold mb-4 text-red-600">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be Dubai’s preferred MEP service provider, recognized for sustainability, excellence and innovative solutions that shape the modern future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.h2 initial="hidden" whileInView="visible" variants={fadeUp} className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-12">
          Why Choose Gulf Fixit?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: <Users className="w-12 h-12 text-red-600" />,
              title: "Expertise Across Sectors",
              desc: "Experienced in all types of MEP services for residential, commercial and large-scale projects.",
            },
            {
              icon: <ShieldCheck className="w-12 h-12 text-red-600" />,
              title: "Commitment to Quality & Safety",
              desc: "We follow strict safety standards ensuring long-term performance and reliability.",
            },
            {
              icon: <CheckCircle className="w-12 h-12 text-red-600" />,
              title: "Customer-Centric Approach",
              desc: "We prioritize customer satisfaction and deliver solutions with long-term value.",
            },
            {
              icon: <Wrench className="w-12 h-12 text-red-600" />,
              title: "24/7 Maintenance Support",
              desc: "Round-the-clock service ensuring your space operates efficiently without disruptions.",
            },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" variants={fadeUp} className="bg-white text-black p-8 rounded-2xl shadow-xl border border-gray-200">
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold mb-2 text-red-600">{item.title}</h4>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-600 text-center text-white">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Need Assistance? Call Our Experts
        </motion.h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="tel:+971545999795"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center justify-center gap-3 bg-black px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-white hover:text-black transition"
          >
            <PhoneCall className="w-6 h-6" />
            +971 54 599 9795
          </motion.a>

          <motion.a
            href="tel:+97148823427"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center justify-center gap-3 bg-black px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-white hover:text-black transition"
          >
            <PhoneCall className="w-6 h-6" />
            +971 4 8823 427
          </motion.a>
        </div>
      </section>

    </div>
  );
}
