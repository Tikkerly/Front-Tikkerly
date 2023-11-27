"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { USER_ROUTES } from "@/routes/routes";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonWalkingArrowLoopLeft } from "@fortawesome/free-solid-svg-icons";
import { validation } from "@/utils";

const CreateServiceAgent = () => {
  const styles =
    "font-regular avant-garde-regular w-full px-8 py-1.5 text-lg text-Az4 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline";
  const styles2 = "font-black avant-garde-regular text-Az1 text-lg";
  const styles3 = "flex flex-col";
  const token = Cookies.get("token");
  const company = useSelector((state) => state.auth.user);
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    // confirmPassword: "",
    company_id: company._id,
    document: "",
    documentType: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors(validation("serviceAgent", { ...formData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${USER_ROUTES.init}/serviceagent/registerserviceagent`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            "x-token": token,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });

        router.push("/user/administrar-usuarios");
        setFormData({
          username: "",
          email: "",
          password: "",
          // confirmPassword: "",
          company_id: company._id,
          document: "",
          documentType: "",
          phone: "",
        });
      } else {
        alert("Error al registrar el ticket");
      }
    } catch (error) {
      console.log(error);
      alert("Error al procesar la solicitud:", error);
    }
  };

  return (
    <>
      <div className="grid gap-4 w-5/6 bg-gray-100 bg-opacity-60 p-8 text-gray-900 rounded-lg shadow-md gap-4">
        <div className="">
          <div>
            <Link
              href="/user/administrar-usuarios"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="avant-garde-bold font-bold text-gray px-6 py-2 rounded-full flex justify-center bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100">
                <FontAwesomeIcon
                  icon={faPersonWalkingArrowLoopLeft}
                  className="mr-2"
                  size="lg"
                />
                Volver
              </button>
            </Link>
            <h1 className="flex justify-center font-black avant-garde-regular text-Az1 border-b border-dotted border-b-8 border-t-0 pb-8 ">
              Agregar Agente de Servicio
            </h1>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4 space-y-6">
          <div className="grid grid-cols-2 gap-8 ">
            <div>
              <div className={styles3}>
                <label className={styles2}>Nombre:</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className={styles}
                />
              </div>
              <div className="h-4">
                {errors.username && (
                  <p className="text-red-500 font-regular avant-garde-regular text-sm">
                    {errors.username}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className={styles3}>
                <label className={styles2}>Correo Electrónico:</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles}
                />
              </div>
              <div className="h-4">
                {errors.email && (
                  <p className="text-red-500 font-regular avant-garde-regular text-sm">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className={styles3}>
                <label className={styles2}>Contraseña:</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className={styles}
                />
              </div>
              <div className="h-4">
                {errors.password && (
                  <p className="text-red-500 font-regular avant-garde-regular text-sm">
                    {errors.password}
                  </p>
                )}
              </div>
            </div>

            {/* <div>
        <label className="block text-sm font-medium text-black">Confirmar contraseña:</label>
        <input
              id="confirm-password"
              name="confirmPassword"
              type="password"
              autoComplete="current-password"
              required
              className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 text-gray-900  rounded-lg font-regular avant-garde-regular text-sm"
              placeholder="Confirmar contraseña"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
      </div> */}
            <div>
              <div className={styles3}>
                <label className={styles2}>Tipo de Documento:</label>
                <select
                  name="documentType"
                  value={formData.documentType}
                  onChange={handleInputChange}
                  className={styles}
                >
                  <option value="" disabled selected>
                    Tipo de Documento
                  </option>
                  <option value="NIT">NIT</option>
                  <option value="DNI">DNI</option>
                  <option value="PASAPORTE">PASAPORTE</option>
                </select>
              </div>

              <div className="h-4">
                {errors.documentType && (
                  <p className="text-red-500 font-regular avant-garde-regular text-sm">
                    {errors.documentType}
                  </p>
                )}
              </div>
            </div>
            <div>
              <div className={styles3}>
                <label className={styles2}>Documento:</label>
                <input
                  type="text"
                  name="document"
                  value={formData.document}
                  onChange={handleInputChange}
                  className={styles}
                />
              </div>
              <div className="h-4">
                {errors.document && (
                  <p className="text-red-500 font-regular avant-garde-regular text-sm">
                    {errors.document}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className={styles3}>
                <label className={styles2}>Teléfono:</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={styles}
                />
              </div>
              <div className="h-4">
                {errors.phone && (
                  <p className="text-red-500 font-regular avant-garde-regular text-sm">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className=" items-center avant-garde-bold font-bold text-gray px-3 py-2 rounded-full flex justify-center bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100"
              >
                Agregar Agente de Servicio
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateServiceAgent;
