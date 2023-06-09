import SignupForm from "@components/signupForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const SignupPage = () => {
  const { status } = useSession();

  const router = useRouter();

  if (status === "authenticated") {
    router.push("/tasks");
  }

  return <SignupForm />;
};

export default SignupPage;

SignupPage.getLayout = function PageLayout(page) {
  return page;
};
