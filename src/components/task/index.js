import { toastConfig } from "@constants/toastConfig";
import useTask from "@hooks/useTask";
import useToast from "@hooks/useToast";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TaskFormGrp = () => {
  const { addTask, getAllTask, tasks, dataAdded, setTasks } = useTask([]);

  const { status } = useSession();

  const { greetUser } = useToast();

  useEffect(() => {
    if (status === "authenticated") {
      toast(greetUser, { ...toastConfig });
    }
  }, []);

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
