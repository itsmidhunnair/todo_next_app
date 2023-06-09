import { toastConfig } from "@constants/toastConfig";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const useAuth = () => {
  const router = useRouter();

  const signupUser = async (data) => {
    const loading = toast.loading("Creating Account...");
    try {
      let response = await axios.post("/api/auth/signup", data);
      console.log(response);
      toast.update(loading, {
        ...toastConfig,
        render: (
          <div className="text-center">
            {response.data}.<br />
            Please Login to Continue...
          </div>
        ),
        type: "success",
        isLoading: false,
      });
    } catch (error) {
      toast.update(loading, {
        ...toastConfig,
        render: (
          <div className="text-center">
            Account creation Failed! <br /> Please Try Again...
          </div>
        ),
        type: "error",
        isLoading: false,
      });
      console.log(error);
    }
  };

  const githubAuth = async () => {
    const result = await toast.promise(
      signIn("github", {
        callbackUrl: "http://localhost:3000/tasks",
      }),
      {
        pending: "Attempting to Login with github...",
        error: (
          <div>
            Login Attempt Failed! <br /> Please use another login methods.
          </div>
        ),
        success: <div>Login Successfull!</div>,
      }
    );
    console.log(result);
  };

  const loginUser = async ({ email, password }) => {
    const loading = toast.loading("Attempting to Login...");
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "http://localhost:3000/tasks",
    });
    console.log(result);
    if (result.status === 401) {
      toast.update(loading, {
        render: "Invalid Credentials!!",
        type: "error",
        isLoading: false,
        ...toastConfig,
      });
    }
    if (result.status === 200) {
      toast.update(loading, {
        render: "Login Successfull!",
        type: "success",
        isLoading: false,
        ...toastConfig,
      });
    }
  };

  return { signupUser, loginUser, githubAuth };
};

export default useAuth;
