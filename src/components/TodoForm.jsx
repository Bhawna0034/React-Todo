import React, { useState } from "react";

const TodoForm = ({onAddTodo, editing, inputValue, setInputValue}) => {
    // const [inputValue, setInputValue] = useState({});

    function handleInputChange(value) {
        setInputValue({id: value, content: value, checked:false});
      }
    function handleFormSubmit(event){
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({id: "", content: "", checked: false});

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
              value={inputValue.content || ""}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <div>
            <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-r-md whitespace-nowrap rounded-l-none focus:outline-none focus:scale-[1.02] w-[100px] ">
              {editing ? "Save Task": "Add Task"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default TodoForm;
