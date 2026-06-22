import {
  Code2,
  Server,
  Cloud,
  Shield,
  ShieldCheck,
  KeyRound,
  Lock,
  FlaskConical,
  Database,
  Cpu,
  GitBranch,
  Terminal as TerminalIcon,
  Braces,
  Bug,
} from "lucide-react";

export const GROUP_ICONS = [Code2, Server, Cloud, Shield];
export const SECURITY_ICONS = [ShieldCheck, KeyRound, Lock, FlaskConical];

// brand/tech names — intentionally not translated
export const TECH_TICKER = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "AWS",
  "GCP",
  "Azure",
  "Cloudflare R2",
  "Security",
  "CI/CD",
  "Automation",
  "i18n",
];

// radar axis key -> graph skill id. Values are derived (evidence-based) from the
// number of earned certs + projects that feed each skill — see techSkillStrengths.
export const TECH_AXES = [
  ["frontend", "sk-frontend"],
  ["backend", "sk-backend"],
  ["cloud", "sk-cloud"],
  ["security", "sk-security"],
  ["automation", "sk-automation"],
  ["ai", "sk-ai"],
  ["data", "sk-data"],
];

// floating decorative icons for the about section — position/timing via CSS vars
export const FLOAT_ICONS = [
  { Icon: Braces, x: "8%", y: "12%", d: "0s", t: "7s" },
  { Icon: Database, x: "70%", y: "6%", d: "-2s", t: "9s" },
  { Icon: ShieldCheck, x: "84%", y: "48%", d: "-4s", t: "8s" },
  { Icon: Cpu, x: "16%", y: "62%", d: "-1s", t: "10s" },
  { Icon: GitBranch, x: "48%", y: "30%", d: "-5s", t: "7.5s" },
  { Icon: TerminalIcon, x: "60%", y: "74%", d: "-3s", t: "8.5s" },
  { Icon: Bug, x: "30%", y: "88%", d: "-6s", t: "9.5s" },
];
