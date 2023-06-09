import TaskFormGrp from "@components/task";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
const Task = () => {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <TaskFormGrp />
    </>
  );
};

export default Task;
