import type { PokeCard, PokeState } from "./pokeType";

export type PokeAction =
  | { type: "INPUT_KEYBOARD"; payload: string }
  | { type: "BACKSPACE"; payload: string }
  | { type: "INITIAL_POKE"; payload: PokeCard[] }
  | { type: "SUCCESS" }
  | { type: "FAIL" }
  | { type: "PENDING"; payload: boolean }

export const pokeReducer = (
  state: PokeState,
  action: PokeAction
): PokeState => {
  switch (action.type) {
    case "INPUT_KEYBOARD":
      const fullValue = state.inputValue + action.payload;
      return {
        ...state,
        inputValue: fullValue,
        keyPressing: action.payload,
      };
    case "BACKSPACE":
      const removeLastCharacter = state.inputValue.slice(0, -1);
      return {
        ...state,
        inputValue: removeLastCharacter,
        keyPressing: action.payload,
      };
    case "INITIAL_POKE":
      return {
        ...state,
        pokes: action.payload,
        activeIndex: 0,
        activeName: action.payload[0].name,
      };
    case "SUCCESS":
      return {
        ...state,
        activeIndex: state.activeIndex + 1,
        activeName: state.pokes[state.activeIndex + 1].name,
        point: state.point + 1,
        inputValue: "",
      };
    case "FAIL":
      return {
        ...state,
        point: state.point - 1 > 0 ? state.point - 1 : 0,
        inputValue: "",
      };
      case "PENDING":
        return {
          ...state,
         pending: action.payload
        };
    default:
      return state;
  }
};
