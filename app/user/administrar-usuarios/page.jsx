import React from 'react';
import UsersViews from '@/containers/UsersView';
import { AlertBar } from "@/components"


const adminUsers = () => {
  return (
    <div className='h-screen w-screen p-8 ml-8'>
      <UsersViews />
<AlertBar />
    </div>
  );
};

export default  adminUsers;