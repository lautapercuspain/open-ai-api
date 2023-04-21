"use client"

import { motion } from "framer-motion"
import { Poppins } from "next/font/google"
import "../../styles/waterfall.css"

const popins = Poppins({
  variable: "--font-popins",
  subsets: ["latin"],
  weight: ["100", "300", "600"],
})

export default function SuperHero() {
  return (
    <>
      <section className={`${popins.variable} mt-48 mb-5 font-popins`}>
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="mx-auto w-[95%] cursor-pointer items-center justify-center bg-gradient-to-r from-[#A1FFE0] to-[#2C9DC0] bg-clip-text p-3 text-center font-popins text-4xl text-transparent
sm:flex sm:w-full sm:text-6xl"
        >
          Create Genius Code
        </motion.h1>
        <p className="text-lg mt-2 w-[100%] items-center justify-center px-3 text-center font-popins text-white sm:text-2xl">
          Develop Improved, Rapid, and Streamlined Code with your AI Genius
        </p>
      </section>
    </>
  )
}

// const effectClass = "effect"
// let bgMatrix = Array(80)
//   .fill(1, 0)
//   .map((_, i) => {
//     return (
//       <>
//         <span
//           key={i}
//           className={`${effectClass}2 text-[10px] ${
//             i < 30
//               ? "opacity-30"
//               : i < 50
//               ? "text-sm opacity-50"
//               : i > 50 && i < 80
//               ? "opacity-80"
//               : "opacity-100"
//           } px-3 text-gradient-dark`}
//         >
//           0
//         </span>
//         <span
//           key={i}
//           className={`${effectClass}2  ${
//             i < 30
//               ? " text-[10px] opacity-30"
//               : i < 50
//               ? "text-sm opacity-50"
//               : i > 50 && i < 80
//               ? "opacity-80"
//               : "opacity-100"
//           } px-3 text-purple-500`}
//         >
//           0
//         </span>
//         <span
//           key={i}
//           className={`${effectClass}2 ${
//             i < 30
//               ? " text-[10px] opacity-30"
//               : i < 50
//               ? "opacity-50"
//               : i > 50 && i < 80
//               ? "opacity-80"
//               : "opacity-100"
//           } px-3 text-purple-600`}
//         >
//           1
//         </span>
//         <span
//           key={i}
//           className={`${effectClass} ${
//             i < 30
//               ? " text-[10px] opacity-30"
//               : i === 50
//               ? " opacity-50"
//               : i > 50 && i < 80
//               ? "opacity-80"
//               : "opacity-100"
//           } px-3 text-purple-500`}
//         >
//           1
//         </span>
//         <span
//           key={i}
//           className={`${effectClass}  ${
//             i < 30
//               ? " text-[10px] opacity-30"
//               : i < 50
//               ? " opacity-50"
//               : i > 50 && i < 80
//               ? "opacity-80"
//               : "opacity-100"
//           } px-3 text-gradient-dark`}
//         >
//           0
//         </span>
//         <span
//           key={i}
//           className={`${effectClass} ${
//             i < 30
//               ? " text-[10px] opacity-30"
//               : i < 50
//               ? " opacity-50"
//               : i > 50 && i < 80
//               ? "opacity-80"
//               : "opacity-100"
//           } px-3 text-purple-500`}
//         >
//           1
//         </span>
//         <span
//           key={i}
//           className={` ${
//             i < 30
//               ? "text-[10px] opacity-30"
//               : i < 50
//               ? "opacity-50"
//               : i > 50 && i < 80
//               ? "opacity-80"
//               : "opacity-100"
//           } px-3 text-purple-500`}
//         >
//           0
//         </span>
//         <span
//           key={i}
//           className={`${
//             i < 30
//               ? "text-[10px] opacity-30"
//               : i < 50
//               ? "opacity-50"
//               : i > 50 && i < 80
//               ? "opacity-80"
//               : "opacity-100"
//           } px-3 text-purple-500`}
//         >
//           1
//         </span>
//         <span
//           key={i}
//           className={`${effectClass} ${
//             i < 30
//               ? "text-[10px] opacity-30"
//               : i < 50
//               ? " opacity-50"
//               : i > 50 && i < 80
//               ? "opacity-80"
//               : "opacity-100"
//           } px-3 text-purple-500`}
//         >
//           1
//         </span>
//         <span
//           key={i}
//           className={`${effectClass}2  ${
//             i < 30
//               ? "text-[10px] opacity-30"
//               : i < 50
//               ? "text-sm opacity-50"
//               : i > 50 && i < 80
//               ? "opacity-80"
//               : "opacity-100"
//           } px-3 text-purple-500`}
//         >
//           1
//         </span>
//         <span
//           key={i}
//           className={`${
//             i < 30
//               ? "text-[10px] opacity-30"
//               : i < 50
//               ? "text-sm opacity-50"
//               : i > 50 && i < 80
//               ? "opacity-80"
//               : "opacity-100"
//           } px-3 text-purple-600`}
//         >
//           1
//         </span>
//       </>
//     )
//   })
/* <div
    className={`absolute top-0 mt-14 flex h-[600px] w-full flex-row flex-wrap overflow-hidden`}
  >
    {bgMatrix}
  </div> */
