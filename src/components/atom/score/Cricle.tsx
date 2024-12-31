import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const Circle = ({ children }: Props) => {
  return (
    <div className="w-24 h-24 bg-green-600 border-green-400 border-4 rounded-full flex items-center justify-center drop-shadow-lg">
      {children}
    </div>
  );
};
