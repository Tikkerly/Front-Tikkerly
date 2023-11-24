"use client";
import { CreateFinalClient } from "@/components";
import { AlertBar } from "@/components";
const ClientRegister = () => {
  return(
    <div>
      <AlertBar/>
      <div className='flex flex-col items-center justify-center'>
  <CreateFinalClient />
</div>
    </div>
  
  ) 

};

export default ClientRegister;
