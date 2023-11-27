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

const ServiceAgentDetail = ({ token }) => {
  const [serviceAgentData, setServiceAgentData] = useState({
    username: "",
    email: "",
    document: "",
    documentType: "",
    phone: "",
    company_id: "",
  });

  const tokenValidate = Cookies.get("token");
  const { id } = token;

  useEffect(() => {
    const getServiceAgent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/v1/serviceagent/${id}`,
          {
            headers: {
              "x-token": tokenValidate,
            },
          }
        );
        console.log(response);
        setServiceAgentData(response.data);
      } catch (error) {
        console.error("Error fetching service agent data:", error);
      }
    };
    getServiceAgent();
  }, []);

  const handleFieldChange = (edit, value) => {
    console.log(edit, value);
    setServiceAgentData((prev) => ({
      ...prev,
      [edit]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(
        `http://localhost:3001/api/v1/serviceagent/editserviceagent/${id}`,
        serviceAgentData,
        {
          headers: {
            "x-token": tokenValidate,
          },
        }
      );

      alert("Se han guardado los cambios");
    } catch (error) {
      console.error("Error editing service agent:", error);
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
          DETALLE DEL AGENTE DE SERVICIO
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
              serviceAgentData.username === null
                ? ""
                : serviceAgentData.username
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
              serviceAgentData.email === null ? "" : serviceAgentData.email
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
              serviceAgentData.documentType === null
                ? ""
                : serviceAgentData.documentType
            }
            placeholder="No definido"
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Documento:</label>
          <input
            className={styles}
            id="document"
            type="number"
            value={
              serviceAgentData.document === null
                ? ""
                : serviceAgentData.document
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
              serviceAgentData.phone === null ? "" : serviceAgentData.phone
            }
            onChange={(e) => handleFieldChange("phone", e.target.value)}
            placeholder="No definido"
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Compañía:</label>
          <input
            className={styles}
            id="company_id"
            type="text"
            value={
              serviceAgentData.company_id.username === null
                ? ""
                : serviceAgentData.company_id.username
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

export default ServiceAgentDetail;
