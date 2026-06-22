import { useState } from "react";

/**
 * Home page UI state. The only piece of local state the page owns is the
 * mind-map reveal toggle; everything else is derived from i18n/context.
 */
export const useHome_states = () => {
  const [showMap, setShowMap] = useState(false);

  return {
    states: { showMap },
    setters: { setShowMap },
    refs: {},
  };
};
