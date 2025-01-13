import { type FC, useReducer } from "react";

import { Header } from "@src/components/atom/Header";
import { SubHeader } from "@src/components/atom/SubHeader";
import IndexCounter from "@src/components/molecule/IndexCounter";
import ScoreBoard from "@src/components/molecule/ScoreBoard";
import FormPoke from "@src/components/organism/FormPoke";
import { useGetApi } from "@src/hooks/useGetPoke";
import { initialPokeState, PokeContext } from "@src/stores/pokeProvider";
import { pokeReducer } from "@src/stores/pokeReduce";
import CarouselType from "@src/components/organism/CarouselType";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselPokeCard } from "@src/components/organism/CarouselPokeCard";
import { OptionLevel } from "@src/components/molecule/OptionLevel";
const Page: FC = () => {
  useGetApi();

  return (
    <div >
      <Header />
      <SubHeader />
      <CarouselType />
      <div className="w-[calc(100%_-_10px)] h-[calc(100%_-_10px)] home mx-auto">
      <ScoreBoard />
      <IndexCounter />
      <br />
      <CarouselPokeCard />
      <OptionLevel />
      <FormPoke />
      </div>

    </div>
  );
};

const HomePage: FC = () => {
  const [state, dispatch] = useReducer(pokeReducer, initialPokeState);
  return (
    // Need .Provider
    <PokeContext.Provider value={{ state, dispatch }}>
      <Page />
    </PokeContext.Provider>
  );
};

export default HomePage;
