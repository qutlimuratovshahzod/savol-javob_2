import React from 'react'
import { Navbar } from '../components/Navbar'
import { Task } from '../components/Task'
export const Tasks = () => {
  return (
    <div>
        <Navbar/>
        <h1 className='text-center text-5xl mt-20'>Tezkor savol javoblar</h1>
    <div className='flex justify-center items-center h-[50vh]'>
        <Task/>
    </div>
    </div>
  )
}
