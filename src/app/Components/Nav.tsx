"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
// import { Link } from 'react-router-dom'; // If you're using React Router

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full z-10">
      <div className="w-full px-4 sm:px-0 lg:px-8">
        <div className="flex items-center justify-end h-16">
          <div className="flex items-center">
            {/* <Link href="/" className="text-white font-bold text-lg">
              E3 Solutions
            </Link> */}
          </div>
          <div className="hidden md:block mr-10">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-gray-900 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Inicio
              </Link>
              <Link
                href="/automatization"
                className="text-gray-900 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Automatización
              </Link>
              <Link
                href="/Automatization"
                className="text-gray-900 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Emotron
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                CCTV-Cámaras
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Asesorias
              </Link>
              {/* Add more navigation links as needed */}
            </div>
          </div>
          <div className="block md:hidden">
            <motion.button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none"
              aria-expanded={isOpen}
              whileTap={{ scale: 0.9 }} // Example of tap animation, adjust as needed
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <motion.svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  initial={{ opacity: 0 }} // Initial state before animation
                  animate={{ opacity: 1 }} // Animation when the button is rendered
                  transition={{ duration: 0.3 }} // Transition duration
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  initial={{ opacity: 0 }} // Initial state before animation
                  animate={{ opacity: 1 }} // Animation when the button is rendered
                  transition={{ duration: 0.3 }} // Transition duration
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </motion.svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="md:hidden absolute w-full z-10 rounded-sm bg-white bg-opacity-10 backdrop-blur-lg rounded drop-shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Inicio
              </Link>
              <Link
                href="/about"
                className="text-gray-900 hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Automatización
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Emotron
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                CCTV-Cámaras
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Asesorias
              </Link>
              {/* Add more navigation links as needed */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
