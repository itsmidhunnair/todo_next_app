import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const useAuth = () => {
  const router = useRouter();

  const signupUser = async (data) => {
    try {
      let response = await axios.post("/api/auth/signup", data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const githubAuth = () => {
    const result = signIn("github", {
      callbackUrl: "http://localhost:3000/tasks",
    });
  };

  const loginUser = async ({ email, password }) => {
    const result = signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "http://localhost:3000/tasks",
    });
    console.log(result);
  };

  return { signupUser, loginUser, githubAuth };
};

export default useAuth;
