import React, { useRef, useState } from 'react'
import { useRef } from 'react';
import {userCustomContext} from "../Context/UseContext";
import { Navigate } from 'react-router-dom'; 
import { useState  } from 'react';
import { Alert } from '../components/Alert';


export const Auth = () => {
  const {setUser} =userCustomContext
  const name = useRef()
  const age = useRef()

  const[isError, setIsError] = useState()

  const navigate = Navigate()

  const submitHandler = (event) =>{
  event.preventDefault(); 
  if (!name.current.value.trim() || !age.current.value.trim()) return;

  const user ={
    name:name.current.value,
    age:age.current.value,
  }
  
  setUser(user)
 navigate("/tasks")
}

  return (
      <div  className="flex flex-col justify-center items-center h-screen">
        {isError ? <Alert/> : ""}
    <form className='p-10 bg-base-200 rounded-md shadow-md min-w-[320px] w-1/2 max-w-md'>
        <h1 className='text-3xl'>Ma'lumot kiriting</h1>
        <div className="form-control">
            <label className='label' htmlFor="name">Ismingizni kiriting</label>
            <input ref={name} id='name' type="text"   class="input input-bordered w-full"></input>
        </div>
        <div className="form-control">
            <label  className='label' htmlFor="age">Yoshingizni kiriting</label>
            <input ref={age} id='age' type="number"   class="input input-bordered w-full"></input>
        </div>
        <button className=' btn btn-primary w-full mt-10'>Boshlash</button>
    </form>
      </div>
  )
}
