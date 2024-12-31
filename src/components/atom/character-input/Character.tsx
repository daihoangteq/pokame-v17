interface Props {
  character: string;
}
export const Character = ({ character }: Props) => {
  return (
    <label className="inline-flex justify-center items-center text-center  w-12 h-12 border-gray-200 bg-white border-2 rounded-sm drop-shadow-sm select-none">
      <span className="text-gray-800 text-lg font-bold text-center">
        {character}
      </span>
    </label>
  );
};
