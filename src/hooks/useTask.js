import { toastConfig } from "@constants/toastConfig";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const useTask = ({ setStatus, allTasks, updateTasks }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = async (taskData) => {
    try {
      const { data } = await toast.promise(
        axios.post("/api/task/addtask", taskData),
        {
          pending: "Adding Task...",
          success: "Task Added Successfully!",
          error: "Task Adding Failed!",
        }
      );
      setTasks([...tasks, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllTask = async () => {
    try {
      const { data } = await axios.get("/api/task/gettask");
      setTasks(data[0].todos);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (id, e) => {
    const loading = toast.loading("Updating Status...");
    try {
      const { data } = await axios.put(`/api/task/updatestatus/${id}`, {
        completed: e.target.value,
      });
      toast.update(loading, {
        render: "Task Status Updated.",
        type: "success",
        isLoading: false,
        ...toastConfig,
      });
      console.log(data);
      setStatus(`${e.target.value}`);
    } catch (error) {
      toast.update(loading, {
        render: "Task Status update Failed.",
        type: "error",
        isLoading: false,
        ...toastConfig,
      });
      console.log(error);
      e.target.value = !e.target.value;
      setStatus(`${!e.target.value}`);
    }
  };

  const deleteTask = async (id) => {
    const loading = toast.loading("Deleting Task...");
    try {
      const { data } = await axios.delete(`/api/task/delete/${id}`);
      const newTasks = allTasks.filter((todo) => todo._id !== id);
      console.log(newTasks);
      toast.update(loading, {
        ...toastConfig,
        render: "Task Deleted Successfully.",
        type: "success",
        isLoading: false,
      });
      updateTasks(newTasks);
    } catch (error) {
      toast.update(loading, {
        ...toastConfig,
        render: "Task Delete Failed.",
        type: "error",
        isLoading: false,
      });
      console.log(error);
    }
  };

  return {
    getAllTask,
    addTask,
    setTasks,
    tasks,
    updateStatus,
    deleteTask,
  };
};

export default useTask;
