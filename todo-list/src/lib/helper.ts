const BASE_URL = "http://localhost:3000";

//Returns items object
export const getItems = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/items`, {
      cache: "no-store",
    });
    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

//Returns the single item object
export const getItem = async (itemId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/items/${itemId}`);
    const data = await response.json();

    data ? data : {};
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
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
