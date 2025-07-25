"use client";

import { motion } from "framer-motion";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 120 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const fadeInDownVariants = {
  hidden: { opacity: 0, y: -120 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -120 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const fadeInRightVariants = {
  hidden: { opacity: 0, x: 120 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-black">
      <motion.div initial="hidden" animate="visible" variants={fadeInDownVariants}>
        <h1>Hello, Framer Motion!</h1>
        <p>This text will fade in and slide up.</p>
      </motion.div>
    </section>
  );
}
