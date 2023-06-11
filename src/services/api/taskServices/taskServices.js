import taskSchema from "@utils/schema/taskSchema";

const createTask = async (email, taskName, taskDesc) => {
  try {
    const saveData = await taskSchema.findOneAndUpdate(
      { email },
      { $push: { todos: { name: taskName, description: taskDesc } } },
      { upsert: true, returnOriginal: false }
    );
    return saveData.todos[saveData.todos.length - 1];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchTask = async (email) => {
  try {
    const task = await taskSchema.find({ email: email }).select("todos");
    return task;
  } catch (error) {
    throw error;
  }
};

const changeStatus = async (email, id, status) => {
  try {
    const result = await taskSchema.findOneAndUpdate(
      { email, "todos._id": id },
      { $set: { "todos.$.completed": status } }
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const removeTask = async (email, id) => {
  try {
    const deleteData = await taskSchema.updateOne(
      { email },
      { $pull: { todos: { _id: id } } }
    );
    return deleteData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchTaskCount = async (email) => {
  try {
    const result = await taskSchema.find({ email }).select("todos");
    const todos = result[0].todos;
    let data = {};
    data.total = todos.length;
    data.completed = todos.filter((todo) => todo.completed === true).length;
    data.pending = data.total - data.completed;
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { createTask, fetchTask, changeStatus, removeTask, fetchTaskCount };
