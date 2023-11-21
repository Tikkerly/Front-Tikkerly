"use client";
import axios from "axios";
import { USER_ROUTES } from "@/routes/routes";
import { useState } from "react";
import Link from "next/link";

const ChangePassword = ({ token }) => {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(USER_ROUTES.recoveryPassword, {
        token: token,
        password: formData.password,
      });
      setMessage("contraseña cambiada");
    } catch (error) {
      setMessage(
        "No se ha podido enviar el email de recuperacion, revise los campos o intentelo mas tarde"
      );
    }
  };
  return (
    <div className="">
      <h1 className="text-4xl mb-5">Cambiar contraseña</h1>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative w-64 h-10 bg-gray-200 rounded-lg mt-8">
            <div className="absolute left-2 top-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_168_11)">
                  <path
                    d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM9 6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9V6ZM18 20H6V10H18V20ZM12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_168_11">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 rounded-lg"
              placeholder="Nueva contraseña"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="relative w-64 h-10 bg-gray-200 rounded-lg mt-8">
            <div className="absolute left-2 top-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_168_11)">
                  <path
                    d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM9 6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9V6ZM18 20H6V10H18V20ZM12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_168_11">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <input
              id="confirm-password"
              name="confirmPassword"
              type="password"
              autoComplete="current-password"
              required
              className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 text-gray-900  rounded-lg"
              placeholder="Confirmar contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-2 flex items-center">
          <Link href="/" className="text-sm mt-1">
            Regresar a la pagina anterior
          </Link>
        </div>

        <div className="mt-2 w-1/2 avant-garde-bold font-bold bg-Az5 text-gray px-6 py-3 rounded-full transition duration-300 hover:shadow-md">
          <button onClick={handleSubmit}>Cambiar contraseña</button>
        </div>
      </form>
      {message && <p className="text-red-500">{message}</p>}
    </div>
  );
};

export default ChangePassword;
