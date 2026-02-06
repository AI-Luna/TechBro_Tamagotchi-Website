export type CharacterArchetype = "tech_bro" | "tech_babe" | "vibe_coder";

export type StartupStage =
  | "ideation"
  | "mvp"
  | "seed"
  | "series_a"
  | "growth"
  | "unicorn";

export type City = "sf" | "nyc";
export type TimeOfDay = "day" | "night";

export type ActionCategory = "feed" | "work" | "self_care" | "social";

export interface GameStats {
  energy: number;
  health: number;
  burnout: number;
  social: number;
  funding: number; // 0-100 progression toward next stage
}

export interface GameState {
  character: CharacterArchetype;
  stats: GameStats;
  stage: StartupStage;
  city: City;
  timeOfDay: TimeOfDay;
  day: number;
  openModal: "none" | ActionCategory | "dating" | "lockin";
}

export interface ActionOption {
  id: string;
  label: string;
  description: string;
  energy: number;
  health: number;
  burnout: number;
  social: number;
  funding: number;
}
