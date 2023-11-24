import TicketDetail from '@/components/TicketDetail'
import React from 'react'

import { AlertBar } from '@/components'

const Page = ({ params }) => {
  return (
    <div>
      <AlertBar/>
        <div className='flex flex-col items-center justify-center'>

          <TicketDetail token={params} />
        </div>
    </div>
  )
}

export default Page