import { useEffect } from "react";
import { SITE_URL } from "../02_config/_config.index.js";

/**
 * SEO layer. The static index.html carries the default tags that social
 * scrapers read (they don't run JS); this layer updates the live document
 * (title + meta + canonical) for the browser tab and JS-rendering crawlers
 * (e.g. Google) as the route changes.
 *
 * Copy is intentionally keyword-rich across all three target audiences:
 * web development, cybersecurity, and hospitality (bar / beverage / F&B).
 */
export const SEO = {
  home: {
    title: "Vardges Petrosyan — Full-Stack Developer & Hospitality Leader · Dubai",
    description:
      "Vardges Petrosyan — Dubai-based full-stack web developer and hospitality leader. MERN developer with a security-first mindset, and a bar / beverage / F&B manager with 14 years across Yerevan, Moscow and the UAE. Open to tech and hospitality roles.",
    path: "/",
  },
  tech: {
    title: "Vardges Petrosyan — Full-Stack Web Developer & Cybersecurity · Dubai",
    description:
      "Full-stack web developer in Dubai — React, Node.js, Express, MongoDB, multi-cloud (AWS, GCP, Azure, Cloudflare) and a security-first, cybersecurity-minded approach. Self-taught, production experience, open to web development, security and automation roles.",
    path: "/tech",
  },
  bar: {
    title: "Vardges Petrosyan — Bar Manager, Beverage & F&B · Dubai",
    description:
      "Bar manager, beverage consultant and F&B leader in Dubai with 14 years across Yerevan, Moscow and the UAE. Menu engineering, mixology, team training, openings and cost control — founder of The Cocktail Tree. Open to bar / beverage / F&B management roles.",
    path: "/bar",
  },
  lab: {
    title: "The Lab — Interactive security games · Vardges Petrosyan",
    description:
      "A playground of interactive, security-themed experiments by Vardges Petrosyan — start with 'spot the phish', a hands-on phishing-awareness game. More experiments coming.",
    path: "/lab",
  },
};

// route path -> SEO key. (The Lab is tech-flavoured for the scene but has its
// own copy; everything else falls back to home — incl. the 404.)
export const seoKeyForPath = (pathname) => {
  if (pathname === "/lab") return "lab";
  if (pathname === "/tech") return "tech";
  if (pathname === "/bar") return "bar";
  return "home";
};

const ensureMeta = (attr, key) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  return el;
};

const ensureLink = (rel) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  return el;
};

export const applySeo = (key) => {
  const data = SEO[key] ?? SEO.home;
  const url = `${SITE_URL}${data.path}`;

  document.title = data.title;
  ensureMeta("name", "description").setAttribute("content", data.description);
  ensureMeta("property", "og:title").setAttribute("content", data.title);
  ensureMeta("property", "og:description").setAttribute("content", data.description);
  ensureMeta("property", "og:url").setAttribute("content", url);
  ensureMeta("name", "twitter:title").setAttribute("content", data.title);
  ensureMeta("name", "twitter:description").setAttribute("content", data.description);
  ensureLink("canonical").setAttribute("href", url);
  return data;
};

/**
 * The SEO hook the app shell uses: applies the right tags whenever the route
 * changes, and returns the active SEO record (so the shell can announce the
 * page title to assistive tech).
 */
export const useSeo = (pathname) => {
  const data = SEO[seoKeyForPath(pathname)] ?? SEO.home;
  useEffect(() => {
    applySeo(seoKeyForPath(pathname));
  }, [pathname]);
  return data;
};
