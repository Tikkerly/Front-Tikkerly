"use client";
import { CreateServiceAgent } from "@/components";
import { AlertBar } from "@/components";
const ServiceAgentRegister = () => {
  return (
  <div>
    <AlertBar/>

    <div className='flex flex-col items-center justify-center'>
          <CreateServiceAgent />
        </div>
  </div>
  );
};

export default ServiceAgentRegister;
