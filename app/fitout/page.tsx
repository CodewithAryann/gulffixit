"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Paintbrush, Ruler, Wrench } from "lucide-react";
import { useState } from "react";

export default function FitOutPage() {
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
    <div className="w-full bg-black text-white">
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden"
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
          className="relative z-10 text-center max-w-4xl px-6"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-red-600">
            Transform Your Spaces
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200 font-light">
            Customized & Inspiring Fit-Out Solutions
          </p>
        </motion.div>
      </motion.section>

      {/* ABOUT FITOUT */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
            Professional Fit-Out Services
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Gulf Fixit fit-out services are designed to transform interior and
            exterior spaces into functional & visually appealing environments
            tailored to your unique needs.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            From concept to completion, we manage every detail with high
            standards of design, materials and craftsmanship.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We specialize in space planning, interior design, construction and
            project management to deliver cost-effective, timely and stunning
            results.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/fit-out-1.png"
            width={600}
            height={450}
            alt="Fitout Work"
            className="rounded-2xl shadow-xl border border-white/10 hover:scale-105 transition duration-500"
          />
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-12"
        >
          Premier Fit-Out & Renovation Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
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
              desc: "Transform homes, offices and commercial properties",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              className="bg-white text-black p-10 rounded-2xl shadow-xl border border-gray-200 hover:scale-105 transition duration-300 cursor-pointer"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-red-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM — WHITE SECTION ONLY */}
      <section className="py-24 bg-white text-black relative overflow-hidden">
        {/* Soft glow gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-white via-white/90 to-white" />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-black relative z-10"
        >
          Contact Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-700 max-w-2xl mx-auto mb-12 relative z-10"
        >
          Reach out for professional fit-out, renovation, or interior solutions —
          our team will connect with you shortly.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="
            max-w-3xl mx-auto bg-white/70 p-10 rounded-3xl 
            shadow-[0_0_50px_rgba(0,0,0,0.1)] backdrop-blur-xl
            border border-gray-300 relative z-10
          "
        >
          <input
            type="hidden"
            name="access_key"
            value="YOUR_WEB3FORMS_ACCESS_KEY"
          />

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              required
              name="name"
              placeholder="Your Name"
              className="p-4 rounded-xl bg-gray-100 focus:bg-white border border-gray-300 focus:border-black outline-none transition"
            />
            <input
              required
              name="email"
              placeholder="Your Email"
              className="p-4 rounded-xl bg-gray-100 focus:bg-white border border-gray-300 focus:border-black outline-none transition"
            />
          </div>

          <textarea
            required
            name="message"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-gray-100 focus:bg-white border border-gray-300 focus:border-black outline-none transition h-40 mb-6"
          />

          <button
            className="
              w-full bg-black text-white px-12 py-4 rounded-full font-bold 
              text-lg tracking-wide
              hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] 
              transition duration-300
            "
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
  );
}
