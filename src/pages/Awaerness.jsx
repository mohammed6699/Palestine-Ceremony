import React from "react";
import { motion } from "framer-motion";

const Awareness = () => {
  return (
    <section className="flex items-center justify-center bg-gradient-to-b from-black via-neutral-950 to-red-950 text-white py-20 px-6 md:px-16">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="mt-10 text-4xl md:text-5xl font-extrabold mb-8 text-green-500">
          Spread Awareness — Stand for Truth
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed mb-12">
          Awareness is resistance. Every shared story, every read article, and every 
          conversation about Palestine helps break the wall of silence.  
          Here we aim to educate, inform, and inspire change through truth.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "📚 Learn the History",
              text: "Understand the roots of the struggle and the reality of the ongoing occupation.",
              color: "border-green-600"
            },
            {
              title: "🕊️ Share the Stories",
              text: "Every martyr, every family, every child deserves to be heard and remembered.",
              color: "border-red-600"
            },
            {
              title: "🌍 Join the Movement",
              text: "Awareness is power — use your voice to advocate for justice and humanity.",
              color: "border-white"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`bg-neutral-900 p-8 rounded-2xl border-l-4 ${item.color} shadow-lg`}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-green-400">{item.title}</h3>
              <p className="text-gray-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Awareness;
