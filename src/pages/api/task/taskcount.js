import dbConnect from "@lib/dbConnect";
import { fetchTaskCount } from "@services/api/taskServices/taskServices";
import { getToken } from "next-auth/jwt";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await dbConnect();
    const { email } = await getToken({ req });
    try {
      const data = await fetchTaskCount(email);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
