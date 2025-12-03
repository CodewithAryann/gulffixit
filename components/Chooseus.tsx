"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import WhyChooseUsImage from "@/public/images/about/about.png"; // replace with your image path
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
  SparklesIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Highly Skilled Team of Professionals",
      icon: <CheckCircleIcon className="w-7 h-7 text-red-600" />,
    },
    {
      title: "Commitment to Quality & Perfection",
      icon: <ShieldCheckIcon className="w-7 h-7 text-red-600" />,
    },
    {
      title: "Rapid Response & Reliable Support",
      icon: <ClockIcon className="w-7 h-7 text-red-600" />,
    },
    {
      title: "Customized Solutions for Every Project",
      icon: <SparklesIcon className="w-7 h-7 text-red-600" />,
    },
    {
      title: "Energy Efficient & Cost Effective",
      icon: <BoltIcon className="w-7 h-7 text-red-600" />,
    },
    {
      title: "Customer Satisfaction Guaranteed",
      icon: <CheckCircleIcon className="w-7 h-7 text-red-600" />,
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-black overflow-hidden">
      {/* Decorative floating circles */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-[-100px] left-[-100px] w-72 h-72 md:w-96 md:h-96 bg-red-500/20 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-120px] right-[-120px] w-72 h-72 md:w-96 md:h-96 bg-red-400/20 rounded-full blur-3xl"
          animate={{ y: [0, -15, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-start gap-8 lg:gap-12">
        {/* Left: Text Content */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Why <span className="text-red-600">Choose Us</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
            Quality MEP Solutions For Dubai&apos;s Residential & Commercial Sectors.
            Gulf Fixit prioritizes quality, reliability, and expertise. Our team
            brings years of experience delivering customized solutions for every project.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
  {features.map((feature, idx) => (
    <motion.div
      key={idx}
      className="
        flex items-start gap-3 md:gap-4 p-4 
        bg-black/80 backdrop-blur-sm 
        rounded-xl md:rounded-2xl shadow-lg 
        border border-white/20
        hover:border-white 
        transition-all duration-300 
      "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        y: -5,
        boxShadow: "0 0 20px rgba(255,255,255,0.5)",
      }}
    >
      <div className="shrink-0 mt-1 text-white">{feature.icon}</div>

      <p className="text-sm md:text-base lg:text-lg font-semibold text-white">
        {feature.title}
      </p>
    </motion.div>
  ))}
</div>

        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="flex-1 w-full relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src={WhyChooseUsImage}
              alt="Why Choose Us - Gulf Fixit MEP Services"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              quality={90}
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
          </div>

          {/* Subtle floating decorative circles */}
          <motion.div
            className="absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 bg-red-500/40 rounded-full mix-blend-multiply blur-xl"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-red-400/30 rounded-full mix-blend-multiply blur-xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-red-600 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </section>
  );
}