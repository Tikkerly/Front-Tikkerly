"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { userDetails } from "@/redux/slices/authSlices";
import { USER_ROUTES } from "@/routes/routes";
import Swal from "sweetalert2";

const Profile = () => {
  const styles = "font-regular avant-garde-regular w-full px-8 py-1.5 text-lg text-Az4 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
  const styles2= "font-black avant-garde-regular text-Az1 text-lg"
  const id = useSelector((state) => state.auth.user._id);
  const user = useSelector((state) => state.auth.user);
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  const [imageSrc, setImageSrc] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const [editable, setEditable] = useState({
    username: user.username,
    email: user.email,
    phone: user.phone,
    address: user.address,
    document: user.document,
    image: user.image,
  });

  console.log(user)
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
      <div className="bg-gray-100 bg-opacity-60 p-8 text-gray-900 rounded-lg shadow-md w-full h-full max-w-screen-md mx-auto flex flex-col">
        
        <div className="flex items-start mb-8">
          <img
            className="h-32 w-32 rounded-full object-cover mx-auto"
            src={selectedImage || imageSrc.img}
            alt="Profile Image"
          />
        </div>

        <div className="mb-4">
          <label className={styles2}>
            Nombre de Usuario
          </label>
          <input
          className={styles}
            id="username"
            type="text"
            value={editable.username}
            onChange={(e) => handleFieldChange("username", e.target.value)}
            placeholder="Nombre de usuario"
          />
        </div>

        <div className="mb-4">
          <label className={styles2}>
            Correo
          </label>
          <input
          className={styles}
            id="email"
            type="text"
            value={editable.email}
            onChange={(e) => handleFieldChange("email", e.target.value)}
            placeholder="Correo electrónico"
            disabled
          />
        </div>

        <div className="mb-4">
          <label className={styles2}>Dirección</label>
          <input
          className={styles}
            id="address"
            type="text"
            defaultValue={imageSrc.address}
            onChange={(e) => handleFieldChange("address", e.target.value)}
            placeholder="Dirección"
          />
        </div>

        <div className="mb-4">
          <label className={styles2}>Teléfono</label>
          <input
            className={styles}
            id="number"
            type="text"
            value={editable.phone}
            onChange={(e) => handleFieldChange("phone", e.target.value)}
            placeholder="Número de teléfono"
          />
        </div>

        <div className="mb-4">
          <label className={styles2}>Documento:</label>
          <input
            className={styles}
            id="number"
            type="text"
            value={editable.document}
            onChange={(e) => handleFieldChange("nit", e.target.value)}
            placeholder="Nit"
          />
        </div>
        <div className="mb-4">
          <label className={styles2}>Imagen</label>
          <input
           className={styles}
            id="image"
            type="file"
            value={editable.image}
            onChange={handleImageChange}
            placeholder="imagen"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="avant-garde-bold font-bold w-full text-gray px-6 py-2 py-3 px-6 rounded text-xl  bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100"
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
