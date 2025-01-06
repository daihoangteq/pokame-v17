import type { PokeAction } from "./pokeReduce";

export interface PokeState {
  pending: boolean;
  inputValue: string;
  activeIndex: number;
  point: number;
  keyPressing: string;
  pokes: PokeCard[];
  activeName: string;
}

export interface PokeContextType {
  state: PokeState;
  dispatch: React.Dispatch<PokeAction>;
}

export interface PokeCard {
  name: string;
}
