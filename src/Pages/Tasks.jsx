import React from "react";
import { Navbar } from "../components/Navbar";
import { Task } from '../components/Task'
import { TransitionPage } from "../components/TansitionPage";

export const Tasks = () => {
  return (
    <TransitionPage>
     <Navbar />
      <h1 className="text-center text-5xl mt-20">Tezkor Savol Javoblar</h1>
      <div className="flex justify-center items-center h-[50vh]">
        <Task />
      </div>
    </TransitionPage>
  );
};