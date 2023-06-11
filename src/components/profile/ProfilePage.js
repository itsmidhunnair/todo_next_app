import LogoHeader from "@components/common/LogoHeader";
import { useSession } from "next-auth/react";
import React from "react";
import TaskCounter from "./TaskCounter";

const ProfilePage = () => {
  const { data } = useSession();

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
          <TaskCounter />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
