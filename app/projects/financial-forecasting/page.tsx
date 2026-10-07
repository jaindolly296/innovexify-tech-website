import Link from "next/link";

export default function FinancialForecastingPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center">
            <img
              src="/images/innovexify-logo.svg"
              alt="Innovexify Tech IT Private Limited"
              className="h-10 w-auto"
            />
          </Link>

          <Link
            href="/#projects"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
          >
            ← All Projects
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute left-1/2 top-[-180px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Project 04 • Financial Analytics
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
              Financial Forecasting System
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
              A data-driven forecasting solution designed to transform
              historical financial information into useful forecasts and
              business insights.
            </p>
          </div>

          {/* Overview + Capabilities */}
          <div className="mt-16 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Project Overview
              </p>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Financial Forecasting System is a demonstration project
                focused on using historical financial data to identify
                patterns, generate forecasts, and support data-driven
                financial planning.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-400">
                The solution is designed to help businesses understand past
                financial performance and use predictive insights to support
                future planning and decision making.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#080c1d] p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Key Capabilities
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "Historical financial analysis",
                  "Financial trend identification",
                  "Forecast generation",
                  "Performance monitoring",
                  "Decision-support insights",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-slate-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Business Value */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
              <p className="text-sm font-semibold text-blue-400">
                Financial Visibility
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Understand financial trends and historical performance through
                structured analysis.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
              <p className="text-sm font-semibold text-blue-400">
                Forecasting
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Use historical patterns to generate forward-looking financial
                estimates.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
              <p className="text-sm font-semibold text-blue-400">
                Better Planning
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Provide useful analytical insights that can support business
                planning and decision making.
              </p>
            </div>
          </div>

          {/* Portfolio Notice */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 text-sm leading-6 text-slate-500">
            Demonstration portfolio project. This page presents the type of
            financial analytics and forecasting solution Innovexify Tech can
            build for businesses.
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="rounded-xl bg-blue-500 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-blue-400"
            >
              Discuss a Similar Project →
            </Link>

            <Link
              href="/#projects"
              className="rounded-xl border border-white/15 px-7 py-3.5 text-center font-semibold text-slate-200 transition hover:bg-white/5"
            >
              ← Back to Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold">
                INNOVEXIFY TECH IT PRIVATE LIMITED
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Building smarter digital solutions for modern businesses.
              </p>
            </div>

            <p className="text-sm text-slate-400">
              Founder & CEO — Ankit Kumar Mishra
            </p>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-600">
            © 2026 INNOVEXIFY TECH IT PRIVATE LIMITED. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
