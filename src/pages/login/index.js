import Loader from "@components/common/loader/Loader";
import LoginForm from "@components/loginForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader size="full" withText={false} variant="dark" />
      </div>
    );
  }

  if (status === "authenticated") {
    router.push("/tasks");
  }

  if (status === "unauthenticated") {
    return <LoginForm />;
  }
};

export default LoginPage;

LoginPage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
