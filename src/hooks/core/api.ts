import { use } from "react";

import { getApi } from "@src/utils/api";

export const useGetApi = (url: string) => {
  // Use the use function to call the getApi function
  const data = use(getApi(url));

  return data;
};
