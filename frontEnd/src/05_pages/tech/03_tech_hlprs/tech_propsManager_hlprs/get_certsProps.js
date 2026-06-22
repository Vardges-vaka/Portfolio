// Certs needs the cert list + the per-cert description fallback map.
export const get_certsProps = (states, handlers, childComps, t) => ({
  states: { certs: states.certs, certDesc: states.certDesc },
  handlers: {},
  childComps: {},
  t,
});
