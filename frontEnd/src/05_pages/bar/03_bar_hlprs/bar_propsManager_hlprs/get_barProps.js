import { get_heroProps } from "./get_heroProps.js";
import { get_numbersProps } from "./get_numbersProps.js";
import { get_menuProps } from "./get_menuProps.js";
import { get_craftProps } from "./get_craftProps.js";
import { get_treeProps } from "./get_treeProps.js";
import { get_labTeaserProps } from "./get_labTeaserProps.js";
import { get_vkusnoProps } from "./get_vkusnoProps.js";
import { get_certsProps } from "./get_certsProps.js";
import { get_testimonialsProps } from "./get_testimonialsProps.js";
import { get_ctaProps } from "./get_ctaProps.js";

/**
 * Top-level props manager for the Bar page. Builds the per-section
 * { states, handlers, childComps, t } bundle Bar.jsx spreads into each <Bar_*>.
 */
export const get_barProps = (states, handlers, childComps, t) => {
  return {
    states,
    handlers,
    childComps: {
      hero: get_heroProps(states, handlers, childComps, t),
      numbers: get_numbersProps(states, handlers, childComps, t),
      menu: get_menuProps(states, handlers, childComps, t),
      craft: get_craftProps(states, handlers, childComps, t),
      tree: get_treeProps(states, handlers, childComps, t),
      labTeaser: get_labTeaserProps(states, handlers, childComps, t),
      vkusno: get_vkusnoProps(states, handlers, childComps, t),
      certs: get_certsProps(states, handlers, childComps, t),
      testimonials: get_testimonialsProps(states, handlers, childComps, t),
      cta: get_ctaProps(states, handlers, childComps, t),
    },
    t,
  };
};
