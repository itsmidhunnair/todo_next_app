import { useSession } from "next-auth/react";
import React from "react";

const useToast = () => {
  const { data } = useSession();

  console.log(data);

  const greetUser = () => {
    return (
      <div className="text-center">
        Welcome <span className="font-bold">{data.user.name}</span>
        <br />
        Let's do something Productive today!!
      </div>
    );
  };

  return { greetUser };
};

export default useToast;
