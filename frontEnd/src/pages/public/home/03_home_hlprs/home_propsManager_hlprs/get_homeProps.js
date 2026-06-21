export const get_homeProps = (states, handlers, childComps, t) => {
  const homeStates = {};
  const homeHandlers = {};
  const heroProps = get_heroProps(states, handlers, childComps, t);
  const introProps = get_introProps(states, handlers, childComps, t);
  const universeProps = get_universeProps(states, handlers, childComps, t);
  const mapProps = get_mapProps(states, handlers, childComps, t);
  const statsProps = get_statsProps(states, handlers, childComps, t);
  const timelineProps = get_timelineProps(states, handlers, childComps, t);
  const doorsProps = get_doorsProps(states, handlers, childComps, t);
  const testimonialsProps = get_testimonialsProps(
    states,
    handlers,
    childComps,
    t,
  );
  return {
    states: homeStates,
    handlers: homeHandlers,
    childComps: {
      hero: heroProps,
      intro: introProps,
      universe: universeProps,
      map: mapProps,
      stats: statsProps,
      timeline: timelineProps,
      doors: doorsProps,
      testimonials: testimonialsProps,
    },
    t,
  };
};
