import { useEffects } from "react";
import { useHome_states, useHome_handlers } from "./_home_hooks.index.js";
import { get_homeProps } from "../03_home_hlprs/_home_hlprs.index.js";

export const useHome = () => {
  const { states, setters, refs } = useHome_states();
  const { handlers } = useHome_handlers({
    states,
    setters,
    refs,
    // context,
    // t
  });

  const homeProps = get_homeProps(states, handlers, childComps, t);

  return {
    states: homeProps.states,
    handlers: homeProps.handlers,
    childComps: homeProps.childComps,
    t: homeProps.t,
  };
};
