"use client";

import Link from "next/link";

const solutions = [
  {
    title: "Business Process Automation",
    description:
      "Reduce repetitive manual work by connecting everyday business processes into efficient automated workflows.",
  },
  {
    title: "Lead & Enquiry Automation",
    description:
      "Capture leads, organize enquiries and automate notifications so important opportunities are not missed.",
  },
  {
    title: "Reporting Automation",
    description:
      "Automate recurring reports, summaries and business updates to reduce manual reporting effort.",
  },
  {
    title: "AI-Powered Workflows",
    description:
      "Add intelligent decision-making and content processing to workflows where automation alone is not enough.",
  },
];

const benefits = [
  "Reduce repetitive manual tasks",
  "Save time across business operations",
  "Improve workflow consistency",
  "Get faster notifications and updates",
  "Connect different business processes",
  "Scale operations more efficiently",
];

export default function AIAutomationPage() {
  return (
    <main className="min-h-screen bg-[#070b16] text-white">
      {/* NAVBAR */}
      <header className="border-b border-white/10 bg-[#070b16]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="flex items-center">
            <img
              src="/images/innovexify-logo.svg"
              alt="Innovexify Tech"
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <Link href="/services" className="text-white">
              Services
            </Link>

            <Link href="/#projects" className="transition hover:text-white">
              Projects
            </Link>

            <Link href="/#process" className="transition hover:text-white">
              Process
            </Link>

            <Link href="/#about" className="transition hover:text-white">
              About
            </Link>

            <Link href="/#contact" className="transition hover:text-white">
              Contact
            </Link>
          </nav>

          <Link
            href="/#contact"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-200"
          >
            Start a Project →
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
          <div className="max-w-4xl">
            <Link
              href="/services"
              className="text-sm text-gray-500 transition hover:text-blue-400"
            >
              ← All Services
            </Link>

            <div className="mt-8 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
              AI Automation Services
            </div>

            <h1 className="mt-7 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Automate Your Business.
              <span className="block text-blue-400">
                Work Smarter.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              We design practical automation solutions that reduce repetitive
              work, connect business processes and help teams spend more time
              on work that actually matters.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="rounded-full bg-blue-500 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Automate My Business →
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-white/15 px-7 py-3.5 text-center text-sm font-semibold text-gray-200 transition hover:bg-white/5"
              >
                Explore Other Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Why Automation?
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Less manual work.
              <span className="block text-gray-400">
                More productive operations.
              </span>
            </h2>
          </div>

          <div>
            <p className="leading-7 text-gray-400">
              Many businesses spend valuable time on repetitive tasks such as
              moving information between systems, sending notifications,
              preparing reports and processing routine enquiries. We help turn
              these repetitive processes into structured automated workflows.
            </p>

            <p className="mt-5 leading-7 text-gray-400">
              The goal is simple: make your existing business processes faster,
              more consistent and easier to manage.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            What We Automate
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Automation solutions for real business needs
          </h2>

          <p className="mt-4 leading-7 text-gray-400">
            We focus on practical automation rather than unnecessary
            complexity.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-sm font-semibold text-blue-400">
                0{index + 1}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {solution.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Business Benefits
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                What your business can gain
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-gray-400">
                Good automation is not about automating everything. It is
                about identifying the right repetitive processes and making
                them work better.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <span className="mt-0.5 text-blue-400">✓</span>
                  <span className="text-sm leading-6 text-gray-300">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            Our Approach
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            From manual process to automated workflow
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            ["01", "Understand", "We understand your current business process."],
            ["02", "Identify", "We identify repetitive tasks and bottlenecks."],
            ["03", "Automate", "We design an automation around the requirement."],
            ["04", "Improve", "We refine the workflow for better efficiency."],
          ].map(([number, title, description]) => (
            <div
              key={number}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <span className="text-sm font-semibold text-blue-400">
                {number}
              </span>

              <h3 className="mt-5 text-lg font-bold">{title}</h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-white/[0.03] to-purple-500/10 px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to automate a business process?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            Tell us what you are currently doing manually. We&apos;ll help
            identify where automation can create the most value.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex rounded-full bg-blue-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Discuss Your Requirement →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            © {new Date().getFullYear()} INNOVEXIFY TECH IT PRIVATE LIMITED
          </div>

          <div>Founder & CEO — Ankit Kumar Mishra</div>
        </div>
      </footer>
    </main>
  );
}
