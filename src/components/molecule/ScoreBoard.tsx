import Score from "@src/components/atom/score";
import { usePokeSelector } from "@src/hooks/core";

const ScoreBoard = () => {
  const point = usePokeSelector("point");
  return (
    <div className="absolute top-12 right-8">
      <Score.Circle>
        <Score.Point point={point} />
      </Score.Circle>
    </div>
  );
};
export default ScoreBoard;
