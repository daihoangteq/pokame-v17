import { useEffect, useSyncExternalStore } from "react";

import type { KeyboardState } from "@src/services/keyboardServices/keyboardType";

let state: KeyboardState = {
  keydown: "",
  isPressDown: false,
};
const listeners = new Set<() => void>();
// Create a store to manage keyboard state
const createKeyboardStore = () => {
  const subscribe = () => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  };

  const getSnapshot = () => {
    console.log("getSnapshot ", state);
    return state;
  };

  const setState = (newState: KeyboardState) => {
    state = newState;
    listeners.forEach((listener) => listener());
  };

  // Event handlers
  const handleKeyDown = (event: KeyboardEvent) => {
    setState({
      ...state,
      keydown: event.key,
      isPressDown: true,
    });
  };

  const handleKeyUp = () => {
    setState({
      ...state,
      isPressDown: false,
    });
    console.log("text ", state);
  };

  return {
    subscribe,
    getSnapshot,
    setState,
    // Cleanup function
    cleanup: () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      }
    },
  };
};

// Create a singleton instance of the store
const keyboardStore = createKeyboardStore();

export const useKeyboard = () => {
  const state = useSyncExternalStore(
    keyboardStore.subscribe,
    keyboardStore.getSnapshot
  );
  console.log("state ", state);
  // Cleanup on component unmount
  useEffect(() => {
    return () => keyboardStore.cleanup();
  }, []);

  return {
    stateKeyboard: state,
    setKeyboardState: keyboardStore.setState,
  };
};
