import Timer from "@src/components/atom/timer";
import { usePokeSelector } from "@src/hooks/core";

const IndexCounter = () => {
  const activeIndex = usePokeSelector("activeIndex");
  return (
    <div className="absolute top-12 left-8">
      <Timer.Case>
        <Timer.Time time={activeIndex} />
      </Timer.Case>
    </div>
  );
};
export default IndexCounter;
