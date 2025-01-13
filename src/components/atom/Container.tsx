import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const Container: FC<Props> = ({ children }) => {
  return (
    <div className="container min-h-full h-dvh m-auto px-8  overflow-hidden relative">
      {children}
    </div>
  );
};
