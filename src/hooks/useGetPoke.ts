import { useEffect } from "react";

import { LIMIT, OFFSET } from "@src/constants/BASE";
import { getApi } from "@src/utils/api";

import { useDispatch } from "./core";

export const useGetApi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await getApi(`/?limit=${LIMIT}&offset=${OFFSET}`);
      if (data.results && data.results.length > 0) {
        const pokes = data.results.filter(
          (record: { name: string }) => record.name
        );
        dispatch({ type: "INITIAL_POKE", payload: pokes });
      }
    })();
  }, [dispatch]);
};
