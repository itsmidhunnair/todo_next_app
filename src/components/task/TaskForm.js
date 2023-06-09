import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const TaskForm = ({ addTask }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset();
  }, [addTask]);

  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-8">
        <form onSubmit={handleSubmit(addTask)}>
          <div className="mt-5 flex w-full flex-col rounded-lg bg-gray-100 p-8">
            <div className="relative mb-4">
              <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                Task
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                name="name"
                placeholder="Enter Task Name"
                className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-[#111827] focus:ring-2 focus:ring-[#11182749]"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="description"
                className="text-sm leading-7 text-gray-600"
              >
                Task Description
              </label>
              <textarea
                id="descrition"
                placeholder="Task Description"
                name="description"
                {...register("description")}
                className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-[#111827] focus:ring-2 focus:ring-[#11182749]"
              />
            </div>
            <button className="rounded border-0 bg-[#111827] px-8 py-2 text-lg text-white hover:bg-[#2f3b54] focus:outline-none">
              Add Task
            </button>
            <p className="mt-3 text-xs text-gray-500">
              Embrace the challenge and let your determination fuel your
              success.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TaskForm;
