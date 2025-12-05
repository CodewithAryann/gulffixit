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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          subject: "New Contact Form Submission - Gulf Fixit",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          redirect: "",
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const inputClasses =
    "w-full px-5 py-3 bg-white text-black placeholder-gray-400 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 shadow-sm transition-all duration-300";

  const textareaClasses =
    "w-full px-5 py-3 bg-white text-black placeholder-gray-400 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 shadow-sm transition-all duration-300 resize-none";

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">
            Get In <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Contact Gulf Fixit for premium MEP solutions. Fill out the form below and our expert team will get back to you shortly.
          </p>
        </motion.div>

        {/* Form Container */}
        <div className="relative">
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {submitStatus === "success" ? (
              <motion.div
                className="text-center p-8 bg-green-50 border border-green-200 rounded-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <CheckCircleIcon className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-black mb-2">Message Sent Successfully!</h4>
                <p className="text-gray-700">
                  Thank you for contacting Gulf Fixit. Our team will reach out within 24 hours.
                </p>
              </motion.div>
            ) : submitStatus === "error" ? (
              <motion.div
                className="text-center p-8 bg-red-50 border border-red-200 rounded-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <XCircleIcon className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-black mb-2">Something went wrong!</h4>
                <p className="text-gray-700">
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
                    className={inputClasses}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
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
                    className={inputClasses}
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className={inputClasses + " appearance-none"}
                  >
                    <option value="" disabled>Select a Service *</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service} className="bg-white text-black">
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
                  className={textareaClasses}
                />

                <div className="relative group">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-red-600 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-70 cursor-pointer"
                  >
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
                  </motion.button>
                </div>
              </form>
            )}

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-700">
                For urgent inquiries, call us at{" "}
                <span className="text-red-600 font-semibold">+971 4 287 1395</span> /{" "}
                <span className="text-red-600 font-semibold">+971 54 599 9795</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
