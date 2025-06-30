"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import FloatingTextarea from "../FloatingTextarea";
import FloatingInput from "../FloatingInput";

export default function FooterContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subscribe: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type } = e.target;
    const target = e.target;
    if (type === "checkbox" && "checked" in target) {
      setFormData((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: target.value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-slate-100/40 to-blue-500/10 p-6 mx-auto md:mx-0 md:p-10 rounded-2xl backdrop-blur-lg shadow-xl max-w-full w-fit text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-2"
      >
        Get in Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-sm text-gray-300 mb-8"
      >
        Fill out the form and our team will get back to you soon.
      </motion.p>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-400 font-medium py-8 text-center"
        >
          Thank you! We’ll be in touch shortly.
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Floating Input Fields */}
          <FloatingInput
            id="name"
            label="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <FloatingInput
            id="email"
            type="email"
            label="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <FloatingTextarea
            id="message"
            label="Your Message"
            value={formData.message}
            onChange={handleChange}
          />

          {/* Subscribe checkbox with custom style */}
          <motion.label
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3 cursor-pointer select-none"
            htmlFor="subscribe"
          >
            <input
              type="checkbox"
              name="subscribe"
              id="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className=" h-5 w-5 border-2 cursor-pointer border-accent rounded-sm bg-white/10 checked:bg-accent transition-colors duration-300 focus:ring-accent"
            />
            <motion.span
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-base text-gray-300"
            >
              Subscribe to newsletter
            </motion.span>
          </motion.label>

          {/* Animated Send Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#38bdf8" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="flex items-center justify-center bg-blue-100 text-black cursor-pointer font-semibold px-6 py-3 rounded-full w-full transition-all duration-300 shadow-lg hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/50"
          >
            <Send size={18} className="mr-2" />
            Send Message
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}
