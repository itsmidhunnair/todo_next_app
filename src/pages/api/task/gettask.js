import dbConnect from "@lib/dbConnect";
import { fetchTask } from "@services/api/taskServices/taskServices";
import { getToken } from "next-auth/jwt";

/**
 * To Get all Task
 */
export default async function handler(req, res) {
  if (req.method === "GET") {
    await dbConnect();
    const token = await getToken({ req });
    try {
      const data = await fetchTask(token.email);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
