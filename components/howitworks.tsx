"use client";
import { motion } from "framer-motion";
import { PhoneIcon, ClockIcon, WrenchScrewdriverIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const steps = [
  {
    title: "Book Your Service",
    description: "Call us or fill the online form to schedule your maintenance or repair service.",
    icon: <PhoneIcon className="w-10 h-10 text-red-600" />,
  },
  {
    title: "Technician Arrives",
    description: "Our skilled technician arrives on time with the right tools and equipment.",
    icon: <ClockIcon className="w-10 h-10 text-red-600" />,
  },
  {
    title: "Work Completed",
    description: "We complete the job efficiently, ensuring everything is working perfectly.",
    icon: <WrenchScrewdriverIcon className="w-10 h-10 text-red-600" />,
  },
  {
    title: "Quality Check & Feedback",
    description: "We verify the work, ensure your satisfaction, and collect your feedback.",
    icon: <CheckCircleIcon className="w-10 h-10 text-red-600" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Decorative floating circles */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-20 -left-20 w-72 h-72 bg-red-200/30 rounded-full blur-3xl"
          animate={{ y: [0, 15, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-red-300/20 rounded-full blur-3xl"
          animate={{ y: [0, -15, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">
          How <span className="text-red-600">It Works</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          Follow these simple steps to get your home or office maintenance done quickly and professionally.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 p-8 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="/get-estimate"
            className="inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-300"
          >
            Get Your Service Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
