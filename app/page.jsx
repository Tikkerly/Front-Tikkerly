'use client'
import Navbar from '@/components/navbar'
import { useSelector } from 'react-redux'

export default function Home() {
  console.log(useSelector(state=>state))
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar />
      </main>
  )
}
