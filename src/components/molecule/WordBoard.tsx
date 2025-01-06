import { useContext, useEffect, useRef } from "react";

import CharacterInput from "@src/components/atom/character-input";
import { usePokeSelector } from "@src/hooks/core";

const WordBoard = () => {
  const inputValue = usePokeSelector("inputValue");

  return (
    <div className="relative w-full flex justify-center">
      <CharacterInput.Word
        Component={CharacterInput.Character}
        lenWord={`${inputValue}`.length || 1}
        word={`${inputValue}`.split("")}
      />
    </div>
  );
};
export default WordBoard;
