import { useContext } from "react";

import { PokeContext } from "@src/stores/pokeProvider";
import type { PokeState } from "@src/stores/pokeType";

export const usePoke = () => {
  const context = useContext(PokeContext);
  if (!context) {
    throw new Error("usePoke must be used within a PokeProvider");
  }
  return context;
};

export const usePokeSelector = <T extends keyof PokeState>(
  selectState: T
): PokeState[T] => {
  const { state } = useContext(PokeContext);
  if (!selectState) {
    throw new Error("selectState must be valid");
  }
  return state[selectState];
};

export const useDispatch = () => {
  const { dispatch } = useContext(PokeContext);
  return dispatch;
};
