import React from 'react';
import TicketsView from '@/components/ticketsView/index';

import { AlertBar } from '@/components';

const UserTickets = () => {
  return (
    <div>

      <AlertBar/>
    <div className='flex flex-col items-center justify-center'>
      <TicketsView />
    </div>
     
    </div>
  );
};

export default  UserTickets;