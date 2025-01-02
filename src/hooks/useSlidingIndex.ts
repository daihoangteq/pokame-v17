import { postTracking } from "@src/utils/api";
import { useEffect, useState } from "react";

const DELAY = 700;

export const useSlidingIndex = () => {
  const [immediateValue, setSliding] = useState<number>(-1);
  const [debounceValue, setDebounce] = useState<number>(-1);
  // debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(immediateValue);
    }, DELAY);

    return () => {
      clearTimeout(handler);
    };
  }, [immediateValue]);

  useEffect(() => {
    if (debounceValue > -1) {
      postTracking(`/tracking?index=${debounceValue}`);
    }
  }, [debounceValue]);

  return { setSliding };
};
