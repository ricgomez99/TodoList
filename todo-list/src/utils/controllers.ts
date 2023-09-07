import { NextApiRequest, NextApiResponse } from "next";
import Item from "@/models/itemModel";

/* Endpoints 
PUT, DELETE: http://localhost:3000/api/items/?id=63f26b20b3bfc1990d3a4e88
GET, POST: http://localhost:3000/api/items 
GET by ID: http://localhost:3000/api/items/63f3db608b8e60ac0f57a279
*/

/*Controllers*/
export async function getItems(_req: NextApiRequest, _res: NextApiResponse) {
  try {
    const items = await Item.find({});
    if (!items) {
      return _res.status(404).json({ error: "Data not found" });
    }

    return _res.status(200).json(items);
  } catch (error) {
    return _res.status(404).json({ error: "Error fetching data" });
  }
}

export async function getItem(_req: NextApiRequest, _res: NextApiResponse) {
  try {
    const { itemId } = _req.query;
    if (itemId) {
      const item = await Item.findById(itemId);
      return _res.status(200).json(item);
    }

    return _res.status(404).json({ error: "Cannot find User id" });
  } catch (error) {
    return _res.status(404).json({ error: "Unable to find this user" });
  }
}

export async function addItems(_req: NextApiRequest, _res: NextApiResponse) {
  try {
    const { body } = _req;
    !body
      ? _res.status(404).json({ error: "Unable to create document" })
      : Item.create(body, (err: any, data: any) => _res.status(201).json(data));
  } catch (error) {
    return _res.status(404).json(error);
  }
}

export async function putItem(_req: NextApiRequest, _res: NextApiResponse) {
  try {
    const { itemId } = _req.query;
    const formData = _req.body;

    if (itemId && formData) {
      const item = await Item.findByIdAndUpdate(itemId, formData);
      return _res.status(200).json(item);
    }

    return _res.status(404).json({ error: "Item not found" });
  } catch (error) {
    return _res.status(404).json({ error: "Unable to update document" });
  }
}

export async function deleteItem(_req: NextApiRequest, _res: NextApiResponse) {
  try {
    const { itemId } = _req.query;
    if (itemId) {
      const deleted = await Item.findByIdAndDelete(itemId);
      return _res.status(200).json({ message: "Item deleted", deleted });
    }

    return _res.status(404).json({ error: "Item not found" });
  } catch (error) {
    return _res.status(404).json({ error: "Unble to delete document" });
  }
}
