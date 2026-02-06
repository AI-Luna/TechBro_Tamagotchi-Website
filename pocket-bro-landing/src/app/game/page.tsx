"use client";

import { useState } from "react";
import CharacterSelect from "../components/CharacterSelect";
import GameScreen from "../components/GameScreen";
import Link from "next/link";
import { INITIAL_STATS } from "../constants";
import type { GameState, CharacterArchetype } from "../types";

const initialGameState: GameState = {
  character: "tech_bro",
  stats: INITIAL_STATS,
  stage: "ideation",
  city: "nyc",
  timeOfDay: "day",
  day: 1,
  openModal: "none",
};

export default function GamePage() {
  const [character, setCharacter] = useState<CharacterArchetype | null>(null);
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const handleSelectCharacter = (c: CharacterArchetype) => {
    setCharacter(c);
    setGameState({
      ...initialGameState,
      character: c,
    });
  };

  if (character === null) {
    return (
      <div className="relative min-h-screen">
        <Link
          href="/"
          className="absolute left-4 top-4 z-10 rounded border-2 px-3 py-1 text-sm font-bold"
          style={{
            borderColor: "var(--lcd-dark-hex)",
            backgroundColor: "var(--lcd-screen-hex)",
            color: "var(--lcd-dark-hex)",
          }}
        >
          ← Back
        </Link>
        <CharacterSelect onSelect={handleSelectCharacter} />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <Link
        href="/"
        className="absolute left-4 top-4 z-20 rounded border-2 px-3 py-1 text-sm font-bold"
        style={{
          borderColor: "var(--lcd-dark-hex)",
          backgroundColor: "var(--lcd-screen-hex)",
          color: "var(--lcd-dark-hex)",
        }}
      >
        ← Back
      </Link>
      <GameScreen state={gameState} onStateChange={setGameState} />
    </div>
  );
}
