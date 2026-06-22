import { get_heroProps } from "./get_heroProps.js";
import { get_securityZoneProps } from "./get_securityZoneProps.js";
import { get_barZoneProps } from "./get_barZoneProps.js";
import { get_soonProps } from "./get_soonProps.js";

/**
 * Top-level props manager for the Lab page. Builds the per-section
 * { states, handlers, childComps, t } bundle Lab.jsx spreads into each <Lab_*>.
 */
export const get_labProps = (states, handlers, childComps, t) => {
  return {
    states,
    handlers,
    childComps: {
      hero: get_heroProps(states, handlers, childComps, t),
      securityZone: get_securityZoneProps(states, handlers, childComps, t),
      barZone: get_barZoneProps(states, handlers, childComps, t),
      soon: get_soonProps(states, handlers, childComps, t),
    },
    t,
  };
};
