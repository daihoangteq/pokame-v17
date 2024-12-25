import type { FC, ReactNode } from "react";
import { Header } from "@src/components/atoms/header";
import { SubHeader } from "@src/components/atoms/header/SubHeader";

interface Props {
  children: ReactNode;
}
const Base: FC<Props> = ({ children }) => {
  return (
    <div className="container min-h-full h-dvh m-auto p-8 overflow-auto relative">
      <Header />
      <SubHeader />
      {children}
    </div>
  );
};
export default Base;
