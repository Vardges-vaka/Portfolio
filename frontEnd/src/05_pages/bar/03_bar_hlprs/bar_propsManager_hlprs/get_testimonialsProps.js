// Testimonials section needs the shared testimonials list.
export const get_testimonialsProps = (states, handlers, childComps, t) => ({
  states: { items: states.testimonials },
  handlers: {},
  childComps: {},
  t,
});
