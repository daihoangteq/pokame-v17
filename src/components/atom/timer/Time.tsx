interface Props {
  time: number;
}
export const Time = ({ time }: Props) => {
  return (
    <p className="text-4xl font-bold text-white drop-shadow-[2px_2px_0px_rgba(75,131,255,1)]">
      {time}
    </p>
  );
};
