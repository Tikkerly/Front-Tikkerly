"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";
import ClearIcon from "@mui/icons-material/Clear";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useSelector } from "react-redux";

const TicketsView = () => {
  const id = useSelector((state) => state.auth.user._id);
  const token = Cookies.get("token");

  const [ticketsData, setTicketsData] = useState([]);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/v1/tickets/company/${id}`,
          {
            headers: {
              "x-token": token,
            },
          }
        );
        //console.log(response.data)
        setTicketsData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getTickets();
  }, []);

  const handleTicketDelete = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/tickets/deleteticket/${id}`,
        {
          headers: {
            "x-token": token,
          },
        }
      );
      console.log(response.data);
      setTicketsData(response.data);
    } catch (error) {}
  };

  return (
    <div className="fixed top-40 w-full">

    <div className="flex justify-center items-center bg-gray-100 bg-opacity-60 p-8 text-gray-900 rounded-lg shadow-md ">
      <Link
        href={"/user/tickets/crear-ticket"}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {" "}
        <button>Crear Ticket</button>
      </Link>

      <table className="table-auto">
        <thead>
          <tr className="bg-Az2">
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Id
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Compañía
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Cliente
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Técnico
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Tipo de Servicio
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Descripción del Servicio
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Fecha de Registro
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Fecha de Inicio
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Fecha de Finalización
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Monto
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Costo
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Utilidad
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Otros
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              IVA
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Método de pago
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Estado
            </th>
          </tr>
        </thead>
        <tbody>
          {ticketsData.tickets?.map((tickets) => (
            <tr key={tickets.internalConsecutive}>
              <td className="py-2 px-4 font-bold avant-garde-bold border bg-Az2">
                {tickets.internalConsecutive}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.company_id}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.serviceClient_id}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.technician_id}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.serviceType}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.serviceDescription}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.registerDate}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.startDate}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.endDate}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.ammount}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.cost}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.utility}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.others}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.IVA}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.paymentMethod}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.estado}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular ">
                <Link
                  href="/user/tickets/edit"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <EditNoteIcon className="text-blue-500 hover:text-blue-700" />
                </Link>
                <ClearIcon
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleTicketDelete(ticket.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default TicketsView;
