"use client";

import { useEffect } from "react";

export default function Modal({
  children,
  onClose,
  title,
}: {
  children: React.ReactNode;
  onClose: () => void;
  title?: string;
}) {
  useEffect(() => {
    const handle = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "var(--overlay)" }}
      onClick={onClose}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-md overflow-auto rounded-lg border-2 p-4 shadow-lg"
        style={{
          backgroundColor: "var(--modal-bg-hex)",
          borderColor: "var(--card-selected-hex)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <h2
            className="mb-3 text-center font-bold"
            style={{ color: "var(--text-primary-hex)" }}
          >
            {title}
          </h2>
        )}
        {children}
        <button
          type="button"
          className="absolute right-2 top-2 rounded px-2 py-1 font-bold transition opacity-80 hover:opacity-100"
          style={{ color: "var(--text-primary-hex)", background: "transparent" }}
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
