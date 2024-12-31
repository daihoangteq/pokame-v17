import Timer from "@src/components/atom/timer";

const CountdownTimer = () => {
  return (
    <div className="absolute top-12 left-8">
      <Timer.Case>
        <Timer.Time time={60} />
      </Timer.Case>
    </div>
  );
};
export default CountdownTimer;
