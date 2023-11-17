"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const UserActivation = ({ id }) => {
  const [data, setData] = useState({});
  const userData = () => {
    const { data } = axios.post(
      `http://localhost:3001/api/v1/user/validateregister/${id.id}`
    );
    setData(data);
  };
  useEffect(() => {
    userData();
  }, []);

  return (
    <div className="">
      <h1 className="text-4xl mb-5">Usuario activado</h1>
      <div className="mt-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-100">
        <Link href="/home">
          <button
            className="avant-garde-bold font-bold bg-Az5 text-gray px-6 py-3 rounded-full transition duration-300 hover:shadow-md"
            type="submit"
          >
            Continuar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserActivation;
