"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { USER_ROUTES } from "@/routes/routes";
import Cookie from "js-cookie";
export default function ModalEdit({ show, onClose, id }) {
  const [user, setUser] = useState({});
  const token = Cookie.get("token");

  useEffect(() => {
    async function getUserByID() {
      const { data } = await axios(`${USER_ROUTES.getUser}/${id}`, {
        headers: {
          "x-token": token,
        },
      });
      setUser(data);
    }
    getUserByID();
  }, [id]);

  const handleClose = ({ target }) => {
    if (target.id === "wrapper") onClose();
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleImage = (e) => {
    const [name, file] = e.target.files[0];
    setUser({
      ...user,
      img: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setUser({ ...user, _id: id });
      const { data } = await axios.put(`${USER_ROUTES.editUser}/${id}`, user, {
        headers: {
          "x-token": token,
        },
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error durante la edición",
        confirmButtonColor: '#00356f',
        confirmButtonText: 'Cerrar',
        text: error.response.data.errors[0].msg,
      });
    }
  };

  if (!show) return null;
  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[800px] flex flex-col">
        <button
          className="text-gray-100 text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-gray-100 p-2 rounded">
          <div className="py-6 px-6 lg:px-8 text-left">
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Editar Usuario
            </h3>
            <form action="" className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex justify-between gap-2 mb-2">
                <div className="w-full">
                  <label
                    htmlFor="clientId"
                    className="block mb-2 text-lg font-medium text-gray-900"
                  >
                    Nit
                  </label>
                  <input
                    type="text"
                    name="clientId"
                    id="clientId"
                    value={user?.clientId}
                    disabled
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="img"
                    className="block mb-2 text-lg font-medium text-gray-900"
                  >
                    Foto
                  </label>
                  <input
                    id="img"
                    name="img"
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-2 mb-2">
                <div className="w-full">
                  <label
                    htmlFor="username"
                    className="block mb-2 text-lg font-medium text-gray-900"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={user.username}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-lg font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={user?.email}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-2 mb-2">
                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-lg font-medium text-gray-900"
                  >
                    Teléfono
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={user?.phone}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="personType"
                    className="block mb-2 text-lg font-medium text-gray-900"
                  >
                    Tipo
                  </label>
                  <select
                    id="personType"
                    name="personType"
                    value={user.personType || "Persona Natural"}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="Persona Juridica">Juridica</option>
                    <option value="Persona Natural">Natural</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between gap-2 mb-2">
                <div className="w-full">
                  <label
                    htmlFor="status"
                    className="block mb-2 text-lg font-medium text-gray-900"
                  >
                    Estado
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={user.status}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value={true}>Activo</option>
                    <option value={false}>Inactivo</option>
                  </select>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="rol"
                    className="block mb-2 text-lg font-medium text-gray-900"
                  >
                    Rol
                  </label>
                  <select
                    id="rol"
                    name="rol"
                    value={user.rol}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="ADMIN">Administrador</option>
                    <option value="AGENTE DE SERVICIO">
                      Agente de servicio
                    </option>
                    <option value="TECNICO">Técnico</option>
                    <option value="CLIENTE">Cliente</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-gray-100 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Editar Usuario
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
