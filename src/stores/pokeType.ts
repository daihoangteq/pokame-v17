import type { PokeAction } from "./pokeReduce";
export interface IOption {
  limit: number;
  offset: number;
}
export interface PokeState {
  pending: boolean;
  inputValue: string;
  activeIndex: number;
  point: number;
  keyPressing: string;
  pokes: PokeCard[];
  activeName: string;
  option: IOption;
}

export interface PokeContextType {
  state: PokeState;
  dispatch: React.Dispatch<PokeAction>;
}

export interface PokeCard {
  name: string;
}
