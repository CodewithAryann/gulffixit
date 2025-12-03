"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MaintenanceBanner() {
  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-80 md:h-[420px]"
        >
          <Image
            src="/images/banner.png" 
            alt="Maintenance Services"
            fill
            className="object-cover rounded-3xl shadow-xl border border-white/10"
          />

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-3xl shadow-[0_0_40px_rgba(255,0,0,0.35)] pointer-events-none"></div>
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <h3 className="text-2xl md:text-4xl font-bold mb-4">
            <span className="text-red-600">Monthly & Annual</span> Maintenance
          </h3>

          <p className="text-lg md:text-xl font-semibold text-black mb-4">
            Minor Repairs To Major Fixes – Dubai Properties Maintained By Experts
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our expert technicians handle every task with precision. We offer customized
            monthly and annual maintenance packages for property owners and residents to keep all kinds
            of residential and commercial properties in top shape. Choosing us for your MEP needs in Dubai
            means partnering with a company that prioritizes quality, reliability and expertise.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
