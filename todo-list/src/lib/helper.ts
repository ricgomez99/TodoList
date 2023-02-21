const BASE_URL = "http://localhost:3000";

export const getItem = async () => {
  const response = await fetch(`${BASE_URL}/api/items`);
  const data = response.json();

  return data;
};
