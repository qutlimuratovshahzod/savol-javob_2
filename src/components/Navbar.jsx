import React from 'react'
import { useCustomContext } from '../Context/UseContext'

export const Navbar = () => {
    const {user} = useCustomContext()
  return (
    <nav className='flex justify-between items-center py-5 px-20 bg-base-300'>
        <span className='text-primary text-2xl font-bold'>{user.name}</span>
        <div className="text badge rounded-none badge-lg p-2"> 
            <span className='text-xl text-blue-400'>1</span>/<span className="text-xl text-accent">25</span>
        </div>
        <div className="">
            Reting
        </div>
    </nav>
  )
}
