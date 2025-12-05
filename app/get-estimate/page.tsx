"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import Head from "next/head";
import {
  PiTiktokLogo,
} from "react-icons/pi";
export default function ContactPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <>
      {/* SEO HEAD */}
      <Head>
        <title>Contact Gulf Fixit | MEP Services Inquiry in Dubai</title>
        <meta
          name="description"
          content="Contact Gulf Fixit for expert MEP design, installation, and maintenance services in Dubai. Fill out the inquiry form or call our experts today."
        />
        <link rel="canonical" href="https://www.gulffixit.com/get-estimate" />
      </Head>

      <section className="min-h-screen bg-white text-gray-900 py-24 px-6 md:px-10">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-red-600 mb-4">
            Quick Inquiry Form
          </h1>
          <p className="text-gray-700 text-lg">
            Get a <span className="text-red-500 font-semibold">FREE Estimate</span>
          </p>
          <p className="mt-2 text-gray-600">
            Fill out the inquiry form with your requirements and our representative will contact you shortly.
          </p>
        </motion.div>

        {/* FORM + CONTACT INFO WRAPPER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* FORM */}
          <motion.form
            initial="hidden"
            animate="visible"
            className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-200 space-y-6 relative overflow-hidden group"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY_HERE" />

            {[{ label: "First Name *", name: "first_name", required: true },
              { label: "Last Name", name: "last_name" },
              { label: "Contact No *", name: "contact_no", required: true },
              { label: "Email Address", name: "email" }].map((f, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <label className="block mb-1 text-gray-700">{f.label}</label>
                <input
                  type="text"
                  name={f.name}
                  required={f.required}
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  aria-label={f.label}
                />
              </motion.div>
            ))}

            <motion.div variants={fadeUp} custom={4}>
              <label className="block mb-1 text-gray-700">How we can help you?</label>
              <textarea
                name="message"
                rows={5}
                className="w-full p-4 rounded-xl bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition resize-none"
                aria-label="How we can help you?"
              ></textarea>
            </motion.div>

            <motion.button
              variants={fadeUp}
              custom={5}
              className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg relative overflow-hidden group transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10">Submit Inquiry</span>
              <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-20 transition duration-500 rounded-xl blur-xl"></div>
            </motion.button>
          </motion.form>

          <motion.div initial="hidden" animate="visible" className="space-y-10">
            {/* COMPANY INFO */}
            <motion.div variants={fadeUp} custom={1} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl group hover:shadow-red-500/30 transition-all duration-500">
              <h2 className="text-3xl font-bold text-red-500 mb-4">Get In Touch</h2>
              <p className="text-gray-700 mb-4">
                Gulf Fixit For Technical Services Contracting LLC. Contact us for professional MEP services for residential or commercial buildings.
              </p>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-center gap-3">
                  <Phone className="text-red-500" /> 
                  <a href="tel:+971545999795" className="hover:text-red-600 transition">+971 54 599 9795</a> / 
                  <a href="tel:+97148823427" className="hover:text-red-600 transition">+971 4 8823 427</a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="text-red-500" /> 
                  <a href="mailto:help@gulffixit.com" className="hover:text-red-600 transition">help@gulffixit.com</a>
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="text-red-500" /> 8.00am – 6.00pm (Mon – Sat) • 24/7 Emergency
                </p>
              </div>
            </motion.div>

            {/* SOCIAL */}
            {/* SOCIAL */}
<motion.div variants={fadeUp} custom={2} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl flex flex-col gap-4">
  <h3 className="text-2xl font-bold text-red-500 mb-4">We&apos;re on Social</h3>
  <div className="flex gap-6 text-gray-700 text-2xl">
    <a href="https://www.facebook.com/gulffixit" target="_blank" rel="noopener noreferrer">
      <Facebook className="cursor-pointer hover:text-red-500 transition" />
    </a>
    <a href="https://www.instagram.com/gulffixit" target="_blank" rel="noopener noreferrer">
      <Instagram className="cursor-pointer hover:text-red-500 transition" />
    </a>
    <a href="https://www.linkedin.com/company/gulffixit" target="_blank" rel="noopener noreferrer">
      <Linkedin className="cursor-pointer hover:text-red-500 transition" />
    </a>
    <a href="https://www.tiktok.com/@gulffixit" target="_blank" rel="noopener noreferrer">
      <PiTiktokLogo className="cursor-pointer hover:text-red-500 transition" />
    </a>
  </div>
</motion.div>


            {/* MAINTENANCE INFO */}
            <motion.div variants={fadeUp} custom={3} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl group hover:shadow-red-500/30 transition-all duration-500">
              <h3 className="text-2xl font-bold text-red-500 mb-3">Monthly & Annual Maintenance</h3>
              <p className="text-gray-700 leading-relaxed">
                Minor Repairs To Major Fixes – Dubai Properties Maintained By Experts. Our technicians handle every task with precision. We offer customized packages to keep residential and commercial properties in top shape.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
