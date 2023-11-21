"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { USER_ROUTES } from "@/routes/routes";

const CreateTickect = () => {
  const styles = "font-regular avant-garde-regular w-full px-8 py-1.5 text-lg text-Az4 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
  const styles2= "font-black avant-garde-regular text-Az1 text-lg"
  const styles3= "flex flex-col"

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
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
      <div className="flex justify-center items-center">
        <h2 className="text-3xl font-bold text-center">Crear Ticket</h2>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-black">
              Tipo de Servicio:
            </label>
            <input
              type="text"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              className={styles}            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black">
              Descripción del Servicio:
            </label>
            <input
              type="text"
              name="serviceDescription"
              value={formData.serviceDescription}
              onChange={handleInputChange}
              className={styles}            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black">
              Fecha de Inicio:
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className={styles}            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-black">
            Cliente Final:
          </label>
          <select
            name="finalClient_id"
            value={formData.finalClient_id}
            onChange={handleInputChange}
            className={styles}          >
            <option value="">Selecciona una Cliente Final</option>
            {fc.finalClients &&
              fc.finalClients.map((finalClient) => (
                <option key={finalClient._id} value={finalClient._id}>
                  {finalClient.username}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-black">
            Técnico:
          </label>
          <select
            name="technician_id"
            value={formData.technician_id}
            onChange={handleInputChange}
            className={styles}          >
            <option value="">Selecciona una Técnico</option>
            {tec.technicians &&
              tec.technicians.map((technician) => (
                <option key={technician._id} value={technician._id}>
                  {technician.username}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-black">
            Agente de Servicio:
          </label>
          <select
            name="serviceClient_id"
            value={formData.serviceClient_id}
            onChange={handleInputChange}
            className={styles}          >
            <option value="">Selecciona un Agente de Servicio</option>
            {sa.serviceAgent &&
              sa.serviceAgent.map((serviceClient) => (
                <option key={serviceClient._id} value={serviceClient._id}>
                  {serviceClient.username}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Valor:</label>
          <input
            type="number"
            name="ammount"
            value={formData.ammount}
            onChange={handleInputChange}
            className={styles}          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Costo:</label>
          <input
            type="number"
            name="cost"
            value={formData.cost}
            onChange={handleInputChange}
            className={styles}          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">
            Otros costos:
          </label>
          <input
            type="number"
            name="others"
            value={formData.others}
            onChange={handleInputChange}
            className={styles}
                      />
        </div>
        <div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Registrar Servicio
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateTickect;
