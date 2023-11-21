import TicketDetail from '@/components/TicketDetail'
import React from 'react'

const Page = ({ params }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <TicketDetail token={params} />
    </div>
  )
}

export default Page