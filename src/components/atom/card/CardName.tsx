import { NAME_POKE_SKELETON } from "@src/constants/BASE";
import type { FC } from "react";

interface Props {
  name: string;
}
export const CardName: FC<Props> = ({ name }) => {
  return (
    <p className="text-lg text-orange-900 font-bold text-center">
      {name === NAME_POKE_SKELETON ? "" : name}
    </p>
  );
};
