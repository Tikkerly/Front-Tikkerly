"use client";
import axios from "axios";
import { USER_ROUTES } from "@/routes/routes";
import { useState } from "react";
import Link from "next/link";

const ChangeUser = () => {
    const [formData, setFormData] = useState({ email: "" });
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(USER_ROUTES.forgetPassword, {
                email: formData.email,
            });
            setMessage("Email enviado");
        } catch (error) {
            setMessage(
                "No se ha podido enviar el email de recuperacion, revise los campos o intentelo mas tarde"
            );
        }
    };
    return (
        <div className="">
            <h1 className="text-4xl mb-5">Coloque su Email</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="relative w-64 h-10 bg-gray-200 rounded-lg mt-8">
                        <div className="absolute left-2 top-2">
                           
                        </div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 text-black rounded-lg"
                            placeholder="Email"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                    

                <div className="mt-2 flex items-center">
                    <Link href="/" className="text-sm mt-1">
                        Regresar a la pagina anterior
                    </Link>
                </div>
                <Link href="/recuperar-contrasena" className="text-sm mt-1">
                <div className="mt-8">
                    <button className=" avant-garde-bold font-bold flex items-center justify-center w-64  bg-Az5 px-10 py-4 rounded-full text-gray transition duration-300 hover:shadow-lg" type="submit">Continuar</button>
                </div>
                </Link>
                
            </form>
            {message && <p className="text-red-500">{message}</p>}
        </div>
    );
};

export default ChangeUser;