import Score from "@src/components/atoms/score";

const ScoreBoard = () => {
  return (
    <div className="absolute top-12 right-8">
      <Score.Circle>
        <Score.Point point={1} />
      </Score.Circle>
    </div>
  );
};
export default ScoreBoard;
