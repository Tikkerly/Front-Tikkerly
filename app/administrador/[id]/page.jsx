import React from 'react'
import { UserDetail } from '@/components'

const UserDetailPage = ({ params }) => {
  return (
    <div className='flex flex-col items-center justify-center mt-20'>
        <UserDetail token={params}/>
    </div>
  )
}

export default UserDetailPage