import { Martini } from "lucide-react";
import Reveal from "../../../01_comps/Reveal.jsx";
import CocktailBuilder from "./CocktailBuilder.jsx";
import GuessTheCocktail from "./GuessTheCocktail.jsx";
import ShakeOrStir from "./ShakeOrStir.jsx";
import PourCostLab from "./PourCostLab.jsx";
import NameThatSpirit from "./NameThatSpirit.jsx";

const Lab_barZone = ({ t }) => (
  <>
    <div className="vp-container">
      <Reveal>
        <p className="vp-lab-zone">
          <span className="vp-lab-zone__icon" aria-hidden="true">
            <Martini size={15} />
          </span>
          {t("lab.zones.bar")}
        </p>
      </Reveal>
    </div>
    <CocktailBuilder />
    <GuessTheCocktail />
    <ShakeOrStir />
    <PourCostLab />
    <NameThatSpirit />
  </>
);

export default Lab_barZone;
