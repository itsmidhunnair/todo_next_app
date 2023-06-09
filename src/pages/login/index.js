import LoginForm from "@components/loginForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const LoginPage = () => {

  const { status } = useSession();

  const router = useRouter();

  if (status === "authenticated") {
    router.push("/tasks");
  }


  return <LoginForm />;
};

export default LoginPage;

LoginPage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
