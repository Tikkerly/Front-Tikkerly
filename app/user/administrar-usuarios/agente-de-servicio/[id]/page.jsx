import ServiceAgentDetail from '@/components/serviceAgentDetail'
import React from 'react'

const Page = ({ params }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <ServiceAgentDetail token={params} />
    </div>
  )
}

export default Page