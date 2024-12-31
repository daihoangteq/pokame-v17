import RowKeyBoards from "@src/components/molecule/RowKeyBoards";
import { useHandleRealKeyboard } from "@src/hooks/useKeyboard";
import { PokeContext } from "@src/stores/pokeProvider";
import { useContext } from "react";

const KeyBoard: React.FC = () => {
  const { pending } = useContext(PokeContext).state;

  useHandleRealKeyboard({ isDisable: pending });
  return (
    <div className="pb-7 pt-4 flex flex-col items-center">
      <RowKeyBoards.top />
      <RowKeyBoards.home />
      <RowKeyBoards.bottom />
    </div>
  );
};
export default KeyBoard;
