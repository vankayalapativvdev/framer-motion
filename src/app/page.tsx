"use client";

import { motion } from "framer-motion";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 120, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 4 },
  },
};

const fadeInDownVariants = {
  hidden: { opacity: 0, y: -40 },
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
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInDownVariants}
      >
        <h1 className="text-4xl font-bold">Hello, Framer Motion!</h1>
        
      </motion.div>

      <motion.div
      initial = "hidden"
      animate = "visible"
      >



      </motion.div>

      <p>This text will fade in and slide up.</p>
    </section>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.05, // delay between each letter
//     },
//   },
// };

// const letterVariants = {
//   hidden: { opacity: 0, y: -40, filter: "blur(10px)" },
//   visible: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: { duration: 0.4, ease: "easeOut" },
//   },
// };

// export default function Home() {
//   const text = "Hello, Framer Motion!";
//   const letters = text.split("");

//   const [showWave, setShowWave] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setShowWave(false); // remove wave after animation
//     }, 1200); // slightly longer for wave effect
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-black">
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="flex text-3xl font-bold"
//       >
//         {letters.map((letter, index) => (
//           <motion.span key={index} variants={letterVariants}>
//             {letter === " " ? "\u00A0" : letter}
//           </motion.span>
//         ))}
//       </motion.div>

//       <div className="relative">
//         {/* Base Text */}
//         <h1 className="text-2xl font-bold text-black">
//           E-Commerce Price tracker and Alerts tool
//         </h1>

//         {/* Wave Gradient Overlay */}
//         {showWave && (
//           <motion.h1
//             initial={{ backgroundPosition: "0% 50%" }}
//             animate={{ backgroundPosition: "200% 50%" }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="absolute top-0 left-0 text-2xl font-bold 
//                        bg-[linear-gradient(120deg,_blue_0%,_orange_50%,_red_100%)] 
//                        bg-clip-text text-transparent"
//             style={{
//               backgroundSize: "200% 200%",
//               whiteSpace: "nowrap",
//             }}
//           >
//             E-Commerce Price tracker and Alerts tool
//           </motion.h1>
//         )}
//       </div>
//       <p className="mt-4">This text will fade in and slide up.</p>
//     </section>
//   );
// }
