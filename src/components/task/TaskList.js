import _ from "lodash";
import TaskListItem from "./TaskListItem";

const TaskList = ({ tasks, updateTasks }) => {
  return (
    <section className="body-font pt-3 text-gray-900">
      <div className="container mx-auto px-5 py-2">
        <div className="mb-10 flex w-full flex-col flex-wrap items-center text-center">
          <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
            Your Todos
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {tasks?.map((task) => (
            <TaskListItem
              task={task}
              allTasks={tasks}
              updateTasks={updateTasks}
              key={task._id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaskList;
