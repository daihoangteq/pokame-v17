import { PokeContext } from "@src/stores/pokeProvider";
import { useContext } from "react";
import { createPortal } from "react-dom";
import { Loading } from "../atom/Loading";
export const PendingPoke = () => {
  const { pending } = useContext(PokeContext).state;
  const rootElement = document.getElementById("root");
  if (!rootElement) return <></>;

  return <div>{pending && createPortal(<Loading />, rootElement)}</div>;
};
