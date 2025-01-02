import { useEffect, useState } from "react";

import { KEYBOARD_ROWS } from "@src/constants/KEYBOARD";

import { useDispatch } from "./core";

const ALLOW_KEY_ACCESS = [
  ...KEYBOARD_ROWS.homeRow,
  ...KEYBOARD_ROWS.topRow,
  ...KEYBOARD_ROWS.bottomRow,
];

export const useHandleRealKeyboard = ({
  isDisable,
}: {
  isDisable: boolean;
}) => {
  const dispatch = useDispatch();
  const [isSubmit, setSubmit] = useState<boolean>(false);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!event?.key || isDisable) return;
    if (event.key === "Enter") {
      setSubmit(true);
      return;
    }
    if (event.key === "Backspace") {
      dispatch({
        type: "BACKSPACE",
        payload: "Backspace",
      });
      return;
    }
    const lowerKey = event.key.toLocaleLowerCase();
    if (ALLOW_KEY_ACCESS.includes(lowerKey)) {
      dispatch({
        type: "INPUT_KEYBOARD",
        payload: lowerKey,
      });
    }
  };

  const handleKeyUp = () => {
    // reset keyPressing value
    dispatch({
      type: "INPUT_KEYBOARD",
      payload: "",
    });
  };

  useEffect(() => {
    if (isDisable) {
      setSubmit(false);
    }
  }, [isDisable]);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    isSubmit,
  };
};
