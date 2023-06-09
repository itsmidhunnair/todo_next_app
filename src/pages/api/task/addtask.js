import { createTask } from "@services/api/taskServices/taskServices";
import { getToken } from "next-auth/jwt";

/**
 * Will Add Task
 */
export default async function handler(req, res) {
  if (req.method === "POST") {
    const token = await getToken({ req });
    console.log(token);
    const { name, description } = req.body;
    try {
      const data = await createTask(token.email, name, description);
      res.status(201).json(data);
    } catch (error) {
      res.status(400).send("Task Adding Failed");
    }
  }
}
