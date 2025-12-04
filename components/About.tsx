"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/public/images/about/about-1.png";

export default function AboutSection() {
  return (
    <section className="relative w-full py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-black dark:text-white mb-6">
            Welcome to <span className="text-red-600">GULF FIXIT</span>
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

        {/* Right: Contained Image with subtle animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 relative w-full max-w-md mx-auto"
          whileHover={{ scale: 1.03 }}
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

          {/* Subtle decorative floating effect */}
          <motion.div
            className="absolute -top-4 -left-4 w-16 h-16 bg-red-500 rounded-full mix-blend-multiply opacity-30 blur-2xl"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-400 rounded-full mix-blend-multiply opacity-20 blur-2xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
}
