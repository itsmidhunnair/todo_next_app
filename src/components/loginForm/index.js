import LogoHeader from "@components/common/LogoHeader";
import OauthPart from "@components/common/signup-login/OauthPart";
import useAuth from "@hooks/useAuth";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@constants/schema";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });
  const { loginUser } = useAuth();

  return (
    <section className="text-gray-600">
      <div className="container mx-auto px-5 pt-7">
        <LogoHeader />
        <div className="mb-6 flex w-full flex-col text-center">
          <h3 className="title-font mb-4 text-2xl font-normal text-[#111827] sm:text-3xl">
            Log in to Unlock Your Productivity Potential!
          </h3>
        </div>
        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <div className="-m-2 flex flex-wrap">
            <form onSubmit={handleSubmit(loginUser)} className="w-full">
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
                    name="email"
                    placeholder="Enter your email here"
                    {...register("email")}
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-[#2aa9e7] focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                  <span className="text-sm text-red-800">
                    {errors.email?.message}
                  </span>
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="text-sm leading-7 text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="email"
                    name="email"
                    placeholder="Enter your password here"
                    {...register("password")}
                    className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-[#2aa9e7] focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                  <span className="text-sm text-red-800">
                    {errors.password?.message}
                  </span>
                </div>
              </div>
              <div className="flex w-full items-end justify-between gap-y-3 p-2 max-sm:flex-col  max-sm:items-start">
                <button
                  type="submit"
                  className="mt-4 flex rounded border-0 bg-[#111827] px-8 py-2 text-lg text-white hover:bg-[#2f3b54] focus:outline-none"
                >
                  Log in
                </button>
                <span className="text-right text-[#111827]">
                  New to this app?
                  <Link href="/signup" className="underline underline-offset-4">
                    {" "}
                    Signup here
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

export default LoginForm;
