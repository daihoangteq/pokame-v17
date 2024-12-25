import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const Case = ({ children }: Props) => {
  return (
    <div className="w-24 h-24 bg-blue-600 border-blue-400 border-4 rounded-full flex items-center justify-center drop-shadow-lg">
      {children}
    </div>
  );
};
