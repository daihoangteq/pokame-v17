import { createContext } from "react";

import type { PokeContextType } from "./pokeType";
import { LIMIT, OFFSET } from "@src/constants/BASE";

export const initialPokeState: PokeContextType["state"] = {
  pending: false,
  inputValue: "",
  activeIndex: 0,
  keyPressing: "",
  pokes: [],
  point: 0,
  activeName: "",
  option: {
    limit: LIMIT,
    offset: OFFSET
  }
};

const initialState: PokeContextType = {
  state: initialPokeState,
  dispatch: () => null,
};

export const PokeContext = createContext<PokeContextType>(initialState);
export const PokeContextProvider = PokeContext;
