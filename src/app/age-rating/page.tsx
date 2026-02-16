import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Age Rating | TechBro Tamagotchi",
  description: "Age rating and content suitability for TechBro Tamagotchi.",
};

export default function AgeRatingPage() {
  return (
    <div
      className="min-h-screen px-4 py-12"
      style={{ backgroundColor: "var(--modal-bg-hex)" }}
    >
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-block font-bold"
          style={{ color: "var(--text-primary-hex)" }}
        >
          ← Back to home
        </Link>

        <h1
          className="mb-2 text-3xl font-bold"
          style={{ color: "var(--accent-hex)" }}
        >
          Age Rating &amp; Content Suitability
        </h1>
        <p className="mb-8 text-sm" style={{ color: "var(--text-secondary-hex)" }}>
          TechBro Tamagotchi is rated 4+
        </p>

        <div
          className="space-y-6 text-sm leading-relaxed"
          style={{ color: "#ffffff" }}
        >
          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              Age rating
            </h2>
            <p>
              TechBro Tamagotchi is rated <strong>4+</strong> (suitable for ages 4 and older) on the App Store. The app is designed for general audiences and does not contain objectionable content.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              Content
            </h2>
            <p>
              The app is a lighthearted, Tamagotchi-style startup life simulator with retro pixel art. It does not include violence, frightening content, profanity, sexual content, or gambling. Gameplay involves managing a cartoon founder character (energy, health, burnout, social life) and advancing through startup stages in a humorous, family-friendly way.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              Parental guidance
            </h2>
            <p>
              No parental controls are required. The app does not collect personal information from children. For more details, see our <Link href="/privacy" className="underline" style={{ color: "var(--accent-hex)" }}>Privacy Policy</Link>.
            </p>
          </section>
        </div>

        <Link
          href="/"
          className="mt-10 inline-block font-bold"
          style={{ color: "var(--text-primary-hex)" }}
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
