import { useHome } from "./02_home_hooks/useHome.js";
import {
  Home_hero,
  Home_intro,
  Home_universe,
  Home_map,
  Home_stats,
  Home_timeline,
  Home_doors,
  Home_testimonials,
} from "./01_home_comps/_home_comps.index.js";
import ContactSection from "../../01_comps/ContactSection.jsx";

import "./_styles/Home.css";

const Home = () => {
  const { childComps } = useHome();
  const { hero, intro, universe, map, stats, timeline, doors, testimonials } =
    childComps;

  return (
    <main className="vp-page vp-page--home Home" id="vp-main" tabIndex={-1}>
      <Home_hero
        states={hero.states}
        handlers={hero.handlers}
        childComps={hero.childComps}
        t={hero.t}
      />
      <Home_intro
        states={intro.states}
        handlers={intro.handlers}
        childComps={intro.childComps}
        t={intro.t}
      />
      <Home_universe
        states={universe.states}
        handlers={universe.handlers}
        childComps={universe.childComps}
        t={universe.t}
      />
      <Home_map
        states={map.states}
        handlers={map.handlers}
        childComps={map.childComps}
        t={map.t}
      />
      <Home_stats
        states={stats.states}
        handlers={stats.handlers}
        childComps={stats.childComps}
        t={stats.t}
      />
      <Home_timeline
        states={timeline.states}
        handlers={timeline.handlers}
        childComps={timeline.childComps}
        t={timeline.t}
      />
      <Home_doors
        states={doors.states}
        handlers={doors.handlers}
        childComps={doors.childComps}
        t={doors.t}
      />
      <Home_testimonials
        states={testimonials.states}
        handlers={testimonials.handlers}
        childComps={testimonials.childComps}
        t={testimonials.t}
      />

      {/* shared, self-contained — no per-section props needed */}
      <ContactSection />
    </main>
  );
};

export default Home;
