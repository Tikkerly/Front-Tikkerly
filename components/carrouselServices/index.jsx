"use client";
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const features = [

  {
    title: " Implementación de la Plataforma:",
    description: " Ayudar a las empresas a implementar la plataforma de gestión de tickets de manera orientada, asegurando una transición suave y efectiva.",
    backgroundImage: `/Implementacion.jpg`,
  },

  {
    title: "Capacitación y Soporte:",
    description: "Proporcionar capacitación a los equipos de las empresas para que puedan aprovechar al máximo la plataforma y ofrecer soporte técnico continuo para resolver dudas y problemas.",
    backgroundImage: `/Capacitacion.jpg`,
  },
  {
    title: " Configuración de Procesos:",
    description: "Ayudar a las empresas a definir y configurar procesos eficientes de gestión de tickets que se adapten a sus necesidades específicas.",
    backgroundImage: `/Configuracion.jpg`,
  },
  {
    title: " Automatización de Tareas:",
    description: "Implementar la automatización de tareas repetitivas dentro de la plataforma para aumentar la eficiencia operativa.",
    backgroundImage: `/Automatizacion.jpg`,
  },
  {
    title: "Informes y Análisis:",
    description: " Ofrecer herramientas de generación de informes y análisis para que las empresas puedan medir el rendimiento de su operación y tomar decisiones basadas en datos.",
    backgroundImage: `/Informes.jpg`,
  },
  {
    title: "Integración con Otras Herramientas:",
    description: "Facilitar la integración de la plataforma con otras herramientas utilizadas por las empresas.",
    backgroundImage: `/Integracion.jpg`,
  },
  {
    title: "Atención al Cliente Mejorada:",
    description: "Ayudar a las empresas a mejorar su atención al cliente a través de la gestión eficiente de tickets, lo que conduce a una mayor satisfacción del cliente y lealtad.",
    backgroundImage: `/Atencion.jpg`,
  },
  {
    title: " Seguridad y Cumplimiento:",
    description: "Garantizar la seguridad de los datos y el cumplimiento de las regulaciones relevantes en la gestión de tickets.",
    backgroundImage: `/Seguridad.jpg`,
  },
];

const CarrouselServices = () => {
  return (
    <>
      <div className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8`}>
        <div className={`grid carousel-container grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-1 ml-80 mr-80`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-Az3 text-black rounded-lg shadow-xl gap-10 overflow-hidden grid grid-cols-2 bg-opacity-70 hover:bg-opacity-100 ${styles.card} ${index % 2 === 0 ? styles.right : styles.left}`}
              style={{}} // Agrega esta línea para establecer la opacidad inicial
            >
              <div className={`${index % 2 === 0 ? "order-2": ""}`}>
                <Image src={feature.backgroundImage} alt={feature.title} width={150} height={600} className={`w-full h-full object-cover`} />
              </div>
              <div className={`p-6 flex flex-col items-center justify-center relative`}>
                <h1 className={`text-3xl font-semibold text-center ${styles["card-h1"]}`}>{feature.title}</h1>
                <p className={`text-xl text-center`}>{feature.description}</p>
                <div className={styles["card-animation"]}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarrouselServices;