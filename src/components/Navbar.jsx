import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Awareness", path: "/awareness" },
    { name: "Messages", path: "/matryrs" },
    { name: "Story", path: "/story" }
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-red-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 via-white to-red-600" />
          <Link
            to="/"
            className="text-white font-bold text-xl tracking-wide"
          >
            Palestine<span className="text-red-500">Ceremony</span>
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-green-400 transition ${
                  isActive ? "text-green-400" : "text-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-black border-t border-red-700 text-center py-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className="block py-2 text-gray-300 hover:text-green-400"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
