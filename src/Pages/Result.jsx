import React from "react";
import { ResulItem } from "../components/ResulItem";

const mockTasks = [
  {
    name: "lorem ipsum dolar sit",
    ans: "Lorem",
    true: "Doral",
  },
  {
    name: "lorem ipsum dolar sit",
    ans: "Lorem",
    true: "Doral",
  },
  {
    name: "lorem ipsum dolar sit",
    ans: "Lorem",
    true: "Doral",
  },
];

export const Result = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Savol</th>
              <th>Javob</th>
              <th>To`gri Javob</th>
            </tr>
          </thead>
          <tbody>
            {mockTasks.map((task, index) => (
              <ResulItem key={index} idx={index + 1} task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};