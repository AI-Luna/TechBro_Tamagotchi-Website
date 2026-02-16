import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | TechBro Tamagotchi",
  description: "Privacy Policy for TechBro Tamagotchi.",
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="mb-8 text-sm" style={{ color: "var(--text-secondary-hex)" }}>
          Last updated: February 2025
        </p>

        <div
          className="space-y-6 text-sm leading-relaxed"
          style={{ color: "#ffffff" }}
        >
          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              1. Introduction
            </h2>
            <p>
              TechBro Tamagotchi (&quot;we,&quot; &quot;our,&quot; or &quot;the app&quot;) is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our mobile application and related services.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              2. Information We Collect
            </h2>
            <p>
              TechBro Tamagotchi is designed with privacy in mind. We may collect:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>
                <strong>Device information:</strong> Such as device type and operating system, to ensure compatibility and improve the app.
              </li>
              <li>
                <strong>Usage data:</strong> Anonymous analytics (e.g., app opens, feature use) to improve gameplay and fix issues, if analytics are enabled.
              </li>
              <li>
                <strong>Local game data:</strong> Your progress (e.g., founder stats, startup stage) is stored on your device. We do not upload or store this on our servers unless you use a cloud-save or account feature we may offer in the future.
              </li>
              <li>
                <strong>Subscription status:</strong> If you subscribe via the App Store, Apple processes payment. We may receive information that your subscription is active (e.g., to unlock features). We do not receive or store your payment details; those are held by Apple. To cancel a subscription or request a refund, you must do so through the App Store (Apple), not through us—see our Terms of Use for details.
              </li>
            </ul>
            <p className="mt-2">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              3. How We Use Your Information
            </h2>
            <p>
              We use collected information to: operate and improve the app; provide support; send important notices (e.g., policy updates) if you have opted in; and comply with applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              4. Data Storage and Security
            </h2>
            <p>
              Game progress and preferences are stored locally on your device. If we ever store data on servers, we will use reasonable technical and organizational measures to protect it. No method of transmission or storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              5. Children&apos;s Privacy
            </h2>
            <p>
              TechBro Tamagotchi is rated 4+ and is suitable for general audiences, including children. We do not sell personal information. If you have questions about your child&apos;s use of the app or want to request deletion of data, please contact us.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              6. Third-Party Services
            </h2>
            <p>
              The app may use third-party services (e.g., analytics, crash reporting). Those services have their own privacy policies. We encourage you to review them. We do not control and are not responsible for their practices.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              7. Your Rights
            </h2>
            <p>
              Depending on your location, you may have rights to access, correct, or delete your data, or to object to or restrict processing. To exercise these rights or ask questions, contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the updated policy in the app or on our website and update the &quot;Last updated&quot; date. Continued use of the app after changes means you accept the updated policy.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold" style={{ color: "var(--text-primary-hex)" }}>
              9. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or our practices, contact us at:
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
