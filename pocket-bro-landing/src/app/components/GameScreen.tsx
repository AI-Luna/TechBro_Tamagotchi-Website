"use client";

import Image from "next/image";
import { CHARACTERS, CITY_BACKGROUNDS, STAT_NAMES, STARTUP_STAGES } from "../constants";
import StatBar from "./StatBar";
import ActionModal from "./ActionModal";
import MiniGameModal from "./MiniGameModal";
import type { GameState, GameStats, ActionCategory, ActionOption } from "../types";

function getCharacterImage(archetype: GameState["character"]) {
  return CHARACTERS.find((c) => c.id === archetype)?.image ?? "/steve_Icon.png";
}

function applyAction(stats: GameStats, action: ActionOption): GameStats {
  return {
    energy: Math.max(0, Math.min(100, stats.energy + action.energy)),
    health: Math.max(0, Math.min(100, stats.health + action.health)),
    burnout: Math.max(0, Math.min(100, stats.burnout + action.burnout)),
    social: Math.max(0, Math.min(100, stats.social + action.social)),
    funding: Math.max(0, Math.min(100, stats.funding + action.funding)),
  };
}

export default function GameScreen({
  state,
  onStateChange,
}: {
  state: GameState;
  onStateChange: (s: GameState) => void;
}) {
  const bg =
    CITY_BACKGROUNDS[state.city][state.timeOfDay] ?? CITY_BACKGROUNDS.nyc.day;
  const characterImg = getCharacterImage(state.character);
  const stageInfo = STARTUP_STAGES.find((s) => s.id === state.stage);

  const openAction = (category: ActionCategory) => {
    onStateChange({ ...state, openModal: category });
  };

  const closeModal = () => {
    onStateChange({ ...state, openModal: "none" });
  };

  const onPickAction = (action: ActionOption) => {
    const newStats = applyAction(state.stats, action);
    let nextStage = state.stage;
    let finalStats = newStats;
    if (newStats.funding >= 100 && state.stage !== "unicorn") {
      const idx = STARTUP_STAGES.findIndex((s) => s.id === state.stage);
      if (idx >= 0 && idx < STARTUP_STAGES.length - 1) {
        nextStage = STARTUP_STAGES[idx + 1].id;
        finalStats = { ...newStats, funding: 0 };
      }
    }
    onStateChange({
      ...state,
      stats: finalStats,
      stage: nextStage,
      openModal: "none",
      day: state.day + 1,
    });
  };

  const onMiniGameWin = (reward: { social?: number; energy?: number }) => {
    onStateChange({
      ...state,
      stats: {
        ...state.stats,
        social: Math.min(100, state.stats.social + (reward.social ?? 0)),
        energy: Math.min(100, state.stats.energy + (reward.energy ?? 0)),
      },
    });
  };

  const toggleTime = () => {
    onStateChange({
      ...state,
      timeOfDay: state.timeOfDay === "day" ? "night" : "day",
    });
  };

  const toggleCity = () => {
    onStateChange({
      ...state,
      city: state.city === "sf" ? "nyc" : "sf",
    });
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden rounded-none"
      style={{ backgroundColor: "var(--lcd-background-hex)" }}
    >
      {/* City background */}
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt=""
          fill
          className="object-cover opacity-40"
          unoptimized
          priority
        />
      </div>

      {/* LCD frame content */}
      <div className="relative z-10 flex min-h-screen flex-col p-3">
        {/* Header: logo + day + stage */}
        <div
          className="mb-2 flex items-center justify-between rounded border-2 px-2 py-1"
          style={{
            borderColor: "var(--lcd-dark-hex)",
            backgroundColor: "var(--lcd-screen-hex)",
          }}
        >
          <div className="flex items-center gap-2">
            <Image
              src="/TT_logo.png"
              alt="TT"
              width={32}
              height={32}
              className="object-contain"
              unoptimized
            />
            <span className="font-bold" style={{ color: "var(--lcd-dark-hex)" }}>
              Day {state.day}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold" style={{ color: "var(--lcd-dark-hex)" }}>
              {stageInfo?.label ?? state.stage}
            </span>
            <button
              type="button"
              className="rounded border px-1.5 py-0.5 text-xs"
              style={{
                borderColor: "var(--lcd-dark-hex)",
                backgroundColor: "var(--lcd-light-hex)",
                color: "var(--lcd-dark-hex)",
              }}
              onClick={toggleCity}
            >
              {state.city.toUpperCase()}
            </button>
            <button
              type="button"
              className="rounded border px-1.5 py-0.5 text-xs"
              style={{
                borderColor: "var(--lcd-dark-hex)",
                backgroundColor: "var(--lcd-light-hex)",
                color: "var(--lcd-dark-hex)",
              }}
              onClick={toggleTime}
            >
              {state.timeOfDay === "day" ? "DAY" : "NITE"}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div
          className="mb-2 rounded border-2 px-2 py-1.5"
          style={{
            borderColor: "var(--lcd-dark-hex)",
            backgroundColor: "var(--lcd-screen-hex)",
          }}
        >
          <div className="grid gap-1">
            {(Object.keys(STAT_NAMES) as (keyof GameStats)[]).map((key) => (
              <StatBar
                key={key}
                label={STAT_NAMES[key]}
                value={state.stats[key]}
                inverse={key === "burnout"}
              />
            ))}
          </div>
        </div>

        {/* Character + stage strip */}
        <div
          className="mb-2 flex flex-1 flex-col items-center justify-center rounded border-2 py-4"
          style={{
            borderColor: "var(--lcd-dark-hex)",
            backgroundColor: "var(--lcd-screen-hex)",
          }}
        >
          <div className="relative h-40 w-32 shrink-0 overflow-hidden rounded border-2 border-[var(--lcd-dark-hex)]">
            <Image
              src={characterImg}
              alt="Your character"
              fill
              className="object-contain p-1"
              unoptimized
            />
          </div>
          <p className="mt-2 text-xs font-bold" style={{ color: "var(--lcd-dark-hex)" }}>
            → {stageInfo?.label ?? state.stage} →
          </p>
        </div>

        {/* Action buttons: Feed, Work, Self-Care, Social */}
        <div className="grid grid-cols-4 gap-1">
          {(["feed", "work", "self_care", "social"] as ActionCategory[]).map((cat) => (
            <button
              key={cat}
              type="button"
              className="rounded border-2 py-2 text-xs font-bold"
              style={{
                borderColor: "var(--lcd-dark-hex)",
                backgroundColor: "var(--lcd-light-hex)",
                color: "var(--lcd-dark-hex)",
              }}
              onClick={() => openAction(cat)}
            >
              {cat === "self_care" ? "Self-Care" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Mini-games */}
        <div className="mt-2 grid grid-cols-2 gap-1">
          <button
            type="button"
            className="rounded border-2 py-1.5 text-xs font-bold"
            style={{
              borderColor: "var(--lcd-dark-hex)",
              backgroundColor: "var(--lcd-light-hex)",
              color: "var(--lcd-dark-hex)",
            }}
            onClick={() => onStateChange({ ...state, openModal: "dating" })}
          >
            Dating
          </button>
          <button
            type="button"
            className="rounded border-2 py-1.5 text-xs font-bold"
            style={{
              borderColor: "var(--lcd-dark-hex)",
              backgroundColor: "var(--lcd-light-hex)",
              color: "var(--lcd-dark-hex)",
            }}
            onClick={() => onStateChange({ ...state, openModal: "lockin" })}
          >
            Lock-in
          </button>
        </div>
      </div>

      {/* Modals */}
      {state.openModal !== "none" &&
        state.openModal !== "dating" &&
        state.openModal !== "lockin" && (
          <ActionModal
            category={state.openModal}
            onPick={onPickAction}
            onClose={closeModal}
          />
        )}
      {state.openModal === "dating" && (
        <MiniGameModal kind="dating" onClose={closeModal} onWin={onMiniGameWin} />
      )}
      {state.openModal === "lockin" && (
        <MiniGameModal kind="lockin" onClose={closeModal} onWin={onMiniGameWin} />
      )}
    </div>
  );
}
