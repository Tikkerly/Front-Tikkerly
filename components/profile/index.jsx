"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { userDetails } from "@/redux/slices/authSlices";
import { USER_ROUTES } from "@/routes/routes";
import Swal from "sweetalert2";

const Profile = () => {
  const id = useSelector((state) => state.auth.user._id);
  const user = useSelector((state) => state.auth.user);
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  const [imageSrc, setImageSrc] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const [editable, setEditable] = useState({
    username: user.username,
    phone: user.phone,
    address: user.address,
    nit: user.nit,
    image: user.image,
  });
  const handleFieldChange = (edit, value) => {
    setEditable((prev) => ({
      ...prev,
      [edit]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(
        `${USER_ROUTES.init}/user/edituser/${id}`,
        editable,
        {
          headers: {
            "x-token": token,
          },
        }
      );

      dispatch(userDetails(response.data));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Información editada correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  useEffect(() => {
    // Cargar la imagen dinámicamente en el cliente
    setImageSrc(user);
  }, [user]);

  return (
    <div>
      <div className="bg-Be bg-opacity-90 p-8 text-gray-900 rounded-lg shadow-md w-full h-full max-w-screen-md mx-auto flex flex-col">
        <div className="flex items-start mb-8">
          <img
            className="h-32 w-32 rounded-full object-cover mx-auto"
            src={selectedImage || imageSrc.img}
            alt="Profile Image"
          />
        </div>

        <div className="mb-4">
          <label className="font-bold avant-garde-bold">
            Nombre de Usuario
          </label>
          <input
            className="w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value={editable.username}
            onChange={(e) => handleFieldChange("username", e.target.value)}
            placeholder="Nombre de usuario"
          />
        </div>

        <div className="mb-4">
          <label className="font-bold avant-garde-bold">Dirección</label>
          <input
            className="w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            defaultValue={imageSrc.address}
            onChange={(e) => handleFieldChange("address", e.target.value)}
            placeholder="Dirección"
          />
        </div>

        <div className="mb-4">
          <label className="font-bold avant-garde-bold">Teléfono</label>
          <input
            className="w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
            id="number"
            type="text"
            value={editable.phone}
            onChange={(e) => handleFieldChange("phone", e.target.value)}
            placeholder="Número de teléfono"
          />
        </div>

        <div className="mb-4">
          <label className="font-bold avant-garde-bold">NIT</label>
          <input
            className="w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
            id="number"
            type="text"
            value={editable.nit}
            onChange={(e) => handleFieldChange("nit", e.target.value)}
            placeholder="Nit"
          />
        </div>
        <div className="mb-4">
          <label className="font-bold avant-garde-bold">Imagen</label>
          <input
            className="w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            value={editable.image}
            onChange={handleImageChange}
            placeholder="imagen"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className=" font-bold avant-garde-bold w-full bg-Az3 text-gray py-3 px-6 rounded  text-xl transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg"
            type="submit"
            onClick={handleSaveChanges}
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
