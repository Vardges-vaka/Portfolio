// Projects needs the theme (AsciiField accent) + the projects list.
export const get_projectsProps = (states, handlers, childComps, t) => ({
  states: { isDark: states.isDark, projects: states.projects },
  handlers: {},
  childComps: {},
  t,
});
