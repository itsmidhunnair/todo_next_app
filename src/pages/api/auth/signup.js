import dbConnect from "@lib/dbConnect";
import { hashPassword } from "@services/api/passwordHandling";
import userSchema from "@utils/schema/userSchema";
// import signupSchema from "@utils/schema/signupSchema";

export default async function handler(req, res) {
  dbConnect();
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    try {
      const encPassword = await hashPassword(password);
      let data = await userSchema.create({
        name: name,
        email: email,
        password: encPassword,
      });
      res.status(200).send("User Added Successfully");
    } catch (error) {
      console.log(error);
      res.status(409).json(error);
    }
  }
}
