import CountdownTimer from "@src/components/molecules/CountdownTimer";
import ScoreBoard from "@src/components/molecules/ScoreBoard";
import WordBoard from "@src/components/molecules/WordBoard";
import { CarouselPokeCard } from "@src/components/organisms/CarouselPokeCard";
import KeyBoard from "@src/components/organisms/KeyBoard";
import Base from "@src/components/templates/Base";
import React from "react";

const Main: React.FC = () => {
  return (
    <Base>
      <ScoreBoard />
      <CountdownTimer />
      <br />
      <br />
      <br />

      <CarouselPokeCard />
      <br />
      <br />

      <WordBoard />
      <KeyBoard />
    </Base>
  );
};

export default Main;
