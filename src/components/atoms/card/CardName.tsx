import type { FC } from "react";

interface Props {
  name: string;
}
export const CardName: FC<Props> = ({ name }) => {
  return (
    <p className="text-lg text-orange-900 font-bold text-center">{name}</p>
  );
};
