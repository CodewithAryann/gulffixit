"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
// import "./services-slider.css"; // red arrow styling

const slides = [
  {
    title: "Interior Fit Out Works",
    description: "Complete interior solutions to transform your space.",
    image: "/images/services/fit-out.png"
  },
  {
    title: "Air Conditioning",
    description: "Professional AC installation, service & repairs.",
    image: "/images/services/air-conditioning.png"
  },
  {
    title: "Electrical Works",
    description: "Electrical maintenance, wiring & troubleshooting.",
    image: "/images/services/electrical.png"
  },
  {
    title: "Partitions & False Ceiling Works",
    description: "Quality partitions & ceiling designs for all spaces.",
    image: "/images/services/partitions.png"
  },
  {
    title: "Painting & Carpentry",
    description: "Professional painting and custom carpentry services.",
    image: "/images/services/painting.png"
  },
  {
    title: "Handyman Services",
    description: "Reliable multi-skill handyman services for home & office.",
    image: "/images/services/handy.png"
  }
];

export default function ServicesSlider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="w-full py-20 px-6 relative bg-white" // 👈 WHITE BG
      animate={{ color: isInView ? "#000000" : "#333333" }} // 👈 text stays dark
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center mb-10">
  Dubai’s <span className="text-red-600">Professional Technical Team</span>
</h2>

      <p className="text-center mb-12 opacity-80 max-w-xl mx-auto">
        Experience seamless maintenance for your home & offices with our expert staff.
      </p>

      <Swiper
  modules={[Navigation, Autoplay]}
  navigation
  autoplay={{ delay: 3500, disableOnInteraction: false }} // 👈 SLOW SLIDE CHANGE
  speed={1200} // 👈 SLOW & SMOOTH TRANSITION
  loop={true}
  spaceBetween={40}
  slidesPerView={1}
  className="max-w-3xl mx-auto"
>

        {slides.map((s, index) => (
          <SwiperSlide key={index}>
            <motion.div
  className="text-center p-8 bg-white rounded-2xl shadow-md border"
>
  <div className="w-full h-64 relative mb-6">
    <Image
      src={s.image}
      alt={s.title}
      fill
      className="object-cover rounded-xl"
      sizes="100%"
      priority={index === 0} // first image loads fast
    />
  </div>

  <h3 className="text-2xl font-semibold mb-3 text-black">{s.title}</h3>
  <p className="text-lg text-gray-700">{s.description}</p>
</motion.div>

          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-10">
        <a
          href="tel:+971XXXXXXXXX"
          className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-red-700 transition"
        >
          Need Assistance? Call Our Experts
        </a>
      </div>
    </motion.div>
  );
}
