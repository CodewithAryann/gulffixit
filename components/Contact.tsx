"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PaperAirplaneIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const services = [
    "Electrical Services",
    "Plumbing Services",
    "HVAC Services",
    "Fire Fighting Systems",
    "Building Maintenance",
    "Industrial MEP",
    "Residential MEP",
    "Commercial MEP",
    "Other",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Form data:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Get In <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Contact Gulf Fixit for premium MEP solutions. Fill out the form below and our expert team will get back to you shortly.
          </p>
        </motion.div>

        {/* Form Container with WHITE GLOW BEHIND */}
        <div className="relative">
          {/* White glow effect ONLY behind the form */}
          <div className="absolute inset-0 -z-10 bg-white/10 blur-3xl rounded-3xl transform scale-105"></div>
          
          {/* The actual form */}
          <motion.div
            className="bg-black/90 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {submitStatus === "success" ? (
              <motion.div
                className="text-center p-8 bg-white/5 border border-white/30 rounded-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <CheckCircleIcon className="w-16 h-16 text-white mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h4>
                <p className="text-gray-300">
                  Thank you for contacting Gulf Fixit. Our team will reach out within 24 hours.
                </p>
              </motion.div>
            ) : submitStatus === "error" ? (
              <motion.div
                className="text-center p-8 bg-white/5 border border-red-700/30 rounded-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <XCircleIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Something went wrong!</h4>
                <p className="text-gray-300">
                  Please try again or contact us via phone/email.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-black text-white placeholder-gray-400 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 shadow-inner transition-all duration-300"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-black text-white placeholder-gray-400 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 shadow-inner transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-black text-white placeholder-gray-400 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 shadow-inner transition-all duration-300"
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-black text-white rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 shadow-inner transition-all duration-300 appearance-none"
                  >
                    <option value="" disabled>Select a Service *</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service} className="bg-black text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Project Details *"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 bg-black text-white placeholder-gray-400 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 shadow-inner transition-all duration-300 resize-none"
                />

                {/* Red button with glow on hover */}
                <div className="relative group">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-linear-to-r from-red-600 to-red-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-3 relative overflow-hidden"
                  >
                    {/* Inner glow on hover */}
                    <div className="absolute inset-0 bg-linear-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10">
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <>
                          Send Message
                          <PaperAirplaneIcon className="w-5 h-5 inline ml-2" />
                        </>
                      )}
                    </span>
                  </motion.button>
                  
                  {/* Outer red glow effect on hover */}
                  <div className="absolute -inset-1 bg-linear-to-r from-red-500 to-red-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10 group-hover:scale-105 group-hover:blur-xl"></div>
                </div>
              </form>
            )}

            {/* Additional info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400">
                For urgent inquiries, call us at{" "}
                <span className="text-red-400 font-semibold">+971 4 287 1395</span> / <span className="text-red-400 font-semibold">+971 4 287 1395</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}