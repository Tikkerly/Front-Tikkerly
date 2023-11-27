"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { faPersonWalkingArrowLoopLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { USER_ROUTES } from "@/routes/routes";

const styles =
  "font-regular avant-garde-regular w-full px-8 py-1.5 text-lg text-Az4 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline";
const styles2 = "font-black avant-garde-regular text-Az1 text-lg";
const styles3 = "flex flex-col";

const TicketDetail = ({ token }) => {
  const [ticketData, setTicketData] = useState({
    _id: "",
    serviceType: "",
    serviceDescription: "",
    registerDate: "",
    startDate: "",
    endDate: "",
    ammount: "",
    cost: "",
    utility: "",
    others: "",
    IVA: "",
    paymentMethod: "",
    ticketStatus: "",
    ispaid: "",
    ticketStatus: "",
    company_id: "",
    serviceClient_id: "",
    technician_id: "",
    internalConsecutive: "",
  });
  const { id } = token;
  useEffect(() => {
    const getTickets = async () => {
      try {
        const response = await axios.get(
          `${USER_ROUTES.ticket}/${id}`
        );
        setTicketData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    getTickets();
  }, []);

  const handleFieldChange = (edit, value) => {
    console.log(edit, value);
    setTicketData((prev) => ({
      ...prev,
      [edit]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(
        `${USER_ROUTES.ticket}/updateticket/${id}`,
        ticketData,
        {
          headers: {
            "x-token": token,
          },
        }
      );

      alert("Se han guardado los cambios");
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  return (
    <div className="grid gap-4 w-5/6">
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
          DETALLE DEL TICKET
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className={styles3}>
          <label className={styles2}>Ticket ID:</label>
          <input
            className={styles}
            id="_id"
            type="text"
            value={ticketData._id === null ? "" : ticketData._id}
            placeholder="No definido"
            disabled
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Compañia:</label>
          <input
            className={styles}
            id="company_id"
            type="text"
            value={
              ticketData.company_id === null
                ? ""
                : ticketData.company_id.username
            }
            placeholder="No definido"
            disabled
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Cliente:</label>
          <input
            className={styles}
            id="serviceClient_id"
            type="text"
            value={
              ticketData.serviceClient_id === null
                ? ""
                : ticketData.serviceClient_id.username
            }
            placeholder="No definido"
            disabled
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Técnico:</label>
          <input
            className={styles}
            id="technician_id"
            type="text"
            value={
              ticketData.technician_id === null
                ? ""
                : ticketData.technician_id.username
            }
            placeholder="No definido"
            disabled
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Tipo de Servicio:</label>
          <input
            className={styles}
            id="serviceType"
            type="text"
            value={
              ticketData.serviceType === null ? "" : ticketData.serviceType
            }
            onChange={(e) => handleFieldChange("serviceType", e.target.value)}
            placeholder="No definido"
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Descripción del Servicio:</label>
          <input
            className={styles}
            id="serviceDescription"
            type="text"
            value={
              ticketData.serviceDescription === null
                ? ""
                : ticketData.serviceDescription
            }
            onChange={(e) =>
              handleFieldChange("serviceDescription", e.target.value)
            }
            placeholder="No definido"
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Monto:</label>
          <input
            className={styles}
            id="ammount"
            type="text"
            value={ticketData.ammount === null ? "" : ticketData.ammount}
            onChange={(e) => handleFieldChange("ammount", e.target.value)}
            placeholder="No definido"
          />
        </div>

        <div className={styles3}>
          <label className={styles2}>Fecha de Registro:</label>
          <input
            className={styles}
            id="registerDate"
            type="date"
            value={
              ticketData.registerDate === null ? "" : ticketData.registerDate
            }
            placeholder="No definido"
            disabled
          />
        </div>

        <div className={styles3}>
          <label className={styles2}>Costo:</label>
          <input
            className={styles}
            id="cost"
            type="text"
            value={ticketData.cost === null ? "" : ticketData.cost}
            onChange={(e) => handleFieldChange("cost", e.target.value)}
            placeholder="No definido"
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Fecha de Inicio:</label>
          <input
            className={styles}
            id="startDate"
            type="date"
            value={ticketData.startDate === null ? "" : ticketData.startDate}
            onChange={(e) => handleFieldChange("startDate", e.target.value)}
            placeholder="No definido"
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Otros:</label>
          <input
            className={styles}
            id="others"
            type="text"
            value={ticketData.others === null ? "" : ticketData.others}
            onChange={(e) => handleFieldChange("others", e.target.value)}
            placeholder="No definido"
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Fecha de Finalización:</label>
          <input
            className={styles}
            id="endDate"
            type="date"
            value={ticketData.endDate === null ? "" : ticketData.endDate}
            onChange={(e) => handleFieldChange("endDate", e.target.value)}
            placeholder="No definido"
          />
        </div>

        <div className={styles3}>
          <label className={styles2}>IVA:</label>
          <input
            className={styles}
            id="IVA"
            type="text"
            value={ticketData.IVA === null ? "" : ticketData.IVA}
            onChange={(e) => handleFieldChange("IVA", e.target.value)}
            placeholder="No definido"
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Estado:</label>
          <select
            className={styles}
            value={
              ticketData.ticketStatus === null ? "" : ticketData.ticketStatus
            }
            placeholder="No definido"
            onChange={(e) => handleFieldChange("ticketStatus", e.target.value)}
            id="ticketStatus"
          >
            <option value="Pendiente">Pendiente</option>
            <option value="Aprobado">Aprobado</option>
            <option value="Cancelado">Cancelado</option>
            <option value="En proceso">En proceso</option>
            <option value="Completado">Completado</option>
            <option value="Cerrado">Cerrado</option>
            <option value="Rechazado">Rechazado</option>
          </select>
        </div>

        <div className={styles3}>
          <label className={styles2}>Utilidad:</label>
          <input
            className={styles}
            id="utility"
            type="text"
            value={ticketData.utility === null ? "" : ticketData.utility}
            onChange={(e) => handleFieldChange("utility", e.target.value)}
            placeholder="No definido"
            disabled
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Método de pago:</label>
          <select
            className={styles}
            value={
              ticketData.paymentMethod === null ? "" : ticketData.paymentMethod
            }
            placeholder="No definido"
            onChange={(e) => handleFieldChange("paymentMethod", e.target.value)}
            id="paymentMethod"
          >
            <option value="Efectivo">Efectivo</option>
            <option value="Debito">Debito</option>
            <option value="Credito">Credito</option>
            <option value="Transferencia">Transferencia</option>
          </select>
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

export default TicketDetail;
