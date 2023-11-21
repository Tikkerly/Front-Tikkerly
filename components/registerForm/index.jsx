"use client";
import React, { useState } from "react";
import { USER_ROUTES } from "@/routes/routes";
import { validation } from "@/utils";
import Swal from "sweetalert2";
import axios from "axios";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

const Registration = () => {
  
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    personType: "",
    phone: "",
    clientId: "",
    img: "",
    rol: "CLIENTE",
  });
  console.log(formData.img);
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, img: file });
  };

  const handleChange = (e) => {
    setErrors(
      validation("register", { ...formData, [e.target.name]: e.target.value })
    );
    setFormData({ ...formData, [e.target.name]: e.target.value });
    const props = Object.keys(
      validation("register", { ...formData, [e.target.name]: e.target.value })
    );
    if (!props.length) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const user = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      personType: formData.personType,
      phone: formData.phone,
      clientId: formData.clientId,
      img: formData.img.name,
      rol: formData.rol,
    };
   

    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      personType: "",
      phone: "",
      clientId: "",
      img: null,
    });

    try {
      const response = await axios.post(USER_ROUTES.registerUser, user);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error durante el registro",
        confirmButtonColor: '#00356f',
        confirmButtonText: 'Cerrar',
        text: error.response.data.errors[0].msg,
      });
    }
  };

  return (
    <div className="bg-Az4 p-8 rounded-lg shadow-xl ">
      <h1 className="text-2xl mb-5 bg-indigo-600 p-2 rounded-lg font-bold bg-opacity-32 avant-garde-bold shadow-xl ">
        Regístrate
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative w-64 h-10 bg-gray-200 rounded-lg mt-4">
            <div className="absolute left-2 top-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M4.5 4.5C4.5 6.981 6.519 9 9 9C11.481 9 13.5 6.981 13.5 4.5C13.5 2.019 11.481 0 9 0C6.519 0 4.5 2.019 4.5 4.5ZM17 19H18V18C18 14.141 14.859 11 11 11H7C3.14 11 0 14.141 0 18V19H17Z"
                  fill="#333333"
                />
              </svg>
            </div>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="bg-transparent  w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 rounded-lg text-gray-900 font-regular avant-garde-regular text-sm "
              placeholder="Nombre de usuario"
              value={formData.username}
              onChange={handleChange}
            />{" "}
            {errors.username && (
              <p className="text-red-500 font-regular avant-garde-regular">
                {errors.username}
              </p>
            )}
          </div>

          <div className="relative w-64 h-10 bg-gray-200 rounded-lg mt-4 ">
            <div className="absolute left-2 top-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_168_16)">
                  <path
                    d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_168_16">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="text-sm bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 rounded-lg font-regular avant-garde-regular"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
            />{" "}
            {errors.email && (
              <p className="text-red-500 font-regular avant-garde-regular">
                {errors.email}
              </p>
            )}
          </div>
        </div>

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
              className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 rounded-lg font-regular avant-garde-regular text-sm"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
            />{" "}
            {errors.password && (
              <p className="text-red-500 font-regular avant-garde-regular">
                {errors.password}
              </p>
            )}
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
              className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 text-gray-900  rounded-lg font-regular avant-garde-regular text-sm"
              placeholder="Confirmar contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
            />{" "}
            {errors.confirmPassword && (
              <p className="text-red-500 font-regular avant-garde-regular">
                {errors.confirmPassword}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative w-64 h-10 bg-gray-200 rounded-lg mt-8">
            <div className="absolute left-2 top-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="29"
                viewBox="0 0 23 29"
                fill="none"
              >
                <path
                  d="M18.5769 0H4.42308C1.98154 0 0 1.47636 0 3.29545V25.7045C0 27.5236 1.98154 29 4.42308 29H18.5769C21.0185 29 23 27.5236 23 25.7045V3.29545C23 1.47636 21.0185 0 18.5769 0ZM11.5 27.6818C10.0315 27.6818 8.84615 26.7986 8.84615 25.7045C8.84615 24.6105 10.0315 23.7273 11.5 23.7273C12.9685 23.7273 14.1538 24.6105 14.1538 25.7045C14.1538 26.7986 12.9685 27.6818 11.5 27.6818ZM19.4615 22.4091H3.53846V3.95455H19.4615V22.4091Z"
                  fill="black"
                />
              </svg>
            </div>
            <input
              id="phone"
              name="phone"
              type="number"
              autoComplete="current-phone"
              required
              className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 text-gray-900  rounded-lg font-regular avant-garde-regular text-sm"
              placeholder="Numero de celular"
              value={formData.phone}
              onChange={handleChange}
            />{" "}
            {errors.phone && (
              <p className="text-red-500 font-regular avant-garde-regular">
                {errors.phone}
              </p>
            )}
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
                <g clipPath="url(#clip0_168_5)">
                  <path
                    d="M21 7.28V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V16.72C21.59 16.37 22 15.74 22 15V9C22 8.26 21.59 7.63 21 7.28ZM20 9V15H13V9H20ZM5 19V5H19V7H13C11.9 7 11 7.9 11 9V15C11 16.1 11.9 17 13 17H19V19H5Z"
                    fill="black"
                  />
                  <path
                    d="M16 13.5C16.8284 13.5 17.5 12.8284 17.5 12C17.5 11.1716 16.8284 10.5 16 10.5C15.1716 10.5 14.5 11.1716 14.5 12C14.5 12.8284 15.1716 13.5 16 13.5Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_168_5">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <input
              id="clientId"
              name="clientId"
              type="text"
              autoComplete="current-phone"
              required
              className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 text-gray-900  rounded-lg font-regular avant-garde-regular text-sm"
              placeholder="Numero de identificacion"
              value={formData.clientId}
              onChange={handleChange}
            />{" "}
            {errors.clientId && (
              <p className="text-red-500 font-regular avant-garde-regular">
                {errors.clientId}
              </p>
            )}
          </div>
        </div>
        <div className="relative w-64 h-10 bg-gray-200 rounded-lg mt-8">
          <div className="absolute left-2 top-2"></div>
          <select
            id="personType"
            name="personType"
            required
            className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 rounded-lg font-regular avant-garde-regular"
            value={formData.personType}
            onChange={handleChange}
          >
            <option value="Tipodepersona">Tipo de persona</option>
            <option value="Natural">Persona Natural</option>
            <option value="Juridica">Persona Juridica</option>
          </select>
        </div>
        {errors.personType && (
          <p className="text-red-500 font-regular avant-garde-regular">
            {errors.personType}
          </p>
        )}

        <div className="relative w-64 h-10 bg-gray-200 rounded-lg mt-8">
          <div className="absolute left-2 top-2">
            <InsertPhotoIcon fontSize="small" />
          </div>
          <input
            id="img"
            name="img"
            type="file"
            accept="image/*" // Aceptar solo archivos de imagen
            required
            className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 text-gray-900  rounded-lg font-regular avant-garde-regular"
            onChange={handleImageChange}
          />
          {errors.img && <p className="text-red-500 font-regular avant-garde-regular">{errors.img}</p>}
        </div>

        <div className="mt-8">
          <button
            disabled={isDisabled}
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent font-regular avant-garde-regular text-sm font-medium rounded-md text-gray bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            href="/register"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
