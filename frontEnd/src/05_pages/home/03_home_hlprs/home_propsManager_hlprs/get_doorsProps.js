// Doors section needs the theme (for the AsciiField accent colour).
export const get_doorsProps = (states, handlers, childComps, t) => ({
  states: { isDark: states.isDark },
  handlers: {},
  childComps: {},
  t,
});
