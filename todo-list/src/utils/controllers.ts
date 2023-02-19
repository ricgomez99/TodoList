import { NextApiRequest, NextApiResponse } from "next";
import Item from "@/models/itemModel";

/* Endpoints 
PUT: http://localhost:3000/api/items/?id=63f26b20b3bfc1990d3a4e88
GET, POST: http://localhost:3000/api/items 
*/

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

export async function addItems(_req: NextApiRequest, _res: NextApiResponse) {
  try {
    const { body } = _req;
    !body
      ? _res.status(404).json({ error: "Unable to create document" })
      : Item.create(body, (err: any, data: any) => _res.status(201).json(data));
  } catch (error) {
    _res.status(404).json(error);
  }
}

export async function putItem(_req: NextApiRequest, _res: NextApiResponse) {
  try {
    const { id } = _req.query;
    const { body } = _req;

    if (id && body) {
      const item = await Item.findByIdAndUpdate(id, body);
      _res.status(200).json(item);
    }
    _res.status(404).json({ error: "Item not found" });
  } catch (error) {
    _res.status(404).json({ error: "Unable to update document" });
  }
}
