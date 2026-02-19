import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | TechBro Tamagotchi",
  description: "Terms of Use for TechBro Tamagotchi.",
};

export default function TermsOfUsePage() {
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
          Terms of Use
        </h1>
        <p className="mb-8 text-sm" style={{ color: "var(--text-secondary-hex)" }}>
          Last updated: February 2026
        </p>

        <div
          className="space-y-6 text-sm leading-relaxed"
          style={{ color: "#ffffff" }}
        >
          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or using TechBro Tamagotchi (&quot;the App&quot;), you agree to be bound by these Terms of Use. If you do not agree, do not use the App.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              2. License
            </h2>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial entertainment on devices you own or control, subject to these Terms and the applicable app store terms (e.g., Apple App Store Terms of Use).
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              3. Subscriptions, Cancellation, and Refunds
            </h2>
            <p>
              TechBro Tamagotchi may offer in-app subscriptions. All payments for subscriptions are processed by the App Store (Apple). We do not process payments directly.
            </p>
            <p className="mt-2">
              <strong>How to cancel or unsubscribe:</strong> You must manage and cancel your subscription through the App Store (Apple), not through us. On your iPhone or iPad: open Settings → [your name] → Subscriptions, select TechBro Tamagotchi, and cancel. You can also manage subscriptions in the App Store app. Cancellation stops future charges; you keep access until the end of the current billing period.
            </p>
            <p className="mt-2">
              <strong>Refunds:</strong> Refund requests are handled by Apple, not by us. To request a refund, go to reportaproblem.apple.com or use the &quot;Report a Problem&quot; link in your App Store purchase history. Apple&apos;s refund policy and decisions apply. We cannot issue refunds directly.
            </p>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>Payment will be charged to your Apple ID account upon confirmation of purchase.</li>
              <li>Subscriptions automatically renew unless auto-renewal is turned off at least 24 hours before the end of the current period.</li>
              <li>Your account will be charged for renewal within 24 hours prior to the end of the current period.</li>
              <li>You can manage your subscription and turn off auto-renewal in your device Account Settings after purchase.</li>
            </ul>
            <p className="mt-2">
              For any billing or subscription questions that Apple cannot resolve, you may contact us and we will assist where we can, but cancellation and refunds are managed solely through the App Store.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              4. Acceptable Use
            </h2>
            <p>
              You agree not to: (a) copy, modify, or create derivative works of the App; (b) reverse engineer or attempt to extract source code; (c) use the App for any illegal purpose or in violation of any laws; (d) use the App to harass, abuse, or harm others; (e) attempt to gain unauthorized access to any systems or accounts; or (f) use automated means (e.g., bots) to access the App unless we expressly permit it.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              5. Intellectual Property
            </h2>
            <p>
              The App, including all content, graphics, code, and design, is owned by us or our licensors and is protected by copyright and other intellectual property laws. You do not acquire any ownership rights by using the App.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              6. Disclaimer of Warranties
            </h2>
            <p>
              THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              7. Limitation of Liability
            </h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE (AND OUR AFFILIATES, OFFICERS, AND EMPLOYEES) SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE APP. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE APP IN THE TWELVE MONTHS BEFORE THE CLAIM (OR, IF THE APP IS FREE, TEN U.S. DOLLARS). Some jurisdictions do not allow these limitations; in such cases, our liability is limited to the fullest extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              8. Changes to the App and Terms
            </h2>
            <p>
              We may update the App or these Terms at any time. We will notify you of material changes by posting updated Terms in the App or on our website and updating the &quot;Last updated&quot; date. Your continued use of the App after changes constitutes acceptance of the new Terms. If you do not agree, you must stop using the App.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              9. Termination
            </h2>
            <p>
              We may suspend or terminate your access to the App at any time, with or without cause or notice. Upon termination, your license to use the App ends. Sections that by their nature should survive (e.g., disclaimers, limitation of liability) will survive.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              10. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of the United States and the State of California, without regard to conflict of law principles. Any disputes shall be resolved in the courts located in California.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              11. Contact
            </h2>
            <p>
              For questions about these Terms of Use, contact us at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:luna.app.studio@gmail.com"
                className="underline"
                style={{ color: "var(--accent-hex)" }}
              >
                luna.app.studio@gmail.com
              </a>
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
