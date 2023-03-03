const BASE_URL = "http://localhost:3000";

//Returns items object
export const getItems = async () => {
  const response = await fetch(`${BASE_URL}/api/items`, {
    cache: "force-cache",
  });
  const data = response.json();

  return data;
};

//Returns the single item object
export const getItem = async (id: string) => {
  const response = await fetch(`${BASE_URL}/api/items/${id}`);
  const data = await response.json();

  data ? data : {};
};

//Post an Item
export const addItem = async (formData: unknown) => {
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
};

//Update an Item
export const updateItem = async (id: string, formData: unknown) => {
  try {
    const Info = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${BASE_URL}/api/items/${id}`, Info);
    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

//Delete item
export const deleteItem = async (id: string) => {
  try {
    const Info = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(`${BASE_URL}/api/items/${id}`, Info);
    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
