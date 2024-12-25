interface Props {
  keyName: string;
}
export const Key = ({ keyName }: Props) => {
  return (
    <li className="w-10 h-10 text-black border-gray-300 border-b-slate-950 border-2 border-b-4 rounded-sm text-lg text-center flex items-center justify-center cursor-pointer hover:bg-slate-200">
      {keyName}
    </li>
  );
};
