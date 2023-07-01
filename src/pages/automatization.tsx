import React from "react";
import "../app/globals.css";
import Navbar from "@/app/Components/Nav";
import { motion } from "framer-motion";
import Card from "../app/Components/Card/Card";
import industryImage from "../../public/Images/Automatization/industry.webp";
import biometricImage from "../../public/Images/Automatization/biometrics.webp";
import domoticsImage from "../../public/Images/Automatization/domotics.webp";
import factoryImage from "../../public/Images/Automatization/factory.webp";
import Link from "next/link";

export default function Automatization() {

  return (
    <main className="flex flex-col h-screen w-full items-start justify-start">
      {/* backround */}
      <Navbar theme="dark" />
      {/* Hero Section */}
      <div className="flex flex-col  items-center justify-center h-1/4 w-full bg-black">
        <h1 className="text-3xl md:text-6xl font-bold colorText mb-12">
          Automatización
        </h1>
      </div>
      {/* Info section */}
      <div className=" flex flex-col items-center justify-center w-full h-auto p-8 bg-slate-100">
        {/* row items */}
        <div
          className="flex flex-col md:flex-row items-center justify-center w-full h-auto "
        >
          {/* left side */}
          <div className="flex flex-col items-start justify-end flex-1 w-full md:w-5/6 p-4 md:p-20 text-center  bg-white rounded-lg drop-shadow-lg">
            {/* why do it with us */}
            <h1 className="text-xl md:text-3xl font-bold text-black text-left">
              ¿Por qué hacerlo con nosotros?
            </h1>
            <p className="mt-3 text-md md:text-xl text-gray-800  font-normal text-left">
              Con nuestras soluciones de automatización, podrás optimizar tus
              procesos de producción, minimizar errores y tiempos de
              inactividad, aumentar la seguridad laboral y mejorar la calidad de
              tus productos. Nuestras soluciones se adaptan a las necesidades
              específicas de tu empresa, sin importar su tamaño o complejidad.
            </p>

            {/* Si tienes dudas comunicate con nosotros */}
            <div className="flex flex-col items-center justify-center mt-10 space-x-4">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className=" text-black border-solid border-2 border-gray-500  px-6 py-2 rounded-md text-sm"
              >
                <Link href="/contact" className="font-medium">
                  Contáctanos 
                </Link>
              </motion.button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 w-full md:w-1/2  text-center ">
            <aside className="flex flex-col items-center justify-center flex-1 w-3/4 md:w-2/4 my-8 md:mt-0 ">
              {/* <Image src={HeroAuto} alt="Hero" className="rounded-lg" /> */}
            </aside>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center w-full h-auto mt-8">
          {/* que servicios ofrecemos */}
          <h1 className="text-2xl md:text-4xl font-bold text-black mb-12">
            ¿Qué servicios ofrecemos?
          </h1>

          {/* Cards container */}

          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center w-full h-auto ">

            <Card
              title="Procesos industriales"
              description="Nuestro objetivo primordial consiste en alcanzar la máxima eficiencia en todas las áreas de nuestra planta, con el propósito de reducir costos, optimizar el tiempo y maximizar los resultados. Para lograrlo, empleamos equipos de última generación basados en la tecnología 4.0."
              image={industryImage}
            />
            <Card
              title="Control de accesos"
              description="Nuestra empresa brinda soluciones en el campo de los sistemas biométricos de última generación, los cuales ofrecen controles confiables, protección tanto local como remota y están respaldados por nuestra experiencia en el sector."
              image={biometricImage}
            />
            <Card
              title="Domótica"
              description="Transforme su hogar en un espacio inteligente y eficiente con nuestro servicio de domótica. Controle y automatice funciones clave como iluminación, climatización, seguridad y entretenimiento desde cualquier lugar, a través de su dispositivo móvil. Disfrute de mayor confort, ahorro energético y tranquilidad. Descubra las ventajas de vivir en un hogar conectado con nuestra solución de domótica."
              image={domoticsImage}
            />
            <Card
              title="Retrofit de maquinaria"
              description="Ofrecemos servicios de retrofit para equipos, permitiéndote actualizar tus equipos antiguos con la tecnología más reciente. Ya no es necesario invertir en la compra de nuevos equipos cuando puedes aprovechar al máximo los que ya tienes. Mediante nuestro servicio, podrás mejorar la eficiencia, funcionalidad y rendimiento de tus equipos existentes, adaptándolos a las últimas innovaciones tecnológicas. No pierdas la oportunidad de actualizar tus equipos y optimizar tus operaciones con nuestro servicio de retrofit."
              image={factoryImage}
            />

          </div>




        </div>
      </div>
    </main>
  );
}
