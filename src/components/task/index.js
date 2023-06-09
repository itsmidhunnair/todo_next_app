import useTask from "@hooks/useTask";
import React, { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TaskFormGrp = () => {
  const { addTask, getAllTask, tasks, dataAdded, setTasks } = useTask([]);
  useEffect(() => {
    getAllTask();
  }, [dataAdded]);

  return (
    <>
      <TaskForm addTask={addTask} />

      {_.isEmpty(tasks) ? (
        <h1 className="title-font mb-2 text-center text-2xl font-medium text-gray-900 sm:text-3xl">
          Go Ahead with your First Task
        </h1>
      ) : (
        <TaskList tasks={tasks} updateTasks={setTasks} />
      )}
    </>
  );
};

export default TaskFormGrp;
