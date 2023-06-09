import dbConnect from "@lib/dbConnect";
import { changeStatus } from "@services/api/taskServices/taskServices";
import { getToken } from "next-auth/jwt";

/**
 * To Update Task Status
 */
export default async function handler(req, res) {
  if (req.method === "PUT") {
    await dbConnect();
    const {email} = await getToken({ req });
    const status = req.body.completed;
    const id = req.query.id;
    try {
      const data = await changeStatus(email, id, status);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
