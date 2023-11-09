'use client';
import React, { useState, useRef } from "react";
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import style from './styles.module.css'

const services = [
  "Implementación de la Plataforma: Ayudar a las empresas a implementar la plataforma de gestión de tickets de manera orientada, asegurando una transición suave y efectiva.",
  "Capacitación y Soporte: Proporcionar capacitación a los equipos de las empresas para que puedan aprovechar al máximo la plataforma y ofrecer soporte técnico continuo para resolver dudas y problemas.",
  "Configuración de Procesos: Ayudar a las empresas a definir y configurar procesos eficientes de gestión de tickets que se adapten a sus necesidades específicas.",
  "Automatización de Tareas: Implementar la automatización de tareas repetitivas dentro de la plataforma para aumentar la eficiencia operativa.",
  "Informes y Análisis: Ofrecer herramientas de generación de informes y análisis para que las empresas puedan medir el rendimiento de su operación y tomar decisiones basadas en datos.",
  "Integración con Otras Herramientas: Facilitar la integración de la plataforma con otras herramientas utilizadas por las empresas.",
  "Atención al Cliente Mejorada: Ayudar a las empresas a mejorar su atención al cliente a través de la gestión eficiente de tickets, lo que conduce a una mayor satisfacción del cliente y lealtad.",
  "Seguridad y Cumplimiento: Garantizar la seguridad de los datos y el cumplimiento de las regulaciones relevantes en la gestión de tickets.",
];

const CarrouselServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const [slider] = useKeenSlider({
    slidesPerView: 1,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    // Utiliza los botones predeterminados de Keen Slider
    prevButton: sliderRef.current && sliderRef.current.querySelector(".keen-slider__prev"),
    nextButton: sliderRef.current && sliderRef.current.querySelector(".keen-slider__next"),
  });

  return (
    <div>
      <div className="w-full h-20 flex items-center justify-center text-white text-3xl font-bold avant-garde-bold">
        Servicios ofrecidos para nuestras PYMES:
      </div>
      <div className="flex flex-row items-center justify-around">
        <div ref={sliderRef} className="keen-slider">
          {services.map((service, index) => (
            <div key={index} className="keen-slider__slide">
              <div className="w-full flex flex-col justify-center items-center text-white text-lg font-normal avant-garde-regular text-center">
                {service}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className={style.keenslider__prev} aria-label="Previous"></button>
      <button className={style.keenslider__next} aria-label="Next"></button>
    </div>
  );
};

export default CarrouselServices;