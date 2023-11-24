"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";
import ClearIcon from "@mui/icons-material/Clear";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { USER_ROUTES } from "@/routes/routes";
import { useSelector } from "react-redux";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UsersViews = () => {
  const [techs, setTechs] = useState([]);
  const [final, setFinal] = useState([]);
  const [agents, setAgents] = useState([]);

  const token = Cookies.get("token");
  const technicians = useSelector((state) => state.options.technicians);
  const finalClients = useSelector((state) => state.options.finalClients);
  const serviceAgents = useSelector((state) => state.options.serviceAgents);

  useEffect(() => {
    setTechs(technicians);
    setFinal(finalClients);
    setAgents(serviceAgents);
  }, []);

  const [userData, setUserData] = useState({
    total: 0,
    users: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${USER_ROUTES.init}/user`, {
          headers: {
            "x-token": token,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handleUsersDelete = async (userId) => {
    try {
      const response = await axios.delete(
        `${USER_ROUTES.init}/user/deleteuser/${userId}`,
        {
          headers: {
            "x-token": token,
          },
        }
      );
      setUserData((prevUserData) => {
        return {
          ...prevUserData,
          users: prevUserData.users.filter((user) => user._id !== userId),
        };
      });
      alert("Usuario eliminado");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 bg-opacity-60 p-8 text-gray-900 rounded-lg shadow-md gap-4">
      <div className="flex flex-col items-center bg-Be bg-opacity-60 p-8 text-gray-900 rounded-lg shadow-md w-full">
        <h1 className="flex justify-center font-black avant-garde-regular text-Az1 border-dotted border-b-8 border-t-0 pb-2 w-full ">
          COMPAÑÍAS
        </h1>

        <div className="overflow-x-auto w-full">
          <table className="table-auto w-full mb-4">
            <thead>
              <tr className="bg-Az3 text-Az4 bg-opacity-70">
                <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
                  Compañía
                </th>
                <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
                  NIT
                </th>
                <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
                  Email
                </th>
                <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
                  Teléfono
                </th>
                <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
                  Tipo de Persona
                </th>
                <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
                  Estado del Pago
                </th>
              </tr>
            </thead>
            <tbody>
              {userData.map &&
                userData.users.map((user, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 font-regular avant-garde-regular border">
                      {user.username}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular border">
                      {user.nit}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular border">
                      {user.email}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular border">
                      {user.phone}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular border">
                      {user.personType}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular border">
                      {user.isPaid ? "Contratado" : "No Contrató"}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular ">
                      <Link
                        href="/user/edituser/:id"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <EditNoteIcon className="text-blue-500 hover:text-blue-700" />
                      </Link>
                      <ClearIcon
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleUsersDelete(user._id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col items-center bg-Be bg-opacity-60 p-8 text-gray-900 rounded-lg shadow-md w-full">
        <div className="flex flex-row-reverse justify-between w-full border-dotted border-b-8 border-t-0 mb-2">
          <div className="w-full"></div>
          <div className="w-full">
            <h1 className="text-center font-black avant-garde-regular text-Az1 ">
              AGENTES DE SERVICIO
            </h1>
          </div>
          <div className=" flex items-center w-full">
            <Link
              href="/user/administrar-usuarios/agregar-agente-de-servicio"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="flex avant-garde-bold font-bold text-gray px-6 py-2 rounded-full justify-center bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100">
                <FontAwesomeIcon icon={faPlus} className="mr-2" size="lg" />
                Agregar
              </button>
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="table-auto w-full mb-4">
            <thead>
              <tr className="bg-Az3 text-Az4 bg-opacity-70">
                <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
                  Agente
                </th>
                <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
                  NIT
                </th>
                <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
                  Email
                </th>
                <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
                  Teléfono
                </th>
                <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody>
              {agents.serviceAgent &&
                agents.serviceAgent.map((serviceAgent, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 font-regular avant-garde-regular border">
                      {serviceAgent.username}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular border">
                      {serviceAgent.document}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular border">
                      {serviceAgent.email}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular border">
                      {serviceAgent.phone}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular border">
                      {serviceAgent.status ? "Activo" : "No Activo"}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular ">
                      <Link
                        href="/user/edituser/:id"
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
      <div className="flex flex-col items-center bg-Be bg-opacity-60 p-8 text-gray-900 rounded-lg shadow-md w-full">
        <div className="flex flex-row-reverse justify-between w-full border-dotted border-b-8 border-t-0 mb-2">
          <div className="w-full"></div>
          <div className="">
            <h1 className="self-center font-black avant-garde-regular text-Az1 ">
              TÉCNICOS
            </h1>
          </div>

          <div className=" flex items-center w-full">
            <Link
              href="/user/administrar-usuarios/agregar-tecnico"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="flex avant-garde-bold font-bold text-gray px-6 py-2 rounded-full justify-center bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100">
                <FontAwesomeIcon icon={faPlus} className="mr-2" size="lg" />
                Agregar
              </button>
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="table-auto w-full mb-4">
            <thead>
              <tr className="bg-Az3 text-Az4 bg-opacity-70">
                <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
                  Técnico
                </th>
                <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
                  NIT
                </th>
                <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
                  Email
                </th>
                <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
                  Teléfono
                </th>
                <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody>
              {techs.technicians &&
                techs.technicians.map((technicians, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 font-regular avant-garde-regular border">
                      {technicians.username}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular border">
                      {technicians.document}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular border">
                      {technicians.email}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular border">
                      {technicians.phone}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular border">
                      {technicians.status ? "Activo" : "No Activo"}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular ">
                      <Link
                        href="/user/edituser/:id"
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
      <div className="flex flex-col items-center bg-Be bg-opacity-60 p-8 text-gray-900 rounded-lg shadow-md w-full">
        <div className="flex flex-row-reverse justify-between w-full border-dotted border-b-8 border-t-0 mb-2">
          <div className="w-full"></div>
          <div className="w-full">
            <h1 className="self-center font-black avant-garde-regular text-Az1">
              CLIENTE FINAL
            </h1>
          </div>

          <div className=" flex items-center w-full">
            <Link
              href="/user/administrar-usuarios/agregar-cliente"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="flex avant-garde-bold font-bold text-gray px-6 py-2 rounded-full justify-center bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100">
                <FontAwesomeIcon icon={faPlus} className="mr-2" size="lg" />
                Agregar
              </button>
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="table-auto w-full mb-4">
            <thead>
              <tr className="bg-Az3 text-Az4 bg-opacity-70">
                <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
                  Cliente Final
                </th>
                <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
                  NIT
                </th>
                <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
                  Email
                </th>
                <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
                  Teléfono
                </th>
                <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody>
              {final.finalClients &&
                final.finalClients.map((finalClients, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 font-regular avant-garde-regular border">
                      {finalClients.username}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular border">
                      {finalClients.document}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular border">
                      {finalClients.email}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular border">
                      {finalClients.phone}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular border">
                      {finalClients.status ? "Activo" : "No Activo"}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular ">
                      <Link
                        href="/user/edituser/:id"
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
    </div>
  );
};

export default UsersViews;
