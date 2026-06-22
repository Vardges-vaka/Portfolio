import { useLang, useTheme } from "../../../03_context/_context.index.js";
import { TESTIMONIALS } from "../../../data/testimonials.js";
import { useHome_states } from "./useHome_states.js";
import { useHome_handlers } from "./useHome_handlers.js";
import { get_homeProps } from "../03_home_hlprs/_home_hlprs.index.js";

/**
 * Home page hook layer. Pulls i18n (`t`) + theme from context, owns the page's
 * UI state (mind-map reveal) and handlers, then hands a single bag of
 * { states, handlers, t } to the props-manager. The manager slices that into a
 * { states, handlers, childComps, t } bundle per section, which Home.jsx spreads
 * into each <Home_*> component.
 *
 * NOTE: context + shared data are still imported from the legacy `context/`,
 * `data/` dirs. These swap to `03_context` / the global const home once the app
 * shell migration runs (kept here so this page works while the rest is on the
 * old structure).
 */
export const useHome = () => {
  const { t } = useLang();
  const { isDark } = useTheme();

  const { states: uiStates, setters } = useHome_states();
  const { handlers } = useHome_handlers({ setters });

  // a single read-bag every section can pull from
  const states = {
    ...uiStates, // showMap
    isDark,
    testimonials: TESTIMONIALS,
  };

  return get_homeProps(states, handlers, {}, t);
};
