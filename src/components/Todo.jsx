import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

export const Todo = () => {
   const [inputValue, setInputValue] = useState({});
  // for storing tasks
  const [tasks, setTasks] = useState(() => getLocalStorageTodoData());

  // for edit
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(null);

  function handleFormSubmit(inputValue) {
    const { id, content, checked } = inputValue;

    // check if the input field is empty or not
    if (!content) return;
    
    // check if editing, update the existing task
    if(content.trim() && editText != null){
      const updatedTask = tasks.map((element, index) => index === editText ? {...element, content} : element );
      setTasks(updatedTask);
      setEditing(false);
      setEditText(null);
      setInputValue({id: "", content: "", checked:false});
      return;
    }

    // Prevent adding duplicate tasks
    if(tasks.some((task) => task.content === content))return;

     // check if the data is already exists or not
     const ifTodoContentMatched = tasks.find(
      (currentTask) => currentTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTasks((prevTasks) => [...prevTasks, { id, content, checked }]);
  }

  // handle ClearAll functionality
  function handleClearAllTodo() {
    setTasks([]);
  }

  // handle DeletedTask functionality
  function handleDeleteTask(value) {
    console.log(value);
    const updatedTask = tasks.filter(
      (currentTask) => currentTask.content !== value
    );
    setTasks(updatedTask);
  }

  // handle CheckedTask functionality
  function handleCheckedTask(content) {
    const updatedTasks = tasks.map((currentTask) => {
      if (currentTask.content === content)
        return { ...currentTask, checked: !currentTask.checked };
      else return currentTask;
    });
    setTasks(updatedTasks);
  }

  // handle EditTask functionality
  function handleEditTask(content){
    const index = tasks.findIndex((task) => task.content === content);
    if(index === -1) return;
    setEditing(true);
    console.log(content);
    setEditText(index);
    setInputValue({...tasks[index]});
    
  }

  // added data to the local storage
  useEffect(() => {
    setLocalStorageTodoData(tasks);
  }, [tasks]);

  return (
    <div className="bg-[#081c29] flex items-center justify-center min-h-screen">
      <section>
        <h1 className="text-5xl text-white font-bold mb-2">Todo List</h1>
        <TodoDate />
        {/* TodoForm */}
        <TodoForm onAddTodo={handleFormSubmit}
                  editing = {editing}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                   />
        {/* TodoList */}
        <section>
          <ul className="space-y-4 mb-8">
            {tasks.map((currentTask) => {
              return (
                <TodoList
                  key={currentTask.id}
                  data={currentTask.content}
                  checked={currentTask.checked}
                  onHandleDeleteTask={handleDeleteTask}
                  onHandleCheckedTask={handleCheckedTask}
                  onHandleEditTask={handleEditTask}
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
