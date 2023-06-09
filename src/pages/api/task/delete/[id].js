import { removeTask } from "@services/api/taskServices/taskServices";
import { getToken } from "next-auth/jwt";

/**
 * To Delete Task
 */
export default async function (req, res) {
  if (req.method === "DELETE") {
      const { id } = req.query;
      const {email} = await getToken({req})
    try {
      const { acknowledged, modifiedCount } = await removeTask(email, id);
      if (acknowledged && modifiedCount === 1) {
        return res.status(200).send("Product Deleted Successfully");
      }
      return res.status(400).json("Product Delete Failed");
    } catch (error) {
        console.log(error);
      res.status(400).json(error);
    }
  }
}
