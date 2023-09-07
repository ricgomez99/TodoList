import { Task } from "@/app/types";

type FormData = {
  title: string;
  body: string;
};

const { DEPLOYED_URL } = process.env;
const BASE_URL = DEPLOYED_URL;
//Returns items object
export const getItems = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/items`, {
      cache: "no-store",
    });
    const data = (await response.json()) as Task[];

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

//Returns the single item object
export const getItem = async (itemId: string) => {
  const response = await fetch(`${BASE_URL}/api/items/${itemId}`);
  const data = (await response.json()) as Task[];

  if (data) return data;
  return {};
};

//Post an Item
export async function addItem(formData: unknown) {
  try {
    const Info = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${BASE_URL}/api/items`, Info);
    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

//Update an Item
export async function updateItem(itemId: string, formData: FormData) {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  const response = await fetch(`${BASE_URL}/api/items/${itemId}`, Options);
  const data = await response.json();
  return data;
}

//Delete item
export async function deleteItem(itemId: string) {
  try {
    const Info = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(`${BASE_URL}/api/items/${itemId}`, Info);
    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
