import useAuth from "@hooks/useAuth";
import useTask from "@hooks/useTask";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";

const OauthPart = () => {
  const { githubAuth } = useAuth();
  return (
    <div className="relative mt-8 w-full border-t border-gray-200 p-2 text-center">
      <span className="absolute -top-4 rounded-md bg-white p-1 text-center font-semibold text-[#111827]">
        OR
      </span>
      <p className="my-5 leading-normal">
        Seamlessly Signup with Your Favorite Platforms!
      </p>
      <div className="flex justify-center gap-3">
        <button className="group flex items-center rounded-md border border-[#111827] px-3 py-2 text-[#111827] hover:bg-[#11182724]">
          <span className="mr-4 rounded-md p-1 group-hover:bg-white">
            <FcGoogle />
          </span>{" "}
          Google
        </button>
        <button
          onClick={githubAuth}
          type="submit"
          className="group flex items-center rounded-md border border-[#111827] px-3 py-2 text-[#111827] hover:bg-[#11182724]"
        >
          <span className="mr-4 rounded-md p-1 group-hover:bg-white">
            <VscGithub />
          </span>{" "}
          Github
        </button>
      </div>
    </div>
  );
};

export default OauthPart;
