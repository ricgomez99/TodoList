import connectDB from "./../../../utils/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
import { getItem, putItem, deleteItem } from "@/utils/controllers";

export default async function handler(
  _req: NextApiRequest,
  _res: NextApiResponse
) {
  /*Verifies any error during the connection */
  connectDB().catch(() => _res.status(405).json({ error: "Connection Error" }));
  const { method } = _req;

  switch (method) {
    case "GET":
      getItem(_req, _res);
      break;
    case "PUT":
      putItem(_req, _res);
      break;
    case "DELETE":
      deleteItem(_req, _res);
      break;
    default:
      _res.status(405).end(`Method ${method} not allowed`);
      break;
  }
}
