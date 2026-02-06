"use client";

import Modal from "./Modal";
import { ACTIONS } from "../constants";
import type { ActionCategory, ActionOption } from "../types";

const CATEGORY_LABELS: Record<ActionCategory, string> = {
  feed: "Feed",
  work: "Work",
  self_care: "Self-Care",
  social: "Social",
};

export default function ActionModal({
  category,
  onPick,
  onClose,
}: {
  category: ActionCategory;
  onPick: (action: ActionOption) => void;
  onClose: () => void;
}) {
  const options = ACTIONS[category] ?? [];

  return (
    <Modal title={CATEGORY_LABELS[category]} onClose={onClose}>
      <div className="space-y-2">
        {options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            className="w-full rounded border-2 px-3 py-2 text-left text-sm transition hover:opacity-90"
            style={{
              backgroundColor: "var(--card-bg-hex)",
              borderColor: "var(--card-selected-hex)",
              color: "var(--text-secondary-hex)",
            }}
            onClick={() => onPick(opt)}
          >
            <span className="font-bold" style={{ color: "var(--text-primary-hex)" }}>
              {opt.label}
            </span>
            <span className="ml-2 opacity-90">{opt.description}</span>
          </button>
        ))}
      </div>
    </Modal>
  );
}
