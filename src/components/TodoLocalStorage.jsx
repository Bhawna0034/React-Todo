const TodoKey = "reactTodo";
export const getLocalStorageTodoData = () => {
  const rawTodo = localStorage.getItem(TodoKey);
  if(!rawTodo || rawTodo === "undefined") return [];
  return JSON.parse(rawTodo);
};

export const setLocalStorageTodoData = (task) => {
  return localStorage.setItem(TodoKey, JSON.stringify(task));
};
