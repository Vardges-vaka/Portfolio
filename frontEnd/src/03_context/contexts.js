import { createContext } from "react";

// Context objects live here (separate from the provider components) so the
// provider .jsx files only export components — keeps React Fast Refresh happy.
export const ThemeContext = createContext(null);
export const LanguageContext = createContext(null);
export const ModeContext = createContext(null);
export const DeviceContext = createContext(null);
