import Link from "next/link";

export default function TermsAndConditions() {
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
          Terms & Conditions
        </h1>

        <p className="mt-4 text-sm text-slate-500">
          Last updated: October 2026
        </p>

        <div className="mt-10 space-y-10 text-sm leading-7 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              1. Acceptance of Terms
            </h2>

            <p className="mt-3">
              By accessing or using the Innovexify website, you agree to
              comply with these Terms & Conditions. If you do not agree with
              these terms, please do not use the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              2. Our Services
            </h2>

            <p className="mt-3">
              Innovexify Tech IT Private Limited provides technology and
              digital services including AI automation, data analytics,
              Power BI, web development, AI solutions, API integration,
              digital marketing and creative services.
            </p>

            <p className="mt-3">
              Specific project requirements, deliverables, timelines and
              commercial terms may be agreed separately between Innovexify
              and the client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              3. Website Use
            </h2>

            <p className="mt-3">
              You agree to use this website only for lawful purposes and in a
              manner that does not interfere with the operation, security or
              availability of the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              4. Intellectual Property
            </h2>

            <p className="mt-3">
              Unless otherwise stated, the content, branding, design, graphics,
              text and other materials available on this website belong to
              Innovexify Tech IT Private Limited or are used with appropriate
              permission.
            </p>

            <p className="mt-3">
              Website content may not be copied, reproduced, modified or
              distributed without prior permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              5. Project Information
            </h2>

            <p className="mt-3">
              Information presented on this website is provided for general
              informational purposes. Actual project scope, functionality,
              pricing and delivery timelines may vary according to individual
              client requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              6. Third-Party Services
            </h2>

            <p className="mt-3">
              Certain solutions may depend on third-party platforms, APIs,
              software or services. Availability and performance of such
              third-party services may be subject to their own terms and
              policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              7. Limitation of Liability
            </h2>

            <p className="mt-3">
              To the extent permitted by applicable law, Innovexify shall not
              be responsible for indirect, incidental or consequential losses
              arising from the use of this website or information provided
              through it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              8. Changes to These Terms
            </h2>

            <p className="mt-3">
              Innovexify may update these Terms & Conditions from time to time.
              Updated terms will be published on this page with a revised
              update date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              9. Contact
            </h2>

            <p className="mt-3">
              If you have questions regarding these Terms & Conditions, please
              contact Innovexify through the contact section of our website.
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
