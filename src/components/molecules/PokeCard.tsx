import type { FC } from "react";

import Card from "@src/components/atoms/card";

interface Props {
  name: string;
  imgUrl: string;
}

const PokeCard: FC<Props> = ({ imgUrl, name }) => {
  return (
    <Card.Container>
      <Card.Img imgUrl={imgUrl} name={name} />
      <Card.Name name={name} />
    </Card.Container>
  );
};
export default PokeCard;
