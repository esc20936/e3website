import React from "react";
import "../app/globals.css";
import Navbar from "@/app/Components/Nav";
import Image from "next/image";
import { motion } from "framer-motion";
import Card from "../app/Components/Card/Card";
import industryImage from "../../public/Images/Automatization/industry.webp";
import emotronImage from "../../public/Images/Emotron/emotron.webp";


export default function Automatization() {
  return (
    <main className="flex flex-col h-screen w-full items-start justify-start">
      {/* backround */}
      <Navbar theme="dark" />
      {/* Hero Section */}
      <div className="flex flex-col  items-center justify-center h-1/4 w-full bg-black">
        <h1 className="text-3xl md:text-6xl font-bold colorText mb-12">
          Emotron
        </h1>
      </div>
      {/* Info section */}
      <div className=" flex flex-col items-center justify-center w-full h-auto p-8 bg-slate-100">
        {/* row items */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-auto  bg-white rounded-lg drop-shadow-lg">
          {/* left side */}
          <div className="flex flex-col items-start justify-end flex-1 w-full md:w-5/6 p-4 md:p-20 text-center  ">
            {/* why do it with us */}
            <h1 className="text-xl md:text-3xl font-bold text-black text-left">
              ¿Quien es emotron?
            </h1>
            <p className="mt-3 text-md md:text-xl text-gray-800  font-normal text-left">
              Emotron es una empresa europea líder a nivel mundial en la gestión
              y aplicación de energía eléctrica. ofrecen sistemas de
              accionamiento completos basados en una amplia gama de productos
              estándar, como variadores de velocidad y arrancadores progresivos.
              Su tecnología es aplicable a bombas, ventiladores, compresores,
              soplantes, grúas, trituradoras, centrifugadoras, molinos,
              mezcladoras, transportadoras, sierras, ascensores, y muchos otros
              equipos.

              <span
                className="text-black font-semibold"
              > E3 Solutions es el distribuidor autorizado de Emotron en Latinoamérica y el Caribe.</span>
            </p>

            {/* Si tienes dudas comunicate con nosotros */}
            <div className="flex flex-col items-center justify-center mt-10 space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className=" text-black border-solid border-2 border-gray-500  px-6 py-2 rounded-md text-sm"
              >
                <a href="https://www.emotron.es/products/" className="font-medium">
                  Ver productos
                </a>
              </motion.button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 w-full md:w-1/2  text-center ">
            <aside className="flex flex-col items-center justify-center flex-1 w-3/4 md:w-3/4 my-8 md:mt-0 ">
              <Image src={emotronImage} alt="Hero" className="
              rounded-lg
                
              brightness-50 hover:brightness-100 transform hover:scale-105 transition duration-500 ease-in-out
            
              " />
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
