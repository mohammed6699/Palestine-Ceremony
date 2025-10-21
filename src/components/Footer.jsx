import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 border-t border-green-600">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-semibold text-white">
            Palestine<span className="text-red-500"> Ceremony</span>
          </h3>
          <p className="text-gray-400 text-sm">
            Honoring the martyrs, preserving the truth, and raising global awareness.
          </p>
        </motion.div>

        {/* Center */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/about" className="hover:text-green-400">About</a></li>
            <li><a href="/awareness" className="hover:text-green-400">Awareness</a></li>
            <li><a href="/martyrs" className="hover:text-green-400">Messages</a></li>
            <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
          </ul>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-3"
        >
          <h4 className="text-white font-semibold mb-2">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-green-400"><Facebook size={20} /></a>
            <a href="#" className="hover:text-green-400"><Instagram size={20} /></a>
            <a href="#" className="hover:text-green-400"><Twitter size={20} /></a>
            <a href="#" className="hover:text-green-400"><Mail size={20} /></a>
          </div>
        </motion.div>
      </div>

      <div className="text-center py-4 border-t border-neutral-800 text-sm text-gray-500">
        © {year} Palestine Ceremony. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
