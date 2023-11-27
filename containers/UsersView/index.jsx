"use client";
import React, { useEffect, useState } from "react";
import { finalClients, serviceAgents, technicians } from "@/redux/slices";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";
import ClearIcon from "@mui/icons-material/Clear";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { USER_ROUTES } from "@/routes/routes";
import { useDispatch, useSelector } from "react-redux";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";

const UsersViews = () => {
  const [techs, setTechs] = useState([]);
  const [final, setFinal] = useState([]);
  const [agents, setAgents] = useState([]);
  const { _id } = useSelector(state => state.auth.user)

  const token = Cookies.get("token");

  const dispatch = useDispatch();

  const servAgents = async () => {
    const { data } = await axios.get(USER_ROUTES.getServiceAgentsById(_id), {
      headers: {
        "x-token": token,
      },
    });
    dispatch(serviceAgents(data.serviceAgent));
    setAgents(data.serviceAgent);
  };
  const technis = async () => {
    const { data } = await axios.get(USER_ROUTES.getTechniciansById(_id), {
      headers: {
        "x-token": token,
      },
    });
    dispatch(technicians(data.technicians));
    setTechs(data.technicians);
  };
  const finalCli = async () => {
    const { data } = await axios.get(USER_ROUTES.getFinalClientsById(_id), {
      headers: {
        "x-token": token,
      },
    });
    dispatch(finalClients(data.finalClients));
    setFinal(data.finalClients);
  };

  useEffect(() => {
    servAgents();
    technis();
    finalCli();
  }, []);

  const handleAgentDelete = async (userId) => {
    try {
      const response = await axios.delete(
        `${USER_ROUTES.init}/user/deleteuser/${userId}`,
        null,
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
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Agente Baneado",
        showConfirmButton: false,
        timer: 1500,
      });

      setState(!state);
    } catch (error) {
      console.log(error);
    }
  };
  const handleTechDelete = async (userId) => {
    try {
      const response = await axios.post(
        `${USER_ROUTES.init}/technician/deletetechnician/${userId}`,
        null,
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
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Técnico Baneado",
        showConfirmButton: false,
        timer: 1500,
      });

      setState(!state);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFinalDelete = async (userId) => {
    try {
      const response = await axios.post(
        `${USER_ROUTES.init}/finalclient/deletefinalclient/${userId}`,
        null,
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
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Cliente Baneado",
        showConfirmButton: false,
        timer: 1500,
      });

      setState(!state);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 bg-opacity-60 p-8 text-gray-900 rounded-lg shadow-md gap-4">
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
              href="/user/administrar-usuarios/agente-de-servicio"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="flex avant-garde-bold font-bold text-gray px-6 py-2 rounded-full justify-center bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100">

                <FontAwesomeIcon
                  icon={faPlus}
                  className="mr-2"
                  size="lg"
                />

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
              {agents &&
                agents.map((serviceAgent, index) => (
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
                      {serviceAgent.banned ? "No Activo" : "Activo"}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular ">
                      <Link
                        href={`/user/administrar-usuarios/agente-de-servicio/${serviceAgent._id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <EditNoteIcon className="text-blue-500 hover:text-blue-700" />
                      </Link>
                      <ClearIcon
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleAgentDelete(serviceAgent._id)}
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
              href="/user/administrar-usuarios/tecnico"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="flex avant-garde-bold font-bold text-gray px-6 py-2 rounded-full justify-center bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100">

                <FontAwesomeIcon
                  icon={faPlus}
                  className="mr-2"
                  size="lg"
                />

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
              {techs &&
                techs.map((technicians, index) => (
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
                      {technicians.banned ? "No Activo" : "Activo"}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular ">
                      <Link
                        href={`/user/administrar-usuarios/tecnico/${technicians._id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <EditNoteIcon className="text-blue-500 hover:text-blue-700" />
                      </Link>
                      <ClearIcon
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleTechDelete(technicians._id)}
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
              href="/user/administrar-usuarios/cliente-final"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="flex avant-garde-bold font-bold text-gray px-6 py-2 rounded-full justify-center bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100">

                <FontAwesomeIcon
                  icon={faPlus}
                  className="mr-2"
                  size="lg"
                />

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
              {final &&
                final.map((finalClients, index) => (
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
                      {finalClients.banned ? "No Activo" : "Activo"}
                    </td>
                    <td className="py-2 px-4 font-regular avant-garde-regular ">
                      <Link
                        href={`/user/administrar-usuarios/cliente-final/${finalClients._id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <EditNoteIcon className="text-blue-500 hover:text-blue-700" />
                      </Link>
                      <ClearIcon
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleFinalDelete(finalClients._id)}
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
