import { NextApiRequest, NextApiResponse } from "next";
import { getItems, addItems, putItem, deleteItem } from "@/utils/controllers";
import connectDB from "./../../../utils/connectDB";

export default async function handler(
  _req: NextApiRequest,
  _res: NextApiResponse
) {
  /*Verifies any error during the connection */
  connectDB().catch(() => _res.status(405).json({ error: "Connection Error" }));
  /* Request Method */
  const { method } = _req;

  /*Verification*/
  switch (method) {
    case "GET":
      getItems(_req, _res);
      break;
    case "POST":
      addItems(_req, _res);
      break;
    case "PUT":
      putItem(_req, _res);
      break;
    case "DELETE":
      deleteItem(_req, _res);
      break;
    default:
      _res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      _res.status(405).end(`Method ${method} not allowed`);
      break;
  }
}
