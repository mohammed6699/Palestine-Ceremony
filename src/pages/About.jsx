import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 md:px-16">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-green-500">
          About Our Mission
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed mb-10">
          The <span className="text-red-500 font-semibold">Palestine Ceremony Website</span> 
          is a memorial and awareness platform dedicated to the brave souls 
          who sacrificed their lives for freedom, dignity, and justice.  
          Our mission is to preserve their stories, educate the world about 
          the Palestinian struggle, and ensure that every martyr is remembered with honor.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div
            className="bg-neutral-900 rounded-2xl p-8 shadow-lg border-l-4 border-green-600"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              🌿 Our Vision
            </h2>
            <p className="text-gray-400">
              To create a digital space of remembrance and hope — where each story
              reflects the strength, humanity, and resilience of the Palestinian people.
            </p>
          </motion.div>

          <motion.div
            className="bg-neutral-900 rounded-2xl p-8 shadow-lg border-l-4 border-red-600"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-semibold text-red-400 mb-4">
              ✊ Our Goal
            </h2>
            <p className="text-gray-400">
              To spread awareness about the ongoing struggle, educate people around
              the world, and remind humanity of the cost of silence and injustice.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
