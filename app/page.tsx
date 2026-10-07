"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const services = [
  { no: "01", title: "AI Automation", text: "Automate repetitive work and connect business workflows.", href: "/services/ai-automation", tag: "AUTOMATE" },
  { no: "02", title: "Web Development", text: "Fast, professional websites built for trust and enquiries.", href: "/services/software-api", tag: "BUILD" },
  { no: "03", title: "Power BI & Analytics", text: "Turn business data into clear dashboards and decisions.", href: "/services/power-bi", tag: "INSIGHT" },
  { no: "04", title: "AI Solutions", text: "Useful AI for documents, support, knowledge and workflows.", href: "/services/ai-solutions", tag: "AI" },
  { no: "05", title: "Software & API", text: "Connect systems, APIs, databases and internal tools.", href: "/services/software-api", tag: "INTEGRATE" },
  { no: "06", title: "Digital Marketing", text: "Social media, Meta ads and measurable digital growth.", href: "/services/digital-marketing", tag: "GROW" },
  { no: "07", title: "Creative & Content", text: "Professional graphics, posts, reels and campaign assets.", href: "/services/creative-content", tag: "CREATE" },
];

const servicePreview = [
  { kicker: "Automation", subtitle: "Turn repetitive business processes into connected workflows.", details: ["Lead & enquiry routing", "Follow-up workflows", "Reports & notifications", "Excel & repetitive task automation", "Data movement between systems", "Business process automation"], outcome: "Less repetitive work and faster operations.", metric: "AUTOMATED" },
  { kicker: "Digital Experience", subtitle: "Professional digital experiences designed around trust and enquiries.", details: ["Business websites & landing pages", "Responsive mobile UX", "Conversion-focused sections", "Contact & enquiry flows", "Performance optimization", "Modern UI/UX implementation"], outcome: "A stronger digital presence that drives enquiries.", metric: "BUILD" },
  { kicker: "Analytics", subtitle: "Turn scattered business data into dashboards and useful insights.", details: ["Executive KPI dashboards", "Interactive Power BI reports", "Data cleaning & transformation", "SQL-based business analysis", "Trend & performance analysis", "Decision-ready insights"], outcome: "A clear view of business performance.", metric: "INSIGHT" },
  { kicker: "Artificial Intelligence", subtitle: "Create useful AI experiences around knowledge and workflows.", details: ["AI document intelligence", "AI assistants & chatbots", "Knowledge search systems", "RAG-based applications", "Customer support automation", "AI-powered business workflows"], outcome: "Useful AI connected to your business information.", metric: "INTELLIGENT" },
  { kicker: "Integration", subtitle: "Connect the systems your business relies on.", details: ["REST API integrations", "Third-party platform integration", "CRM & business systems", "Database connections", "Automated data synchronization", "Custom internal tools"], outcome: "Smoother data movement and better efficiency.", metric: "CONNECTED" },
  { kicker: "Growth", subtitle: "Build a consistent marketing system around content and campaigns.", details: ["Social media management", "Meta advertising", "Campaign planning", "Creative campaigns", "Lead generation", "Performance tracking"], outcome: "A consistent digital presence and measurable growth.", metric: "GROWTH" },
  { kicker: "Creative", subtitle: "Create consistent visual content for a professional brand presence.", details: ["Social media creatives", "Brand graphics & visuals", "Content templates", "Post & reel creatives", "Campaign assets", "Visual brand consistency"], outcome: "A recognizable visual identity across digital channels.", metric: "CREATIVE" },
];

const industries = [
  ["Startups", "Digital foundations & scalable systems."],
  ["E-commerce", "Analytics, automation & digital growth."],
  ["Finance", "Reporting, dashboards & data systems."],
  ["Healthcare", "Efficient digital workflows."],
  ["Education", "Platforms, automation & analytics."],
  ["Professional Services", "Systems that reduce repetitive work."],
  ["Real Estate", "Lead workflows & marketing systems."],
  ["Growing Businesses", "Practical systems for efficiency."],
];

function BrandLogo() {
  return (
    <img
      src="/images/innovexify-logo.png"
      alt="Innovexify Tech IT Private Limited"
      className="h-8 w-auto object-contain sm:h-9"
    />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp"),
      service: formData.get("service"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || "Unable to submit your enquiry.");
      setSuccessMessage("Thanks! Your enquiry has been received. We will get back to you soon.");
      form.reset();
    } catch (error) {
      console.error(error);
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-[#0B1F3A]">
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
          <Link href="/" className="shrink-0"><BrandLogo /></Link>
          <nav className="hidden items-center gap-6 lg:flex">
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-blue-600">Services</a>
            <a href="#industries" className="text-sm font-medium text-slate-600 hover:text-blue-600">Industries</a>
            <a href="#why" className="text-sm font-medium text-slate-600 hover:text-blue-600">Why Us</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-blue-600">Contact</a>
          </nav>
          <a href="#contact" className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 lg:inline-flex">Talk to Our Experts →</a>
          <button type="button" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)} className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden">
            <span className="text-lg">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-2 lg:hidden">
            <nav className="grid grid-cols-2 gap-1 pb-2">
              {[['Services','#services'],['Industries','#industries'],['Why Us','#why'],['Contact','#contact']].map(([label, href]) => (
                <a key={label} href={href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">{label}</a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="overflow-hidden bg-[#F5F8FC] pt-14 sm:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-7 px-4 py-9 sm:px-6 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-16">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-blue-600">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> Technology • AI • Data • Growth
            </div>
            <h1 className="max-w-3xl text-[36px] font-semibold leading-[1.04] tracking-[-0.055em] sm:text-5xl lg:text-[60px]">
              Technology that <span className="text-blue-600">transforms businesses.</span>
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Innovexify helps businesses automate operations, turn data into decisions, build digital experiences and use AI where it creates real value.
            </p>
            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">Start a Project →</a>
              <a href="#services" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold hover:border-blue-300 hover:text-blue-600">Explore Services</a>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
              <span>AI Automation</span><span>Power BI</span><span>Web Development</span><span>Digital Growth</span>
            </div>
          </div>

          <div className="hidden sm:block">
            <div className="rounded-2xl border border-slate-200 bg-white p-2.5 shadow-[0_16px_50px_rgba(15,23,42,0.09)]">
              <div className="rounded-xl bg-[#07172B] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[8px] uppercase tracking-[0.16em] text-blue-300">Connected Business System</div>
                    <div className="mt-1 text-base font-semibold text-white">From data to action</div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[7px] font-semibold text-blue-200">ACTIVE</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[['INPUT','Business Data'],['INTELLIGENCE','AI + Analytics'],['OUTPUT','Business Action']].map(([a,b]) => (
                    <div key={a} className="rounded-lg border border-white/10 bg-white/5 p-2.5">
                      <div className="text-[7px] uppercase tracking-[0.1em] text-white/40">{a}</div>
                      <div className="mt-2 text-xs font-semibold text-white">{b}</div>
                      <div className="mt-2 h-1 rounded-full bg-white/10"><div className="h-full w-3/4 rounded-full bg-blue-400" /></div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex h-20 items-end gap-1 rounded-lg border border-white/10 bg-white/[0.04] p-3">
                  {[30,42,35,55,48,63,57,72,65,78].map((height, index) => <div key={index} className="flex-1 rounded-t-sm bg-blue-400/70" style={{height}} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="mb-5">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600">Capabilities / 07</div>
            <h2 className="mt-1 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">What we build <span className="text-slate-400">for growth.</span></h2>
            <p className="mt-1 max-w-xl text-sm leading-6 text-slate-500">Choose a capability to see what Innovexify can deliver.</p>
          </div>

          {/* Mobile: compact cards. Detailed preview is intentionally hidden to reduce scrolling. */}
          <div className="grid grid-cols-2 gap-2 sm:hidden">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="rounded-xl border border-slate-200 bg-white p-3 hover:border-blue-200 hover:bg-blue-50">
                <div className="text-[9px] font-semibold uppercase tracking-[0.12em] text-blue-600">{service.tag}</div>
                <div className="mt-1 text-sm font-semibold text-[#0B1F3A]">{service.title}</div>
                <div className="mt-1 text-xs leading-5 text-slate-500">{service.text}</div>
              </Link>
            ))}
          </div>

          {/* Desktop/tablet: keep the interactive service experience. */}
          <div className="hidden gap-4 sm:grid lg:grid-cols-[360px_1fr]">
            <div className="space-y-1.5">
              {services.map((service, index) => (
                <button key={service.title} type="button" onMouseEnter={() => setActiveService(index)} onFocus={() => setActiveService(index)} onClick={() => setActiveService(index)} className={`group flex w-full items-center gap-3 rounded-lg border p-2.5 text-left transition ${activeService === index ? "border-blue-200 bg-blue-50" : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"}`}>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[9px] font-bold ${activeService === index ? "bg-blue-600 text-white" : "bg-slate-100 text-blue-600"}`}>{service.no}</span>
                  <span className="min-w-0 flex-1">
                    <span className={`block text-[9px] font-semibold uppercase tracking-[0.12em] ${activeService === index ? "text-blue-600" : "text-slate-400"}`}>{service.tag}</span>
                    <span className="block text-sm font-semibold text-[#0B1F3A]">{service.title}</span>
                  </span>
                  <span className="text-sm text-blue-600">→</span>
                </button>
              ))}
            </div>
            <div className="min-h-[390px] rounded-xl border border-slate-200 bg-[#F5F8FC] p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-600">{services[activeService].tag} / {servicePreview[activeService].kicker}</div>
                  <h3 className="mt-1 text-2xl font-semibold tracking-[-0.03em]">{services[activeService].title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">{servicePreview[activeService].subtitle}</p>
                </div>
                <span className="hidden rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-blue-600 md:block">{servicePreview[activeService].metric}</span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2">
                {servicePreview[activeService].details.map((item) => <div key={item} className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-700"><span className="mr-1 text-blue-600">✓</span>{item}</div>)}
              </div>
              <div className="mt-4 rounded-lg bg-[#0B1F3A] px-4 py-3.5">
                <div className="text-[9px] font-semibold uppercase tracking-[0.15em] text-blue-300">Business outcome</div>
                <p className="mt-1.5 text-xs font-medium leading-5 text-white">{servicePreview[activeService].outcome}</p>
              </div>
              <div className="mt-3 flex justify-end">
                <Link href={services[activeService].href} className="rounded-md bg-blue-600 px-3.5 py-2.5 text-xs font-semibold text-white hover:bg-blue-700">Explore Service →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES + WHY: one compact section */}
      <section id="industries" className="border-b border-slate-200 bg-[#F5F8FC]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600">Industries</div>
              <h2 className="mt-1 text-3xl font-semibold tracking-[-0.04em]">Technology for different business realities.</h2>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {industries.map(([title, text]) => (
                  <div key={title} className="rounded-lg border border-slate-200 bg-white p-3">
                    <h3 className="text-xs font-semibold">{title}</h3>
                    <p className="mt-1 text-[10px] leading-4 text-slate-500">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="why" className="rounded-2xl bg-[#0B1F3A] p-5 sm:p-6">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300">Why Innovexify</div>
              <h2 className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-white">Technology should make business simpler.</h2>
              <p className="mt-2 text-sm leading-6 text-white/55">We focus on practical technology that improves operations, creates clarity and supports measurable outcomes.</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {[['Business-first','Start with the problem and desired outcome.'],['Practical AI','Use AI where it genuinely improves workflows.'],['Connected systems','Connect data, apps, automation and experiences.'],['Built to evolve','Design systems that can grow with the business.']].map(([title,text]) => (
                  <div key={title} className="rounded-lg border border-white/10 bg-white/[0.04] p-3.5">
                    <h3 className="text-sm font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-[10px] leading-5 text-white/45">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#07172B]">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300">Start a conversation</div>
              <h2 className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Tell us what you want to build.</h2>
              <p className="mt-2 text-sm leading-6 text-white/50">Share your requirement and our team will review it and get back to you.</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {['AI Automation','Power BI','Web Development','AI Solutions','API Integration','Digital Marketing'].map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-white/60">{item}</span>)}
              </div>
            </div>

            <div className="rounded-xl bg-white p-4 sm:p-5">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Full Name *" id="name" name="name" placeholder="Your full name" required />
                  <Field label="Company *" id="company" name="company" placeholder="Company name" required />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Business Email *" id="email" name="email" type="email" placeholder="you@company.com" required />
                  <Field label="Phone / WhatsApp *" id="whatsapp" name="whatsapp" type="tel" placeholder="+91 98765 43210" required />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-xs font-semibold text-slate-700">Service Required *</label>
                    <select id="service" name="service" required defaultValue="" className="w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
                      <option value="" disabled>Select a service</option>
                      {services.map((service) => <option key={service.title} value={service.title}>{service.title}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="mb-1.5 block text-xs font-semibold text-slate-700">Estimated Budget <span className="font-normal text-slate-400">— Optional</span></label>
                    <select id="budget" name="budget" defaultValue="" className="w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
                      <option value="">Select budget</option>
                      <option value="Under ₹50,000">Under ₹50,000</option>
                      <option value="₹50,000 – ₹1 Lakh">₹50,000 – ₹1 Lakh</option>
                      <option value="₹1 – ₹3 Lakh">₹1 – ₹3 Lakh</option>
                      <option value="₹3 – ₹5 Lakh">₹3 – ₹5 Lakh</option>
                      <option value="₹5 Lakh+">₹5 Lakh+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-slate-700">Project Details *</label>
                  <textarea id="message" name="message" required rows={3} placeholder="Tell us briefly about your requirement..." className="w-full resize-none rounded-md border border-slate-200 px-3 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                </div>
                {successMessage && <div className="rounded-md bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700">{successMessage}</div>}
                {errorMessage && <div className="rounded-md bg-red-50 px-3 py-2 text-xs font-medium text-red-700">{errorMessage}</div>}
                <button type="submit" disabled={isSubmitting} className="w-full rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60">
                  {isSubmitting ? "Sending..." : "Send Project Enquiry →"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#061426] text-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-lg font-semibold">Innovexify</div>
              <p className="mt-1 text-xs text-white/50">Technology • AI • Data • Growth</p>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2.5 text-sm text-white/60">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#industries" className="hover:text-white">Industries</a>
              <a href="#contact" className="hover:text-white">Contact</a>
              <Link href="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="transition hover:text-white">Terms & Conditions</Link>
              <Link href="/cookie-policy" className="transition hover:text-white">Cookie Policy</Link>
            </div>
          </div>
          <div className="mt-5 border-t border-white/10 pt-3 text-xs text-white/40">© 2026 Innovexify Tech IT Private Limited. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}

function Field({ label, id, name, placeholder, type = "text", required = false }: { label: string; id: string; name: string; placeholder: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold text-slate-700">{label}</label>
      <input id={id} name={name} type={type} required={required} placeholder={placeholder} className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
    </div>
  );
}

