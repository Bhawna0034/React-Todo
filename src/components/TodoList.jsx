import React from "react";
import { FaCheckSquare, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoList = ({index, data, onHandleDeleteTask}) => {
  return (
    <div>
      <li
        key={index}
        className="bg-white w-[400px] px-4 py-2 text-lg text-gray-900 font-semibold rounded-md flex items-center justify-between"
      >
        <span>{data}</span>
        <div className="flex gap-1 items-center justify-end text-xl">
          <FaCheckSquare className="text-green-600" />
          <FaEdit />
          <MdDelete
            onClick={() => onHandleDeleteTask(data)}
            className="text-red-600"
          />
        </div>
      </li>
    </div>
  );
};

export default TodoList;
