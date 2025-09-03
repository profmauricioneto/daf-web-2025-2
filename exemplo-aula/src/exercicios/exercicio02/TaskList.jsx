import React from "react";
import Task from "./Task";

const TaskList = () => {
  const tasks = [
    { title: "estudar o React", completed: true },
    { title: "estudar o JavaScript", completed: false },
    { title: "estudar o Tailwindcss", completed: true },
    { title: "estudar o Java", completed: false },
    { title: "estudar o React Router DOM", completed: true },
  ];

  return (
    <>
      <div className="max-w-lg mx-auto my-4">
        <div className="border border-gray-300 rounded-md shadow-2xl">
          <h2 className="text-center mb-2 mt-2 text-2xl">Exercicio TaskList</h2>
          {tasks.map((task, index) => (
            <Task key={index} title={task.title} completed={task.completed} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskList;
