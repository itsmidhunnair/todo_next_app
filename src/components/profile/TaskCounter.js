import Loader from "@components/common/loader/Loader";
import useTask from "@hooks/useTask";
import React, { useEffect, useState } from "react";

const TaskCounter = () => {
  const [loading, setLoading] = useState(true);
  const [taskCnt, setTaskCnt] = useState();

  const { getTaskCount } = useTask({});

  const fetchTaskCount = async () => {
    const cnt = await getTaskCount();
    console.log(cnt);
    setTaskCnt(cnt);
    setLoading(false);
  };

  useEffect(() => {
    fetchTaskCount();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-5 rounded-lg border-2 border-gray-700 p-5">
          <div className="flex items-center justify-center border-b-2 py-3">
            <span className="font-semibold">Completed Task: </span>
            <span className="pl-2 text-2xl font-bold text-teal-700">
              {taskCnt?.completed}
            </span>
          </div>
          <div className="flex items-center justify-center border-b-2 py-3">
            <span className="font-semibold">Pending Task: </span>
            <span className="pl-2 text-2xl font-bold text-orange-400">
              {taskCnt?.pending}
            </span>
          </div>
          <div className="flex items-center justify-center border-b-2 py-3">
            <span className="font-semibold">Total Task: </span>
            <span className="pl-2 text-2xl font-bold">{taskCnt?.total}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskCounter;
