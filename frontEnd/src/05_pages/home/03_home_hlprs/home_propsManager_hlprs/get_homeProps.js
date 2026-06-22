import { get_heroProps } from "./get_heroProps.js";
import { get_introProps } from "./get_introProps.js";
import { get_universeProps } from "./get_universeProps.js";
import { get_mapProps } from "./get_mapProps.js";
import { get_statsProps } from "./get_statsProps.js";
import { get_timelineProps } from "./get_timelineProps.js";
import { get_doorsProps } from "./get_doorsProps.js";
import { get_testimonialsProps } from "./get_testimonialsProps.js";

/**
 * Top-level props manager. Builds the per-section { states, handlers, childComps,
 * t } bundle that Home.jsx spreads into each <Home_*> section.
 */
export const get_homeProps = (states, handlers, childComps, t) => {
  return {
    states,
    handlers,
    childComps: {
      hero: get_heroProps(states, handlers, childComps, t),
      intro: get_introProps(states, handlers, childComps, t),
      universe: get_universeProps(states, handlers, childComps, t),
      map: get_mapProps(states, handlers, childComps, t),
      stats: get_statsProps(states, handlers, childComps, t),
      timeline: get_timelineProps(states, handlers, childComps, t),
      doors: get_doorsProps(states, handlers, childComps, t),
      testimonials: get_testimonialsProps(states, handlers, childComps, t),
    },
    t,
  };
};
