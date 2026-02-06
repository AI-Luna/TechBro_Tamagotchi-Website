"use client";

export default function StatBar({
  label,
  value,
  max = 100,
  inverse = false,
}: {
  label: string;
  value: number;
  max?: number;
  inverse?: boolean;
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const width = inverse ? 100 - pct : pct; // e.g. burnout: high = bad, show empty
  const barColor = inverse
    ? (pct > 70 ? "var(--accent-hex)" : pct > 40 ? "var(--lcd-light-hex)" : "var(--lcd-screen-hex)")
    : (pct < 30 ? "var(--accent-hex)" : pct < 60 ? "var(--lcd-light-hex)" : "var(--lcd-screen-hex)");

  return (
    <div className="flex items-center gap-2">
      <span
        className="w-16 shrink-0 text-xs font-bold"
        style={{ color: "var(--lcd-dark-hex)" }}
      >
        {label}
      </span>
      <div
        className="h-3 flex-1 overflow-hidden rounded-sm border"
        style={{
          borderColor: "var(--lcd-dark-hex)",
          backgroundColor: "var(--lcd-dark-hex)",
        }}
      >
        <div
          className="h-full rounded-sm transition-[width] duration-300"
          style={{
            width: `${width}%`,
            backgroundColor: barColor,
          }}
        />
      </div>
      <span className="w-6 text-right text-xs font-mono" style={{ color: "var(--lcd-dark-hex)" }}>
        {Math.round(value)}
      </span>
    </div>
  );
}
