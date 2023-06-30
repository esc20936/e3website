"use client";
import React from "react";
import Navbar from "./Components/Nav";
import { motion } from "framer-motion";
export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between aurora">
      <Navbar />

      <div className="flex flex-row items-center justify-center flex-1 w-full  text-center">
        {/* left side */}
        <div className="flex flex-col items-center justify-center flex-1 w-1/2  text-center px-20 ">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className=""
          >
            <h1 className="text-5xl md:text-8xl font-bold  colorText">
              E3 Solutions
            </h1>
            <p className="mt-3 text-xl md:text-2xl text-blue-900  font-semibold">
              Potenciando tu éxito con innovación
            </p>

            <div className="flex flex-row items-center justify-center mt-10 space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-500 text-white px-6 py-2 rounded-md text-sm"
              >
                <a href="#contact" className="font-medium">
                  Contáctanos
                </a>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className=" text-black border-solid border-2 border-gray-500  px-6 py-2 rounded-md text-sm"
              >
                <a href="#contact" className="font-medium">
                  Servicios 
                </a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
