"use client";

import Link from "next/link";

const services = [
  {
    number: "01",
    title: "AI Automation",
    description:
      "Automate repetitive business processes and build intelligent workflows that save time and improve operational efficiency.",
    points: [
      "Business process automation",
      "AI-powered workflows",
      "Lead and enquiry automation",
      "Reporting and notification automation",
    ],
    href: "/services/ai-automation",
  },
  {
    number: "02",
    title: "Power BI & Data Analytics",
    description:
      "Turn business data into clear, interactive dashboards that help teams understand performance and make better decisions.",
    points: [
      "Business dashboards",
      "KPI reporting",
      "Sales and operations analytics",
      "Automated reporting",
    ],
    href: "/services/power-bi",
  },
  {
    number: "03",
    title: "AI Solutions",
    description:
      "Build practical AI-powered solutions for document processing, business intelligence, customer support and other business requirements.",
    points: [
      "AI assistants",
      "Document intelligence",
      "AI-powered business tools",
      "Intelligent search and analysis",
    ],
    href: "/services/ai-solutions",
  },
  {
    number: "04",
    title: "Software & API Development",
    description:
      "Develop custom web applications, business systems and API-based solutions designed around your specific requirements.",
    points: [
      "Custom web applications",
      "Business systems",
      "API integrations",
      "Internal tools and platforms",
    ],
    href: "/services/software-api",
  },
  {
    number: "05",
    title: "Digital Marketing",
    description:
      "Help businesses build a stronger digital presence through social media management, advertising and performance-focused campaigns.",
    points: [
      "Social media management",
      "Meta advertising",
      "Content planning",
      "Campaign management",
    ],
    href: "/services/digital-marketing",
  },
  {
    number: "06",
    title: "Creative & Content",
    description:
      "Create professional visual and digital content that helps businesses communicate their brand and attract customers.",
    points: [
      "Social media creatives",
      "Marketing graphics",
      "Business content",
      "Brand-focused visual design",
    ],
    href: "/services/creative-content",
  },
];

export default function ServicesPage() {
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
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 text-center lg:px-8 lg:pb-24 lg:pt-28">
          <div className="mb-6 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
            Our Services
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Technology Services
            <span className="block text-blue-400">
              Built Around Your Business
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            From business automation and analytics to AI solutions, software
            development and digital marketing, we help businesses solve real
            problems with practical technology solutions.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group block rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-400">
                  {service.number}
                </span>

                <span className="text-xl text-gray-600 transition duration-300 group-hover:translate-x-1 group-hover:text-blue-400">
                  ↗
                </span>
              </div>

              <h2 className="mt-7 text-2xl font-bold">
                {service.title}
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                {service.description}
              </p>

              <div className="mt-7 border-t border-white/10 pt-6">
                <ul className="space-y-3">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <span className="mt-0.5 text-blue-400">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex items-center text-sm font-semibold text-blue-400 transition group-hover:text-blue-300">
                View Service
                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-white/[0.03] to-purple-500/10 px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Tell us what you want to build, automate or improve. We&apos;ll
            understand your requirement and discuss the right solution.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex rounded-full bg-blue-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Discuss Your Project →
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
