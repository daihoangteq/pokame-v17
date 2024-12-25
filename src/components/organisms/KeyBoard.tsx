import RowKeyBoards from "@src/components/molecules/RowKeyBoards";

const KeyBoard = () => {
  return (
    <div className="pb-7 pt-4 flex flex-col items-center">
      <RowKeyBoards.top />
      <RowKeyBoards.home />
      <RowKeyBoards.bottom />
    </div>
  );
};
export default KeyBoard;
