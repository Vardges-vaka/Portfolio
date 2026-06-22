import { useContext } from "react";
import { LanguageContext } from "../contexts.js";

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageContext");
  return ctx;
};
