import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient (Palestine colors) */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-black to-red-700 opacity-50"></div>

      {/* Optional flag overlay pattern */}
      <div className="absolute inset-0 bg-[url('/images/palestine-flag-overlay.png')] bg-cover bg-center opacity-10"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 md:px-12 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Remembering the Souls, <br />
          <span className="text-green-500">Preserving the Truth</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Honoring the martyrs of Palestine 1F51F8 keeping their memories alive,
          telling their stories, and spreading awareness of their enduring
          struggle for freedom and justice.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            href="/martyrs"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full font-semibold shadow-lg transition"
          >
             View Messages
          </Link>
          <Link
            href="/awareness"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold shadow-lg transition"
          >
            Learn More
          </Link>
        </div>
      </motion.div>

      {/* Subtle animated background light */}
      <motion.div
        className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-green-700 blur-[150px] opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      ></motion.div>
    </section>
  );
};

export default HeroSection;
