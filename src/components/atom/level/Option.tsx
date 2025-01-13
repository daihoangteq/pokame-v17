import type { ReactNode } from "react";

interface IProps {
  onClick: () => void;
  children: ReactNode;
}
export const Option: React.FC<IProps> = ({ onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className="w-fit p-3 text-white bg-red-500 rounded-md cursor-pointer font-bold"
    >
      {children}
    </div>
  );
};
