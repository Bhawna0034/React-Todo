import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";

export const Todo = () => {
  // for storing tasks
  const [tasks, setTasks] = useState([]);
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

  function handleDeleteTask(value) {
    console.log(value);
    const updatedTask = tasks.filter((currentTask) => {
      currentTask !== value;
    });
    setTasks(updatedTask);
  }

  return (
    <div className="bg-[#081c29] flex items-center justify-center min-h-screen">
      <section>
        <h1 className="text-5xl text-white font-bold mb-2">Todo List</h1>
        <TodoDate />
        {/* TodoForm */}
        <TodoForm onAddTodo={handleFormSubmit} />
        {/* TodoList */}
        <section>
          <ul className="space-y-4 mb-8">
            {tasks.map((currentTask, index) => {
              return (
                <TodoList
                  key={index}
                  data={currentTask}
                  onHandleDeleteTask={handleDeleteTask}
                />
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
