import { API_URL } from "@src/constants/BASE";

export const getApi = async (url: string) => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(`Fetch error: ${e}`);
  }
};
