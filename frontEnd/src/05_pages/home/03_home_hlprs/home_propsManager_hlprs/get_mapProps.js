// Map section needs the reveal state + its toggle handler.
export const get_mapProps = (states, handlers, childComps, t) => ({
  states: { showMap: states.showMap },
  handlers: { toggleMap: handlers.toggleMap },
  childComps: {},
  t,
});
