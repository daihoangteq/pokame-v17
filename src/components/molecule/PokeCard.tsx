import type { FC } from "react";

import Card from "@src/components/atom/card";

interface Props {
  name: string;
  imgUrl: string;
  isActive: boolean;
}

const PokeCard: FC<Props> = ({ imgUrl, name, isActive }) => {
  return (
    <Card.Container>
      <Card.Img imgUrl={imgUrl} name={name} />
      <Card.Name name={name} />
      {!isActive && (
        <div className="top-0 left-0 absolute bg-slate-700 opacity-45 w-full h-full z-10" />
      )}
    </Card.Container>
  );
};
export default PokeCard;
