import { useContext, useEffect, useRef, useState } from "react";

import { useDispatch, usePokeSelector } from "@src/hooks/core";
import { actionFormPoke } from "@src/services/formpoke";

import WordBoard from "@src/components/molecule/WordBoard";
import KeyBoard from "@src/components/molecule/KeyBoard";
import { PokeAction } from "@src/stores/pokeReduce";
import { PokeContext } from "@src/stores/pokeProvider";
import { PendingPoke } from "@src/components/molecule/PendingPoke";
import VirtualForm from "../molecule/VirtualForm";
import { useHandleRealKeyboard } from "@src/hooks/useKeyboard";
type PokeActionType = PokeAction["type"];
const FormPoke = () => {
  const { state: pokeState } = useContext(PokeContext);
  const formRefElm = useRef<HTMLFormElement | null>(null);
  const [state, setState] =
    useState<Extract<PokeActionType, "SUCCESS" | "FAIL">>();
  const dispatch = useDispatch();
   const ref = useRef<HTMLButtonElement | null>(null);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formRefElm.current) return;
    dispatch({ type: "PENDING", payload: true });
    const formData = new FormData(formRefElm.current);
    const eventForm = await actionFormPoke().actionName("", formData);
    setState(eventForm);
    dispatch({ type: "PENDING", payload: false });
  };
      
  const pending = usePokeSelector("pending");
  const { isSubmit } = useHandleRealKeyboard({ isDisable: pending });
  useEffect(() => {
    if (isSubmit && ref?.current) {
      ref.current.click();
    }
  }, [isSubmit, ref]);
  useEffect(() => {
    if (state && !pokeState.pending) {
      const action: PokeAction = {
        type: state,
      };
      dispatch(action);
    }
  }, [dispatch, state, pokeState.pending]);

  return (
    <form
      ref={formRefElm}
      className="pb-7 pt-4 flex flex-col items-center"
      onSubmit={onSubmit}
    >
      <p
        className="font-bold text-lg"
        style={{ color: state === "FAIL" ? "red" : "green" }}
      >
        <div className="px-2 bg-white rounded-sm mb-2">
        {state}
        </div>
      </p>
      <WordBoard />
      <KeyBoard />
      <PendingPoke />
      <VirtualForm ref={ref} />
    </form>
  );
};
export default FormPoke;
