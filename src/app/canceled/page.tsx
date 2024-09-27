import Container from '@/components/Container'
import Link from 'next/link'
import React from 'react'

const Canceled = () => {
  return (
    <Container>
      <div className="w-full h-[80vh] flex justify-center items-center">
        <div className="w-full md:w-1/2 lg:w-1/3 h-1/2 shadow-md shadow-secondary/50 rounded-lg flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-center text-red-600">Payment cancelled</h1>
        <p className="text-center">please, Payment again! <Link href={'/cart'} className='text-darkYellow'>Order now!</Link></p>
        </div>
      </div>
    </Container>
  )
}

export default Canceled