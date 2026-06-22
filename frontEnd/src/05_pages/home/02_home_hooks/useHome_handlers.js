import { useCallback } from "react";

/**
 * Home page handlers. Receives the setters/refs from useHome_states and
 * returns stable callbacks for the sections to call.
 */
export const useHome_handlers = ({ setters }) => {
  const toggleMap = useCallback(() => setters.setShowMap((v) => !v), [setters]);

  return {
    handlers: { toggleMap },
  };
};
