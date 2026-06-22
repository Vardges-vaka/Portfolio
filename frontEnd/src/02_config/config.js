/**
 * Central app configuration — feature flags, environment, backend paths.
 * Keep all "knobs" here so pages/components never read env vars directly.
 */

const env = import.meta.env ?? {};

// Canonical site origin — used for canonical / Open Graph / sitemap URLs (SEO).
export const SITE_URL = (env.VITE_SITE_URL ?? "https://vardges.me").replace(/\/$/, "");

// Backend base URL. The public site currently runs without a backend (the
// contact form is simulated), so this is only used once an API is wired up.
export const API_BASE = env.VITE_API_BASE ?? "/api";

// Feature flag. When false, the Lab page route is not registered and every
// lab-referencing section / nav link across the site is hidden. Driven by
// VITE_LABS_ENABLED ("false" disables); defaults to enabled.
export const isLabsEnabled = (env.VITE_LABS_ENABLED ?? "true") !== "false";
