import type { GameStats, StartupStage, ActionOption } from "./types";

export const INITIAL_STATS: GameStats = {
  energy: 70,
  health: 80,
  burnout: 20,
  social: 50,
  funding: 0,
};

export const STAT_NAMES: Record<keyof GameStats, string> = {
  energy: "Energy",
  health: "Health",
  burnout: "Burnout",
  social: "Social",
  funding: "Funding",
};

export const STARTUP_STAGES: { id: StartupStage; label: string }[] = [
  { id: "ideation", label: "Ideation" },
  { id: "mvp", label: "MVP" },
  { id: "seed", label: "Seed" },
  { id: "series_a", label: "Series A" },
  { id: "growth", label: "Growth" },
  { id: "unicorn", label: "Unicorn" },
];

export const CHARACTERS = [
  {
    id: "tech_bro" as const,
    label: "Tech Bro",
    image: "/steve_Icon.png",
    description: "Hoodie, coffee, move fast.",
  },
  {
    id: "tech_babe" as const,
    label: "Tech Babe",
    image: "/tech_babe.png",
    description: "Sharp, stylish, ships.",
  },
  {
    id: "vibe_coder" as const,
    label: "Vibe Coder",
    image: "/Vibecode.png",
    description: "Chill vibes, clean code.",
  },
];

const clamp = (v: number) => Math.max(0, Math.min(100, v));

export const ACTIONS: Record<string, ActionOption[]> = {
  feed: [
    { id: "coffee", label: "Coffee", description: "+energy, -health", energy: 15, health: -5, burnout: 0, social: 0, funding: 0 },
    { id: "salad", label: "Salad", description: "+health, +energy", energy: 10, health: 15, burnout: -5, social: 0, funding: 0 },
    { id: "pizza", label: "Pizza", description: "+energy, +social feel", energy: 20, health: -10, burnout: 10, social: 5, funding: 0 },
  ],
  work: [
    { id: "code", label: "Code", description: "+funding, -energy", energy: -20, health: 0, burnout: 15, social: -5, funding: 12 },
    { id: "pitch", label: "Pitch", description: "Big funding, high stress", energy: -25, health: -5, burnout: 20, social: 10, funding: 25 },
    { id: "meeting", label: "Meeting", description: "Networking + funding", energy: -15, health: 0, burnout: 10, social: 15, funding: 8 },
  ],
  self_care: [
    { id: "sleep", label: "Sleep", description: "+energy, +health", energy: 30, health: 20, burnout: -25, social: 0, funding: 0 },
    { id: "gym", label: "Gym", description: "+health, -burnout", energy: -10, health: 25, burnout: -20, social: 5, funding: 0 },
    { id: "meditate", label: "Meditate", description: "-burnout, +energy", energy: 10, health: 5, burnout: -30, social: 0, funding: 0 },
  ],
  social: [
    { id: "happy_hour", label: "Happy Hour", description: "+social, -energy", energy: -15, health: -5, burnout: -10, social: 25, funding: 5 },
    { id: "conference", label: "Conference", description: "Network + fund vibes", energy: -20, health: 0, burnout: 5, social: 20, funding: 15 },
    { id: "dm_slide", label: "DM Slide", description: "Risky but fun", energy: -5, health: 0, burnout: -5, social: 30, funding: 0 },
  ],
};

export const CITY_BACKGROUNDS: Record<"sf" | "nyc", Record<"day" | "night", string>> = {
  sf: { day: "/sf_nighttime.png", night: "/sf_nighttime.png" }, // only night asset
  nyc: { day: "/Daytime_Nyc.png", night: "/nyc night-time.png" },
};

export const FUNDING_THRESHOLD = 100; // funding bar fills to 100 then stage advances
