// CTA band needs the scroll-to-contact handler.
export const get_ctaProps = (states, handlers, childComps, t) => ({
  states: {},
  handlers: { scrollToContact: handlers.scrollToContact },
  childComps: {},
  t,
});
