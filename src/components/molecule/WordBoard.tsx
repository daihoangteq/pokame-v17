import { useContext, useEffect, useRef } from "react";

import CharacterInput from "@src/components/atom/character-input";
import { usePokeSelector } from "@src/hooks/core";
import { useHandleRealKeyboard } from "@src/hooks/useKeyboard";
import { PokeContext } from "@src/stores/pokeProvider";
import { actionFormPoke } from "@src/services/formpoke";

const WordBoard = () => {
  const inputValue = usePokeSelector("inputValue");
  const activeName = usePokeSelector("activeName");

  const ref = useRef<HTMLButtonElement>(null);
  const { pending } = useContext(PokeContext).state;

  const { isSubmit } = useHandleRealKeyboard({ isDisable: pending });

  useEffect(() => {
    if (isSubmit) {
      ref.current?.click();
    }
  }, [isSubmit]);

  return (
    <div className="relative w-full flex justify-center">
      <input
        type="hidden"
        value={activeName}
        name={actionFormPoke().pokeName}
      />
      <input type="hidden" value={inputValue} name={actionFormPoke().inputName} />

      <button type="submit" className="hidden" ref={ref} />
      <CharacterInput.Word
        Component={CharacterInput.Character}
        lenWord={`${inputValue}`.length || 1}
        word={`${inputValue}`.split("")}
      />
    </div>
  );
};
export default WordBoard;
