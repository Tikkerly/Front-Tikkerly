import React from 'react';
import EditTickets from '@/components/editTickets/index';

import { AlertBar } from '@/components';

const EditedTickets = () => {
  return (
    <div>
      <AlertBar/>
      <EditTickets />

    </div>
  );
};


export default EditedTickets;