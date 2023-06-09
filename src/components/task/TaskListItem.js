import { MdDoneAll } from "react-icons/md";
import { RiTodoFill } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import useTask from "@hooks/useTask";

const TaskListItem = ({ task, allTasks, updateTasks }) => {
  const { name, description, completed, _id } = task;

  const [status, setStatus] = useState(`${completed}`);

  const { updateStatus, deleteTask } = useTask({
    setStatus,
    allTasks,
    updateTasks,
  });

  return (
    <>
      <div className="p-4">
        <div className="relative rounded-lg border border-gray-800 border-opacity-75 bg-white p-6">
          <div className="mb-2 flex flex-col flex-wrap items-start justify-between">
            <div className="flex w-full justify-between space-x-3 pb-3">
              <div
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-white ${
                  status === "true" ? " bg-teal-700 " : "bg-orange-400"
                }`}
              >
                {status === "true" ? (
                  <MdDoneAll className="w-10" />
                ) : (
                  <RiTodoFill className="w-10" />
                )}
              </div>

              <div className="relative pb-3 ps-1">
                <select
                  onChange={(e) => {
                    updateStatus(_id, e);
                  }}
                  defaultValue={completed}
                  className="appearance-none rounded border border-gray-700 bg-transparent py-2 pl-3 pr-10 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                  <option className="bg-white text-gray-900" value={false}>
                    Pending
                  </option>
                  <option className="bg-white text-gray-900" value={true}>
                    Completed
                  </option>
                </select>
                <span className="pointer-events-none absolute right-2 top-2 flex w-6 items-center justify-center text-center text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
            </div>
            <h2 className="text-lg font-medium text-gray-900">{name}</h2>
          </div>
          <p className="text-base leading-relaxed">{description}</p>
          <button
            onClick={() => deleteTask(_id)}
            className="group absolute bottom-0 right-0 flex items-center rounded-br-lg rounded-tl-lg bg-red-800 p-2 "
          >
            <AiFillDelete className="text-white" />
            <span className="w-0 overflow-hidden whitespace-nowrap pl-2 text-xs font-medium text-white transition-all duration-500 group-hover:w-full max-md:w-full">
              Delete Task
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskListItem;
