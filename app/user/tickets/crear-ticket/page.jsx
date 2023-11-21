import React from 'react';
import CreateTickect from '@/components/createTickets/index';
import { AlertBar } from "@/components"

const CreateTicket = () => {
  return (
    <div className='h-screen w-screen p-8 ml-10'>
<AlertBar />
      <CreateTickect />
    </div>
  );
};


export default CreateTicket;
