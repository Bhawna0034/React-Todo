import React, { useState } from "react";

const TodoForm = ({onAddTodo}) => {
    const [inputValue, setInputValue] = useState("");
    function handleInputChange(value) {
        setInputValue(value);
      }
    function handleFormSubmit(event){
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue("");

    }
  return (
    <div>
      <section>
        <form
          onSubmit={handleFormSubmit}
          className="bg-white flex items-center rounded-md p-0 m-0 overflow-hidden mb-8 "
        >
          <div>
            <input
              type="text"
              autoComplete="off"
              placeholder="Write your Task"
              className="w-[300px] px-4 py-2 bg-white border-none  focus:outline-none"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <div>
            <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-r-md rounded-l-none focus:outline-none focus:scale-[1.02] w-[100px] ">
              Add Task
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default TodoForm;
