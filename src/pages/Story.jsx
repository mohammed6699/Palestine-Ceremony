import React from "react";
import { motion } from "framer-motion";
import timelineData from "../data/timelineData";

const StoryPage = () => {
  return (
    <section className="relative text-white min-h-screen overflow-hidden pt-20 pb-16 px-6">

      {/* 🌈 Animated Palestine Flag Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
         <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-black to-red-700 opacity-50"></div>

      {/* Optional flag overlay pattern */}
      <div className="absolute inset-0 bg-[url('/images/palestine-flag-overlay.png')] bg-cover bg-center opacity-10"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold text-green-500 mb-4 drop-shadow-lg"
        >
          The Story of Palestine
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto"
        >
          From the dawn of its civilization to today’s ongoing struggle, Palestine’s story is one of faith, endurance, and unshakable hope.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full"></div>

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className={`mb-12 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:w-1/2 px-6">
              <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border-l-4 border-green-500 backdrop-blur-md bg-opacity-70">
                <h3 className="text-2xl font-bold text-red-500 mb-2">{item.year}</h3>
                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Closing Section */}
      <motion.div
        className="relative z-10 text-center mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p className="italic text-gray-400 text-lg mb-6">
          “They tried to bury us, but they didn’t know we were seeds.”
        </p>
        <div className="flex justify-center gap-8">
          <a
            href="https://ar.wikipedia.org/wiki/%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold text-white transition"
          >
            Learn More About Palestine
          </a>
          <a
            href="https://youtu.be/f0oy-NicIgE?si=i3erhlnYYs2HK23n"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold text-white transition"
          >
            Watch Video
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default StoryPage;
