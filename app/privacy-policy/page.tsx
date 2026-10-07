import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
          <Link href="/" className="text-xl font-bold tracking-tight text-[#0B1F3A]">
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
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-slate-500">
          Last updated: October 2026
        </p>

        <div className="mt-10 space-y-10 text-sm leading-7 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              1. Introduction
            </h2>

            <p className="mt-3">
              Innovexify Tech IT Private Limited respects your privacy and is
              committed to protecting the information you provide when using
              our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              2. Information We Collect
            </h2>

            <p className="mt-3">
              When you contact us or submit an enquiry, we may collect
              information such as your name, company name, email address,
              phone or WhatsApp number, service requirements and project
              details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              3. How We Use Information
            </h2>

            <p className="mt-3">
              Information submitted through our website may be used to respond
              to enquiries, understand project requirements, provide requested
              services and communicate with you regarding your enquiry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              4. Information Security
            </h2>

            <p className="mt-3">
              We take reasonable measures to protect information submitted to
              us against unauthorized access, misuse or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              5. Third-Party Services
            </h2>

            <p className="mt-3">
              Our website or services may use third-party technologies and
              platforms for hosting, analytics, communication or other
              business purposes. Their use of information may be governed by
              their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              6. Contact
            </h2>

            <p className="mt-3">
              If you have questions about this Privacy Policy or how your
              information is handled, please contact Innovexify through the
              contact section of our website.
            </p>
          </section>
        </div>

        <div className="mt-14 border-t border-slate-200 pt-8">
          <Link
            href="/"
            className="inline-flex rounded-full bg-[#0B1F3A] px-5 py-3 text-sm font-semibold text-white hover:bg-blue-600"
          >
            Back to Innovexify →
          </Link>
        </div>
      </section>
    </main>
  );
}
