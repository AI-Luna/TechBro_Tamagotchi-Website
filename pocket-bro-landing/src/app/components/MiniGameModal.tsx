"use client";

import { useState } from "react";
import Modal from "./Modal";

type MiniGameKind = "dating" | "lockin";

export default function MiniGameModal({
  kind,
  onClose,
  onWin,
}: {
  kind: MiniGameKind;
  onClose: () => void;
  onWin?: (reward: { social?: number; energy?: number }) => void;
}) {
  const [step, setStep] = useState<"intro" | "play" | "done">("intro");
  const [result, setResult] = useState<"win" | "lose" | null>(null);

  const isDating = kind === "dating";

  const handlePlay = () => {
    setStep("play");
    // Simple random outcome for now
    const win = Math.random() > 0.4;
    setResult(win ? "win" : "lose");
    setStep("done");
    if (win && onWin) {
      onWin(isDating ? { social: 15 } : { energy: 20 });
    }
  };

  const title = isDating ? "Dating mini-game" : "Lock-in mode";
  const introText = isDating
    ? "Swipe right on the right choices. Don’t burn out."
    : "Focus for 30 seconds. No distractions. +Energy if you succeed.";

  return (
    <Modal title={title} onClose={onClose}>
      <div className="space-y-4" style={{ color: "var(--text-secondary-hex)" }}>
        {step === "intro" && (
          <>
            <p className="text-sm">{introText}</p>
            <button
              type="button"
              className="w-full rounded border-2 px-4 py-2 font-bold transition hover:opacity-90"
              style={{
                backgroundColor: "var(--card-selected-hex)",
                borderColor: "var(--accent-hex)",
                color: "var(--text-primary-hex)",
              }}
              onClick={handlePlay}
            >
              {isDating ? "Start swiping" : "Start lock-in"}
            </button>
          </>
        )}
        {step === "done" && result && (
          <>
            <p
              className="text-center font-bold"
              style={{
                color: result === "win" ? "var(--text-primary-hex)" : "var(--accent-hex)",
              }}
            >
              {result === "win" ? "Success!" : "Better luck next time."}
            </p>
            {result === "win" && (
              <p className="text-center text-sm">
                {isDating ? "+15 Social" : "+20 Energy"}
              </p>
            )}
            <button
              type="button"
              className="w-full rounded border-2 px-4 py-2 font-bold"
              style={{
                backgroundColor: "var(--card-bg-hex)",
                borderColor: "var(--card-selected-hex)",
                color: "var(--text-primary-hex)",
              }}
              onClick={onClose}
            >
              Done
            </button>
          </>
        )}
      </div>
    </Modal>
  );
}
