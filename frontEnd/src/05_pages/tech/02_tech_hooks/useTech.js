import { useMemo } from "react";
import { useLang, useTheme } from "../../../03_context/_context.index.js";
import { SAMPLE_PROJECTS } from "../../../data/sampleProjects.js";
import { ALL_TECH_CERTS } from "../../../data/certificates.js";
import { techSkillStrengths, CERT_DESC } from "../../../data/graphData.js";
import { TECH_AXES } from "../04__tech_const/_tech_const.index.js";
import { useTech_states } from "./useTech_states.js";
import { useTech_handlers } from "./useTech_handlers.js";
import { get_techProps } from "../03_tech_hlprs/_tech_hlprs.index.js";

/**
 * Tech page hook layer. Pulls i18n + theme, derives the evidence-based radar,
 * exposes the scroll-to-contact handler, then hands a single read-bag to the
 * props manager. (context/data still come from the legacy dirs — bridged until
 * the shell migration.)
 */
export const useTech = () => {
  const { t } = useLang();
  const { isDark } = useTheme();

  useTech_states(); // no local UI state yet — kept for parity
  const { handlers } = useTech_handlers();

  // evidence-based radar: strength = earned certs + projects feeding each skill
  const radarData = useMemo(() => {
    const s = techSkillStrengths();
    const max = Math.max(1, ...TECH_AXES.map(([, id]) => s[id] || 0));
    return {
      color: "tech",
      axes: TECH_AXES.map(([key, id]) => ({
        key,
        value: Math.round(48 + 50 * ((s[id] || 0) / max)),
      })),
    };
  }, []);

  const states = {
    isDark,
    radarData,
    projects: SAMPLE_PROJECTS,
    certs: ALL_TECH_CERTS,
    certDesc: CERT_DESC,
  };

  return get_techProps(states, handlers, {}, t);
};
