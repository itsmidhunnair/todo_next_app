import axios from "axios";
import React, { useState } from "react";

const useTask = (setStatus, status) => {
  const [dataAdded, setDataAdded] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addTask = async (taskData) => {
    try {
      const { data } = await axios.post("/api/task/addtask", taskData);
      setDataAdded(!dataAdded);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllTask = async () => {
    try {
      const { data } = await axios.get("/api/task/gettask");
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (id, e) => {
    try {
      const { data } = await axios.put(`/api/task/updatestatus/${id}`, {
        completed: e.target.value,
      });
      setStatus(`${e.target.value}`);
    } catch (error) {
      console.log(error);
      e.target.value = !e.target.value;
      setStatus(`${!e.target.value}`);
    }
  };

  const deleteTask = async (id) => {
    try {
      const { data } = await axios.delete(`/api/task/delete/${id}`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { getAllTask, addTask, tasks, dataAdded, updateStatus, deleteTask };
};

export default useTask;
