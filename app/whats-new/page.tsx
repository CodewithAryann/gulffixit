"use client";

import { motion } from "framer-motion";
import { Megaphone, Percent, Clock } from "lucide-react";
import Head from "next/head";

export default function WhatsNew() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.7 },
    }),
  };

  const updates = [
    {
      icon: <Percent className="w-12 h-12 text-red-600" />,
      title: "MEP Solutions On 20% Discount For Homes & Businesses In Dubai",
      desc:
        "Gulf Fixit now offers 20% discount on specialized MEP services for residential and commercial spaces. From installations and upgrades to repairs and ongoing maintenance, our experienced team manages every aspect of your MEP needs with precision. Tailored with Dubai’s unique standards, our services support comfortable, energy-efficient and safe environments.",
    },
    {
      icon: <Clock className="w-12 h-12 text-red-600" />,
      title: "Hassle Free Maintenance With Our Monthly & Annual Packages",
      desc:
        "Monthly and annual MEP maintenance packages covering plumbing, electrical, HVAC and more, keeping your property in top condition year-round. Contact our service representatives to select the package that suits your requirements.",
    },
    {
      icon: <Megaphone className="w-12 h-12 text-red-600" />,
      title: "Fast & Professional Maintenance Services Across Dubai",
      desc:
        "We provide 24/7 maintenance services across Dubai. From urgent plumbing to late-night electrical fixes, our team ensures your property remains comfortable, hassle-free and fully functional.",
    },
  ];

  return (
    <>
      {/* SEO HEAD */}
      <Head>
        <title>What&apos;s New | Gulf Fixit Dubai</title>
        <meta
          name="description"
          content="Discover the latest MEP solutions, maintenance packages, and professional services from Gulf Fixit Dubai. Stay updated with our new offers and expert services."
        />
        <link rel="canonical" href="https://www.gulffixit.com/whats-new" />
      </Head>

      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-black text-center mb-16"
          >
            What&apos;s New
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {updates.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="
                  bg-white
                  p-8
                  rounded-2xl
                  border
                  border-gray-200
                  shadow-lg
                  transition-all
                  duration-500
                  hover:shadow-[0_0_30px_rgba(255,0,0,0.5)]
                  hover:border-red-600
                  hover:scale-105
                  relative
                  overflow-hidden
                "
              >
                {/* Optional Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-red-600 transition-all duration-500"></div>

                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
