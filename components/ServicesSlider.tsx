"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "Interior Fit Out Works",
    description: "Complete interior solutions to transform your space.",
    image: "/images/services/interior-fit-Outs.png",
  },
  {
    title: "Air Conditioning",
    description: "Professional AC installation, service & repairs.",
    image: "/images/slider/ac.png",
  },
  {
    title: "Electrical Works",
    description: "Electrical maintenance, wiring & troubleshooting.",
    image: "/images/slider/electrical-1.png",
  },
  {
    title: "Partitions & False Ceiling Works",
    description: "Quality partitions & ceiling designs for all spaces.",
    image: "/images/services/Partitions-1.png",
  },
  {
    title: "Painting & Carpentry",
    description: "Professional painting and custom carpentry services.",
    image: "/images/slider/Painting-1.png",
  },
  {
    title: "Handyman Services",
    description: "Reliable multi-skill handyman services for home & office.",
    image: "/images/slider/handyman.png",
  },
];

export default function ServicesSlider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-70px" });

  return (
    <motion.section
      ref={ref}
      className="w-full py-24 px-6 bg-white text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      {/* HEADING */}
      <div className="w-full flex flex-col items-center justify-center text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          Dubai’s <span className="text-red-600">Professional Technical Team</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl text-lg md:text-xl">
          Experience seamless maintenance for your home & offices with our expert staff.
        </p>
      </div>

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={900}
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} w-3 h-3 rounded-full bg-red-600 opacity-70"></span>`,
        }}
        className="max-w-4xl mx-auto"
      >
        {slides.map((s, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="
                bg-white 
                rounded-3xl 
                shadow-xl 
                border 
                border-gray-100 
                p-8 
                md:p-10 
                max-w-3xl 
                mx-auto 
                hover:shadow-2xl 
                hover:-translate-y-1
                transition-all 
                duration-500
              "
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* IMAGE — FIXED (No white frame, no cropping issues) */}
              <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md group">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="100%"
                  className="
                    object-cover
                    object-center
                    transition-all 
                    duration-500 
                    group-hover:scale-105
                  "
                />
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-bold mt-6 text-black">{s.title}</h3>

              {/* DESCRIPTION */}
              <p className="text-gray-700 text-lg mt-2">{s.description}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href="tel:+971545999795"
          className="
            bg-red-600 
            text-white 
            px-10 
            py-3 
            rounded-full 
            font-semibold 
            shadow-lg 
            hover:bg-red-700 
            transition
          "
        >
          Need Assistance? Call Our Experts
        </a>
      </div>
    </motion.section>
  );
}
