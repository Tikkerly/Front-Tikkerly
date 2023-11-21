"use client";

import { USER_ROUTES } from "@/routes/routes";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function CompraExitosa() {
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const ispaid = async () => {
      const userpaid = await axios.post(
        `${USER_ROUTES.payment}/feedback/${user._id}`
      );
    };

    ispaid();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center  ">
      <div className="max-w-md p-8 bg-white rounded shadow-md text-center">
        <h1 className="text-3xl font-semibold mb-4 text-green-600">
          ¡Tu licencia fue comprada con éxito!
        </h1>
        <p className="text-gray-700 mb-6">
          ¡Gracias por tu compra! Tu licencia ha sido adquirida
          satisfactoriamente.
        </p>
        <Link href="/user">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Continuar
          </button>
        </Link>
        {/* Aquí puedes agregar más detalles sobre la compra si es necesario */}
      </div>
    </div>
  );
}
