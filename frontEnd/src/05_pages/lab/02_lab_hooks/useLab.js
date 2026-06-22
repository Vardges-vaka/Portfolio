import { useLang, useMode } from "../../../03_context/_context.index.js";
import { useLab_states } from "./useLab_states.js";
import { useLab_handlers } from "./useLab_handlers.js";
import { get_labProps } from "../03_lab_hlprs/_lab_hlprs.index.js";

/**
 * Lab page hook layer. The Lab is mode-aware: the active mode (tech / bar / both)
 * decides which game zones show. Those flags come from the Mode context and are
 * passed down via the props manager.
 */
export const useLab = () => {
  const { t } = useLang();
  const { showTech, showBar, isBoth } = useMode();

  useLab_states(); // no local UI state yet — kept for parity
  const { handlers } = useLab_handlers();

  const states = { showTech, showBar, isBoth };

  return get_labProps(states, handlers, {}, t);
};
