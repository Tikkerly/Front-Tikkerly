'use client';
import React from 'react';

const Profile = () => {
  return (
    <div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full h-full max-w-screen-md mx-auto flex flex-col justify-between">
        <div className="text-center mt-2"> 
          <img className="mx-auto h-32 w-32 rounded-full object-cover" src="https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png" alt="Profile Image" />
        </div>
        <div className="text-center text-black mt-4"> 
          <h2 className="text-2xl font-bold  mb-2">CLIENTE</h2>
          <h2 className="text-xl mb-2">Persona Natural</h2>
          <h2 className="text-xl mb-2">Nit: 08234561-2</h2>
        </div>

        <div className="mb-4 w-full">
          <input
            className="w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value="Javier Alejo Escobar Lopez"
            placeholder="Nombre de usuario"
          />
        </div>

        <div className="mb-4 w-full">
          <input
            className="w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value="alejoLopez@gmail.com"
            placeholder="Correo electrónico"
          />
        </div>

        <div className="mb-4 w-full">
          <input
            className="w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
            id="number"
            type="text"
            value="312453000"
            placeholder="Número de teléfono"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline text-xl"
            type="button"
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;