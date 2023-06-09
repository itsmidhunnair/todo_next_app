import { useSession } from "next-auth/react";
import React from "react";

const ProfilePage = () => {
  const { data } = useSession();
  console.log(data);
  return (
    <div className="mx-auto m-10 flex max-w-2xl flex-col rounded-xl border-2 p-10 sm:flex-row">
      <div className="text-center">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full">
          <img
            src={data?.user?.image}
            alt=""
            className="overflow-hidden object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="title-font mt-4 text-lg font-medium text-gray-900">
            {data?.user?.name}
          </h2>
          <div className="mb-4 mt-2 h-1 w-12 rounded bg-gray-800" />
          <p className="text-base">
            Raclette knausgaard hella meggs normcore williamsburg enamel pin
            sartorial venmo tbh hot chicken gentrify portland.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
