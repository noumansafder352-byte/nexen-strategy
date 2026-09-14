import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Compass,
  MousePointerClick,
  PenTool,
  Code2,
  Bug,
  Rocket,
  Gauge,
  type LucideIcon,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { HeroScale } from "@/components/site/HeroScale";
import { cn } from "@/lib/utils";

import wadHeroMain from "@/assets/services/web-app-development/wad-hero-main.jpg";
import wadHeroMobile from "@/assets/services/web-app-development/wad-hero-mobile.jpg";
import wadHeroPanel from "@/assets/services/web-app-development/wad-hero-panel.jpg";
import wadOverview from "@/assets/services/web-app-development/wad-overview.jpg";
import wadWebsite from "@/assets/services/web-app-development/wad-website.jpg";
import wadWebapp from "@/assets/services/web-app-development/wad-webapp.jpg";
import wadMobile from "@/assets/services/web-app-development/wad-mobile.jpg";
import wadWordpress from "@/assets/services/web-app-development/wad-wordpress.jpg";
import wadShopify from "@/assets/services/web-app-development/wad-shopify.jpg";
import wadEcommerce from "@/assets/services/web-app-development/wad-ecommerce.jpg";
import wadAi from "@/assets/services/web-app-development/wad-ai.jpg";
import wadApi from "@/assets/services/web-app-development/wad-api.jpg";
import wadModular from "@/assets/services/web-app-development/wad-modular.jpg";

/* ================================================================
   FINAL APPROVED CONTENT — do not alter wording
   ================================================================ */

const heroParagraph =
  "From high-impact websites to custom applications and e-commerce platforms, we create digital experiences designed around your users and business objectives.";

const overviewParagraphs = [
  "Your website or application is often the first interaction a customer has with your business.",
  "We combine thoughtful UX, modern development and scalable technology to create digital experiences that are easy to use, fast to load and built to support your business.",
];

const serviceAreas = [
  {
    name: "Website Development",
    text: "Corporate websites, service websites, landing pages and bespoke digital experiences.",
    img: wadWebsite,
    alt: "Responsive corporate website design shown across desktop, tablet and mobile browsers",
  },
  {
    name: "Web Applications",
    text: "Custom web applications designed around specific business processes and user requirements.",
    img: wadWebapp,
    alt: "Web application dashboard interface with analytics, tables and side navigation",
  },
  {
    name: "Mobile Applications",
    text: "Intuitive mobile experiences designed for iOS, Android and cross-platform environments.",
    img: wadMobile,
    alt: "Three mobile application screens showing a modern iOS and Android product interface",
  },
  {
    name: "AI Development",
    text: "Build and deploy AI-powered websites and applications using modern AI-assisted development and vibe coding workflows, turning ideas into functional digital products faster.",
    img: wadAi,
    alt: "AI-assisted development workflow showing prompt interface, generated code and a live website or application preview",
  },
  {
    name: "API & System Integration",
    text: "Connect websites, applications and business systems through reliable APIs and seamless integrations.",
    img: wadApi,
    alt: "API integration dashboard showing connected business systems and live data flows",
  },
  {
    name: "WordPress Development",
    text: "Professional WordPress websites built for flexibility, performance and easy content management.",
    img: wadWordpress,
    alt: "Content management system page editor interface with reusable content blocks",
  },
  {
    name: "Shopify Development",
    text: "Conversion-focused Shopify stores designed around your products, customers and commercial goals.",
    img: wadShopify,
    alt: "Premium e-commerce storefront product page interface in a browser window",
  },
  {
    name: "E-commerce Development",
    text: "Scalable online stores that make it easier for customers to discover, evaluate and purchase your products.",
    img: wadEcommerce,
    alt: "E-commerce journey showing product listing, cart and checkout interfaces on desktop and mobile",
  },
];

const pipeline: { name: string; icon: LucideIcon }[] = [
  { name: "Strategy", icon: Compass },
  { name: "UX", icon: MousePointerClick },
  { name: "Design", icon: PenTool },
  { name: "Development", icon: Code2 },
  { name: "Testing", icon: Bug },
  { name: "Launch", icon: Rocket },
  { name: "Optimisation", icon: Gauge },
];

const closingParagraphs = [
  "We don't start with a template.",
  "We start with your goals, audience and requirements, then select the right approach to deliver the best outcome.",
];

export const Route = createFileRoute("/services/web-and-app-development")({
  head: () => ({
    meta: [
      { title: "Web & App Development — Nexen Strategy" },
      { name: "description", content: heroParagraph.slice(0, 155) },
      {
        property: "og:title",
        content: "Digital Experiences Built to Perform. | Web & App Development — Nexen Strategy",
      },
      { property: "og:description", content: heroParagraph.slice(0, 155) },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WebAppDevelopmentPage,
});

function WebAppDevelopmentPage() {
  const [activeService, setActiveService] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [stepAutoPlay, setStepAutoPlay] = useState(true);
  const stepTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stepAutoPlay) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActiveStep((v) => (v + 1) % pipeline.length), 2400);
    return () => window.clearInterval(id);
  }, [stepAutoPlay]);

  const selectStep = (i: number) => {
    setStepAutoPlay(false);
    setActiveStep(i);
  };

  const scrollStepTrack = (i: number) => {
    selectStep(i);
    const el = stepTrackRef.current;
    const child = el?.children[i] as HTMLElement | undefined;
    if (el && child) {
      el.scrollTo({ left: child.offsetLeft - el.clientWidth * 0.12, behavior: "smooth" });
    }
  };

  const onStepTrackScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const child = el.children[0] as HTMLElement | undefined;
    if (!child) return;
    const step = child.offsetWidth + 16;
    const idx = Math.min(pipeline.length - 1, Math.max(0, Math.round(el.scrollLeft / step)));
    if (idx !== activeStep) {
      setStepAutoPlay(false);
      setActiveStep(idx);
    }
  };

  const active = serviceAreas[activeService] ?? serviceAreas[0]!;

  return (
    <>
      <style>{`
        @keyframes wad-caption{0%{opacity:0;transform:translateY(6px)}100%{opacity:1;transform:translateY(0)}}
        .wad-caption{animation:wad-caption .45s ease-out both}
        @keyframes wad-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        .wad-float{animation:wad-float 9s ease-in-out infinite}
        @keyframes wad-cta-drift{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(3%,-2.5%,0) scale(1.06)}}
        .wad-cta-drift{animation:wad-cta-drift 24s ease-in-out infinite}
        @keyframes wad-cta-grid{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(-72px,-72px,0)}}
        .wad-cta-grid{animation:wad-cta-grid 40s linear infinite}
        @keyframes wad-dash{to{stroke-dashoffset:-1600}}
        .wad-dash{stroke-dasharray:160 900;animation:wad-dash 20s linear infinite}
        .wad-dash2{stroke-dasharray:120 1000;animation:wad-dash 26s linear infinite;animation-delay:-8s}
        @media (prefers-reduced-motion: reduce){.wad-caption,.wad-float,.wad-cta-drift,.wad-cta-grid,.wad-dash,.wad-dash2{animation:none !important}}
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
              {/* ---- Copy ---- */}
              <div className="relative z-10 lg:col-span-6">
                <Reveal>
                  <div className="flex items-center gap-5">
                    <p className="eyebrow text-azure">02 — Web &amp; App Development</p>
                    <span aria-hidden className="h-px w-12 bg-gradient-to-r from-amber to-ember" />
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <h1 className="display mt-7 text-[3rem] leading-[1.02] text-navy sm:text-6xl lg:text-[4.6rem]">
                    Digital
                    <br />
                    Experiences Built to Perform.
                  </h1>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
                    {heroParagraph}
                  </p>
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

              {/* ---- Digital product ecosystem showcase ---- */}
              <Reveal delay={180} className="lg:col-span-6">
                <HeroScale designWidth={620} className="relative">
                  <div className="relative mx-auto w-full">
                    {/* atmospheric depth */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute left-1/2 top-1/2 block h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] blur-[130px]"
                      style={{ background: "radial-gradient(circle, #010C62 0%, transparent 70%)" }}
                    />
                    {/* dotted technical connectors + labels (desktop) */}
                    <svg
                      aria-hidden
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      className="pointer-events-none absolute inset-0 block h-full w-full"
                    >
                      <path
                        d="M56 8 L66 8 L66 15"
                        fill="none"
                        stroke="#010C62"
                        strokeOpacity="0.35"
                        strokeWidth="0.3"
                        strokeDasharray="2 2"
                        vectorEffect="non-scaling-stroke"
                      />
                      <path
                        d="M96 62 L92 62 L92 74"
                        fill="none"
                        stroke="#010C62"
                        strokeOpacity="0.3"
                        strokeWidth="0.3"
                        strokeDasharray="2 2"
                        vectorEffect="non-scaling-stroke"
                      />
                      <path
                        d="M4 88 L14 88 L14 80"
                        fill="none"
                        stroke="#010C62"
                        strokeOpacity="0.3"
                        strokeWidth="0.3"
                        strokeDasharray="2 2"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>

                    <div className="block pb-[14%] pl-[6%] pr-[6%] pt-[14%]">
                      {/* 01 — main web experience */}
                      <figure
                        className="relative ml-auto w-[86%]"
                        style={{ perspective: "1600px" }}
                      >
                        <div
                          className="overflow-hidden rounded-2xl border border-navy/[0.08] bg-white shadow-[0_46px_90px_-46px_rgba(1,12,98,0.4)]"
                          style={{ transform: "rotateY(-7deg) rotateX(2deg) rotate(-1.5deg)" }}
                        >
                          <div className="flex h-7 items-center gap-1.5 border-b border-navy/[0.06] bg-white px-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-ember/50" />
                            <span className="h-1.5 w-1.5 rounded-full bg-amber/60" />
                            <span className="h-1.5 w-1.5 rounded-full bg-navy/15" />
                            <span className="ml-3 h-2 w-24 rounded-full bg-navy/[0.05]" />
                          </div>
                          <img
                            src={wadHeroMain}
                            alt="Premium corporate website interface displayed in a browser window"
                            width={1280}
                            height={1024}
                            className="aspect-[5/4] w-full object-cover"
                          />
                        </div>
                      </figure>

                      {/* 02 — application dashboard, upper-right overlap */}
                      <figure className="absolute right-0 top-[2%] z-20 w-[46%]">
                        <div className="overflow-hidden rounded-xl border border-navy/[0.08] bg-white shadow-[0_28px_60px_-30px_rgba(1,12,98,0.35)]">
                          <img
                            src={wadHeroPanel}
                            alt="Web application analytics dashboard panel"
                            loading="lazy"
                            width={1024}
                            height={768}
                            className="block aspect-[4/3] w-full object-cover"
                          />
                        </div>
                      </figure>

                      {/* 03 — mobile app, lower-left overlap */}
                      <figure className="wad-float absolute bottom-[8%] left-0 z-20 w-[22%]">
                        <div className="overflow-hidden rounded-[1.1rem] border border-navy/15 bg-navy shadow-[0_28px_58px_-26px_rgba(1,12,98,0.45)]">
                          <img
                            src={wadHeroMobile}
                            alt="Mobile application interface screen"
                            loading="lazy"
                            width={720}
                            height={1280}
                            className="block aspect-[9/18] w-full rounded-[1rem] object-cover object-top"
                          />
                        </div>
                      </figure>
                    </div>

                    {/* subtle markers */}
                    {/* <span
                    aria-hidden
                    className="absolute left-[40%] top-[6%] hidden text-[0.58rem] font-medium uppercase tracking-[0.26em] text-navy/40 sm:block"
                  >
                    02 — App
                  </span>
                  <span
                    aria-hidden
                    className="absolute right-0 top-[58%] hidden text-[0.58rem] font-medium uppercase tracking-[0.26em] text-navy/40 sm:block"
                  >
                    01 — Web
                  </span>
                  <span
                    aria-hidden
                    className="absolute bottom-[8%] left-0 hidden text-[0.58rem] font-medium uppercase tracking-[0.26em] text-navy/40 sm:block"
                  >
                    03 — Mobile
                  </span> */}
                    <span
                      aria-hidden
                      className="absolute right-[3%] top-[46%] block h-1.5 w-1.5 rounded-full bg-amber"
                    />
                  </div>
                </HeroScale>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ OVERVIEW ============ */}
        <section className="relative overflow-hidden border-t border-border bg-secondary/35">
          <div aria-hidden className="grid-faint-dark absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <p className="eyebrow text-azure">Overview</p>
                <h2 className="display mt-5 text-[2.1rem] leading-[1.1] text-navy sm:text-4xl lg:text-[3rem]">
                  More Than Just a Website.
                </h2>
                <span
                  aria-hidden
                  className="mt-8 block h-px w-24 bg-gradient-to-r from-amber to-ember"
                />
                <div className="mt-9 space-y-6">
                  {overviewParagraphs.map((p) => (
                    <p key={p} className="max-w-xl text-lg leading-[1.75] text-navy/75">
                      {p}
                    </p>
                  ))}
                </div>
                <ul
                  aria-hidden
                  className="mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {["Desktop", "Tablet", "Mobile"].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-gradient-to-r from-amber to-ember" />
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={140} className="lg:col-span-7">
                <div className="relative">
                  <span
                    aria-hidden
                    className="absolute -bottom-5 -left-5 hidden h-full w-full rounded-2xl border border-navy/12 lg:block"
                  />
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_50px_90px_-45px_rgba(1,12,98,0.4)]">
                    <img
                      src={wadOverview}
                      alt="One digital experience shown responsively across desktop, tablet and mobile"
                      loading="lazy"
                      width={1408}
                      height={1056}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ SERVICES — image-led development showcase ============ */}
        <section className="relative overflow-hidden border-t border-border bg-white">
          <div aria-hidden className="grid-faint-dark absolute inset-0 opacity-[0.03]" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
            <Reveal className="lg:hidden">
              <p className="eyebrow text-azure">Services</p>
              <h2 className="display mt-5 text-4xl text-navy">What We Build</h2>
            </Reveal>

            {/* ---- Desktop ---- */}
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <p className="eyebrow text-azure">Services</p>
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
                              "display text-[1.55rem] leading-none tracking-tight transition-all duration-300 ease-out",
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

              {/* Right: connected preview — title → description → visual */}
              <Reveal delay={120} className="lg:col-span-7">
                <div key={activeService} className="wad-caption">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ember">
                    {String(activeService + 1).padStart(2, "0")} — Capability
                  </p>
                  <h3 className="display mt-4 text-3xl text-navy xl:text-[2.5rem]">
                    {active.name}
                  </h3>
                  <p className="mt-6 max-w-2xl text-[1.2rem] leading-[1.7] text-navy/80">
                    {active.text}
                  </p>
                  <div className="relative mt-9">
                    <span
                      aria-hidden
                      className="absolute -top-4 -right-4 hidden h-full w-full rounded-2xl border border-navy/10 lg:block"
                    />
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-secondary/40 shadow-[0_50px_90px_-45px_rgba(1,12,98,0.4)]">
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
                              : "scale-[1.04] opacity-0",
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
                            "flex h-7 w-7 items-center justify-center font-mono text-[12px] font-medium text-transparent transition-all duration-300",
                            on
                              ? "[-webkit-text-stroke:1px_#ff483f]"
                              : "[-webkit-text-stroke:1px_rgba(1,12,98,0.25)]",
                          )}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "display text-xl tracking-tight transition-colors duration-300",
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
                          <p className="text-lg leading-relaxed text-navy/75">{s.text}</p>
                          <div className="mt-5 overflow-hidden rounded-xl shadow-[0_30px_60px_-30px_rgba(1,12,98,0.35)]">
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

        {/* ============ OUR APPROACH — development pipeline ============ */}
        <section className="relative overflow-hidden border-t border-border bg-secondary/40">
          <div aria-hidden className="grid-faint-dark absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-24">
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow text-azure">Our approach</p>
                <h2 className="display mt-5 text-[2rem] text-navy sm:text-4xl lg:text-[2.75rem]">
                  Our Approach
                </h2>
              </div>
              <p
                aria-hidden
                className="hidden items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground xl:flex"
              >
                <span className="h-px w-10 bg-gradient-to-r from-amber to-ember" />
                Strategy → UX → Design → Development → Testing → Launch → Optimisation
              </p>
            </Reveal>

            {/* Desktop / tablet pipeline */}
            <div className="relative mt-14 hidden md:block">
              <div aria-hidden className="absolute left-[7%] right-[7%] top-7 h-px bg-navy/10" />
              <div
                aria-hidden
                className="absolute left-[7%] top-7 h-px bg-gradient-to-r from-amber to-ember transition-[width] duration-700 ease-out"
                style={{ width: `${(activeStep / (pipeline.length - 1)) * 86}%` }}
              />
              <ol className="relative grid grid-cols-7">
                {pipeline.map((s, i) => {
                  const on = i <= activeStep;
                  const current = i === activeStep;
                  const Icon = s.icon;
                  return (
                    <Reveal key={s.name} delay={i * 70} as="li">
                      <div
                        onMouseEnter={() => selectStep(i)}
                        onFocus={() => selectStep(i)}
                        tabIndex={0}
                        className="group flex flex-col items-center px-2 text-center outline-none"
                      >
                        <span className="flex h-14 items-center">
                          <span
                            aria-hidden
                            className={cn(
                              "block rounded-full border-2 transition-all duration-500",
                              current
                                ? "h-3.5 w-3.5 border-ember bg-ember shadow-[0_0_0_7px_rgba(255,72,63,0.14)]"
                                : on
                                  ? "h-3 w-3 border-navy bg-navy"
                                  : "h-3 w-3 border-navy/20 bg-white group-hover:border-navy/40",
                            )}
                          />
                        </span>
                        <span
                          className={cn(
                            "font-mono text-[11px] tracking-[0.2em] transition-colors duration-500",
                            current ? "text-ember" : "text-muted-foreground",
                          )}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "relative mt-4 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500",
                            current
                              ? "-translate-y-1 border-navy bg-navy text-white shadow-[0_20px_44px_-18px_rgba(1,12,98,0.55)]"
                              : "border-navy/10 bg-white text-navy/45 group-hover:border-navy/25 group-hover:text-navy",
                          )}
                        >
                          <Icon className="h-5 w-5" strokeWidth={1.5} />
                          <span
                            aria-hidden
                            className={cn(
                              "absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-amber to-ember transition-all duration-500",
                              current ? "scale-100 opacity-100" : "scale-50 opacity-0",
                            )}
                          />
                        </span>
                        <h3
                          className={cn(
                            "mt-5 text-[15px] font-semibold tracking-tight transition-colors duration-500",
                            current ? "text-navy" : "text-navy/40",
                          )}
                        >
                          {s.name}
                        </h3>
                      </div>
                    </Reveal>
                  );
                })}
              </ol>
            </div>

            {/* Mobile carousel */}
            <div className="mt-12 md:hidden">
              <div className="mb-6 flex items-center">
                {pipeline.map((s, i) => (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => scrollStepTrack(i)}
                    aria-label={`Go to step ${i + 1}: ${s.name}`}
                    className="flex items-center"
                  >
                    <span
                      className={cn(
                        "flex h-7 w-7 items-center justify-center rounded-full border font-mono text-[10px] transition-all duration-300",
                        i === activeStep
                          ? "border-ember bg-ember text-white"
                          : i < activeStep
                            ? "border-navy bg-navy text-white"
                            : "border-navy/15 bg-white text-muted-foreground",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < pipeline.length - 1 && (
                      <span
                        aria-hidden
                        className={cn(
                          "h-px w-3 transition-colors duration-300",
                          i < activeStep ? "bg-ember" : "bg-navy/15",
                        )}
                      />
                    )}
                  </button>
                ))}
              </div>
              <div
                ref={stepTrackRef}
                onScroll={onStepTrackScroll}
                className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {pipeline.map((s, i) => {
                  const current = i === activeStep;
                  const Icon = s.icon;
                  return (
                    <article
                      key={s.name}
                      className={cn(
                        "w-[62%] shrink-0 snap-center rounded-2xl border bg-white p-6 transition-all duration-500",
                        current
                          ? "border-navy/20 shadow-[0_24px_50px_-30px_rgba(1,12,98,0.35)]"
                          : "border-navy/10",
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={cn(
                            "font-mono text-xs tracking-[0.2em]",
                            current ? "text-ember" : "text-muted-foreground",
                          )}
                        >
                          {String(i + 1).padStart(2, "0")} / 07
                        </span>
                        <span
                          className={cn(
                            "relative flex h-11 w-11 items-center justify-center rounded-xl border transition-colors duration-300",
                            current
                              ? "border-navy bg-navy text-white"
                              : "border-navy/10 text-navy/50",
                          )}
                        >
                          <Icon className="h-5 w-5" strokeWidth={1.5} />
                        </span>
                      </div>
                      <h3 className="mt-5 text-lg font-semibold tracking-tight text-navy">
                        {s.name}
                      </h3>
                    </article>
                  );
                })}
              </div>
              <div aria-hidden className="mt-5 flex gap-1.5">
                {pipeline.map((s, i) => (
                  <span
                    key={s.name}
                    className={cn(
                      "h-[3px] flex-1 rounded-full transition-colors duration-300",
                      i <= activeStep ? "bg-gradient-to-r from-amber to-ember" : "bg-navy/10",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ BUILT AROUND YOUR BUSINESS ============ */}
        <section className="relative overflow-hidden border-t border-border bg-white">
          <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="order-2 lg:order-1 lg:col-span-7">
                <div className="relative">
                  <span
                    aria-hidden
                    className="absolute -bottom-5 -right-5 hidden h-full w-full rounded-2xl border border-navy/12 lg:block"
                  />
                  <div className="relative overflow-hidden rounded-2xl bg-secondary/40 shadow-[0_50px_90px_-45px_rgba(1,12,98,0.4)]">
                    <img
                      src={wadModular}
                      alt="Modular interface components assembling into a complete digital product"
                      loading="lazy"
                      width={1280}
                      height={1024}
                      className="aspect-[5/4] w-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={120} className="order-1 lg:order-2 lg:col-span-5">
                <p className="eyebrow text-azure">Built around your business</p>
                <h2 className="display mt-5 text-[2.1rem] leading-[1.08] text-navy sm:text-4xl lg:text-[3rem]">
                  Built
                  <br />
                  Around Your Business
                </h2>
                <span
                  aria-hidden
                  className="mt-8 block h-px w-24 bg-gradient-to-r from-amber to-ember"
                />
                <div className="mt-9 space-y-6">
                  {closingParagraphs.map((p) => (
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
                className="wad-cta-drift pointer-events-none absolute inset-[-20%]"
                style={{
                  background:
                    "radial-gradient(40% 60% at 15% 25%, rgba(74,115,255,0.4) 0%, transparent 65%), radial-gradient(40% 60% at 85% 75%, rgba(58,241,255,0.25) 0%, transparent 70%)",
                }}
              />
              <div
                aria-hidden
                className="grid-faint wad-cta-grid pointer-events-none absolute inset-[-80px] opacity-70"
              />
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 1200 340"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
              >
                <path
                  className="wad-dash"
                  d="M-60 260 C 260 220, 480 90, 800 110 S 1140 60, 1280 40"
                  stroke="#3AF1FF"
                  strokeOpacity="0.35"
                  strokeWidth="1"
                />
                <path
                  className="wad-dash2"
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
                    style={{ fontSize: "clamp(2rem, 4.2vw, 3.6rem)" }}
                  >
                    Digital Experiences Built to Perform.
                  </h2>
                </Reveal>
                <Reveal delay={90}>
                  <p className="mt-7 text-lg leading-relaxed text-white/75">{heroParagraph}</p>
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
