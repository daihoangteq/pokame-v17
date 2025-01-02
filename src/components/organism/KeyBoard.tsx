import RowKeyBoards from "@src/components/molecule/RowKeyBoards";
const KeyBoard: React.FC = () => {

  return (
    <div className="pb-7 pt-4 flex flex-col items-center">
      <RowKeyBoards.top />
      <RowKeyBoards.home />
      <RowKeyBoards.bottom />
    </div>
  );
};
export default KeyBoard;
