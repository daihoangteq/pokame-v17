import { useContext, useEffect } from "react";

import { INIT_DATA } from "@src/constants/BASE";
import { getApi } from "@src/utils/api";

import { useDispatch } from "./core";
import { shuffle } from "@src/utils";
import type { PokeCard } from "@src/stores/pokeType";
import { PokeContext } from "@src/stores/pokeProvider";

export const useGetApi = () => {
  const { state } = useContext(PokeContext);
  const dispatch = useDispatch();
  const { option } = state;
  useEffect(() => {
    (async () => {
      dispatch({ type: "INITIAL_POKE", payload: INIT_DATA });
      const data = await getApi(`/?limit=${option.limit}&offset=${option.offset}`);
      if (data.results && data.results.length > 0) {
        const pokes = shuffle<PokeCard>(
          data.results.filter((record: { name: string }) => record.name)
        );
        dispatch({ type: "INITIAL_POKE", payload: pokes });
      }
    })();
  }, [dispatch, option.limit, option.offset]);
};
