import React from "react";
import "../app/globals.css";
import Navbar from "@/app/Components/Nav";
import Image from "next/image";
import { motion } from "framer-motion";
import camaraImage from "../../public/Images/Camaras/camara.webp";
import Link from "next/link";
export default function Automatization() {
  return (
    <main className="flex flex-col h-screen w-full items-start justify-start">
      {/* backround */}
      <Navbar theme="dark" />
      {/* Hero Section */}
      <div className="flex flex-col  items-center justify-center h-1/4 w-full bg-black">
        <h1 className="text-3xl md:text-6xl font-bold colorText mb-12">
          Asesorías
        </h1>
      </div>
      {/* Info section */}
      <div className=" flex flex-col items-center justify-center w-full h-auto p-8 bg-slate-100">
        {/* row items */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-auto  ">
          {/* left side */}
          <div className="flex flex-col items-start justify-end flex-1 w-full md:w-3/6 p-4 md:p-20 text-center bg-white rounded-lg drop-shadow-lg ">
            {/* why do it with us */}
            <h1 className="text-xl md:text-3xl font-bold text-black text-left">
              Lo que se puede medir se puede mejorar
            </h1>
            <p className="mt-3 text-md md:text-xl text-gray-800  font-normal text-left">
              Como empresa, nos enorgullece ofrecer una amplia gama de servicios
              de asesoría para satisfacer las necesidades de nuestros clientes
              en el área eléctrica, mecánica y control de procesos. Nuestro
              experimentado equipo de expertos está capacitado para brindar
              asesoramiento técnico y soluciones innovadoras en cada uno de
              estos campos. Ya sea que necesite orientación en diseño y
              mantenimiento de sistemas eléctricos, análisis de fallas mecánicas
              o mejora de procesos industriales, estamos comprometidos en
              proporcionar un servicio integral y personalizado. Nuestro
              objetivo es asegurar la eficiencia, la seguridad y el rendimiento
              óptimo de las operaciones de nuestros clientes, trabajando en
              estrecha colaboración con ellos para alcanzar resultados
              excepcionales.
            </p>

            {/* Si tienes dudas comunicate con nosotros */}
            <div className="flex flex-col items-center justify-center mt-10 space-x-4">
           <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className=" text-black border-solid border-2 border-gray-500  px-6 py-2 rounded-md text-sm"
              >
                Contáctanos
              </motion.button>
            </Link>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
