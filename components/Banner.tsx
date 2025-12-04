"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MaintenanceBanner() {
  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-80 md:h-[430px] group"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/banner-1.png"
              alt="Maintenance Services"
              fill
              className="
              object-cover 
              object-center 
              rounded-3xl 
              shadow-xl 
              border border-white/10
              transition-all 
              duration-500 
              group-hover:scale-[1.03]
            "
              priority
              sizes="100%"
            />

            {/* Hover Glow */}
            <div
              className="
              absolute inset-0 
              rounded-3xl 
              opacity-0 
              group-hover:opacity-100 
              transition-all 
              duration-500
              shadow-[0_0_60px_rgba(255,0,0,0.45)]
            "
            ></div>
          </motion.div>
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-black"
        >
          <h3 className="text-3xl md:text-4xl font-bold leading-snug mb-5">
            <span className="text-red-600">Monthly & Annual</span> Maintenance
          </h3>

          <p className="text-lg md:text-xl font-semibold text-gray-800 mb-5">
            Minor Repairs To Major Fixes – Professional Dubai MEP Technicians
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our expert technicians handle every task with precision. We offer
            customized maintenance packages for property owners and residents,
            ensuring your residential or commercial property remains in optimal
            condition. Choose our MEP team for unmatched reliability, quality,
            and expertise.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
