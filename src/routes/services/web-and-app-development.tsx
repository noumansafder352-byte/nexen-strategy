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
import {
  SiClaude,
  SiFigma,
  SiFlutter,
  SiAngular,
  SiDocker,
  SiGit,
  SiGraphql,
  SiLaravel,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiShopify,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiWordpress,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import type { IconType } from "react-icons";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

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

const technologyStack = [
  { name: "React", icon: SiReact, tone: "cyan", x: 8, y: 18, rotate: -8, depth: 0 },
  { name: "TypeScript", icon: SiTypescript, tone: "blue", x: 34, y: 5, rotate: 6, depth: 1 },
  { name: "Next.js", icon: SiNextdotjs, tone: "white", x: 65, y: 12, rotate: 9, depth: 0 },
  { name: "Node.js", icon: SiNodedotjs, tone: "lime", x: 82, y: 29, rotate: -7, depth: 2 },
  { name: "Python", icon: SiPython, tone: "gold", x: 4, y: 49, rotate: 8, depth: 1 },
  { name: "PostgreSQL", icon: SiPostgresql, tone: "blue", x: 25, y: 35, rotate: -5, depth: 2 },
  { name: "MongoDB", icon: SiMongodb, tone: "lime", x: 52, y: 32, rotate: 4, depth: 0 },
  { name: "AWS", icon: FaAws, tone: "orange", x: 72, y: 49, rotate: -9, depth: 1 },
  { name: "Tailwind", icon: SiTailwindcss, tone: "cyan", x: 16, y: 70, rotate: -6, depth: 0 },
  { name: "WordPress", icon: SiWordpress, tone: "blue", x: 43, y: 61, rotate: 8, depth: 2 },
  { name: "Shopify", icon: SiShopify, tone: "lime", x: 68, y: 70, rotate: -4, depth: 1 },
  { name: "Figma", icon: SiFigma, tone: "pink", x: 88, y: 65, rotate: 8, depth: 2 },
  { name: "Flutter", icon: SiFlutter, tone: "cyan", x: 2, y: 84, rotate: 7, depth: 1 },
  { name: "Claude Code", icon: SiClaude, tone: "white", x: 51, y: 86, rotate: -7, depth: 0 },
  { name: "GraphQL", icon: SiGraphql, tone: "pink", x: 82, y: 88, rotate: 5, depth: 2 },
  { name: "Vue", icon: SiVuedotjs, tone: "lime", x: 12, y: 96, rotate: -4, depth: 1 },
  { name: "Angular", icon: SiAngular, tone: "pink", x: 34, y: 96, rotate: 6, depth: 0 },
  { name: "Laravel", icon: SiLaravel, tone: "orange", x: 56, y: 96, rotate: -7, depth: 2 },
  { name: "Docker", icon: SiDocker, tone: "blue", x: 72, y: 96, rotate: 5, depth: 1 },
  { name: "Git", icon: SiGit, tone: "orange", x: 90, y: 96, rotate: -5, depth: 0 },
] satisfies Array<{
  name: string;
  icon: IconType;
  tone: string;
  x: number;
  y: number;
  rotate: number;
  depth: number;
}>;

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
        @keyframes wad-cta-drift{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(3%,-2.5%,0) scale(1.06)}}
        .wad-cta-drift{animation:wad-cta-drift 24s ease-in-out infinite}
        @keyframes wad-cta-grid{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(-72px,-72px,0)}}
        .wad-cta-grid{animation:wad-cta-grid 40s linear infinite}
        @keyframes wad-dash{to{stroke-dashoffset:-1600}}
        .wad-dash{stroke-dasharray:160 900;animation:wad-dash 20s linear infinite}
        .wad-dash2{stroke-dasharray:120 1000;animation:wad-dash 26s linear infinite;animation-delay:-8s}
        @keyframes wad-tech-scan{0%,100%{opacity:.35;transform:translateX(-100%)}50%{opacity:.9;transform:translateX(100%)}}
        .wad-tech-scan{animation:wad-tech-scan 5s ease-in-out infinite}
        @keyframes wad-tech-card-in{0%{opacity:0;filter:blur(8px)}100%{opacity:1;filter:blur(0)}}
        @keyframes wad-tech-card-live{0%,100%{box-shadow:0 18px 28px -22px rgba(0,0,0,.95),inset 0 1px 0 rgba(255,255,255,.16)}50%{box-shadow:0 20px 30px -21px rgba(0,0,0,.95),0 0 18px rgba(58,241,255,.1),inset 0 1px 0 rgba(255,255,255,.2)}}
        .wad-tech-stage{perspective:1500px;transform-style:preserve-3d}
        .wad-tech-console{transform:rotateX(7deg) rotateY(-8deg) rotateZ(-1deg);transform-style:preserve-3d;box-shadow:35px 45px 80px -42px rgba(0,0,0,.95),inset 0 1px 0 rgba(255,255,255,.18);backdrop-filter:blur(14px)}
        .wad-tech-console:before{content:"";position:absolute;inset:10px;border:1px solid rgba(255,255,255,.07);pointer-events:none}
        .wad-tech-card{box-shadow:0 18px 28px -22px rgba(0,0,0,.95),inset 0 1px 0 rgba(255,255,255,.16);transform:translateZ(10px);transition:transform .35s ease,background .35s ease,box-shadow .35s ease;animation:wad-tech-card-in .7s cubic-bezier(.2,.8,.2,1) both,wad-tech-card-live 4.8s ease-in-out infinite}
        .wad-tech-card:nth-child(n+6):nth-child(-n+10){transform:translateZ(20px)}
        .wad-tech-card:nth-child(n+11){transform:translateZ(30px)}
        .wad-tech-card:hover{transform:translateZ(48px) scale(1.08);background:rgba(25,45,112,.92);box-shadow:0 25px 35px -18px rgba(0,0,0,.95),0 0 30px rgba(58,241,255,.18)}
        .tech-mark{display:flex;height:2rem;width:2rem;align-items:center;justify-content:center;border-radius:.55rem;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.8rem;font-weight:700;letter-spacing:-.04em}
        .tech-mark-cyan{background:rgba(58,241,255,.14);color:#3af1ff;box-shadow:0 0 18px rgba(58,241,255,.2)}
        .tech-mark-blue{background:rgba(82,132,255,.2);color:#9db9ff}
        .tech-mark-white{background:rgba(255,255,255,.12);color:#fff}
        .tech-mark-lime{background:rgba(167,236,92,.16);color:#c4f68a}
        .tech-mark-gold{background:rgba(255,195,78,.16);color:#ffd37a}
        .tech-mark-orange{background:rgba(255,122,61,.16);color:#ff9b70}
        .tech-mark-pink{background:rgba(255,111,183,.16);color:#ff9fce}
        @media (prefers-reduced-motion: reduce){.wad-caption,.wad-cta-drift,.wad-cta-grid,.wad-dash,.wad-dash2,.wad-tech-scan,.wad-tech-card{animation:none !important}}
        @media (max-width: 1023px){.wad-tech-console{transform:none}}
        @media (max-width: 520px){.wad-tech-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.wad-tech-card:nth-child(n){transform:translateZ(8px)}.wad-tech-card:hover{transform:translateZ(22px) scale(1.04)}}
      `}</style>

      <Header overHero />
      <main className="bg-white">
        {/* ============ HERO ============ */}
        <section
          className="relative overflow-hidden bg-navy-deep pt-[8.75rem] pb-16 lg:pt-36 lg:pb-24"
          style={{
            background:
              "radial-gradient(circle at 78% 48%, rgba(36, 73, 177, 0.28) 0%, transparent 34%), radial-gradient(circle at 18% 92%, rgba(255, 111, 53, 0.1) 0%, transparent 27%), linear-gradient(125deg, #07043f 0%, #010c62 58%, #05052f 100%)",
          }}
        >
          <div aria-hidden className="grid-faint absolute inset-0 opacity-60" />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-[-12%] h-[560px] w-[560px] rounded-full opacity-[0.08] blur-[140px]"
            style={{ background: "radial-gradient(circle, #3AF1FF 0%, transparent 70%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-48 left-[12%] h-[420px] w-[420px] rounded-full opacity-[0.1] blur-[150px]"
            style={{ background: "radial-gradient(circle, #FF7A3D 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
              {/* ---- Copy ---- */}
              <div className="relative z-10 lg:col-span-6">
                <Reveal>
                  <div className="flex items-center gap-5">
                    <p className="eyebrow text-cyan">02 — Web &amp; App Development</p>
                    <span aria-hidden className="h-px w-12 bg-gradient-to-r from-amber to-ember" />
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <h1 className="display mt-7 text-[3rem] leading-[1.02] text-white sm:text-6xl lg:text-[4.6rem]">
                    Digital
                    <br />
                    Experiences Built to Perform.
                  </h1>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">
                    {heroParagraph}
                  </p>
                </Reveal>
                <Reveal delay={230}>
                  <div className="mt-10 flex items-center gap-8">
                    <Link to="/contact" className="btn-primary group">
                      Discuss Your Project
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <span aria-hidden className="hidden h-px w-16 bg-white/20 sm:block" />
                  </div>
                </Reveal>
              </div>
              <Reveal delay={180} className="relative z-10 -mt-8 lg:col-span-6 lg:-mt-16">
                <div className="wad-tech-stage relative mx-auto w-full max-w-[680px] py-3 sm:py-6">
                  <div className="wad-tech-console relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#071348]/75 p-5 sm:p-7">
                    <div
                      aria-hidden
                      className="wad-tech-scan pointer-events-none absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-cyan to-transparent"
                    />
                    <div className="relative mb-6 flex items-end justify-between border-b border-white/10 pb-5">
                      <div>
                        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.28em] text-cyan">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_#3af1ff]" />
                          Nexen / Core systems
                        </div>
                        <p className="mt-2 text-xl font-medium tracking-tight text-white sm:text-2xl">
                          Built on the right stack.
                        </p>
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
                        v. 02.26
                      </span>
                    </div>
                    <div className="wad-tech-grid relative grid grid-cols-5 gap-2.5 sm:gap-3">
                      {technologyStack.map((technology, index) => (
                        <div
                          key={technology.name}
                          className="wad-tech-card group relative flex min-h-[5rem] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.055] px-1 py-2.5 text-center"
                          style={{
                            animationDelay: `${index * 55}ms`,
                          }}
                          title={technology.name}
                        >
                          <span
                            className={`tech-mark tech-mark-${technology.tone} transition-transform duration-300 group-hover:scale-110`}
                          >
                            <technology.icon aria-hidden className="h-5 w-5" />
                          </span>
                          <span className="mt-2 max-w-full truncate px-1 font-mono text-[8px] uppercase tracking-[0.08em] text-white/55 transition-colors group-hover:text-white/90">
                            {technology.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="relative mt-5 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
                      <span>20 technologies</span>
                      <span className="flex items-center gap-2 text-cyan/70">
                        <span className="h-1 w-1 rounded-full bg-cyan" /> Production ready
                      </span>
                    </div>
                  </div>
                </div>
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
