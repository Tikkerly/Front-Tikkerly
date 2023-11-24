"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { USER_ROUTES } from "@/routes/routes";
import { validation } from "@/utils";
import { faPersonWalkingArrowLoopLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const CreateTickect = () => {
  const styles =
    "font-regular avant-garde-regular w-full px-8 py-1.5 text-lg text-Az4 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline";
  const styles2 = "font-black avant-garde-regular text-Az1 text-lg";
  const styles3 = "flex flex-col";

  const token = Cookies.get("token");

  const serviceAgents = useSelector((state) => state.options.serviceAgents);
  const technicians = useSelector((state) => state.options.technicians);
  const finalClients = useSelector((state) => state.options.finalClients);
  const company = useSelector((state) => state.auth.user);

  const [sa, setSa] = useState(serviceAgents);
  const [tec, setTec] = useState(technicians);
  const [fc, setFc] = useState(finalClients);
  const [comp, setComp] = useState(company);

  useEffect(() => {
    setSa(serviceAgents);
    setTec(technicians);
    setFc(finalClients);
    setComp(comp);
  }, []);

  const [formData, setFormData] = useState({
    serviceType: "",
    serviceDescription: "",
    startDate: "",
    company_id: comp._id,
    technician_id: "",
    finalClient_id: "",
    serviceClient_id: "",
    paymentMethod: "Transferencia",
    ammount: 0,
    cost: 0,
    others: 0,
    registerDate: "11/10/2010",
    ticketStatus: "Pendiente",
    companies: [],
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(formData);
    setErrors(validation("ticket", { ...formData, [name]: value }));
  };

  const handleAddCompany = () => {
    const companyInput = document.getElementsByName("company")[0];
    const newCompany = companyInput.value;
    if (!newCompany || newCompany.trim() === "") {
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      companies: [...prevData.companies, newCompany],
    }));
    companyInput.value = "";
  };

  const handleRemoveCompany = (index) => {
    setFormData((prevData) => {
      const updatedCompanies = [...prevData.companies];
      updatedCompanies.splice(index, 1);
      return {
        ...prevData,
        companies: updatedCompanies,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${USER_ROUTES.init}/tickets/registerticket`,
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
        setFormData({
          serviceType: "",
          serviceDescription: "",
          startDate: "",
          company_id: "",
          technician_id: "",
          finalClient_id: "",
          serviceClient_id: "",
          paymentMethod: "Transferencia",
          ammount: 0,
          cost: 0,
          others: 0,
          registerDate: "11/10/2010",
          ticketStatus: "Pendiente",
          companies: [],
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
      <div className="grid gap-4 w-5/6 ">
        <div>
          <Link
            href="/user/tickets"
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
            Crear Ticket
          </h1>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-4 space-y-6 w-5/6">
        <div className="grid grid-cols-2 gap-8 ">
          <div className={styles3}>
            <label className={styles2}>Tipo de Servicio:</label>
            <input
              type="text"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              className={styles}
            />
            <div className="h-2">
              {errors.serviceType && (
                <p className="text-red-500 font-regular avant-garde-regular text-sm">
                  {errors.serviceType}
                </p>
              )}
            </div>
          </div>

          <div className={styles3}>
            <label className={styles2}>Descripción del Servicio:</label>
            <input
              type="text"
              name="serviceDescription"
              value={formData.serviceDescription}
              onChange={handleInputChange}
              className={styles}
            />
            <div className="h-2">
              {errors.serviceDescription && (
                <p className="text-red-500 font-regular avant-garde-regular text-sm">
                  {errors.serviceDescription}
                </p>
              )}
            </div>
          </div>

          <div className={styles3}>
            <label className={styles2}>Fecha de Inicio:</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className={styles}
            />
            <div className="h-2">
              {errors.startDate && (
                <p className="text-red-500 font-regular avant-garde-regular text-sm">
                  {errors.startDate}
                </p>
              )}
            </div>
          </div>

          <div className={styles3}>
            <label className={styles2}>Cliente Final:</label>
            <select
              name="finalClient_id"
              value={formData.finalClient_id}
              onChange={handleInputChange}
              className={styles}
            >
              <option value="" disabled>
                Selecciona un Cliente Final
              </option>
              {fc.finalClients &&
                fc.finalClients.map((finalClient) => (
                  <option key={finalClient._id} value={finalClient._id}>
                    {finalClient.username}
                  </option>
                ))}
            </select>
            <div className="h-2">
              {errors.finalClient_id && (
                <p className="text-red-500 font-regular avant-garde-regular text-sm">
                  {errors.finalClient_id}
                </p>
              )}
            </div>
          </div>

          <div className={styles3}>
            <label className={styles2}>Técnico:</label>
            <select
              name="technician_id"
              value={formData.technician_id}
              onChange={handleInputChange}
              className={styles}
            >
              <option value="" disabled>
                Selecciona un Técnico
              </option>
              {tec.technicians &&
                tec.technicians.map((technician) => (
                  <option key={technician._id} value={technician._id}>
                    {technician.username}
                  </option>
                ))}
            </select>
            <div className="h-2">
              {errors.technician_id && (
                <p className="text-red-500 font-regular avant-garde-regular text-sm">
                  {errors.technician_id}
                </p>
              )}
            </div>
          </div>

          <div className={styles3}>
            <label className={styles2}>Agente de Servicio:</label>
            <select
              name="serviceClient_id"
              value={formData.serviceClient_id}
              onChange={handleInputChange}
              className={styles}
            >
              <option value="" disabled>
                Selecciona un Agente de Servicio
              </option>
              {sa.serviceAgent &&
                sa.serviceAgent.map((serviceClient) => (
                  <option key={serviceClient._id} value={serviceClient._id}>
                    {serviceClient.username}
                  </option>
                ))}
            </select>
            <div className="h-2">
              {errors.serviceClient_id && (
                <p className="text-red-500 font-regular avant-garde-regular text-sm">
                  {errors.serviceClient_id}
                </p>
              )}
            </div>
          </div>

          <div className={styles3}>
            <label className={styles2}>Valor:</label>
            <input
              type="number"
              name="ammount"
              value={formData.ammount}
              onChange={handleInputChange}
              className={styles}
            />
            <div className="h-2">
              {errors.ammount && (
                <p className="text-red-500 font-regular avant-garde-regular text-sm">
                  {errors.ammount}
                </p>
              )}
            </div>
          </div>

          <div className={styles3}>
            <label className={styles2}>Costo:</label>
            <input
              type="number"
              name="cost"
              value={formData.cost}
              onChange={handleInputChange}
              className={styles}
            />
            <div className="h-2">
              {errors.cost && (
                <p className="text-red-500 font-regular avant-garde-regular text-sm">
                  {errors.cost}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className=" flex aling-center justify-center">
          <div className="w-2/4 flex flex-col">
            <label className={styles2}>Otros costos:</label>
            <input
              type="number"
              name="others"
              value={formData.others}
              onChange={handleInputChange}
              className={styles}
            />
            <div className="h-2">
              {errors.others && (
                <p className="text-red-500 font-regular avant-garde-regular text-sm">
                  {errors.others}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className={styles3}>
          <label className={styles2}>Compañías:</label>
          <div className="flex">
            <input
              type="text"
              name="company"
              //onChange={handleInputChange}
              className={styles}
            />
            <button
              type="button"
              onClick={handleAddCompany}
              className="ml-2 avant-garde-bold font-bold text-gray px-4 py-2 rounded-full flex justify-center bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100"
            >
              Agregar
            </button>
          </div>
          {formData.companies.length > 0 && (
            <ul>
              {formData.companies?.map((company, index) => (
                <li key={index}>
                  {company}
                  <button
                    type="button"
                    onClick={() => handleRemoveCompany(index)}
                    className="ml-2 avant-garde-bold font-bold text-gray px-2 py-1 rounded-full flex justify-center bg-red-500 text-white transition duration-300 hover:bg-red-600"
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="avant-garde-bold font-bold text-gray px-6 py-2 rounded-full flex justify-center bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100"
          >
            Registrar Servicio
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateTickect;
