"use client";

import { FormEvent, useState } from "react";

import Link from "next/link";

const services = [

  {

    number: "01",

    title: "AI Automation",

    description:

      "Automate repetitive business tasks and make your everyday operations faster and smarter.",

  },

  {

    number: "02",

    title: "Power BI & Data Analytics",

    description:

      "Turn your business data into clear dashboards, reports and actionable insights.",

  },

  {

    number: "03",

    title: "AI Solutions",

    description:

      "Build practical AI solutions that improve customer experience and business workflows.",

  },

  {

    number: "04",

    title: "Software & API Development",

    description:

      "Build custom digital solutions that connect your systems and simplify business processes.",

  },

  {

    number: "05",

    title: "Digital Marketing",

    description:

      "Grow your online presence with social media management, advertising and digital campaigns.",

  },

  {

    number: "06",

    title: "Creative & Content",

    description:

      "Create professional digital content that helps your brand communicate and stand out.",

  },

];

const projects = [

  {

    number: "01",

    category: "Business Intelligence",

    title: "Power BI Business Dashboard",

    description:

      "An interactive business dashboard designed to turn complex data into simple business insights.",

  },

  {

    number: "02",

    category: "Artificial Intelligence",

    title: "AI Document Intelligence",

    description:

      "An intelligent document solution designed to help users find and understand information faster.",

  },

  {

    number: "03",

    category: "Machine Learning",

    title: "Travel Intelligence Platform",

    description:

      "A machine learning platform designed around intelligent travel recommendations and analytics.",

  },

  {

    number: "04",

    category: "Financial Analytics",

    title: "Financial Forecasting System",

    description:

      "A data-driven forecasting solution designed to support financial analysis and decision making.",

  },

  {

    number: "05",

    category: "AI & Career",

    title: "AI Resume Analyzer",

    description:

      "An AI-powered system designed to analyze resumes and provide useful improvement suggestions.",

  },

  {

    number: "06",

    category: "Business Automation",

    title: "Business Automation Workflow",

    description:

      "An automated business workflow designed to reduce repetitive tasks and improve operational efficiency.",

  },

];

const process = [

  {

    number: "01",

    title: "Understand",

    description:

      "We understand your business, goals and the problem you want to solve.",

  },

  {

    number: "02",

    title: "Plan",

    description:

      "We create a clear solution strategy based on your requirements.",

  },

  {

    number: "03",

    title: "Build",

    description:

      "We develop and implement the solution with attention to quality.",

  },

  {

    number: "04",

    title: "Deliver",

    description:

      "We test, refine and deliver a solution ready for your business.",

  },

];

const reviews = [

  {

    initials: "AA",

    name: "Sample Client",

    service: "AI Automation",

    text: "The automation concept is designed to make repetitive business work much easier and more efficient.",

  },

  {

    initials: "BI",

    name: "Sample Client",

    service: "Power BI Dashboard",

    text: "The dashboard concept presents business information in a much clearer and more actionable way.",

  },

  {

    initials: "AI",

    name: "Sample Client",

    service: "AI Solution",

    text: "A practical approach to using AI for improving business workflows and customer experience.",

  },

];

export default function Home() {

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

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify(data),

      });

      const result = await response.json();

      if (!response.ok || !result.success) {

        throw new Error(result.message || "Submission failed.");

      }

      setSuccessMessage(

        "Thank you! Your project enquiry has been received. We will get back to you soon."

      );

      form.reset();

    } catch (error) {

      console.error(error);

      setErrorMessage(

        "Something went wrong while sending your enquiry. Please try again."

      );

    } finally {

      setIsSubmitting(false);

    }

  }

  return (

    <main className="min-h-screen bg-[#050816] text-white">

      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

          <a href="#home" className="flex items-center">

            <img

              src="/images/innovexify-logo.svg"

              alt="Innovexify Tech IT Private Limited"

              className="h-10 w-auto"

            />

          </a>

          <div className="hidden items-center gap-8 md:flex">

            <a

              href="#services"

              className="text-sm text-slate-300 transition hover:text-white"

            >

              Services

            </a>

            <a

              href="#projects"

              className="text-sm text-slate-300 transition hover:text-white"

            >

              Projects

            </a>

            <a

              href="#process"

              className="text-sm text-slate-300 transition hover:text-white"

            >

              Process

            </a>

            <a

              href="#about"

              className="text-sm text-slate-300 transition hover:text-white"

            >

              About

            </a>

            <a

              href="#contact"

              className="text-sm text-slate-300 transition hover:text-white"

            >

              Contact

            </a>

          </div>

          <a

            href="#contact"

            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"

          >

            Start a Project →

          </a>

        </div>

      </nav>

      {/* ================= HERO ================= */}

      <section

        id="home"

        className="relative overflow-hidden border-b border-white/10"

      >

        <div className="absolute left-1/2 top-[-180px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">

          <div className="relative z-10">

            <div className="mb-7 inline-flex rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm text-blue-300">

              AI • Automation • Data • Digital Solutions

            </div>

            <h1 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">

              Build Smarter.

              <br />

              <span className="text-blue-400">Automate Faster.</span>

              <br />

              Grow Better.

            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">

              We help businesses build smarter digital operations through AI,

              automation, analytics and modern technology solutions.

            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <a

                href="#contact"

                className="rounded-xl bg-blue-500 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-blue-400"

              >

                Start a Project →

              </a>

              <a

                href="#services"

                className="rounded-xl border border-white/15 px-7 py-3.5 text-center font-semibold text-slate-200 transition hover:bg-white/5"

              >

                Explore Services

              </a>

            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">

              <div>

                <p className="text-sm font-semibold text-white">AI</p>

                <p className="mt-1 text-xs text-slate-500">

                  Intelligent Solutions

                </p>

              </div>

              <div>

                <p className="text-sm font-semibold text-white">Data</p>

                <p className="mt-1 text-xs text-slate-500">

                  Business Intelligence

                </p>

              </div>

              <div>

                <p className="text-sm font-semibold text-white">

                  Automation

                </p>

                <p className="mt-1 text-xs text-slate-500">

                  Smarter Operations

                </p>

              </div>

            </div>

          </div>

          {/* HERO RIGHT VISUAL */}

          <div className="relative flex min-h-[500px] items-center justify-center lg:min-h-[600px]">

            <div className="absolute h-[390px] w-[390px] rounded-full bg-blue-500/10 blur-3xl" />

            <div className="absolute h-[450px] w-[450px] rounded-full border border-dashed border-blue-400/20" />

            <div className="absolute h-[430px] w-[430px] rounded-full border border-blue-400/10" />

            <div className="absolute h-[350px] w-[350px] rounded-full border border-blue-400/10" />

            <div className="absolute h-[270px] w-[270px] rounded-full border border-blue-400/10" />

            <div className="absolute left-[15%] top-[25%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.8)]" />

            <div className="absolute right-[15%] top-[30%] h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_20px_rgba(96,165,250,0.8)]" />

            <div className="absolute bottom-[23%] left-[22%] h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_18px_rgba(192,132,252,0.8)]" />

            <div className="absolute bottom-[18%] right-[25%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.8)]" />

            <div className="absolute left-[20%] top-[38%] h-px w-[90px] rotate-[25deg] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

            <div className="absolute right-[19%] top-[42%] h-px w-[90px] -rotate-[25deg] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-blue-400/30 bg-[#080d22] shadow-[0_0_80px_rgba(59,130,246,0.18)]">

              <div className="absolute inset-4 rounded-full border border-blue-400/10" />

              <div className="text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">

                  <div className="h-7 w-7 rounded-full border-2 border-blue-400 shadow-[0_0_25px_rgba(96,165,250,0.5)]" />

                </div>

                <p className="mt-5 text-sm font-semibold tracking-[0.25em] text-white">

                  INNOVEXIFY

                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-slate-500">

                  Digital Solutions

                </p>

              </div>

            </div>

            <div className="absolute left-[3%] top-[19%] rounded-xl border border-white/10 bg-[#0a1024]/90 px-4 py-3 shadow-2xl backdrop-blur-xl">

              <div className="flex items-center gap-3">

                <div className="h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />

                <div>

                  <p className="text-xs font-semibold text-white">

                    Smart Business

                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-500">

                    Connected

                  </p>

                </div>

              </div>

            </div>

            <div className="absolute right-[1%] top-[20%] rounded-xl border border-white/10 bg-[#0a1024]/90 px-4 py-3 shadow-2xl backdrop-blur-xl">

              <div className="flex items-center gap-3">

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">

                  ✦

                </div>

                <div>

                  <p className="text-xs font-semibold text-white">

                    Intelligent

                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-500">

                    Solutions

                  </p>

                </div>

              </div>

            </div>

            <div className="absolute bottom-[17%] left-[7%] rounded-xl border border-white/10 bg-[#0a1024]/90 px-4 py-3 shadow-2xl backdrop-blur-xl">

              <div className="flex items-center gap-3">

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-300">

                  ↗

                </div>

                <div>

                  <p className="text-xs font-semibold text-white">

                    Better Growth

                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-500">

                    Digital First

                  </p>

                </div>

              </div>

            </div>

            <div className="absolute bottom-[13%] right-[5%] rounded-xl border border-white/10 bg-[#0a1024]/90 px-4 py-3 shadow-2xl backdrop-blur-xl">

              <div className="flex items-center gap-3">

                <div className="h-8 w-8 rounded-lg bg-blue-500/10 p-2">

                  <div className="h-full w-full rounded border border-blue-400/50" />

                </div>

                <div>

                  <p className="text-xs font-semibold text-white">

                    Automated

                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-500">

                    Workflows

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">

            Our Services

          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">

            Everything you need to build a stronger digital business.

          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">

            From intelligent automation to analytics, software and digital

            growth, we provide services designed around your business goals.

          </p>

        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {

            const serviceLinks: Record<string, string> = {

              "AI Automation": "/services/ai-automation",

              "Power BI & Data Analytics": "/services/power-bi",

              "AI Solutions": "/services/ai-solutions",

              "Software & API Development": "/services/software-api",

              "Digital Marketing": "/services/digital-marketing",

              "Creative & Content": "/services/creative-content",

            };

            return (

              <div

                key={service.number}

                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.045]"

              >

              <div className="flex items-center justify-between">

                <span className="text-sm font-semibold text-blue-400">

                  {service.number}

                </span>

                <span className="text-slate-600 transition group-hover:text-blue-400">

                  ↗

                </span>

              </div>

              <h3 className="mt-7 text-xl font-semibold">

                {service.title}

              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">

                {service.description}

              </p>

              <Link

                href={serviceLinks[service.title]}

                className="mt-6 inline-flex text-sm font-semibold text-blue-400 transition hover:text-blue-300"

              >

                View Service →

              </Link>

            </div>

            );

          })}

        </div>

      </section>

      {/* ================= WHY INNOVEXIFY ================= */}

      <section className="border-y border-white/10 bg-white/[0.015]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">

                Why Innovexify

              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">

                We focus on your business, not just technology.

              </h2>

              <p className="mt-6 max-w-xl leading-7 text-slate-400">

                Our goal is to understand the problem first and then build a

                solution that creates practical value for your business.

              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-[#080c1d] p-6">

                <div className="text-2xl font-bold text-blue-400">01</div>

                <h3 className="mt-5 font-semibold">Business Focused</h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">

                  Solutions designed around your actual business requirements.

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080c1d] p-6">

                <div className="text-2xl font-bold text-blue-400">02</div>

                <h3 className="mt-5 font-semibold">Custom Solutions</h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">

                  We create solutions based on your specific needs.

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080c1d] p-6">

                <div className="text-2xl font-bold text-blue-400">03</div>

                <h3 className="mt-5 font-semibold">Clear Communication</h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">

                  Transparent communication throughout the project.

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080c1d] p-6">

                <div className="text-2xl font-bold text-blue-400">04</div>

                <h3 className="mt-5 font-semibold">Long-Term Support</h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">

                  We aim to build lasting digital partnerships.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">

              Selected Work

            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">

              Projects that demonstrate what we can build.

            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-slate-400">

              A selection of demonstration projects showcasing our approach to

              AI, data, automation and digital solutions.

            </p>

          </div>

          <span className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-500">

            Demonstration Portfolio

          </span>

        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <article

              key={project.number}

              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"

            >

              <div className="flex h-36 items-center justify-center border-b border-white/10 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent">

                <div className="text-center">

                  <div className="text-5xl font-bold text-white/10">

                    {project.number}

                  </div>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-blue-300">

                    {project.category}

                  </p>

                </div>

              </div>

              <div className="p-6">

                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">

                  {project.description}

                </p>

                <a
                  href={
                    project.number === "01"
                      ? "/projects/power-bi-dashboard"
                      : "#contact"
                  }
                  className="mt-6 inline-flex text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  {project.number === "01"
                    ? "View Project →"
                    : "Discuss a Similar Project →"}
                </a>

              </div>

            </article>

          ))}

        </div>

        <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-center text-xs leading-5 text-slate-500">

          Demonstration projects are shown to present our capabilities. Real

          client case studies will be added as projects are completed.

        </div>

      </section>

      {/* ================= PROCESS ================= */}

      <section

        id="process"

        className="border-y border-white/10 bg-white/[0.015]"

      >

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">

              How We Work

            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">

              From idea to execution.

            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-slate-400">

              A straightforward process designed to keep your project clear,

              focused and moving forward.

            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {process.map((item) => (

              <div

                key={item.number}

                className="rounded-2xl border border-white/10 bg-[#080c1d] p-7"

              >

                <span className="text-sm font-semibold text-blue-400">

                  {item.number}

                </span>

                <h3 className="mt-6 text-xl font-semibold">

                  {item.title}

                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">

                  {item.description}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

          <div>

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">

              About Us

            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">

              Building better digital businesses.

            </h2>

            <p className="mt-6 max-w-2xl leading-7 text-slate-400">

              INNOVEXIFY TECH IT PRIVATE LIMITED is an IT services company

              focused on helping businesses adopt modern digital solutions.

            </p>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">

              We work across AI, automation, business intelligence, software

              solutions and digital services to help businesses operate better

              and grow faster.

            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-[#080c1d] p-8">

            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">

              Founder & CEO

            </p>

            <h3 className="mt-4 text-3xl font-bold">

              Ankit Kumar Mishra

            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-400">

              Leading Innovexify with a focus on practical digital solutions

              and helping businesses use technology to solve real problems.

            </p>

            <div className="mt-7 h-px bg-white/10" />

            <p className="mt-5 text-sm text-slate-500">

              INNOVEXIFY TECH IT PRIVATE LIMITED

            </p>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section

        id="contact"

        className="border-t border-white/10 bg-white/[0.015]"

      >

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            {/* LEFT */}

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">

                Start a Project

              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">

                Tell us what you want to build.

              </h2>

              <p className="mt-6 max-w-xl leading-7 text-slate-400">

                Have an idea, business problem or project requirement? Share a

                few details with us and our team can understand what you need.

              </p>

              <div className="mt-10 space-y-4">

                <div className="flex items-start gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300">

                    ✓

                  </div>

                  <div>

                    <h3 className="font-semibold text-white">

                      Understand Your Requirement

                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">

                      We first understand your business goals and project

                      needs.

                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300">

                    ✓

                  </div>

                  <div>

                    <h3 className="font-semibold text-white">

                      Discuss the Right Solution

                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">

                      We discuss the best approach for your requirement.

                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300">

                    ✓

                  </div>

                  <div>

                    <h3 className="font-semibold text-white">

                      Move Towards Execution

                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">

                      Once everything is clear, we can move forward with the

                      project.

                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* FORM */}

            <div className="rounded-3xl border border-white/10 bg-[#080c1d] p-6 sm:p-8">

              <div className="mb-7">

                <h3 className="text-2xl font-semibold">

                  Project Enquiry

                </h3>

                <p className="mt-2 text-sm text-slate-500">

                  Tell us a little about your project.

                </p>

              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* NAME + COMPANY */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label

                      htmlFor="name"

                      className="mb-2 block text-sm font-medium text-slate-300"

                    >

                      Full Name

                    </label>

                    <input

                      id="name"

                      name="name"

                      type="text"

                      placeholder="Your name"

                      required

                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-blue-400/50 focus:bg-white/[0.05]"

                    />

                  </div>

                  <div>

                    <label

                      htmlFor="company"

                      className="mb-2 block text-sm font-medium text-slate-300"

                    >

                      Company Name

                    </label>

                    <input

                      id="company"

                      name="company"

                      type="text"

                      placeholder="Company name"

                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-blue-400/50 focus:bg-white/[0.05]"

                    />

                  </div>

                </div>

                {/* EMAIL + WHATSAPP */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label

                      htmlFor="email"

                      className="mb-2 block text-sm font-medium text-slate-300"

                    >

                      Email Address

                    </label>

                    <input

                      id="email"

                      name="email"

                      type="email"

                      placeholder="you@company.com"

                      required

                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-blue-400/50 focus:bg-white/[0.05]"

                    />

                  </div>

                  <div>

                    <label

                      htmlFor="whatsapp"

                      className="mb-2 block text-sm font-medium text-slate-300"

                    >

                      WhatsApp Number

                    </label>

                    <input

                      id="whatsapp"

                      name="whatsapp"

                      type="tel"

                      placeholder="+91 XXXXX XXXXX"

                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-blue-400/50 focus:bg-white/[0.05]"

                    />

                  </div>

                </div>

                {/* SERVICE + BUDGET */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label

                      htmlFor="service"

                      className="mb-2 block text-sm font-medium text-slate-300"

                    >

                      Service Required

                    </label>

                    <select

                      id="service"

                      name="service"

                      required

                      defaultValue=""

                      className="w-full rounded-xl border border-white/10 bg-[#0b1024] px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-blue-400/50"

                    >

                      <option value="" disabled>

                        Select a service

                      </option>

                      <option value="AI Automation">

                        AI Automation

                      </option>

                      <option value="Power BI & Data Analytics">

                        Power BI & Data Analytics

                      </option>

                      <option value="AI Solutions">

                        AI Solutions

                      </option>

                      <option value="Software & API Development">

                        Software & API Development

                      </option>

                      <option value="Digital Marketing">

                        Digital Marketing

                      </option>

                      <option value="Creative & Content">

                        Creative & Content

                      </option>

                      <option value="Other">Other</option>

                    </select>

                  </div>

                  <div>

                    <label

                      htmlFor="budget"

                      className="mb-2 block text-sm font-medium text-slate-300"

                    >

                      Approximate Budget

                    </label>

                    <select

                      id="budget"

                      name="budget"

                      defaultValue=""

                      className="w-full rounded-xl border border-white/10 bg-[#0b1024] px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-blue-400/50"

                    >

                      <option value="" disabled>

                        Select budget

                      </option>

                      <option value="Under ₹25,000">

                        Under ₹25,000

                      </option>

                      <option value="₹25,000 - ₹50,000">

                        ₹25,000 - ₹50,000

                      </option>

                      <option value="₹50,000 - ₹1,00,000">

                        ₹50,000 - ₹1,00,000

                      </option>

                      <option value="₹1,00,000 - ₹2,50,000">

                        ₹1,00,000 - ₹2,50,000

                      </option>

                      <option value="₹2,50,000+">

                        ₹2,50,000+

                      </option>

                      <option value="Not Sure">

                        Not Sure

                      </option>

                    </select>

                  </div>

                </div>

                {/* PROJECT DETAILS */}

                <div>

                  <label

                    htmlFor="message"

                    className="mb-2 block text-sm font-medium text-slate-300"

                  >

                    Project Details

                  </label>

                  <textarea

                    id="message"

                    name="message"

                    rows={6}

                    required

                    placeholder="Tell us about your project, business requirement or problem you want to solve..."

                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-blue-400/50 focus:bg-white/[0.05]"

                  />

                </div>

                {/* ERROR */}

                {errorMessage && (

                  <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-300">

                    {errorMessage}

                  </div>

                )}

                {/* SUCCESS */}

                {successMessage && (

                  <div className="rounded-xl border border-green-400/20 bg-green-400/5 px-4 py-3 text-sm leading-6 text-green-300">

                    ✓ {successMessage}

                  </div>

                )}

                {/* BUTTON */}

                <button

                  type="submit"

                  disabled={isSubmitting}

                  className="w-full rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"

                >

                  {isSubmitting

                    ? "Sending Enquiry..."

                    : "Send Project Enquiry →"}

                </button>

                <p className="text-center text-xs leading-5 text-slate-600">

                  Your project information will be used only to understand your

                  requirement and communicate with you about the enquiry.

                </p>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* ================= REVIEWS ================= */}

      <section className="border-t border-white/10 bg-white/[0.015]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">

              Client Feedback

            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">

              Built around client expectations.

            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-400">

              Sample feedback is displayed for the initial website launch.

              Verified client testimonials will be added as real projects are

              completed.

            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {reviews.map((review) => (

              <div

                key={review.service}

                className="rounded-2xl border border-white/10 bg-[#080c1d] p-6"

              >

                <div className="flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/10 text-sm font-bold text-blue-300">

                    {review.initials}

                  </div>

                  <span className="rounded-full border border-yellow-400/20 bg-yellow-400/5 px-2.5 py-1 text-xs text-yellow-300">

                    Sample

                  </span>

                </div>

                <div className="mt-5 text-lg tracking-widest text-yellow-400">

                  ★★★★★

                </div>

                <p className="mt-4 text-sm leading-6 text-slate-300">

                  &quot;{review.text}&quot;

                </p>

                <div className="mt-6 border-t border-white/10 pt-5">

                  <p className="font-semibold text-white">{review.name}</p>

                  <p className="mt-1 text-xs text-slate-500">

                    {review.service} • Sample 5.0 / 5

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div>

              <h3 className="text-lg font-semibold">

                INNOVEXIFY TECH IT PRIVATE LIMITED

              </h3>

              <p className="mt-2 text-sm text-slate-500">

                Building smarter digital solutions for modern businesses.

              </p>

            </div>

            <div className="text-left md:text-right">

              <p className="text-sm text-slate-400">

                Founder & CEO — Ankit Kumar Mishra

              </p>

              <a

                href="#contact"

                className="mt-3 inline-block text-sm font-semibold text-blue-400 transition hover:text-blue-300"

              >

                Start a Project →

              </a>

            </div>

          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-600">

            © 2026 INNOVEXIFY TECH IT PRIVATE LIMITED. All rights reserved.

          </div>

        </div>

      </footer>

    </main>

  );

}

