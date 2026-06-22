// Certs section needs the bar cert list.
export const get_certsProps = (states, handlers, childComps, t) => ({
  states: { certs: states.certs },
  handlers: {},
  childComps: {},
  t,
});
