import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { HeroScale } from "@/components/site/HeroScale";
import { cn } from "@/lib/utils";

import swHeroMain from "@/assets/services/software-solution/sw-hero-main-v2.jpg";
import swHeroPanel from "@/assets/services/software-solution/sw-hero-panel-v2.jpg";
import swHeroMobile from "@/assets/services/software-solution/sw-hero-mobile-v2.jpg";
import swCrm from "@/assets/services/software-solution/sw-crm-v2.jpg";
import swCms from "@/assets/services/software-solution/sw-cms-v2.jpg";
import swPortal from "@/assets/services/software-solution/sw-portal-v2.jpg";
import swCustom from "@/assets/services/software-solution/sw-custom-v2.jpg";
import swDashboards from "@/assets/services/software-solution/sw-dashboards-v2.jpg";
import swIntegrations from "@/assets/services/software-solution/sw-integrations-v2.jpg";
import swWorkflowAutomation from "@/assets/services/software-solution/sw-workflow-automation-v2.jpg";
import swModular from "@/assets/services/software-solution/sw-modular-v2.jpg";

/* ================================================================
   FINAL APPROVED CONTENT — do not alter wording
   ================================================================ */

const heroParagraphs = [
  "When off-the-shelf software doesn't fit, we create solutions that do.",
  "Nexen develops custom software and business platforms that help organisations manage operations, customers, information and workflows more effectively.",
];

const serviceAreas = [
  {
    name: "CRM Solutions",
    text: "Centralise customer information, sales activity, communication and business relationships.",
    img: swCrm,
    alt: "CRM dashboard showing customer profiles, sales pipeline and communication activity",
  },
  {
    name: "CMS Platforms",
    text: "Give your teams greater control over content, information and digital experiences.",
    img: swCms,
    alt: "Content management platform with page structure, content editor and media library",
  },
  {
    name: "Business Portals",
    text: "Create secure digital environments for employees, customers, partners or other stakeholders.",
    img: swPortal,
    alt: "Secure business portal with user dashboard, documents, requests and notifications",
  },
  {
    name: "Custom Software",
    text: "Purpose-built applications designed around your specific business requirements.",
    img: swCustom,
    alt: "Purpose-built business application with a custom workflow interface",
  },
  {
    name: "Dashboards & Management Platforms",
    text: "Turn complex information into clear, actionable interfaces.",
    img: swDashboards,
    alt: "Advanced management dashboard with KPIs, charts, tables and business metrics",
  },
  {
    name: "Integrations",
    text: "Connect your existing tools and platforms through APIs and intelligent integrations.",
    img: swIntegrations,
    alt: "Multiple business systems connected through APIs and integration flows",
  },
  {
    name: "Workflow Automation",
    text: "Automate repetitive business processes and workflows to improve efficiency, reduce manual work and keep operations connected.",
    img: swWorkflowAutomation,
    alt: "Workflow automation dashboard showing connected trigger, process and action steps",
  },
];

const whyParagraphs = [
  "Generic software can force businesses to change the way they work.",
  "Custom software allows technology to work around your processes instead.",
  "We focus on creating practical solutions that improve efficiency, reduce friction and give your team better control.",
];

export const Route = createFileRoute("/services/software-solutions")({
  head: () => ({
    meta: [
      { title: "Software Solutions — Nexen Strategy" },
      { name: "description", content: heroParagraphs[1]!.slice(0, 155) },
      {
        property: "og:title",
        content: "Software That Works Around Your Business. | Software Solutions — Nexen Strategy",
      },
      { property: "og:description", content: heroParagraphs[0]! },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://nexen-launchpad-studio.lovable.app/services/software-solutions",
      },
    ],
  }),
  component: SoftwareSolutionsPage,
});

function SoftwareSolutionsPage() {
  const [activeService, setActiveService] = useState(0);
  const active = serviceAreas[activeService] ?? serviceAreas[0]!;

  return (
    <>
      <style>{`
        @keyframes sw-caption{0%{opacity:0;transform:translateY(8px)}100%{opacity:1;transform:translateY(0)}}
        .sw-caption{animation:sw-caption .45s ease-out both}
        @keyframes sw-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        .sw-float{animation:sw-float 9s ease-in-out infinite}
        @keyframes sw-cta-drift{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(3%,-2.5%,0) scale(1.06)}}
        .sw-cta-drift{animation:sw-cta-drift 24s ease-in-out infinite}
        @keyframes sw-cta-grid{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(-72px,-72px,0)}}
        .sw-cta-grid{animation:sw-cta-grid 40s linear infinite}
        @keyframes sw-dash{to{stroke-dashoffset:-1600}}
        .sw-dash{stroke-dasharray:160 900;animation:sw-dash 20s linear infinite}
        .sw-dash2{stroke-dasharray:120 1000;animation:sw-dash 26s linear infinite;animation-delay:-8s}
        @media (prefers-reduced-motion: reduce){.sw-caption,.sw-float,.sw-cta-drift,.sw-cta-grid,.sw-dash,.sw-dash2{animation:none !important}}
      `}</style>

      <Header />
      <main className="bg-white">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden pt-[8.75rem] pb-16 lg:pt-36 lg:pb-24">
          <div aria-hidden className="grid-faint-dark absolute inset-0 opacity-40" />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-[-12%] h-[560px] w-[560px] rounded-full opacity-[0.08] blur-[140px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
              <div className="relative z-10 lg:col-span-6">
                <Reveal>
                  <div className="flex items-center gap-5">
                    <p className="eyebrow text-azure">03 — Software Solutions</p>
                    <span aria-hidden className="h-px w-12 bg-gradient-to-r from-amber to-ember" />
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <h1 className="display mt-7 text-[3rem] leading-[1.02] text-navy sm:text-6xl lg:text-[4.4rem]">
                    Software
                    <br />
                    That Works Around Your Business.
                  </h1>
                </Reveal>
                <Reveal delay={160}>
                  <div className="mt-8 space-y-5">
                    {heroParagraphs.map((p) => (
                      <p key={p} className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                        {p}
                      </p>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={230}>
                  <div className="mt-10 flex items-center gap-8">
                    <Link to="/contact" className="btn-primary group">
                      Discuss Your Project
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <span aria-hidden className="hidden h-px w-16 bg-navy/15 sm:block" />
                  </div>
                </Reveal>
              </div>

              {/* ---- One platform → multiple business functions ---- */}
              <Reveal delay={180} className="lg:col-span-6">
                <HeroScale designWidth={600} className="relative">
                  <div className="relative flex items-center justify-center px-10 py-10">
                    <div className="relative w-[88%]">
                      <span
                        aria-hidden
                        className="absolute -top-6 -right-6 block h-full w-full rounded-2xl border border-navy/12"
                      />
                      <div className="relative overflow-hidden rounded-2xl bg-secondary/40 shadow-[0_50px_90px_-40px_rgba(1,12,98,0.4)]">
                        <img
                          src={swHeroMain}
                          alt="Central business platform dashboard with analytics, metrics and data tables"
                          width={1280}
                          height={1024}
                          className="aspect-[5/4] w-full object-cover"
                        />
                      </div>
                      <div className="sw-float absolute -bottom-10 -left-8 block w-[26%] overflow-hidden rounded-[1.1rem] border-[5px] border-white shadow-[0_36px_70px_-28px_rgba(1,12,98,0.5)]">
                        <img
                          src={swHeroMobile}
                          alt="Mobile business application showing customer records and metrics"
                          loading="lazy"
                          width={720}
                          height={1280}
                          className="aspect-[9/16] w-full object-cover object-top"
                        />
                      </div>
                      <div className="absolute -right-6 top-[12%] block w-[42%] overflow-hidden rounded-xl border-[5px] border-white shadow-[0_34px_66px_-28px_rgba(1,12,98,0.45)]">
                        <img
                          src={swHeroPanel}
                          alt="Connected workflow module showing process status and performance"
                          loading="lazy"
                          width={1024}
                          height={768}
                          className="aspect-[4/3] w-full object-cover"
                        />
                      </div>
                      <span
                        aria-hidden
                        className="absolute -bottom-5 right-14 block h-px w-24 bg-gradient-to-r from-amber to-ember"
                      />
                      <span
                        aria-hidden
                        className="absolute -left-4 top-8 block h-16 w-px bg-gradient-to-b from-azure to-transparent"
                      />
                    </div>
                  </div>
                </HeroScale>
              </Reveal>
            </div>

            {/* module strip — one platform, multiple business functions */}
            <Reveal delay={260}>
              <ul
                aria-hidden
                className="mt-16 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground lg:mt-20"
              >
                {[
                  "CRM",
                  "Operations",
                  "Customers",
                  "Analytics",
                  "Documents",
                  "Workflow",
                  "Integrations",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gradient-to-r from-amber to-ember" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ============ WHAT WE BUILD ============ */}
        <section className="relative overflow-hidden border-t border-border bg-secondary/30">
          <div aria-hidden className="grid-faint-dark absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
            <Reveal className="lg:hidden">
              <p className="eyebrow text-azure">Capabilities</p>
              <h2 className="display mt-5 text-4xl text-navy">What We Build</h2>
            </Reveal>

            {/* ---- Desktop ---- */}
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <p className="eyebrow text-azure">Capabilities</p>
                <h2 className="display mt-5 text-4xl text-navy lg:text-5xl">What We Build</h2>
                <span
                  aria-hidden
                  className="mt-9 block h-px w-24 bg-gradient-to-r from-amber to-ember"
                />
                <ul className="mt-12">
                  {serviceAreas.map((s, i) => {
                    const on = i === activeService;
                    return (
                      <li key={s.name}>
                        <button
                          type="button"
                          onMouseEnter={() => setActiveService(i)}
                          onFocus={() => setActiveService(i)}
                          onClick={() => setActiveService(i)}
                          aria-current={on}
                          className="group relative flex w-full items-center gap-5 border-b border-border py-5 text-left outline-none transition-colors duration-300"
                        >
                          <span
                            className={cn(
                              "flex h-8 w-8 shrink-0 items-center justify-center font-mono text-[13px] font-medium tracking-[0.02em] text-transparent transition-all duration-300",
                              on
                                ? "[-webkit-text-stroke:1px_#ff483f]"
                                : "[-webkit-text-stroke:1px_rgba(1,12,98,0.25)] group-hover:[-webkit-text-stroke:1px_rgba(1,12,98,0.55)]",
                            )}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={cn(
                              "display text-[1.4rem] leading-tight tracking-tight transition-all duration-300 ease-out xl:text-[1.55rem]",
                              on ? "text-navy" : "text-navy/40 group-hover:text-navy/75",
                            )}
                          >
                            {s.name}
                          </span>
                          <ArrowRight
                            aria-hidden
                            className={cn(
                              "ml-auto h-4 w-4 shrink-0 text-ember transition-all duration-300",
                              on
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-50",
                            )}
                          />
                          <span
                            aria-hidden
                            className={cn(
                              "absolute left-0 top-1/2 h-8 w-[2px] -translate-y-1/2 bg-gradient-to-b from-amber to-ember transition-all duration-300",
                              on ? "opacity-100" : "opacity-0 group-hover:opacity-60",
                            )}
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>

              {/* Right: label → title → description → visual */}
              <Reveal delay={120} className="lg:col-span-7">
                <div key={activeService} className="sw-caption">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ember">
                    {String(activeService + 1).padStart(2, "0")} — Capability
                  </p>
                  <h3 className="display mt-4 text-3xl text-navy xl:text-[2.4rem]">
                    {active.name}
                  </h3>
                  <p className="mt-6 max-w-2xl text-[1.15rem] leading-[1.7] text-navy/80">
                    {active.text}
                  </p>
                  <div className="relative mt-9">
                    <span
                      aria-hidden
                      className="absolute -top-4 -right-4 hidden h-full w-full rounded-2xl border border-navy/10 lg:block"
                    />
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-[0_50px_90px_-45px_rgba(1,12,98,0.4)]">
                      {serviceAreas.map((s, i) => (
                        <img
                          key={s.name}
                          src={s.img}
                          alt={s.alt}
                          loading="lazy"
                          width={1280}
                          height={960}
                          aria-hidden={i !== activeService}
                          className={cn(
                            "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out",
                            i === activeService
                              ? "scale-100 opacity-100"
                              : "scale-[1.03] opacity-0",
                          )}
                        />
                      ))}
                      <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-navy/55 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.18em] text-white backdrop-blur-sm">
                        {String(activeService + 1).padStart(2, "0")} /{" "}
                        {String(serviceAreas.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ---- Mobile / tablet accordion ---- */}
            <div className="mt-10 lg:hidden">
              <ul className="border-t border-border">
                {serviceAreas.map((s, i) => {
                  const on = i === activeService;
                  return (
                    <li key={s.name} className="border-b border-border">
                      <button
                        type="button"
                        onClick={() => setActiveService(i)}
                        aria-expanded={on}
                        className="flex w-full items-center gap-4 py-4 text-left"
                      >
                        <span
                          className={cn(
                            "flex h-7 w-7 shrink-0 items-center justify-center font-mono text-[12px] font-medium text-transparent transition-all duration-300",
                            on
                              ? "[-webkit-text-stroke:1px_#ff483f]"
                              : "[-webkit-text-stroke:1px_rgba(1,12,98,0.25)]",
                          )}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "display min-w-0 text-lg leading-snug tracking-tight transition-colors duration-300 sm:text-xl",
                            on ? "text-navy" : "text-navy/55",
                          )}
                        >
                          {s.name}
                        </span>
                        <ArrowRight
                          aria-hidden
                          className={cn(
                            "ml-auto h-4 w-4 shrink-0 transition-all duration-300",
                            on ? "rotate-90 text-ember" : "text-navy/30",
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "grid transition-all duration-500 ease-out",
                          on ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <div className="overflow-hidden">
                          <p className="text-base leading-relaxed text-navy/75 sm:text-lg">
                            {s.text}
                          </p>
                          <div className="mt-5 overflow-hidden rounded-xl bg-white shadow-[0_30px_60px_-30px_rgba(1,12,98,0.35)]">
                            <img
                              src={s.img}
                              alt={s.alt}
                              loading="lazy"
                              width={1280}
                              height={960}
                              className="aspect-[4/3] w-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* ============ WHY CUSTOM SOFTWARE? ============ */}
        <section className="relative overflow-hidden border-t border-border bg-white">
          <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="order-2 lg:order-1 lg:col-span-7">
                <div className="relative">
                  <span
                    aria-hidden
                    className="absolute -bottom-5 -left-5 hidden h-full w-full rounded-2xl border border-navy/12 lg:block"
                  />
                  <div className="relative overflow-hidden rounded-2xl bg-secondary/30 shadow-[0_50px_90px_-45px_rgba(1,12,98,0.4)]">
                    <img
                      src={swModular}
                      alt="Separate business modules assembling into one unified custom business platform"
                      loading="lazy"
                      width={1280}
                      height={1024}
                      className="aspect-[5/4] w-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={120} className="order-1 lg:order-2 lg:col-span-5">
                <p className="eyebrow text-azure">Why custom software?</p>
                <h2 className="display mt-5 text-[2rem] leading-[1.1] text-navy sm:text-4xl lg:text-[2.7rem]">
                  Your Business Isn't Standard. Your Software Doesn't Have to Be.
                </h2>
                <span
                  aria-hidden
                  className="mt-8 block h-px w-24 bg-gradient-to-r from-amber to-ember"
                />
                <div className="mt-9 space-y-6">
                  {whyParagraphs.map((p) => (
                    <p key={p} className="max-w-xl text-lg leading-[1.75] text-navy/75">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ CLOSING CTA ============ */}
        <section className="relative bg-white pb-16 lg:pb-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="relative isolate overflow-hidden rounded-[24px] bg-navy px-7 py-14 sm:px-12 lg:px-20 lg:py-20">
              <div
                aria-hidden
                className="sw-cta-drift pointer-events-none absolute inset-[-20%]"
                style={{
                  background:
                    "radial-gradient(40% 60% at 15% 25%, rgba(74,115,255,0.4) 0%, transparent 65%), radial-gradient(40% 60% at 85% 75%, rgba(58,241,255,0.25) 0%, transparent 70%)",
                }}
              />
              <div
                aria-hidden
                className="grid-faint sw-cta-grid pointer-events-none absolute inset-[-80px] opacity-70"
              />
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 1200 340"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
              >
                <path
                  className="sw-dash"
                  d="M-60 260 C 260 220, 480 90, 800 110 S 1140 60, 1280 40"
                  stroke="#3AF1FF"
                  strokeOpacity="0.35"
                  strokeWidth="1"
                />
                <path
                  className="sw-dash2"
                  d="M-60 90 C 300 130, 520 280, 880 250 S 1180 190, 1280 170"
                  stroke="#4A73FF"
                  strokeOpacity="0.4"
                  strokeWidth="1"
                />
              </svg>

              <div className="relative max-w-3xl">
                <Reveal>
                  <h2
                    className="display text-white"
                    style={{ fontSize: "clamp(2rem, 4.2vw, 3.4rem)" }}
                  >
                    Software That Works Around Your Business.
                  </h2>
                </Reveal>
                <Reveal delay={90}>
                  <p className="mt-7 text-lg leading-relaxed text-white/75">{heroParagraphs[0]}</p>
                </Reveal>
                <Reveal delay={150}>
                  <div className="mt-10">
                    <Link to="/contact" className="btn-primary group">
                      Discuss Your Project
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
