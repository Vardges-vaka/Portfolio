import { useCallback } from "react";
import { CONTACT_ANCHOR_ID } from "../../../portfolio.constants.js";

/**
 * Bar page handlers. Smooth-scroll to contact, shared by the hero and CTA band.
 */
export const useBar_handlers = () => {
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
