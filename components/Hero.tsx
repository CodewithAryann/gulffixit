"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const images = [
    "/images/hero/hero-img-1.png",
    "/images/hero/hero-img-6.png",
    "/images/hero/hero-img-7.png",
    "/images/hero/hero-img-8.png",
    "/images/hero/hero-img-9.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % images.length), 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Slideshow with AnimatePresence */}
      <AnimatePresence>
        {images.map((img, i) =>
          i === index ? (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={img}
                alt={`Hero image ${i + 1}`}
                fill
                priority={i === 0}
                className="object-cover object-center w-full h-full"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]"></div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-6 text-left">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl"
        >
          Keeping Your Spaces <span className="text-red-600">Pristine</span>
          <br /> With Expert Maintenance Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mt-4 leading-relaxed"
        >
          We ensure your spaces are kept in top-notch condition with skilled technicians ready to tackle any repair or maintenance task — <br />
          <span className="text-red-600 font-semibold">anywhere, anytime in Dubai.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link
            href="/get-estimate"
            className="mt-6 inline-block px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-300"
          >
            Get a FREE Estimate
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
