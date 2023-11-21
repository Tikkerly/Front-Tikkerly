"use client";
import { CreateTechnician } from "@/components";
import { AlertBar } from "@/components"

const TechnicianRegister = () => {
  return (
    <div className='h-screen w-screen p-8 ml-8'>
<AlertBar />
          <div className="avant-garde-bold font-bold text-3xl  text-black">
            <h2 className="text-xl ml-16">Agregar Técnico</h2>
          </div>
          <CreateTechnician />
        </div>
  );
};

export default TechnicianRegister;