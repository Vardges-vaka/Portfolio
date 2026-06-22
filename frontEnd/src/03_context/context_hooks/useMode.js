import { useContext } from "react";
import { ModeContext } from "../contexts.js";

export const useMode = () => {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used inside ModeProvider");
  return ctx;
};
