import { useRef, useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "ibrahim mostafa", completed: false },
  ]);
  const inputRef = useRef("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    const text = inputRef.current.value;
    const newItem = { text, completed: false };
    setTodos([...todos, newItem]);

    inputRef.current.value = "";
  };

  /* handle Add Todo Done */
  const handleAddTodoDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  const handleDeleteTodoDo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="App px-4">
      <div className="py-10">
        <h1 className="text-center text-4xl font-semibold mb-4">
          To Do <span className="text-blue-600">App</span>
        </h1>
        <span className="block h-1 w-8 bg-blue-500 m-auto rounded-full"></span>
      </div>
      <div className="max-w-4xl m-auto p-6 shadow-lg border rounded-lg">
        <div className="mb-5">
          <form onSubmit={handleAddTodo}>
            <input
              type="text"
              ref={inputRef}
              className="w-[70%] px-2 py-3 border outline-none rounded-l-lg border-gray-300"
              placeholder="New Task"
            />
            <button
              className="w-[30%] px-2 py-3 border bg-blue-600 border-blue-600
           text-white transition-all hover:bg-blue-700 rounded-r-lg"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
        <div>
          <h3 className="pb-2 border-b border-blue-500 mb-4 font-semibold text-xl">
            Your Tasks
          </h3>
          <ul className="pl-3 bg-slate-100">
            {todos.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`p-2  border-b break-words capitalize  flex justify-between items-center`}
                >
                  <span
                    onClick={() => handleAddTodoDone(index)}
                    className={`cursor-pointer  ${
                      item.completed ? "line-through" : ""
                    }`}
                  >
                    {" "}
                    {item.text}
                  </span>
                  <button
                    className="py-1 px-2 rounded-md bg-red-500 text-white relative"
                    onClick={() => handleDeleteTodoDo(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-x"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M18 6l-12 12"></path>
                      <path d="M6 6l12 12"></path>
                    </svg>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
