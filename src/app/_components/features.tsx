"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUpVariants = {
  hidden: { opacity: 0.2, y: 120, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1 },
  },
};

export default function Features() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={{
          x: 10,
          scale: 1.02,
          boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-2xl p-6 bg-white rounded-lg shadow-lg"
      >
        <h1 className="text-4xl font-bold">Features:</h1>
        <ul className="mt-4 space-y-2 text-lg">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </motion.div>
    </section>
  );
}
