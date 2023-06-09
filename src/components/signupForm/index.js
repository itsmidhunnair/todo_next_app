import LogoHeader from "@components/common/LogoHeader";
import OauthPart from "@components/common/signup-login/OauthPart";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import useAuth from "src/hooks/useAuth";

const SignupForm = () => {
  const { register, handleSubmit } = useForm();

  const { signupUser } = useAuth();

  return (
    <section className="text-gray-600">
      <div className="container mx-auto px-5 pt-7">
        <LogoHeader />
        <div className="mb-6 flex w-full flex-col text-center">
          <h3 className="title-font mb-4 text-2xl font-normal text-[#111827] sm:text-3xl">
            Sign Up and Conquer Your Tasks!!!
          </h3>
        </div>
        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <div className="-m-2 flex flex-wrap">
            <form onSubmit={handleSubmit(signupUser)} className="w-full">
              <div className="w-full p-2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    id="name"
                    name="name"
                    placeholder="Enter your name here"
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-[#2aa9e7] focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              {/* <div className="w-full p-2">
              <div className="relative">
                <label
                  htmlFor="dob"
                  className="text-sm leading-7 text-gray-600"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="Enter your Date of Birth here"
                  className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-[#2aa9e7] focus:bg-white focus:ring-2 focus:ring-indigo-200"
                />
              </div>
            </div> */}
              <div className="w-full p-2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    name="email"
                    placeholder="Enter your email here"
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-[#2aa9e7] focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password")}
                    name="password"
                    placeholder="Enter your password here"
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-[#2aa9e7] focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="flex w-full items-end justify-between p-2 max-sm:flex-col gap-y-3  max-sm:items-start">
                <button className="mt-4 flex rounded border-0 bg-[#111827] px-8 py-2 text-lg text-white hover:bg-[#2f3b54] focus:outline-none">
                  Sign up
                </button>
                <span className="text-right text-[#111827]">
                  Already have an account?
                  <Link href="/login" className="underline underline-offset-4">
                    {" "}
                    Login here
                  </Link>
                </span>
              </div>
            </form>
            <OauthPart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
