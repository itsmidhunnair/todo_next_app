import Loader from "@components/common/loader/Loader";
import SignupForm from "@components/signupForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const SignupPage = () => {
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
    return <SignupForm />;
  }
};

export default SignupPage;

SignupPage.getLayout = function PageLayout(page) {
  return page;
};
