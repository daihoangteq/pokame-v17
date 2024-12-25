interface Props {
  point: number;
}
export const Point = ({ point }: Props) => {
  return (
    <p className="text-5xl font-bold text-white drop-shadow-[2px_2px_0px_rgba(20,255,107,1)]">
      {point}
    </p>
  );
};
