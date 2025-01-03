import { useContext, useEffect, useRef, useState } from "react";

import { useDispatch } from "@src/hooks/core";
import { actionFormPoke } from "@src/services/formpoke";

import WordBoard from "../molecule/WordBoard";

import KeyBoard from "./KeyBoard";
import { PokeAction } from "@src/stores/pokeReduce";
import { PokeContext } from "@src/stores/pokeProvider";
type PokeActionType = PokeAction["type"];
const FormPoke = () => {
  const {state: pokeState} = useContext(PokeContext);
  const formRefElm = useRef<HTMLFormElement | null>(null);
  const [state, setState] =
    useState<Extract<PokeActionType, "SUCCESS" | "FAIL">>();
  const dispatch = useDispatch();
  const onSubmit = async (event: React.FormEvent) => {
    if(!formRefElm.current) return
    dispatch({type:"PENDING", payload:true})
    event.preventDefault();
    const formData = new FormData(formRefElm.current);
    console.log(formData);
    const eventForm = await actionFormPoke().actionName("", formData);
    setState(eventForm);
    dispatch({type:"PENDING", payload:false})
  };
  useEffect(() => {
    if (state && !pokeState.pending) {
      const action: PokeAction = {
        type: state,
      };
      dispatch(action);
    }
  }, [dispatch, state, pokeState.pending]);

  return (
    <form ref={formRefElm} className="pb-7 pt-4 flex flex-col items-center" onSubmit={onSubmit}>
      {state}
      <WordBoard />
      <KeyBoard />
    </form>
  );
};
export default FormPoke;
