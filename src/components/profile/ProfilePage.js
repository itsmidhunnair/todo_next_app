import LogoHeader from "@components/common/LogoHeader";
import { loginSchema } from "@constants/schema";
import useTask from "@hooks/useTask";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [taskCnt, setTaskCnt] = useState();

  const { data } = useSession();

  const { getTaskCount } = useTask({});

  const fetchTaskCount = async () => {
    const cnt = await getTaskCount();
    console.log(cnt);
    setTaskCnt(cnt);
  };
  useEffect(() => {
    fetchTaskCount();
  }, []);

  return (
    <div className="m-10 mx-auto max-w-2xl rounded-xl border-2">
      <LogoHeader />
      <div className="flex flex-col items-center justify-center px-10 pb-10 sm:flex-row">
        <div className="text-center">
          <div className="inline-flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-gray-500">
            {data?.user?.image ? (
              <img
                src={data?.user?.image}
                alt=""
                className="overflow-hidden object-cover"
              />
            ) : (
              <span className="text-5xl font-semibold uppercase text-white">
                {data?.user.name[0]}
              </span>
            )}
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="title-font mt-4 text-lg font-medium text-gray-900">
              {data?.user?.name}
            </h2>
            <div className="mb-4 mt-2 h-1 w-12 rounded bg-gray-800" />
          </div>
          <div>
            <span className="font-semibold">Email: </span>
            <span>{data?.user.email}</span>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
