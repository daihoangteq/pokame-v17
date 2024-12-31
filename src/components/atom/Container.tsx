import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const Container: FC<Props> = ({ children }) => {
  return (
    <div className="container min-h-full h-dvh m-auto p-8 overflow-auto relative">
      {children}
    </div>
  );
};
