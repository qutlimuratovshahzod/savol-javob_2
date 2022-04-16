import React from "react";
import { useRef } from "react";
import { useCustomContext } from "../Context/UseContext";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { Alert } from "../components/Alert";
import { TransitionPage } from "../components/TansitionPage";
export const Auth = () => {
  const { setUser } = useCustomContext();
  const name = useRef();
  const age = useRef();
  

  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()

  const submitHandler = (event) => {
    event.preventDefault();

    if (!name.current.value.trim() || !age.current.value.trim()) {
      setIsError(true)
      return
    }

    const user = {
      name: name.current.value,
      age: age.current.value,
    };

    setUser(user);
    navigate('/tasks')
  };

  return (
   <TransitionPage className="flex flex-col justify-center items-center h-screen">
      {isError ? <Alert /> : ''}
      <form
        onSubmit={submitHandler}
        className="p-10 bg-base-200 rounded-md shadow-md min-w-[320px] w-1/2 max-w-md"
        >
        <h1 className="text-3xl">Ma'lumot kiriting</h1>
        <div className="form-control my-10">
          <label className="label" htmlFor="name">
            Ismingizni Kiriting
          </label>
          <input
            ref={name}
            id="name"
            className="input input-bordered w-full"
            type="text"
            />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="age">
            Yoshingiz Kiriting
          </label>
          <input
            maxLength='50'
            minLength='12'
            ref={age}
            id="age"
            className="input input-bordered w-full"
            type="number"
            />
        </div>
        <button className="btn btn-primary w-full mt-10">Boshlash</button>
      </form>
      </TransitionPage>
  );
};