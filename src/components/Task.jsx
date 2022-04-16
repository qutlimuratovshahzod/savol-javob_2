import React from "react";

export const Task = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-10">
      <div className="bg-base-300 p-10 rounded-md shadow text-xl">
          1. 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea eos unde
        ad ipsum iure reiciendis laboriosam asperiores explicabo? Ab blanditiis
        quaerat ad beatae officiis animi corporis consequatur ipsa molestiae?
      </div>
      <div className="grid grid-cols-2 gap-10">
          <button className="btn btn-lg">A. Lorem ipsum dolor sit.</button>
          <button className="btn btn-lg">B. Lorem ipsum dolor sit.</button>
          <button className="btn btn-lg">C. Lorem ipsum dolor sit.</button>
          <button className="btn btn-lg">D. Lorem ipsum dolor sit.</button>
      </div>
    </div>
  );
};