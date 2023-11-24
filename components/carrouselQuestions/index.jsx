"use client"
import React, { useState, useRef } from "react";
import styles from "./Questions.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";

const FAQItem = ({ pregunta, respuesta }) => {
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);
  const answerRef = useRef(null);

  const toggleRespuesta = () => {
    setMostrarRespuesta(!mostrarRespuesta);

    if (!mostrarRespuesta && answerRef.current) {
      const yOffset = answerRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  };
  

  return (
    <div className={styles.faqItemContainer}>
      <h1
        className={` font-bold avant-garde-bold ${styles.question} ${mostrarRespuesta ? styles.questionActive : ""}`}
      >
        {pregunta}
        <span
          className={`font-bold avant-garde-bold ${styles.icon} ${mostrarRespuesta ? styles.iconActive : ""}`}
          onClick={toggleRespuesta}
        >
          {mostrarRespuesta ?              
           <FontAwesomeIcon
                icon={faCircleMinus}
                className="ml-1 py-1  text-Az2 transition duration-300 ease-in-out hover:text-Az4 hover:underline cursor-pointer"
                
              /> 
              :
              <FontAwesomeIcon
              icon={faCirclePlus}
            />}
        </span>
      </h1>
      <div
        className={`font-regular avant-garde-regular mb-3 ${styles.answer} ${mostrarRespuesta ? styles.answerVisible : ""}`}
        ref={answerRef}
      >
        <span className={styles.answerText}>{respuesta}</span>
      </div>
    </div>
  );
};


const FAQSection = () => (
  <div className={styles.background}>
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span className={`font-bold avant-garde-bold ${styles.titleText}`}>Preguntas frecuentes:</span>
      </h2>
      <div className={styles.faqContainer}>
        <div className={styles.faqItem}>
          <FAQItem
            pregunta="¿Qué es una mesa de ayuda y por qué mi empresa necesita una?"
            respuesta="Una mesa de ayuda es un sistema que ayuda a las empresas a gestionar y resolver las solicitudes de servicio de manera eficiente. Es esencial para mejorar la satisfacción del cliente y mantener un registro de problemas y soluciones."
          />
        </div>
        <div className={styles.faqItem}>
          <FAQItem
            pregunta="¿Cómo puedo registrarme en la plataforma de gestión de tickets?"
            respuesta="El proceso de registro es simple. Visita nuestra página de inicio, haz clic en 'Registrarse' y sigue las instrucciones para crear una cuenta."
          />
        </div>
        <div className={styles.faqItem}>
          <FAQItem
            pregunta="¿Qué beneficios obtendré al utilizar su plataforma?"
            respuesta="Al usar nuestra plataforma, obtendrás una gestión más eficiente de las solicitudes de servicio, informes detallados sobre el rendimiento y la capacidad de mejorar la satisfacción del cliente."
          />
        </div>
        <div className={styles.faqItem}>
          <FAQItem
            pregunta="¿Cómo puedo crear y seguir un ticket de servicio?"
            respuesta="Después de iniciar sesión, simplemente haz clic en 'Crear Ticket' y completa la información requerida. Puedes seguir el estado de tus tickets en tu panel de control."
          />
        </div>
      </div>
    </div>
  </div>
);

export default FAQSection;