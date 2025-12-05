"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Layers, Paintbrush, Wrench } from "lucide-react";
import { useState } from "react";
import Head from "next/head";

export default function PlasterTilingPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (res.ok) setFormStatus("success");
    else setFormStatus("error");
  }

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
          className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden px-4"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/services/plaster-tiling.png')" }}
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
              Plaster & Tiling Works
            </h1>
            <p className="mt-3 text-lg md:text-2xl text-gray-200 font-light">
              High-Quality Finishes for Walls & Floors
            </p>
          </motion.div>
        </motion.section>

        {/* ABOUT PLASTER & TILING */}
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
              src="/images/services/plaster-tiling.png"
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
            {[
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
        <section className="py-20 bg-white text-black relative overflow-hidden px-4">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Contact Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-gray-700 max-w-2xl mx-auto mb-10 text-base md:text-lg"
          >
            Reach out for plastering or tiling solutions — our experts will provide efficient, high-quality services tailored to your needs.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto bg-white/70 p-6 md:p-10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.1)] backdrop-blur-xl border border-gray-300"
          >
            <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />

            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <input
                required
                name="name"
                placeholder="Your Name"
                aria-label="Your Name"
                className="p-4 rounded-xl bg-gray-100 focus:bg-white border border-gray-300 focus:border-black outline-none transition"
              />
              <input
                required
                name="email"
                placeholder="Your Email"
                aria-label="Your Email"
                className="p-4 rounded-xl bg-gray-100 focus:bg-white border border-gray-300 focus:border-black outline-none transition"
              />
            </div>

            <textarea
              required
              name="message"
              placeholder="Your Message / Requirements"
              aria-label="Your Message"
              className="w-full p-4 rounded-xl bg-gray-100 focus:bg-white border border-gray-300 focus:border-black outline-none transition h-40 mb-6"
            />

            <button
              className="w-full bg-black text-white px-12 py-4 rounded-full font-bold text-lg tracking-wide hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] transition duration-300 cursor-pointer"
            >
              Send Message
            </button>

            {formStatus === "success" && (
              <p className="mt-4 text-green-600 text-center font-semibold">
                Message sent successfully!
              </p>
            )}
            {formStatus === "error" && (
              <p className="mt-4 text-red-600 text-center font-semibold">
                Something went wrong. Try again.
              </p>
            )}
          </motion.form>
        </section>
      </div>
    </>
  );
}
