import { get_heroProps } from "./get_heroProps.js";
import { get_aboutProps } from "./get_aboutProps.js";
import { get_stackProps } from "./get_stackProps.js";
import { get_skillsProps } from "./get_skillsProps.js";
import { get_projectsProps } from "./get_projectsProps.js";
import { get_certsProps } from "./get_certsProps.js";
import { get_securityProps } from "./get_securityProps.js";
import { get_labTeaserProps } from "./get_labTeaserProps.js";
import { get_ctaProps } from "./get_ctaProps.js";

/**
 * Top-level props manager for the Tech page. Builds the per-section
 * { states, handlers, childComps, t } bundle that Tech.jsx spreads into each
 * <Tech_*> section.
 */
export const get_techProps = (states, handlers, childComps, t) => {
  return {
    states,
    handlers,
    childComps: {
      hero: get_heroProps(states, handlers, childComps, t),
      about: get_aboutProps(states, handlers, childComps, t),
      stack: get_stackProps(states, handlers, childComps, t),
      skills: get_skillsProps(states, handlers, childComps, t),
      projects: get_projectsProps(states, handlers, childComps, t),
      certs: get_certsProps(states, handlers, childComps, t),
      security: get_securityProps(states, handlers, childComps, t),
      labTeaser: get_labTeaserProps(states, handlers, childComps, t),
      cta: get_ctaProps(states, handlers, childComps, t),
    },
    t,
  };
};
