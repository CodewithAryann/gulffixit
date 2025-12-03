"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/public/images/about/about.png"; // Replace with your image path

export default function AboutSection() {
  return (
    <section className="relative w-full py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        {/* Left: Text Content (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-black dark:text-white mb-6">
            Welcome to <span className="text-red-500">GULF FIXIT</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Fast, Efficient & Affordable Maintenance & Repair Services In Dubai.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Gulf Fixit specializes in providing high-quality MEP services across Dubai. Our expertise ensures both residential and commercial properties function efficiently. We offer a comprehensive range of solutions including HVAC maintenance and installation, electrical, plumbing, and general maintenance and repairs. With a team of skilled technicians, we are committed to delivering reliable and cost-effective services to meet the requirements of each client. Whether it is home routine maintenance or a large-scale project, we guarantee excellence in every job.
          </p>

          <Link
            href="/about"
            className="inline-block mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-300"
          >
            LEARN MORE
          </Link>
        </motion.div>

        {/* Right: Animated Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 relative w-full max-w-md mx-auto"
          whileHover={{ scale: 1.05, rotate: 1 }}
        >
          <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={HeroImage}
              alt="Gulf Fixit Services"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Optional floating decorative effect */}
          <motion.div
            className="absolute -top-6 -left-6 w-24 h-24 bg-red-500 rounded-full mix-blend-multiply opacity-30 blur-3xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-400 rounded-full mix-blend-multiply opacity-20 blur-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
}
