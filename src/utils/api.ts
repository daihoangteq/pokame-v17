import { API_TRACK_URL, API_URL } from "@src/constants/BASE";

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

export const postTracking = async (url: string) => {
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    const response = await fetch(`${API_TRACK_URL}${url}`, {
      method: "POST",
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
