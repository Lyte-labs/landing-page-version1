"use client";

import { motion } from "framer-motion";
import { Zap, Layers, Bike, Settings } from "lucide-react";
import Button from "./Button";

const features = [
  {
    id: 1,
    title: "Live Ride Updates",
    description:
      "You don't have to guess how much distance you have covered any longer, you can see everything in real time, as clear as day",
    icon: <Zap size={25} />,
  },
  {
    id: 2,
    title: "Anti-Theft",
    description:
      "The bike is yours, hence we have in-build technology to help make sure it stays yours, no one is allowed to steal it ever",
    icon: <Layers size={25} />,
  },
  {
    id: 3,
    title: "Zero Paddling",
    description:
      "You can get going without even breaking or stopping at intervals to catch your breath, let the motor do the work while you enjoy the view of the environment while moving with ease",
    icon: <Bike size={25} />,
  },
  {
    id: 4,
    title: "Removable Battery",
    description:
      "Battery low? Don't worry about it, you can easily remove the battery and swap it for a fully charged one at one of our swapping shops around you",
    icon: <Settings size={25} />,
  },
];

export default function LytePackFeaturesSection() {
  return (
    <section
      id="feature"
      className="bg-transparent text-white px-4 py-6 sm:px-8 sm:py-12 lg:px-20 lg:py-20"
    >
      <div className="mx-auto w-full space-y-6 sm:space-y-12 lg:space-y-16">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl text-left space-y-4"
        >
          {" "}
          <div className="sm:hidden pr-4">
            <h2 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              Smarts That Move You Without you stressing
            </h2>
          </div>
          <h1 className="hidden sm:block text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
            Smarts That Move You Without you stressing
          </h1>
          <h3 className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-lg">
            Unlock next-level features that make every ride safer, smoother,
            faster and on top of it all, stress-free
          </h3>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 md:gap-12 lg:gap-16 min-w-fit"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 80, rotate: -60 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`relative w-full ${
                feature.id === 3
                  ? "lg:translate-x-16"
                  : feature.id === 4
                  ? "lg:translate-x-20"
                  : ""
              }`}
            >
              <div className="bg-[#1E1E1E] border border-white/70 rounded-xl p-4 sm:p-6 lg:p-8 flex flex-col justify-between h-full min-h-[160px] sm:min-h-[180px] lg:min-h-[200px] w-fit max-w-md mx-auto shadow-lg">
                <h2 className="text-white text-base sm:text-lg lg:text-xl font-extrabold mb-2">
                  {feature.title}
                </h2>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-auto">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w- 12 lg:h- 12 flex items-center justify-center bg-white text-[#1E1E1E] rounded-2xl flex-shrink-0">
                    {feature.icon}
                  </div>
                  <p className="text-white text-xs sm:text-md lg:text-base leading-snu w-full">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Connect Button */}
        <div className="flex justify-start">
          <Button
            variant="outline"
            size="sm"
            href="/contact-us"
            className="mt-2 sm:mt-6
                     inline-flex justify-center items-center 
                      py-2 px-12 
                     rounded-2xl border border-gray-300
                     bg-white text-gray-900 font-medium shadow-sm
                     hover:bg-transparent hover:text-white 
                     focus:outline-none focus:ring-4 focus:ring-accent/30
                     transition-colors duration-300
                     text-lg"
          >
            Connect
          </Button>
        </div>
      </div>
    </section>
  );
}
