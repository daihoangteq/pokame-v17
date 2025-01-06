
import { useDispatch, usePokeSelector } from "@src/hooks/core";
import { useContext } from "react";
import { PokeContext } from "@src/stores/pokeProvider";

interface Props {
  keyName: string;
}
const KEY_STYLE =
  "border-b-4 w-10 h-10 text-black border-gray-300 border-b-slate-950 border-2 rounded-sm text-lg text-center flex items-center justify-center cursor-pointer hover:bg-slate-200 select-none transition";
export const Key = ({ keyName }: Props) => {
  const { pending } = useContext(PokeContext).state;

  const keyPressing = usePokeSelector("keyPressing");
  const dispatch = useDispatch();
  const handleMoveDown = () => {
    if (pending) return;
    dispatch({
      type: "INPUT_KEYBOARD",
      payload: keyName,
    });
  };
  const handleMoveUp = () => {
    // reset keyPressing value
    dispatch({
      type: "INPUT_KEYBOARD",
      payload: "",
    });
  };
  return (
    <li
      className={`${KEY_STYLE} ${keyName === keyPressing ? "border-b-[2px]" : ""}`}
      onMouseDown={handleMoveDown}
      onMouseUp={handleMoveUp}
    >
      {keyName}
    </li>
  );
};
