'use client';
import axios from 'axios';
import { USER_ROUTES } from '@/routes/routes';
import { useState } from 'react';
import Link from 'next/link';

const ForgetPassword = () => {
    const [formData, setFormData] = useState({ email: '' });
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(USER_ROUTES.forgetPassword, { email: formData.email });
            setMessage('Email enviado')
        } catch (error) {
            setMessage('No se ha podido enviar el email de recuperacion')
        }

    }
    return (
        <div className="">
            <h1 className="text-4xl mb-5">Contraseña</h1>
            <form onSubmit={handleSubmit}>
            <div className="relative w-64 h-10 bg-gray-200 rounded-lg mt-4">
                    <label htmlFor="email"></label>
                    <div className="absolute left-2 top-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                            <path d="M4.5 4.5C4.5 6.981 6.519 9 9 9C11.481 9 13.5 6.981 13.5 4.5C13.5 2.019 11.481 0 9 0C6.519 0 4.5 2.019 4.5 4.5ZM17 19H18V18C18 14.141 14.859 11 11 11H7C3.14 11 0 14.141 0 18V19H17Z" fill="#333333" />
                        </svg>
                    </div>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="bg-gray-200 w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 text-black rounded-lg placeholder-gray-500"
                        placeholder="Correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>




                <div className="mt-2 flex items-center">
                    <Link href="/login" className="text-blue-500 text-sm mt-1">Regresar a la pagina anterior</Link>
                </div>

                <div className="mt-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <button type="submit">Continuar</button>
                </div>

            </form>
            {message && <p className="text-red-500">{message}</p>}

        </div>
    );
};

export default ForgetPassword
