import { useLang, useTheme } from "../../../03_context/_context.index.js";
import { BAR_CERTS } from "../../../data/certificates.js";
import { TESTIMONIALS } from "../../../data/testimonials.js";
import { SKILLS } from "../04__bar_const/_bar_const.index.js";
import { useBar_states } from "./useBar_states.js";
import { useBar_handlers } from "./useBar_handlers.js";
import { get_barProps } from "../03_bar_hlprs/_bar_hlprs.index.js";

/**
 * Bar page hook layer. Pulls i18n + theme, exposes scroll-to-contact, and packs
 * the page data (radar skills, certs, testimonials) into a read-bag for the
 * props manager. (Shared cert/testimonial data is bridged from the legacy
 * `data/` dir; the bar-only `skills` lives in this page's const dir.)
 */
export const useBar = () => {
  const { t } = useLang();
  const { isDark } = useTheme();

  useBar_states(); // no local UI state yet — kept for parity
  const { handlers } = useBar_handlers();

  const states = {
    isDark,
    skills: SKILLS,
    certs: BAR_CERTS,
    testimonials: TESTIMONIALS,
  };

  return get_barProps(states, handlers, {}, t);
};
