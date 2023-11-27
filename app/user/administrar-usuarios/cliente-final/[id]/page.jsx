import FinalClientDetail from '@/components/finalClientDetail'
import React from 'react'

const Page = ({ params }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <FinalClientDetail token={params} />
    </div>
  )
}

export default Page