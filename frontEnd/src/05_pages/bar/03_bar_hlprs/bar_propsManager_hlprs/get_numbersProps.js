// Numbers section needs the theme (WireGlobe dot/accent colours).
export const get_numbersProps = (states, handlers, childComps, t) => ({
  states: { isDark: states.isDark },
  handlers: {},
  childComps: {},
  t,
});
