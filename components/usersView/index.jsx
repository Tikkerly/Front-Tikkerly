"use client";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ModalEdit, ModalForm, ModalRegister } from "../index";
import axios from "axios";
import Cookies from 'js-cookie'
import { USER_ROUTES } from "@/routes/routes";
import Swal from "sweetalert2";

// Modal
const UsersView = () => {
  const [showModal, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState("register")
  const [users,setUsers] = useState([])
  const [id,setID] = useState("")

  const handleModal = (type,id='') => {
    setTypeModal(type) 
    setShowModal(true)
    if(type !== "register"){
      setID(id)
    }    
  }

  const handleDelete = async (id) => {
    try {
      const {data} = await axios.delete(`${USER_ROUTES.deleteUser}/${id}`,{
        headers: {
          "x-token": Cookies.get("token")
        }
      })
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
              title: "Error durante la eliminacion",
              text: error.response.data.errors[0].msg,
            });
    }    
  }

  useEffect(() => {
    async function getAllUsers(){
      try {
        const {data} = await axios(USER_ROUTES.getUser,{
          headers:{
            "x-token": Cookies.get("token")
          }
        });
        setUsers(data.users)
      } catch (error) {
        
      }
    }
    getAllUsers()
  },[])

  return (
    <div className="fixed top-40 w-full">

    <div className="flex flex-col justify-center items-center bg-gray-100 bg-opacity-60 p-8 text-gray-900 rounded-lg shadow-md ">
      <div className="w-full">
        <button
          className="my-4 py-2 px-4 avant-garde-bold text-base rounded bg-Az3 text-gray-100 font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-gray-100 hover:shadow-Az3"
          onClick={() => handleModal("register")}
        >
          <AddIcon />
          Nuevo Usuario
        </button>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-Az2">
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Id
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Username
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Email
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Rol
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Estado
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 font-bold avant-garde-bold border bg-Az2">
                {user.clientId}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {user.username}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {user.email}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {user.rol}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {user.status ? "Activo" : "Inactivo"}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular ">
                <button
                  onClick={() =>
                    handleModal("edit", user._id)
                  }
                >
                  <EditNoteIcon className="text-blue-500 hover:text-blue-700" />
                </button>
                <button type="button" onClick={() => handleDelete(user._id)}>
                <ClearIcon
                  className="text-red-500 hover:text-red-700"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {
        typeModal === "register" ? (
          <ModalRegister
            show={showModal}
            onClose={() => setShowModal(false)}
          />
        ) : (
          <ModalEdit show={showModal} onClose={() => setShowModal(false)} id={id}/>
          )
        }
    </div>
        </div>
  );
};

export default UsersView;
