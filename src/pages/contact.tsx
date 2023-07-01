import React from "react";
import "../app/globals.css";
import Navbar from "@/app/Components/Nav";
import { Mail, Facebook, Instagram } from "lucide-react";
import { FacebookIcon } from "lucide-react";

export default function contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-black">
      <Navbar theme="dark" />
      <section className="flex flex-col items-center justify-start h-screen-2/5 w-full  text-center bg-black">
        {/* title container */}
        <div className="flex flex-col items-center justify-end h-3/5 w-full  text-center bg-black">
          <h1 className="text-3xl md:text-7xl font-bold  colorText">
            Contáctanos
          </h1>

          {/* social icons */}
          <div className="flex flex-row items-center justify-center mt-10 space-x-4">
            <a href="https://www.facebook.com/E3SolutionsGT" target="_blank">
              <FacebookIcon size={32} color="white" />
            </a>
            <a href="https://www.instagram.com/e3_solutions/" target="_blank">
              <Instagram size={32} color="white" />
            </a>
            <a href="mailto:eduardo.escobar@e3solutions.com.gt" target="_blank">
              <Mail size={32} color="white" />
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-start justify-start h-screen-4/5 md:h-screen-3/5 w-full bg-white">
        {/* title container */}
        {/* <div className="flex flex-col items-start justify-start h-1/5 w-full  bg-white">
          <h1 className="text-3xl md:text-5xl font-bold  text-gray-700">
            Información de contacto
          </h1>
        </div> */}
        {/* contact details */}
        <div className="flex flex-col md:flex-row items-center justify-start h-full w-full ">
        <div className="flex flex-col items-start justify-center text-left h-full w-full bg-slate-600 p-4">
            <h1 className="text-2xl md:text-4xl font-bold  text-white mb-4">
              Servicios
            </h1>
            <p className="text-white">
              Somos una empresa de ingeniería que no solo comercializa productos
              también asesora, instala y entrena a sus clientes en todas sus
              líneas, estamos dedicados a brindar soluciones tecnológicas con
              equipos de última generación, en control industrial,
              automatización, potencia eléctrica y mecánica.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center text-left h-full w-full bg-blue-700  p-4 md:mt-0 ">
            <h1 className="text-2xl md:text-4xl font-bold  text-white mb-4">
              Teléfonos
            </h1>
            <a className="text-white" href="tel:+50255789040">
              +502 5578 9040
            </a>
            <a className="text-white" href="tel:+50255894503">
              +502 5589 4503
            </a>
          </div>
          <div className="flex flex-col items-start justify-center text-left h-full w-full bg-blue-400  p-4 md:mt-0 ">
            <h1 className="text-2xl md:text-4xl font-bold  text-white mb-4">
              Correos electrónico
            </h1>
            <a
              className="text-white"
              href="mailto:eiceny.sandoval@e3solutions.com.gt"
            >
              eiceny.sandoval@e3solutions.com.gt
            </a>
            <a
              className="text-white"
              href="mailto:eduardo.escobar@e3solutions.com.gt"
            >
              eduardo.escobar@e3solutions.com.gt
            </a>
          </div>
          <div className="flex flex-col items-start justify-center text-left h-full w-full bg-white  p-4 md:mt-0 ">
            <h1 className="text-2xl md:text-4xl font-bold  text-gray-700 mb-4">
              Dirección
            </h1>
            <p className="text-gray-700 mb-8">
              9 calle A 9-34 sector A 10, Cdad. de Guatemala 01057, Guatemala
            </p>
          </div>
         
        </div>
      </section>
    </main>
  );
}
