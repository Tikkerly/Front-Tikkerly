"use client";
import { useState } from "react";
import ModalClient from "../ModalCliente";

const ContactButton = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="text-center h-40 flex items-center bg-red m-10">
      <div>
        <h2 className="text-4xl relative mb-4 text-Az1 text-2xl font-regular avant-garde-regular">

          ¿Quieres saber más?
  
        </h2>
        <button
          className="avant-garde-bold font-bold text-gray-900 px-6 py-3 rounded-full bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100  "
          onClick={() => setShowContactModal(true)}
        >
          Contáctanos aquí
        </button>
      </div>
      <ModalClient isVisible={showContactModal} onClose={() => setShowContactModal(false)} />
    </div>
  );
};

export default ContactButton;
