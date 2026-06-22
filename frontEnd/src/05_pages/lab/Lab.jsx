import { useLab } from "./02_lab_hooks/useLab.js";
import {
  Lab_hero,
  Lab_securityZone,
  Lab_barZone,
  Lab_soon,
} from "./01_lab_comps/_lab_comps.index.js";
import ContactSection from "../../01_comps/ContactSection.jsx";

// The Lab reuses tech + bar section styling, so it pulls both page stylesheets
// (and its own) — matches the original page's three-stylesheet import.
import "../tech/_styles/Tech.css";
import "../bar/_styles/Bar.css";
import "./_styles/Lab.css";

const Lab = () => {
  const { states, childComps } = useLab();
  const { showTech, showBar } = states;
  const { hero, securityZone, barZone, soon } = childComps;

  return (
    <main className="vp-page vp-page--tech vp-page--lab Lab" id="vp-main" tabIndex={-1}>
      <Lab_hero
        states={hero.states}
        handlers={hero.handlers}
        childComps={hero.childComps}
        t={hero.t}
      />

      {/* mode-aware game zones */}
      {showTech && (
        <Lab_securityZone
          states={securityZone.states}
          handlers={securityZone.handlers}
          childComps={securityZone.childComps}
          t={securityZone.t}
        />
      )}
      {showBar && (
        <Lab_barZone
          states={barZone.states}
          handlers={barZone.handlers}
          childComps={barZone.childComps}
          t={barZone.t}
        />
      )}

      <Lab_soon
        states={soon.states}
        handlers={soon.handlers}
        childComps={soon.childComps}
        t={soon.t}
      />

      {/* contact lives on every page so the navbar "Contact" button always works */}
      <ContactSection />
    </main>
  );
};

export default Lab;
