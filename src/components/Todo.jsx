import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaCheckSquare, FaEdit } from "react-icons/fa";
import TodoForm from "./TodoForm";

export const Todo = () => {
  

  // for storing tasks
  const [tasks, setTasks] = useState([]);

  // for date and time
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
  }, []);

 

  function handleFormSubmit(inputValue) {
    

    // check if the input field is empty or not
    if (!inputValue) return;

    // check if the task is exist or not
    if (tasks.includes(inputValue)) return;
    
    setTasks((prevTasks) => [...prevTasks, inputValue]);
    
  }

  function handleClearAllTodo() {
    setTasks([]);
  }

  function handleDeleteTask(value){
    console.log(value);
    const updatedTask = tasks.filter((currentTask) => {
        currentTask !== value;
    })
    setTasks(updatedTask);
    
  }

  return (
    <div className="bg-[#081c29] flex items-center justify-center min-h-screen">
      <section>
        <h1 className="text-5xl text-white font-bold mb-2">Todo List</h1>
        <h2 className="text-xl text-white font-semibold mb-6">{dateTime}</h2>
        {/* TodoForm */}
        <TodoForm onAddTodo = {handleFormSubmit}/>
        {/* TodoList */}
        <section>
          <ul className="space-y-4 mb-8">
            {tasks.map((currentTask, index) => {
              return (
                <li
                  key={index}
                  className="bg-white w-[400px] px-4 py-2 text-lg text-gray-900 font-semibold rounded-md flex items-center justify-between"
                >
                  <span>{currentTask}</span>
                  <div className="flex gap-1 items-center justify-end text-xl">
                    <FaCheckSquare className="text-green-600" />
                    <FaEdit />
                    <MdDelete  onClick={() => handleDeleteTask(currentTask)} className="text-red-600" />
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        {/* ClearAll */}
        <div>
          <button
            onClick={handleClearAllTodo}
            className="bg-red-600 text-white font-semibold w-[120px] border-none  focus:outline-none focus:scale-[1.03]"
          >
            Clear All
          </button>
        </div>
      </section>
    </div>
  );
};
