"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";
import ClearIcon from "@mui/icons-material/Clear";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useSelector } from "react-redux";
import { USER_ROUTES } from "@/routes/routes";

const TicketsView = () => {
  const id = useSelector((state) => state.auth.user._id);
  const token = Cookies.get("token");

  const [ticketsData, setTicketsData] = useState([]);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const response = await axios.get(
          `${USER_ROUTES.init}/tickets/company/${id}`,
          {
            headers: {
              "x-token": token,
            },
          }
        );
        setTicketsData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getTickets();
  }, []);

  const handleTicketDelete = async (ticketId) => {
    try {
      const response = await axios.get(
        `${USER_ROUTES.init}/tickets/deleteticket/${id}`,
        {
          headers: {
            "x-token": token,
          },
        }
      );
      console.log(response.data);
      setTicketsData((prevTickets) => {
        return {
          ...prevTickets,
          tickets: prevTickets.tickets.filter(
            (ticket) => ticket._id !== ticketId
          ),
        };
      });
    } catch (error) {}
  };

  return (

    <div className="flex flex-col items-center bg-gray-100 bg-opacity-60 p-8 text-gray-900 rounded-lg shadow-md">
      <Link href={"/user/tickets/crear-ticket"}>
        <div className="mb-4 bg-blue-500 text-white py-2 px-4 rounded-md">
          Crear Ticket
        </div>

      </Link>

      <table className="table-auto w-full">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Compañía
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Agente de Servicio
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Técnico
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Cliente Final
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Tipo de Servicio
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Descripción del Servicio
            </th>

            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Estado
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {ticketsData.tickets
            ?.filter((ticket) => ticket.status === true) // Filtrar por status true
            .map((tickets) => (
              <tr key={tickets.internalConsecutive}>
                <td className="py-2 px-4 font-regular avant-garde-regular border">
                  {tickets.company_id.username}
                </td>
                <td className="py-2 px-4 font-regular avant-garde-regular border">
                  {tickets.serviceClient_id.username}
                </td>
                <td className="py-2 px-4 font-regular avant-garde-regular border">
                  {tickets.technician_id.username}
                </td>
                <td className="py-2 px-4 font-regular avant-garde-regular border">
                  {tickets.finalClient_id.username}
                </td>
                <td className="py-2 px-4 font-regular avant-garde-regular border">
                  {tickets.serviceType}
                </td>
                <td className="py-2 px-4 font-regular avant-garde-regular border">
                  {tickets.serviceDescription}
                </td>
                <td className="py-2 px-4 font-regular avant-garde-regular border">
                  {tickets.ticketStatus}
                </td>
                <td className="py-2 px-4 font-regular avant-garde-regular ">
                  <Link
                    href="/user/tickets/editar"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <EditNoteIcon className="text-blue-500 hover:text-blue-700" />
                  </Link>
                  <ClearIcon
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleTicketDelete(tickets._id)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketsView;
