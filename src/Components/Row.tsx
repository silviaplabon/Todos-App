import { TodoProps } from "../types"

export const Row = ({
  todo: { id, task, isCompleted },
  handleCheckTodo,
  handleDeleteTodo,
}: TodoProps) => (
  <div
    className={`
        flex w-full p-4 mb-2 justify-between items-center
       ${isCompleted ? "bg-gray-800 " : "bg-indigo-900"}
      `}
  >
    <p
      className={`
          ml-2 text-xl font-sans font-medium
          ${isCompleted ? "text-gray-400 line-through" : "text-white"}
        `}
    >
      {task}
    </p>
    <div className="w-1/6 flex justify-between items-center mr-2">
      <button
        aria-label="Delete a todo"
        className="h-7 w-7 flex justify-center items-center bg-red-800 hover:bg-yellow-900 text-white font-bold  rounded"
        onClick={() => handleDeleteTodo(id)}
      >
        X
      </button>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => handleCheckTodo(id)}
        className="form-checkbox h-7 w-7"
      />
    </div>
  </div>
)
