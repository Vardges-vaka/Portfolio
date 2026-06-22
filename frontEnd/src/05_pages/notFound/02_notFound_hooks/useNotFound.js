import { useLang } from "../../../03_context/_context.index.js";

/**
 * NotFound is a single static block, so its hook layer is just the i18n handle.
 */
export const useNotFound = () => {
  const { t } = useLang();
  return { t };
};
