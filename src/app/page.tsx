"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CHARACTERS, STARTUP_STAGES } from "./constants";

const CITY_SCENES = [
  { label: "New York", src: "/Daytime_Nyc.png", hoverSrc: "/nyc night-time.png" },
  { label: "SF", src: "/sf_daytime.png", hoverSrc: "/sf_nighttime.png" },
];

const ACTIVITIES = [
  {
    id: "feed",
    label: "Feed",
    description: "Coffee, salad, pizza—keep your founder fueled.",
    image: "/Gemini_Generated_Image_akj6cpakj6cpakj6-removebg-preview.png",
  },
  {
    id: "social",
    label: "Social",
    description: "Happy hour, conferences, DM slides. Network up.",
    image: "/Gemini_Generated_Image_e9lyjje9lyjje9ly-removebg-preview.png",
  },
  {
    id: "work",
    label: "Work",
    description: "Code, pitch, meetings. Progress toward funding.",
    image: "/Gemini_Generated_Image_98hskv98hskv98hs-removebg-preview.png",
  },
  {
    id: "self_care",
    label: "Self-Care",
    description: "Sleep, gym, meditate. Fight burnout.",
    image: "/Gemini_Generated_Image_izrpbkizrpbkizrp-removebg-preview.png",
  },
];

export default function LandingPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <div
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--modal-bg-hex)" }}
    >
      {/* Hero */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16">
        <div className="mb-2 text-center">
          <h1
            className="text-4xl font-bold tracking-wider sm:text-5xl md:text-6xl"
            style={{
              color: "var(--accent-hex)",
              textShadow: `
                2px 2px 0 var(--text-primary-hex),
                -1px -1px 0 var(--text-primary-hex),
                1px -1px 0 var(--text-primary-hex),
                -1px 1px 0 var(--text-primary-hex),
                0 0 12px var(--text-primary-hex)
              `,
            }}
          >
            TECHBRO TAMAGOTCHI
          </h1>
        </div>
        <p
          className="mb-10 text-lg font-bold sm:text-xl"
          style={{ color: "var(--text-primary-hex)" }}
        >
          Choose your founder.
        </p>

        <div className="mb-12 grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
          {CHARACTERS.map((c) => {
            const isHovered = hoveredId === c.id;
            return (
              <div
                key={c.id}
                className="relative z-10 flex flex-col items-center rounded-lg border-2 p-4 transition-all duration-200 hover:scale-[1.02]"
                style={{
                  borderColor: isHovered ? "var(--accent-hex)" : "var(--text-primary-hex)",
                  backgroundColor: "var(--modal-bg-hex)",
                  boxShadow: isHovered ? `0 0 16px var(--accent-hex)` : "0 0 0 1px rgba(0,242,242,0.2)",
                  overflow: isHovered ? "visible" : undefined,
                }}
                onMouseEnter={() => setHoveredId(c.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className="flex h-32 w-32 shrink-0 items-center justify-center rounded border transition-transform duration-300 ease-out"
                  style={{
                    borderColor: "var(--text-primary-hex)",
                    backgroundColor: "var(--card-bg-hex)",
                    transform: isHovered ? "scale(2.25)" : "scale(1)",
                    transformOrigin: "center center",
                    overflow: isHovered ? "visible" : "hidden",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={c.label}
                    className="max-h-full max-w-full object-contain p-1"
                    style={{ width: "auto", height: "auto", objectFit: "contain" }}
                  />
                </div>
                <span
                  className="mt-3 font-bold"
                  style={{ color: "var(--text-primary-hex)" }}
                >
                  {c.label}
                </span>
                <span
                  className="mt-1 text-center text-sm font-bold"
                  style={{ color: "#ffffff" }}
                >
                  {c.description}
                </span>
                {c.id === "vibe_coder" && (
                  <div
                    className="absolute inset-0 flex items-center justify-center rounded-lg"
                    style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                  >
                    <span
                      className="rounded px-3 py-1 text-sm font-bold tracking-wide"
                      style={{
                        color: "var(--accent-hex)",
                        border: "2px solid var(--accent-hex)",
                        backgroundColor: "rgba(0,0,0,0.8)",
                      }}
                    >
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p
          className="mb-2 whitespace-nowrap text-center text-lg font-bold leading-relaxed sm:text-xl"
          style={{
            color: "#ffffff",
            textShadow: "0 1px 2px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.5)",
          }}
        >
          From your apartment bedroom to unicorn status.
        </p>
        <p
          className="mb-10 max-w-lg text-center text-base font-bold leading-snug sm:text-lg"
          style={{
            color: "#ffffff",
            textShadow: "0 1px 2px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.5)",
          }}
        >
          Nurture your founder. Manage energy, health, burnout, and social life while you build your startup—Tamagotchi-style.
        </p>

        <a
          href="https://x.com/LunaBitar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border-2 px-8 py-3.5 font-bold transition-all duration-200 hover:opacity-95 hover:shadow-[0_0_24px_var(--accent-hex)]"
          style={{
            borderColor: "var(--accent-hex)",
            backgroundColor: "var(--accent-hex)",
            color: "#ffffff",
            fontWeight: 700,
          }}
        >
          Download on the App Store
        </a>
      </div>

      {/* Features: settings, journey, activities, mini-games */}
      <section className="relative z-10 border-t-2 border-[var(--card-selected-hex)] px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2
            className="mb-10 text-center text-2xl font-bold sm:text-3xl"
            style={{
              color: "var(--text-primary-hex)",
              textShadow: "0 1px 3px rgba(0,0,0,0.6)",
            }}
          >
            How it works
          </h2>

          {/* Settings: city & time */}
          <div className="mb-14">
            <h3 className="mb-4 text-xl font-bold sm:text-2xl" style={{ color: "#ffffff", textShadow: "0 1px 3px rgba(0,0,0,0.7)" }}>
              Choose your city & vibe
            </h3>
            <p className="mb-4 max-w-xl text-sm font-bold leading-relaxed" style={{ color: "#ffffff", textShadow: "0 1px 2px rgba(0,0,0,0.7)" }}>
              Play in New York or SF. Your founder lives against these backdrops.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {CITY_SCENES.map((scene) => {
                const isHovered = hoveredCity === scene.label;
                const showingSrc = isHovered && scene.hoverSrc ? scene.hoverSrc : scene.src;
                return (
                  <div
                    key={scene.label}
                    className="flex flex-col items-center"
                    onMouseEnter={() => setHoveredCity(scene.label)}
                    onMouseLeave={() => setHoveredCity(null)}
                  >
                    <div
                      className="inline-block max-w-full overflow-hidden rounded-lg border-2 transition-all duration-300"
                      style={{
                        borderColor: isHovered ? "var(--accent-hex)" : "var(--text-primary-hex)",
                        backgroundColor: "var(--card-bg-hex)",
                        boxShadow: isHovered ? "0 0 20px var(--accent-hex)" : "none",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={showingSrc}
                        alt={scene.label}
                        className="block max-w-full h-auto transition-opacity duration-300"
                        style={{ width: "100%", maxWidth: "100%", height: "auto", display: "block", verticalAlign: "middle" }}
                      />
                    </div>
                    <p
                      className="mt-2 text-center text-sm font-bold"
                      style={{ color: "var(--text-primary-hex)" }}
                    >
                      {scene.label}
                      {isHovered ? " (night)" : ""}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Startup journey */}
          <div className="mb-14 transition-all duration-200 hover:scale-[1.01] hover:shadow-[0_0_24px_var(--accent-hex)]">
            <h3 className="mb-4 text-xl font-bold sm:text-2xl" style={{ color: "#ffffff", textShadow: "0 1px 3px rgba(0,0,0,0.7)" }}>
              Your startup journey
            </h3>
            <p className="mb-4 max-w-xl text-sm font-bold leading-relaxed" style={{ color: "#ffffff", textShadow: "0 1px 2px rgba(0,0,0,0.7)" }}>
              Advance from ideation to unicorn by raising funding and keeping your founder healthy.
            </p>
            <div
              className="flex flex-wrap justify-center gap-2 rounded-lg border-2 p-3 transition-all duration-200 hover:border-[var(--accent-hex)] hover:shadow-[0_0_20px_var(--accent-hex)]"
              style={{
                borderColor: "var(--text-primary-hex)",
                backgroundColor: "var(--modal-bg-hex)",
              }}
            >
              {STARTUP_STAGES.map((s, i) => (
                <span key={s.id} className="flex items-center gap-2">
                  <span
                    className="rounded border-2 border-transparent px-2 py-1 text-xs font-bold transition-all duration-300 ease-out hover:scale-150 hover:border-[var(--accent-hex)] hover:bg-[var(--card-selected-hex)] hover:text-[var(--accent-hex)] hover:shadow-[0_0_12px_var(--accent-hex)] sm:text-sm"
                    style={{
                      color: "var(--text-primary-hex)",
                      backgroundColor: "var(--card-bg-hex)",
                    }}
                  >
                    {s.label}
                  </span>
                  {i < STARTUP_STAGES.length - 1 && (
                    <span className="font-bold" style={{ color: "var(--accent-hex)" }}>
                      →
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div className="mb-14">
            <h3 className="mb-4 text-xl font-bold sm:text-2xl" style={{ color: "#ffffff", textShadow: "0 1px 3px rgba(0,0,0,0.7)" }}>
              What your founder can do
            </h3>
            <p className="mb-4 max-w-xl text-sm font-bold leading-relaxed" style={{ color: "#ffffff", textShadow: "0 1px 2px rgba(0,0,0,0.7)" }}>
              Four action categories. Balance energy, health, burnout, and social to progress.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {ACTIVITIES.map((a) => (
                <div
                  key={a.id}
                  className="flex items-center gap-4 rounded-lg border-2 p-4 transition-all duration-200 hover:scale-[1.02] hover:border-[var(--accent-hex)] hover:shadow-[0_0_24px_var(--accent-hex)]"
                  style={{
                    borderColor: "var(--text-primary-hex)",
                    backgroundColor: "var(--card-bg-hex)",
                  }}
                >
                  <div
                    className="relative h-24 w-24 shrink-0 overflow-hidden rounded border"
                    style={{
                      borderColor: "var(--text-primary-hex)",
                      backgroundColor: "var(--card-selected-hex)",
                    }}
                  >
                    <Image
                      src={a.image}
                      alt=""
                      fill
                      className="object-contain p-0"
                      style={{ transform: "scale(1.8)" }}
                      unoptimized
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold" style={{ color: "var(--text-primary-hex)" }}>
                      {a.label}
                    </p>
                    <p className="max-w-sm text-sm font-bold leading-snug" style={{ color: "#ffffff", textShadow: "0 1px 2px rgba(0,0,0,0.6)" }}>
                      {a.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mini-games */}
          <div className="mb-10">
            <h3 className="mb-6 text-xl font-bold sm:text-2xl" style={{ color: "#ffffff", textShadow: "0 1px 3px rgba(0,0,0,0.7)" }}>
              Mini-games
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div
                className="rounded-xl border-2 p-5"
                style={{
                  borderColor: "var(--accent-hex)",
                  backgroundColor: "rgba(0,0,0,0.35)",
                }}
              >
                <p className="mb-2 font-bold" style={{ color: "var(--accent-hex)" }}>Dating</p>
                <p className="text-sm leading-relaxed" style={{ color: "#ffffff", textShadow: "0 1px 2px rgba(0,0,0,0.7)" }}>
                  Send your founder on a date. Pick the right replies in 3 rounds and score a Great Date with bonus social and happiness—or end up with an Awkward Date and a small social boost.
                </p>
              </div>
              <div
                className="rounded-xl border-2 p-5"
                style={{
                  borderColor: "var(--accent-hex)",
                  backgroundColor: "rgba(0,0,0,0.35)",
                }}
              >
                <p className="mb-2 font-bold" style={{ color: "var(--accent-hex)" }}>Lock In</p>
                <p className="text-sm leading-relaxed" style={{ color: "#ffffff", textShadow: "0 1px 2px rgba(0,0,0,0.7)" }}>
                  Survive 30 seconds of deep work: distractions pop up (phone, Slack, Twitter, etc.). Tap them away to keep your focus meter up and your productivity climbing.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <a
              href="https://x.com/LunaBitar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 px-8 py-3.5 font-bold transition-all duration-200 hover:scale-105 hover:border-[var(--accent-hex)] hover:shadow-[0_0_28px_var(--accent-hex)]"
              style={{
                borderColor: "var(--accent-hex)",
                backgroundColor: "var(--accent-hex)",
                color: "#ffffff",
                fontWeight: 700,
              }}
            >
              Download on the App Store
            </a>
          </div>

          {/* Legal footer */}
          <footer className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-[var(--card-selected-hex)] pt-8">
            <Link
              href="/privacy"
              className="text-sm font-bold underline transition hover:opacity-90"
              style={{ color: "var(--text-primary-hex)" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm font-bold underline transition hover:opacity-90"
              style={{ color: "var(--text-primary-hex)" }}
            >
              Terms of Use
            </Link>
            <Link
              href="/age-rating"
              className="text-sm font-bold underline transition hover:opacity-90"
              style={{ color: "var(--text-primary-hex)" }}
            >
              Age Rating (4+)
            </Link>
          </footer>
        </div>
      </section>
    </div>
  );
}
