import { ShieldAlert } from "lucide-react";
import Reveal from "../../../01_comps/Reveal.jsx";
import PhishGame from "./PhishGame.jsx";
import CrackTheVault from "./CrackTheVault.jsx";
import HashForge from "./HashForge.jsx";
import CipherLab from "./CipherLab.jsx";

const Lab_securityZone = ({ states, t }) => {
  const { isBoth } = states;

  return (
    <>
      <div className="vp-container">
        <Reveal>
          <p className="vp-lab-zone">
            <span className="vp-lab-zone__icon" aria-hidden="true">
              <ShieldAlert size={15} />
            </span>
            {t("lab.zones.security")}
            {isBoth && <span className="vp-lab-zone__hint">{t("lab.zones.hint")}</span>}
          </p>
        </Reveal>
      </div>
      <PhishGame />
      <CrackTheVault />
      <HashForge />
      <CipherLab />
    </>
  );
};

export default Lab_securityZone;
