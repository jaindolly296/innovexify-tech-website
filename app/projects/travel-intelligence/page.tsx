import Link from "next/link";

export default function AIDocumentIntelligencePage() {
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
              Project 02 • Artificial Intelligence
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
              AI Document Intelligence
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
              An intelligent document solution designed to help users find,
              understand, and extract useful information from business
              documents faster.
            </p>
          </div>

          {/* Main Content */}
          <div className="mt-16 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Overview */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Project Overview
              </p>

              <p className="mt-5 text-base leading-8 text-slate-300">
                AI Document Intelligence is a demonstration project focused on
                making business documents easier to search, understand, and
                interact with using intelligent document processing.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-400">
                The solution is designed to help businesses reduce the time
                spent searching through documents and make important
                information easier to access.
              </p>
            </div>

            {/* Highlights */}
            <div className="rounded-3xl border border-white/10 bg-[#080c1d] p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Key Capabilities
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "Document analysis",
                  "Information discovery",
                  "Question-based interaction",
                  "Relevant information retrieval",
                  "Faster knowledge access",
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
                Faster Information Access
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Make useful information inside business documents easier to
                locate and understand.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
              <p className="text-sm font-semibold text-blue-400">
                Reduced Manual Work
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Reduce the time required for manual document searching and
                information extraction.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
              <p className="text-sm font-semibold text-blue-400">
                Intelligent Interaction
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Provide a more intuitive way for users to interact with
                information contained in documents.
              </p>
            </div>
          </div>

          {/* Portfolio Notice */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 text-sm leading-6 text-slate-500">
            Demonstration portfolio project. This page presents the type of
            AI and document intelligence solution Innovexify Tech can build.
            Real client case studies will be added as projects are completed.
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
