// Security zone needs the "both modes" flag for its hint label. (Whether the
// zone renders at all is gated by states.showTech in Lab.jsx.)
export const get_securityZoneProps = (states, handlers, childComps, t) => ({
  states: { isBoth: states.isBoth },
  handlers: {},
  childComps: {},
  t,
});
