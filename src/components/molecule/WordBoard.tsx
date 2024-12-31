import { useEffect, useRef } from "react";

import CharacterInput from "@src/components/atom/character-input";
import { usePokeSelector } from "@src/hooks/core";

const WordBoard = () => {
  const defaultName = usePokeSelector("defaultName");
  const inputValue = usePokeSelector("inputValue");
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (`${defaultName}`.length === `${inputValue}`.length && ref) {
      ref.current?.click();
    }
  }, [defaultName, inputValue]);

  return (
    <div className="relative w-full flex justify-center">
      <input type="hidden" value={inputValue} name={"pokeName"} />
      <button type="submit" className="hidden" ref={ref} />
      <CharacterInput.Word
        Component={CharacterInput.Character}
        lenWord={`${defaultName}`.length}
        word={`${inputValue}`.split("")}
      />
    </div>
  );
};
export default WordBoard;
