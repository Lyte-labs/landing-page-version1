"use client";
import { useState } from "react";
import { motion } from "framer-motion";
// import FloatingTextarea from "../FloatingTextarea";
import FloatingInput from "../FloatingInput";

export default function FooterContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: '',
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
      className="bg-transparent border p-5 mx-auto md:mx-0 md:p-8 rounded-2xl  shadow-xl max-w-lg w-full text-white"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-sm text-gray-300 mb-8"
      >
        Get Your Own Smart Ride
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
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div className="grid grid-col-1 sm:grid-cols-2 gap-12">
            <FloatingInput
              id="first_name"
              label="First Name*"
              value={formData.name}
              onChange={handleChange}
            />
            <FloatingInput
              id="last_name"
              label="Last Name*"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <FloatingInput
            id="email"
            type="email"
            label="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <FloatingInput
            id="phone"
            label="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="flex items-center justify-center bg-white text-black cursor-pointer font-light px-4 py-3 rounded-xl w-full transition-all border
                     shadow-sm
                    hover:bg-transparent hover:text-white focus:outline-none focus:ring-4 focus:ring-accent/30
               duration-300"
          >
           Join Now
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}
