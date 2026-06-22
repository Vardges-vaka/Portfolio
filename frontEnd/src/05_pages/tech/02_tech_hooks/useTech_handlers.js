import { useCallback } from "react";
import { CONTACT_ANCHOR_ID } from "../../../portfolio.constants.js";

/**
 * Tech page handlers. A single smooth-scroll to the contact section, shared by
 * the hero and the CTA band.
 */
export const useTech_handlers = () => {
  const scrollToContact = useCallback(
    () =>
      document
        .getElementById(CONTACT_ANCHOR_ID)
        ?.scrollIntoView({ behavior: "smooth" }),
    [],
  );

  return {
    handlers: { scrollToContact },
  };
};
