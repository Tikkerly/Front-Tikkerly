"use client";
import { CreateFinalClient } from "@/components";
import { AlertBar } from "@/components"

const ClientRegister = () => {
  return (
    <div className='h-screen w-screen p-8 ml-8'>
<AlertBar />
      <div className="avant-garde-bold font-bold text-3xl  text-black">
        <h2 className="text-xl ml-16">Agregar Cliente</h2>
      </div>
      <CreateFinalClient />
    </div>
  );
};

export default ClientRegister;