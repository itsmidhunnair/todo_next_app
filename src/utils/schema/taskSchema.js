import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
    unique: true,
    ref: "User",
  },
  todos: [
    {
      name: {
        required: true,
        type: String,
      },
      description: {
        required: true,
        type: String,
      },
      completed: {
        type: Boolean,
        default: false,
      },
    },
  ],
});
export default mongoose.models.task || mongoose.model("task", taskSchema);
