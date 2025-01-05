import { forwardRef, useEffect } from "react";

import { usePokeSelector } from "@src/hooks/core";
import { useHandleRealKeyboard } from "@src/hooks/useKeyboard";
import { actionFormPoke } from "@src/services/formpoke";
import WordCloud3D from "@src/components/atom/Word3DItem";
import { useDebounceValue } from "@src/hooks/useDebouncedValue";

const VirtualForm = forwardRef<HTMLButtonElement>(
  (_, ref) => {
    const activeName = usePokeSelector("activeName");
    const inputValue = usePokeSelector("inputValue");
    const pending = usePokeSelector("pending");
    // Replace useDeferredValue with debounce
    const deferredValue = useDebounceValue("", inputValue, 500);


    const { isSubmit } = useHandleRealKeyboard({ isDisable: pending });
    useEffect(() => {
      if (isSubmit && ref) {
        ref?.current?.click();
      }
    }, [isSubmit, ref]);
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
