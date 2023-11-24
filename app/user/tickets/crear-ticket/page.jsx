import React from 'react';
import CreateTickect from '@/components/createTickets/index';

import { AlertBar } from '@/components';

const CreateTicket = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
     <AlertBar/>
      <CreateTickect />
    </div>
  );
};


export default CreateTicket;