import { type FC, useReducer } from "react";

import { Header } from "@src/components/atom/Header";
import { SubHeader } from "@src/components/atom/SubHeader";
// import CountdownTimer from "@src/components/molecule/CountdownTimer";
import ScoreBoard from "@src/components/molecule/ScoreBoard";
import { CarouselPokeCard } from "@src/components/organism/CarouselPokeCard";
import FormPoke from "@src/components/organism/FormPoke";
import { useGetApi } from "@src/hooks/useGetPoke";
import { initialPokeState, PokeContext } from "@src/stores/pokeProvider";
import { pokeReducer } from "@src/stores/pokeReduce";

const Page: FC = () => {
  useGetApi();

  return (
    <>
      <Header />
      <SubHeader />
      <ScoreBoard />
      {/* <CountdownTimer /> */}
      <br />
      <br />
      <br />

      <CarouselPokeCard />
      <br />
      <br />

      <FormPoke />
    </>
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
