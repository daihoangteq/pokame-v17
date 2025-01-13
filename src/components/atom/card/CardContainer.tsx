import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const CardContainer: FC<Props> = ({ children }) => {
  return (
    <div className="group transition p-5 min-h-52 max-h-52 max-w-80 border-orange-900 border-4 rounded-lg flex items-center justify-center flex-col bg-white relative">
      {children}
    </div>
  );
};
