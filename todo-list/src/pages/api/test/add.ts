import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "./../../../utils/connectDB";
import Test from "@/models/testModel";

//tests if the server is connected to the data base, and creates a new document with the model info

export default async function addTest(
  _req: NextApiRequest,
  _res: NextApiResponse
) {
  try {
    await connectDB();
    const test = await Test.create(_req.body);
    _res.json({ message: "Connected to Database", test });
  } catch (error) {
    error instanceof Error && console.log(error.message);
  }
}
