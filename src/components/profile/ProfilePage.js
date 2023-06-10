import { useSession } from "next-auth/react";
import React from "react";

const ProfilePage = () => {
  const { data } = useSession();
  console.log(data);
  return (
    <div className="m-10 mx-auto flex max-w-2xl flex-col rounded-xl border-2 p-10 sm:flex-row">
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
          <table class="table-fixed">
            <thead>
              <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
