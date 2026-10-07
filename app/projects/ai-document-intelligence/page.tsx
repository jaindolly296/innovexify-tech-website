import Link from "next/link";

export default function AIDocumentIntelligencePage() {
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

            <Link
              href="/services"
              className="transition hover:text-white"
            >
              Services
            </Link>

            <Link href="/#projects" className="text-white">
              Projects
            </Link>

            <Link
              href="/#process"
              className="transition hover:text-white"
            >
              Process
            </Link>

            <Link
              href="/#about"
              className="transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="/#contact"
              className="transition hover:text-white"
            >
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

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8 lg:pb-24 lg:pt-28">
          <Link
            href="/#projects"
            className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            ← Back to Projects
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
              Artificial Intelligence
            </div>

            <h1 className="mt-7 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              AI Document Intelligence
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              An intelligent document solution designed to help users find,
              understand and extract useful information from business
              documents faster.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="rounded-xl bg-blue-500 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-blue-400"
              >
                Discuss a Similar Project →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#080c1d] p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Category
              </p>

              <h2 className="mt-4 text-xl font-semibold">
                Artificial Intelligence
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Intelligent document processing and information discovery.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#080c1d] p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Objective
              </p>

              <h2 className="mt-4 text-xl font-semibold">
                Faster Information Access
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Make information inside documents easier to find and
                understand.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#080c1d] p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Status
              </p>

              <h2 className="mt-4 text-xl font-semibold">
                Demonstration Project
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Created to demonstrate Innovexify&apos;s capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT DETAILS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Project Overview
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Making complex documents easier to understand.
            </h2>

            <p className="mt-6 leading-7 text-gray-400">
              Businesses frequently work with large collections of documents,
              reports and other information. Finding a specific answer inside
              those documents can take significant time.
            </p>

            <p className="mt-5 leading-7 text-gray-400">
              This demonstration project focuses on creating a more intelligent
              way to interact with documents, helping users locate relevant
              information and understand document content more efficiently.
            </p>

            <div className="mt-10">
              <h3 className="text-xl font-semibold">
                Business Problems Addressed
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  "Large amounts of unstructured information",
                  "Time-consuming document searching",
                  "Difficulty finding specific information",
                  "Manual information extraction",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-5 py-4"
                  >
                    <span className="mt-0.5 text-blue-400">✓</span>

                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-white/[0.03] to-purple-500/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Solution Focus
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Document understanding",
                  "Information discovery",
                  "Question-based interaction",
                  "Relevant information retrieval",
                  "Faster knowledge access",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                  >
                    <span className="text-sm text-gray-300">{item}</span>

                    <span className="text-sm font-semibold text-blue-400">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY CAPABILITIES */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Key Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Built around practical document intelligence.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Document Analysis",
                description:
                  "Help users work with information contained within business documents.",
              },
              {
                number: "02",
                title: "Information Retrieval",
                description:
                  "Make relevant information easier to locate when users need it.",
              },
              {
                number: "03",
                title: "Natural Interaction",
                description:
                  "Provide a more intuitive way to interact with document information.",
              },
              {
                number: "04",
                title: "Knowledge Access",
                description:
                  "Reduce the time required to find useful information inside documents.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-white/10 bg-[#080c1d] p-7"
              >
                <span className="text-sm font-semibold text-blue-400">
                  {item.number}
                </span>

                <h3 className="mt-6 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMONSTRATION NOTICE */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-blue-400/20 bg-blue-500/[0.04] px-6 py-10 text-center sm:px-12">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Demonstration Portfolio
            </p>

            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              This project demonstrates our AI capabilities.
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              This is a demonstration project created to present the type of AI
              and document intelligence solutions Innovexify can build. Real
              client case studies will be added as projects are completed.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM BUTTONS */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/#contact"
            className="rounded-xl bg-blue-500 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-blue-400"
          >
            Discuss a Similar Project →
          </Link>

          <Link
            href="/#projects"
            className="rounded-xl border border-white/15 px-7 py-3.5 text-center font-semibold text-gray-200 transition hover:bg-white/5"
          >
            ← Back to Projects
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
