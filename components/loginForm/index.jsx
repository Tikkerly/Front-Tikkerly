'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import GoogleIcon from '@mui/icons-material/Google';
import { validation } from '@/utils';

const LoginForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(true);


    const handleChange = (event) => {
        setErrors(validation('login', { ...formData, [event.target.name]: event.target.value }));
        setFormData({ ...formData, [event.target.name]: event.target.value });
        const props = Object.keys(validation('register', { ...formData, [event.target.name]: event.target.value }));
        if (!props.length) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    };

    const handleSubmit = async (values) => {
        setLoading(true);
        try {

            message.success('Logged in successfully');
        } catch (error) {
            message.error('Incorrect email or password');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setShowMailIcon(value === '');
        } else if (name === 'contrasena') {
            setShowLockIcon(value === '');
        }
    };

    return (
        <div className="">
            <h1 className="text-4xl mb-5">Iniciar sesión</h1>
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
                        className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 text-black rounded-lg"
                        placeholder="Correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="relative w-64 h-10 bg-gray-200 rounded-lg mt-4">
                    <label htmlFor="password"></label>
                    <div className="absolute left-2 top-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_168_11)">
                                <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM9 6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9V6ZM18 20H6V10H18V20ZM12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_168_11">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='Contraseña'
                        className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 text-black rounded-lg"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="mt-2">
                    <input
                        type="checkbox"
                        id="remember"
                        name="remember"
                        className="mr-2 leading-tight"
                        value={formData.remember}
                        onChange={handleChange}
                    />
                    <label htmlFor="remember" className="text-sm">Recordarme</label>
                </div>

                <div className="mt-2 flex items-center">
                    <Link href="/forgetpassword" className="text-sm mt-1">Olvidaste tu contraseña?</Link>
                </div>
                <Link href="/register" className="text-sm mt-1">Registrarme</Link>
                <div className="mt-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <button type="submit">Iniciar sesión</button>
                </div>
            </form>

            <div className="mt-4">
                <button className="mt-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    <GoogleIcon />
                    <span className="ml-2">Iniciar sesión con Google</span>
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
