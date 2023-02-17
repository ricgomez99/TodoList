import { NextApiRequest, NextApiResponse } from "next";
import Item from "@/models/itemModel";

/*Controllers*/
export async function getItems(_req: NextApiRequest, _res: NextApiResponse) {
  try {
    const items = await Item.find({});
    if (!items) return _res.status(404).json({ error: "Data not found" });
    _res.status(200).json(items);
  } catch (error) {
    _res.status(404).json({ error: "Error fetching data" });
  }
}
