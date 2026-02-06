"use client";

import Image from "next/image";
import { CHARACTERS } from "../constants";
import type { CharacterArchetype } from "../types";

export default function CharacterSelect({
  onSelect,
}: {
  onSelect: (c: CharacterArchetype) => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div
        className="mb-6 rounded-lg border-2 px-4 py-2"
        style={{
          borderColor: "var(--lcd-dark-hex)",
          backgroundColor: "var(--lcd-screen-hex)",
        }}
      >
        <h1 className="text-center font-bold" style={{ color: "var(--lcd-dark-hex)" }}>
          Choose your founder
        </h1>
        <p className="mt-1 text-center text-sm opacity-90">
          Garage → Unicorn
        </p>
      </div>
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
        {CHARACTERS.map((c) => (
          <button
            key={c.id}
            type="button"
            className="flex flex-col items-center rounded-lg border-2 p-4 transition hover:scale-[1.02]"
            style={{
              borderColor: "var(--lcd-dark-hex)",
              backgroundColor: "var(--lcd-screen-hex)",
            }}
            onClick={() => onSelect(c.id)}
          >
            <div className="relative h-32 w-32 overflow-hidden rounded border border-[var(--lcd-dark-hex)] bg-[var(--lcd-light-hex)]">
              <Image
                src={c.image}
                alt={c.label}
                fill
                className="object-contain p-1"
                unoptimized
              />
            </div>
            <span className="mt-2 font-bold" style={{ color: "var(--lcd-dark-hex)" }}>
              {c.label}
            </span>
            <span className="mt-1 text-center text-xs opacity-80">
              {c.description}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
