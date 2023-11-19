import React from 'react';
import TicketsView from '@/components/ticketsView/index';


const UserTickets = () => {
  return (
    <div className="h-screen w-screen flex flex-col mt-20">
      <div className="mx-62 w-62  flex flex-col items-center justify-center text-gray gap-16">
      <TicketsView />
    </div>
    </div>
  );
};

export default  UserTickets;