import React from "react";
import "../app/globals.css";
import Navbar from "@/app/Components/Nav";
import Image from "next/image";
import { motion } from "framer-motion";
import camaraImage from "../../public/Images/Camaras/camara.webp";

export default function Automatization() {
  return (
    <main className="flex flex-col h-screen w-full items-start justify-start">
      {/* backround */}
      <Navbar theme="dark" />
      {/* Hero Section */}
      <div className="flex flex-col  items-center justify-center h-1/4 w-full bg-black">
        <h1 className="text-3xl md:text-6xl font-bold colorText mb-12">
          Cámaras de seguridad
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
              Distribuidores de cámaras certificadas por el gobierno de Estados
              Unidos
            </h1>
            <p className="mt-3 text-md md:text-xl text-gray-800  font-normal text-left">
              Ofrecemos una amplia gama de cámaras de seguridad de la reconocida
              marca Bolide, certificada por el Gobierno de los Estados Unidos.
              Nuestra selección incluye opciones versátiles para satisfacer
              diversas necesidades, desde cámaras con tecnología de
              reconocimiento facial de vanguardia hasta cámaras diseñadas
              especialmente para negocios y vehículos. Estas cámaras garantizan
              una vigilancia eficiente y confiable, brindando tranquilidad y
              protección tanto a nivel personal como empresarial.
              <span className="text-black font-semibold">
                {" "}
                E3 Solutions es distribuidor autorizado de Bolide en
                Guatemala.
              </span>
            </p>

            {/* Si tienes dudas comunicate con nosotros */}
            <div className="flex flex-col items-center justify-center mt-10 space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className=" text-black border-solid border-2 border-gray-500  px-6 py-2 rounded-md text-sm"
              >
                <a
                  href="https://drive.google.com/file/d/1mtrdh95-J2UWCsmRK5lNJNKuj5PbrwEk/view"
                  className="font-medium"
                >
                  Ver cámaras
                </a>
              </motion.button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 w-full md:w-1/2  text-center ">
            <aside className="flex flex-col items-center justify-center flex-1 w-3/4 md:w-3/4 my-8 md:mt-0 ">
              <Image
                src={camaraImage}
                alt="Hero"
                className="
              rounded-lg
                
              brightness-50 hover:brightness-100 transform hover:scale-105 transition duration-500 ease-in-out
            
              "
              />
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
