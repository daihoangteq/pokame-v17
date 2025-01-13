import { forwardRef } from "react";

import { usePokeSelector } from "@src/hooks/core";
import { actionFormPoke } from "@src/services/formpoke";
import WordCloud3D from "@src/components/atom/Word3DItem";
import { useDebounceValue } from "@src/hooks/useDebouncedValue";

const VirtualForm = forwardRef<HTMLButtonElement>(
  (_, ref) => {
    const activeName = usePokeSelector("activeName");
    const inputValue = usePokeSelector("inputValue");
    // Replace useDeferredValue with debounce
    const deferredValue = useDebounceValue("", inputValue, 500);
    
    return (
      <>
        <input
          type="hidden"
          value={activeName}
          name={actionFormPoke().pokeName}
        />
        <input
          type="hidden"
          value={inputValue}
          name={actionFormPoke().inputName}
        />
        <button type="submit" className="hidden" ref={ref} />
        <WordCloud3D text={deferredValue} />
      </>
    );
  }
);
export default VirtualForm;
