import Link from "next/link";

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-[#0B1F3A]"
          >
            INNOVEXIFY
          </Link>

          <Link
            href="/"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
          Legal
        </div>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#0B1F3A] sm:text-5xl">
          Cookie Policy
        </h1>

        <p className="mt-4 text-sm text-slate-500">
          Last updated: October 2026
        </p>

        <div className="mt-10 space-y-10 text-sm leading-7 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              1. What Are Cookies?
            </h2>

            <p className="mt-3">
              Cookies are small text files that may be stored on your device
              when you visit a website. They can help websites remember
              information and improve the user experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              2. How We May Use Cookies
            </h2>

            <p className="mt-3">
              Innovexify may use cookies or similar technologies to support
              website functionality, understand website usage and improve the
              overall user experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              3. Types of Cookies
            </h2>

            <p className="mt-3">
              Depending on the technologies used by the website, cookies may
              include essential cookies, analytics-related cookies and
              preference or functionality cookies.
            </p>

            <div className="mt-5 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold text-[#0B1F3A]">
                  Essential Cookies
                </h3>

                <p className="mt-2">
                  These may be required for certain website functionality and
                  basic operation.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold text-[#0B1F3A]">
                  Analytics Cookies
                </h3>

                <p className="mt-2">
                  These may help understand how visitors interact with the
                  website and identify areas that can be improved.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold text-[#0B1F3A]">
                  Preference Cookies
                </h3>

                <p className="mt-2">
                  These may help remember certain preferences or settings to
                  provide a more convenient experience.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              4. Managing Cookies
            </h2>

            <p className="mt-3">
              Most web browsers allow users to control or delete cookies
              through browser settings. Disabling certain cookies may affect
              some website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              5. Third-Party Technologies
            </h2>

            <p className="mt-3">
              If third-party analytics, advertising or other services are
              integrated into the website, those services may use their own
              cookies or similar technologies according to their respective
              policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              6. Changes to This Cookie Policy
            </h2>

            <p className="mt-3">
              We may update this Cookie Policy when our website, technologies
              or practices change. Any updated version will be published on
              this page with a revised update date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              7. Contact
            </h2>

            <p className="mt-3">
              If you have questions about this Cookie Policy, please contact
              Innovexify through the contact section of our website.
            </p>
          </section>
        </div>

        <div className="mt-14 border-t border-slate-200 pt-8">
          <Link
            href="/"
            className="inline-flex rounded-full bg-[#0B1F3A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Back to Innovexify →
          </Link>
        </div>
      </section>
    </main>
  );
}
