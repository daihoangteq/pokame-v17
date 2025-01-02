import { useEffect } from "react";

import { LIMIT, OFFSET } from "@src/constants/BASE";
import { getApi } from "@src/utils/api";

import { useDispatch } from "./core";
import { shuffle } from "@src/utils";
import type { PokeCard } from "@src/stores/pokeType";

export const useGetApi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await getApi(`/?limit=${LIMIT}&offset=${OFFSET}`);
      if (data.results && data.results.length > 0) {
        const pokes = shuffle<PokeCard>(data.results.filter(
          (record: { name: string }) => record.name
        ));
        dispatch({ type: "INITIAL_POKE", payload: pokes });
      }
    })();
  }, [dispatch]);
};
