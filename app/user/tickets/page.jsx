import React from 'react';
import TicketsView from '@/components/ticketsView/index';
import { AlertBar } from "@/components"


const UserTickets = () => {
  return (
    <div className='h-screen w-screen p-8 ml-8'>

<AlertBar />
      <TicketsView />
    </div>
  );
};

export default  UserTickets;
