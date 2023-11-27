"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { faPersonWalkingArrowLoopLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";

const styles =
  "font-regular avant-garde-regular w-full px-8 py-1.5 text-lg text-Az4 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline";
const styles2 = "font-black avant-garde-regular text-Az1 text-lg";
const styles3 = "flex flex-col";

const TechnicianDetail = ({ token }) => {
  const [technicianData, setTechnicianData] = useState({
    username: "",
    email: "",
    documentType: "",
    document: "",
    phone: "",
    address: "",
    paymentMethods: "",
    accountNumber: "",
    company_id: "",
    serviceClient_id: "",
    serviceTypes: "",
  });

  const tokenValidate = Cookies.get("token");
  const { id } = token;

  useEffect(() => {
    const getTechnician = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/v1/technician/${id}`,
          {
            headers: {
              "x-token": tokenValidate,
            },
          }
        );
        console.log(response);
        setTechnicianData(response.data);
      } catch (error) {
        console.error("Error fetching technician data:", error);
      }
    };
    getTechnician();
  }, []);

  const handleFieldChange = (edit, value) => {
    console.log(edit, value);
    setTechnicianData((prev) => ({
      ...prev,
      [edit]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(
        `http://localhost:3001/api/v1/technician/edittechnician/${id}`,
        technicianData,
        {
          headers: {
            "x-token": tokenValidate,
          },
        }
      );
    
      alert("Se han guardado los cambios");
    } catch (error) {
      console.error("Error editing technician:", error);
    }
  };

  return (
    <div className="grid gap-4 w-5/6">
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
          DETALLE DEL TÉCNICO
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className={styles3}>
          <label className={styles2}>Nombre:</label>
          <input
            className={styles}
            id="username"
            type="text"
            value={
                technicianData.username === null
                ? ""
                : technicianData.username
            }
            placeholder="No definido"
            onChange={(e) => handleFieldChange("username", e.target.value)}
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>email:</label>
          <input
            className={styles}
            id="email"
            type="text"
            value={
                technicianData.email === null ? "" : technicianData.email
            }
            placeholder="No definido"
            disabled
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Tipo de Documento:</label>
          <input
            className={styles}
            id="documentType"
            type="text"
            value={
                technicianData.documentType === null
                ? ""
                : technicianData.documentType
            }
            placeholder="No definido"
            onChange={(e) => handleFieldChange("documentType", e.target.value)}
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Documento:</label>
          <input
            className={styles}
            id="document"
            type="number"
            value={
              technicianData.document === null
                ? ""
                : technicianData.document
            }
            placeholder="No definido"
            disabled
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Teléfono:</label>
          <input
            className={styles}
            id="phone"
            type="number"
            value={
              technicianData.phone === null ? "" : technicianData.phone
            }
            onChange={(e) => handleFieldChange("phone", e.target.value)}
            placeholder="No definido"
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Dirección:</label>
          <input
            className={styles}
            id="address"
            type="text"
            value={
              technicianData.address === null ? "" : technicianData.address
            }
            onChange={(e) => handleFieldChange("address", e.target.value)}
            placeholder="No definido"
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Método de pago:</label>
          <select
            className={styles}
            id="paymentMethods"
            value={
                technicianData.paymentMethods === null ? "" : technicianData.paymentMethods
            }
            placeholder="No definido"
            onChange={(e) => handleFieldChange("paymentMethods", e.target.value)}
          >
            <option value="Efectivo">Efectivo</option>
            <option value="Transferencia">Transferencia</option>
          </select>
        </div>
        <div className={styles3}>
          <label className={styles2}>Número de cuenta:</label>
          <input
            className={styles}
            id="accountNumber"
            type="number"
            value={
              technicianData.accountNumber === null ? "" : technicianData.accountNumber
            }
            onChange={(e) => handleFieldChange("accountNumber", e.target.value)}
            placeholder="No definido"
            disabled
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Compañía:</label>
          <input
            className={styles}
            id="company_id"
            type="text"
            value={
              technicianData.company_id.username === null
                ? ""
                : technicianData.company_id.username
            }
            placeholder="No definido"
            disabled
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Agente Final:</label>
          <input
            className={styles}
            id="serviceClient_id"
            type="text"
            value={
              technicianData.serviceClient_id.username === null
                ? ""
                : technicianData.serviceClient_id.username
            }
            placeholder="No definido"
            disabled
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Tipo de Servicio:</label>
          <input
            className={styles}
            id="serviceTypes"
            type="text"
            value={
              technicianData.serviceTypes === null
                ? ""
                : technicianData.serviceTypes
            }
            placeholder="No definido"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="avant-garde-bold font-bold text-gray px-6 py-2 rounded-full flex justify-center bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100"
          type="submit"
          onClick={handleSaveChanges}
        >
          Guardar cambios
        </button>
      </div>
    </div>
  );
};

export default TechnicianDetail;
