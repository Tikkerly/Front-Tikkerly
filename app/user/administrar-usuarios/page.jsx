import React from 'react';
import UsersViews from '@/containers/UsersView';
import { AlertBar } from '@/components';

const adminUsers = () => {
  return (
    <div>
      <AlertBar/>

        <div className='flex flex-col items-center justify-center'>
          <UsersViews />
        </div>

    </div>
  );
};

export default adminUsers;