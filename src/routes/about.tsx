import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Compass,
  Network,
  Target,
  TrendingUp,
  Users,
  Search,
  PenTool,
  Repeat,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import aboutEcosystemAsset from "@/assets/about-who-we-are.png";
const aboutEcosystem = aboutEcosystemAsset;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Nexen Strategy" },
      {
        name: "description",
        content:
          "Nexen Strategy brings together strategy, technology, creativity, and innovation to help businesses build, transform, and grow in an increasingly digital world.",
      },
      { property: "og:title", content: "About Nexen Strategy" },
      {
        property: "og:description",
        content:
          "A digital partner built around business outcomes — strategy, technology, creativity and marketing under one connected team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const stages: { word: string; text: string; icon: LucideIcon }[] = [
  {
    word: "Understand",
    text: "Understand the business, people, challenges, and opportunities behind the project.",
    icon: Search,
  },
  {
    word: "Create",
    text: "Turn insights into practical ideas, experiences, and solutions built around your goals.",
    icon: PenTool,
  },
  {
    word: "Transform",
    text: "Bring the solution to life and integrate it into the way your business operates.",
    icon: Repeat,
  },
  {
    word: "Grow",
    text: "Refine, improve, and scale based on performance, changing needs, and new opportunities.",
    icon: Sprout,
  },
];

const values: { name: string; text: string; icon: LucideIcon }[] = [
  {
    name: "Think Beyond the Brief",
    text: "We look beyond the immediate request to understand the bigger picture and challenge assumptions when it creates a better outcome.",
    icon: Compass,
  },
  {
    name: "Make Technology Useful",
    text: "Technology should simplify business, improve experiences, and create opportunities, not add unnecessary complexity.",
    icon: Network,
  },
  {
    name: "Create With Purpose",
    text: "Every design, feature, and campaign should have a clear reason behind it and a meaningful role to play.",
    icon: Target,
  },
  {
    name: "Build for the Future",
    text: "We create solutions that can evolve with your business, your customers, and changing technology.",
    icon: TrendingUp,
  },
  {
    name: "Work as One Team",
    text: "The best results come from close collaboration, transparency, shared thinking, and shared ownership.",
    icon: Users,
  },
];

function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);
  const [stage, setStage] = useState(0);
  const flowRef = useRef<HTMLOListElement>(null);
  const goStage = (i: number) => {
    const el = flowRef.current;
    if (!el) return;
    const next = Math.max(0, Math.min(stages.length - 1, i));
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
    setStage(next);
  };

  return (
    <>
      <style>{`
        @keyframes ab-drift{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(3%,-2.5%,0) scale(1.06)}}
        @keyframes ab-grid{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(-72px,-72px,0)}}
        @keyframes ab-dash{to{stroke-dashoffset:-1600}}
        @keyframes ab-node{0%,100%{opacity:.25}50%{opacity:.9}}
        .ab-drift{animation:ab-drift 24s ease-in-out infinite}
        .ab-drift2{animation:ab-drift 31s ease-in-out infinite reverse}
        .ab-grid{animation:ab-grid 40s linear infinite}
        .ab-dash{stroke-dasharray:160 900;animation:ab-dash 20s linear infinite}
        .ab-dash2{stroke-dasharray:120 1000;animation:ab-dash 26s linear infinite;animation-delay:-8s}
        .ab-line{transform:scaleX(0);transition:transform 1.4s cubic-bezier(.22,1,.36,1) .1s}
        .reveal[data-visible="true"] .ab-line{transform:scaleX(1)}
        .ab-flow li{opacity:0;transform:translateY(14px);transition:opacity .7s ease,transform .7s cubic-bezier(.22,1,.36,1)}
        .reveal[data-visible="true"] .ab-flow li{opacity:1;transform:none}
        .ab-node{animation:ab-node 6s ease-in-out infinite}
        @keyframes ab-orbit{to{transform:rotate(360deg)}}
        @keyframes ab-orbit-r{to{transform:rotate(-360deg)}}
        @keyframes ab-pulse{0%,100%{opacity:.35;transform:scale(1)}50%{opacity:1;transform:scale(1.35)}}
        @keyframes ab-float{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(0,-10px,0)}}
        .ab-orbit{animation:ab-orbit 46s linear infinite;transform-origin:50% 50%}
        .ab-orbit-r{animation:ab-orbit-r 68s linear infinite;transform-origin:50% 50%}
        .ab-pulse{animation:ab-pulse 5s ease-in-out infinite}
        .ab-float{animation:ab-float 9s ease-in-out infinite}
        .ab-scroll{scrollbar-width:none;-ms-overflow-style:none}
        .ab-scroll::-webkit-scrollbar{display:none}
        @media (prefers-reduced-motion: reduce){.ab-drift,.ab-drift2,.ab-grid,.ab-dash,.ab-dash2,.ab-node{animation:none !important}}
        @media (prefers-reduced-motion: reduce){.ab-orbit,.ab-orbit-r,.ab-pulse,.ab-float{animation:none !important}}
      `}</style>

      <Header overHero />
      <main className="overflow-x-hidden">
        {/* 01 — HERO */}
        <section
          className="relative isolate flex min-h-[70svh] items-center overflow-hidden pt-[8.75rem] pb-16 sm:pt-[9.5rem] sm:pb-20 lg:min-h-[94svh] lg:pt-40 lg:pb-28"
          style={{
            background:
              "linear-gradient(140deg, #02052D 0%, #010C62 38%, #0A146F 62%, #111B82 100%)",
          }}
        >
          {/* L2 — technical grid */}
          <div aria-hidden className="grid-faint ab-grid absolute inset-[-90px] opacity-70" />
          {/* L3 — atmospheric gradient fields */}
          <div
            aria-hidden
            className="ab-drift pointer-events-none absolute right-[-10%] top-[-24%] h-[760px] w-[760px] rounded-full opacity-45 blur-[150px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
          />
          <div
            aria-hidden
            className="ab-drift2 pointer-events-none absolute left-[-16%] bottom-[-34%] h-[620px] w-[620px] rounded-full opacity-30 blur-[150px]"
            style={{ background: "radial-gradient(circle, #3AF1FF 0%, transparent 70%)" }}
          />
          <div
            aria-hidden
            className="ab-drift pointer-events-none absolute right-[24%] bottom-[-20%] h-[380px] w-[380px] rounded-full opacity-[0.12] blur-[150px]"
            style={{ background: "radial-gradient(circle, #FFA53C 0%, transparent 70%)" }}
          />
          {/* L4 — flowing data paths across the full hero */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1440 800"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            <path
              className="ab-dash"
              d="M-80 660 C 320 600, 560 420, 940 380 S 1360 240, 1520 180"
              stroke="#4A73FF"
              strokeOpacity="0.45"
              strokeWidth="1"
            />
            <path
              className="ab-dash2"
              d="M-80 220 C 340 280, 620 560, 1020 520 S 1380 400, 1520 370"
              stroke="#3AF1FF"
              strokeOpacity="0.4"
              strokeWidth="1"
            />
          </svg>

          {/* L5/L6 — central digital system */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-[-4%] top-1/2 hidden w-[700px] -translate-y-1/2 lg:block xl:right-[2%]"
          >
            <svg viewBox="0 0 720 720" className="h-auto w-full" fill="none">
              <g className="ab-orbit" stroke="#4A73FF" strokeOpacity="0.28" fill="none">
                <circle cx="360" cy="360" r="300" strokeDasharray="3 14" />
              </g>
              <g className="ab-orbit-r" stroke="#3AF1FF" strokeOpacity="0.22" fill="none">
                <circle cx="360" cy="360" r="222" strokeDasharray="2 18" />
                <circle cx="360" cy="360" r="150" strokeOpacity="0.12" />
              </g>
              <g stroke="#3AF1FF" strokeWidth="1" fill="none" strokeOpacity="0.3">
                <path
                  className="ab-dash"
                  d="M360 100 L134 230 L134 490 L360 620 L586 490 L586 230 Z"
                />
                <path
                  d="M360 360 L360 100 M360 360 L134 230 M360 360 L586 230 M360 360 L134 490 M360 360 L586 490 M360 360 L360 620"
                  strokeOpacity="0.2"
                />
              </g>
              <g className="ab-float">
                <rect
                  x="292"
                  y="292"
                  width="136"
                  height="136"
                  rx="26"
                  fill="none"
                  stroke="#3AF1FF"
                  strokeOpacity="0.4"
                  transform="rotate(45 360 360)"
                />
                <rect
                  x="316"
                  y="316"
                  width="88"
                  height="88"
                  rx="16"
                  fill="none"
                  stroke="#4A73FF"
                  strokeOpacity="0.55"
                />
                <circle cx="360" cy="360" r="46" fill="#3AF1FF" opacity="0.08" />
                <circle className="ab-pulse" cx="360" cy="360" r="9" fill="#3AF1FF" />
              </g>
              <g fill="#3AF1FF" opacity="0.55">
                {[
                  [360, 100],
                  [134, 230],
                  [586, 230],
                  [134, 490],
                  [586, 490],
                  [360, 620],
                ].map(([cx, cy]) => (
                  <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" />
                ))}
              </g>
              <g
                fill="#FFFFFF"
                opacity="0.35"
                fontSize="11"
                letterSpacing="4"
                fontFamily="ui-monospace, monospace"
              >
                <text x="330" y="72">
                  STRATEGY
                </text>
                <text x="536" y="200">
                  TECHNOLOGY
                </text>
                <text x="18" y="494">
                  CREATIVITY
                </text>
                <text x="336" y="666">
                  GROWTH
                </text>
              </g>
            </svg>
          </div>

          {/* mobile / tablet visual layer */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 right-[-20%] w-[430px] opacity-55 lg:hidden"
          >
            <svg viewBox="0 0 720 720" className="h-auto w-full" fill="none">
              <g className="ab-orbit" stroke="#4A73FF" strokeOpacity="0.3" fill="none">
                <circle cx="360" cy="360" r="290" strokeDasharray="3 14" />
              </g>
              <g stroke="#3AF1FF" strokeOpacity="0.28" strokeWidth="1" fill="none">
                <path d="M360 100 L134 230 L134 490 L360 620 L586 490 L586 230 Z" />
                <path
                  d="M360 360 L360 100 M360 360 L134 230 M360 360 L586 230 M360 360 L134 490 M360 360 L586 490 M360 360 L360 620"
                  strokeOpacity="0.18"
                />
              </g>
              <circle className="ab-pulse" cx="360" cy="360" r="9" fill="#3AF1FF" />
            </svg>
          </div>

          {/* content */}
          <div className="relative mx-auto w-full max-w-[1400px] px-6 lg:px-12">
            <div className="max-w-[46rem] lg:max-w-[38rem] xl:max-w-[42rem]">
              <Reveal>
                <p className="eyebrow text-cyan">About Us</p>
              </Reveal>
              <Reveal delay={80}>
                <h1
                  className="display mt-7 text-white"
                  style={{ fontSize: "clamp(2.4rem, 4.6vw, 4.2rem)" }}
                >
                  We Build What Businesses Need <span className="text-cyan">Next.</span>
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-white/70">
                  Nexen Strategy brings together strategy, technology, creativity, and innovation to
                  help businesses build, transform, and grow in an increasingly digital world.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-10">
                  <Link to="/" hash="services" className="btn-primary group">
                    Explore Our Services
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={280}>
                <div className="mt-12 flex items-center gap-4 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-white/30">
                  <span className="h-px w-12 bg-gradient-to-r from-cyan to-transparent" />
                  <span>Strategy</span>
                  <span className="text-white/15">/</span>
                  <span>Technology</span>
                  <span className="text-white/15">/</span>
                  <span>Creativity</span>
                  <span className="text-white/15">/</span>
                  <span>Marketing</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 02 — WHO WE ARE */}
        <section className="relative overflow-hidden bg-background py-24 lg:py-28">
          <div
            aria-hidden
            className="grid-faint pointer-events-none absolute inset-0 opacity-[0.22]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, rgba(74,115,255,0.05) 0%, transparent 45%, rgba(58,241,255,0.04) 100%)",
            }}
          />
          <div className="relative mx-auto max-w-[1320px] px-6 lg:px-12">
            <div className="grid items-center gap-14 lg:grid-cols-[54fr_46fr] lg:gap-20">
              {/* LEFT — positioning + story */}
              <div>
                <Reveal>
                  <div className="flex items-center gap-4">
                    <span
                      aria-hidden
                      className="h-px w-10 bg-gradient-to-r from-cyan to-transparent"
                    />
                    <p className="eyebrow text-azure">Who We Are</p>
                  </div>
                </Reveal>
                <Reveal delay={90}>
                  <h2
                    className="display mt-8 max-w-[17ch] text-navy"
                    style={{ fontSize: "clamp(2rem, 3.7vw, 3.35rem)" }}
                  >
                    A Digital Partner Built Around Business Outcomes.
                  </h2>
                </Reveal>
                <Reveal delay={150}>
                  <span
                    aria-hidden
                    className="mt-9 block h-[3px] w-24 rounded-full"
                    style={{ background: "linear-gradient(90deg, #3AF1FF 0%, #4A73FF 100%)" }}
                  />
                </Reveal>
                <Reveal delay={210}>
                  <p className="mt-9 max-w-[58ch] text-[1.03rem] leading-[1.85] text-muted-foreground">
                    We work with organisations that want more from digital than something that
                    simply looks good. We focus on building solutions that support real business
                    goals, solve meaningful challenges, and create measurable value.
                  </p>
                </Reveal>
                <Reveal delay={270}>
                  <p className="mt-7 max-w-[58ch] text-[1.03rem] leading-[1.85] text-muted-foreground">
                    Our work spans digital experiences, software solutions, AI and automation,
                    marketing, and media, allowing us to support businesses across multiple stages
                    of their digital journey.
                  </p>
                </Reveal>
                <Reveal delay={330}>
                  <p
                    className="mt-9 max-w-[44ch] font-medium leading-[1.55] text-navy"
                    style={{ fontSize: "clamp(1.15rem, 1.5vw, 1.4rem)" }}
                  >
                    Whether you need to launch, transform, automate or grow, we bring the people,
                    expertise and technology together to make it happen.
                  </p>
                </Reveal>
              </div>

              {/* RIGHT — premium visual */}
              <Reveal delay={200}>
                <div className="relative">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] opacity-40 blur-[70px]"
                    style={{
                      background: "radial-gradient(circle at 60% 40%, #4A73FF 0%, transparent 70%)",
                    }}
                  />
                  <div
                    className="ab-float relative overflow-hidden rounded-[1.75rem] border border-white/10"
                    style={{ background: "#010C62" }}
                  >
                    <img
                      src={aboutEcosystem}
                      alt="Abstract navy visualisation of a connected digital ecosystem linking strategy, technology and business outcomes"
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="h-[400px] w-full object-cover sm:h-[480px] lg:h-[580px]"
                    />
                    <div
                      aria-hidden
                      className="grid-faint ab-grid pointer-events-none absolute inset-0 opacity-10"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 mix-blend-multiply"
                      style={{
                        background: "rgba(1,12,98,0.10)",
                      }}
                    />
                    <div
                      aria-hidden
                      className="ab-drift2 pointer-events-none absolute -left-1/4 top-0 h-full w-1/2 opacity-10"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(58,241,255,0.18), transparent)",
                      }}
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
                      style={{
                        background: "linear-gradient(90deg, transparent, #3AF1FF, transparent)",
                      }}
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 03 — OUR APPROACH */}
        <section className="relative overflow-hidden bg-navy py-24 lg:py-36">
          <div aria-hidden className="grid-faint ab-grid absolute inset-[-90px]" />
          <div
            aria-hidden
            className="ab-drift pointer-events-none absolute left-[10%] top-[-20%] h-[560px] w-[560px] rounded-full opacity-25 blur-[140px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Reveal>
                  <p className="eyebrow text-cyan">Our Approach</p>
                </Reveal>
                <Reveal delay={70}>
                  <h2
                    className="display mt-8 text-white"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
                  >
                    Understand. Create. Transform. Grow.
                  </h2>
                </Reveal>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
                <Reveal delay={130}>
                  <p className="text-lg leading-relaxed text-white/70">
                    We start by understanding the business behind the project,your customers,
                    objectives, processes, challenges, and opportunities.
                  </p>
                </Reveal>
                {/* <Reveal delay={180}>
                  <p className="mt-7 text-lg leading-relaxed text-white/70">
                    That means looking beyond features and technology to understand your customers,
                    processes, objectives and challenges.
                  </p>
                </Reveal> */}
                <Reveal delay={230}>
                  <p className="mt-7 text-lg leading-relaxed text-white/70">
                    From there, we develop practical, scalable solutions designed around what your
                    business actually needs — not simply what is technically possible.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* stage flow — one connected horizontal process */}
            <Reveal className="mt-16 lg:mt-20">
              <div className="ab-flow relative">
                <div className="relative">
                  {/* continuous line */}
                  <div
                    aria-hidden
                    className="absolute left-[12.5%] right-[12.5%] top-[7px] hidden h-px bg-white/15 sm:block"
                  />
                  <div
                    aria-hidden
                    className="ab-line absolute left-[12.5%] top-[7px] hidden h-px origin-left sm:block"
                    style={{
                      right: "12.5%",
                      background: "linear-gradient(90deg, #3AF1FF, #4A73FF)",
                      opacity: 0.75,
                    }}
                  />
                  <ol
                    ref={flowRef}
                    onScroll={(e) => {
                      const el = e.currentTarget;
                      const w = el.clientWidth || 1;
                      setStage(Math.round(el.scrollLeft / w));
                    }}
                    className="ab-scroll flex snap-x snap-mandatory overflow-x-auto sm:grid sm:grid-cols-4 sm:overflow-visible"
                  >
                    {stages.map((s, i) => {
                      const Icon = s.icon;
                      return (
                        <li
                          key={s.word}
                          className="group relative w-full flex-none snap-center px-3 text-center sm:w-auto lg:px-6"
                          style={{ transitionDelay: `${i * 90}ms` }}
                        >
                          {i > 0 && (
                            <span
                              aria-hidden
                              className="absolute left-0 top-8 hidden h-[calc(100%-2.5rem)] w-px bg-white/8 lg:block"
                            />
                          )}
                          <span
                            aria-hidden
                            className="mx-auto block h-[15px] w-[15px] rounded-full border border-cyan/70 bg-navy transition-all duration-500 group-hover:scale-110 group-hover:border-cyan group-hover:shadow-[0_0_18px_2px_rgba(58,241,255,0.45)]"
                          />
                          <span className="mt-5 block font-mono text-[11px] tracking-[0.2em] text-white/40 transition-colors duration-500 group-hover:text-cyan">
                            0{i + 1}
                          </span>
                          <Icon
                            className="mx-auto mt-4 h-5 w-5 text-white/55 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:text-cyan"
                            strokeWidth={1.3}
                          />
                          <h3 className="mt-4 text-lg font-semibold tracking-tight text-white/85 transition-colors duration-500 group-hover:text-white lg:text-xl">
                            {s.word}
                          </h3>
                          <p className="mx-auto mt-2 max-w-[17rem] text-[0.82rem] leading-relaxed text-white/45 transition-colors duration-500 group-hover:text-white/65">
                            {s.text}
                          </p>
                        </li>
                      );
                    })}
                  </ol>

                  {/* mobile controls */}
                  <div className="mt-8 flex items-center justify-center gap-4 sm:hidden">
                    <button
                      type="button"
                      aria-label="Previous step"
                      onClick={() => goStage(stage - 1)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-cyan hover:text-cyan"
                    >
                      <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                    <div className="flex items-center gap-2">
                      {stages.map((s, i) => (
                        <button
                          key={s.word}
                          type="button"
                          aria-label={`Go to ${s.word}`}
                          onClick={() => goStage(i)}
                          className={cn(
                            "h-1.5 rounded-full transition-all duration-300",
                            i === stage ? "w-6 bg-cyan" : "w-1.5 bg-white/25",
                          )}
                        />
                      ))}
                    </div>
                    <button
                      type="button"
                      aria-label="Next step"
                      onClick={() => goStage(stage + 1)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-cyan hover:text-cyan"
                    >
                      <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 04 — OUR VALUES */}
        <section className="relative overflow-hidden bg-background py-24 lg:py-36">
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="eyebrow text-azure">Our Values</p>
            </Reveal>
            <div className="mt-12 border-t border-border">
              {values.map((v, i) => {
                const Icon = v.icon;
                const on = activeValue === i;
                return (
                  <Reveal key={v.name} delay={i * 60}>
                    <div
                      onMouseEnter={() => setActiveValue(i)}
                      onFocus={() => setActiveValue(i)}
                      tabIndex={0}
                      className="group relative grid gap-4 border-b border-border py-9 pl-5 outline-none transition-[padding] duration-500 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-8 sm:pl-7 lg:grid-cols-[auto_minmax(0,0.9fr)_minmax(0,1fr)] lg:py-11 lg:pl-10 lg:hover:pl-14 lg:focus-visible:pl-14"
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "pointer-events-none absolute left-0 top-0 h-full w-px transition-opacity duration-500",
                          on ? "opacity-100" : "opacity-0",
                        )}
                        style={{ background: "linear-gradient(180deg, #3AF1FF, #4A73FF)" }}
                      />
                      <Icon
                        className={cn(
                          "h-7 w-7 transition-all duration-500",
                          on ? "-translate-y-0.5 text-azure" : "text-navy/30",
                        )}
                        strokeWidth={1.4}
                      />
                      <h3
                        className={cn(
                          "display text-2xl transition-colors duration-500 sm:text-3xl lg:text-[2.3rem]",
                          on ? "text-navy" : "text-navy/60",
                        )}
                      >
                        {v.name}
                      </h3>
                      <p className="max-w-[56ch] text-base leading-relaxed text-muted-foreground sm:col-start-2 lg:col-start-3">
                        {v.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 05 — ABOUT CTA */}
        <section className="relative bg-background pb-16 lg:pb-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="relative isolate overflow-hidden rounded-[24px] bg-navy px-7 py-14 sm:px-12 lg:px-20 lg:py-20">
              <div
                aria-hidden
                className="ab-drift pointer-events-none absolute inset-[-20%]"
                style={{
                  background:
                    "radial-gradient(40% 60% at 15% 25%, rgba(74,115,255,0.4) 0%, transparent 65%), radial-gradient(40% 60% at 85% 75%, rgba(58,241,255,0.25) 0%, transparent 70%)",
                }}
              />
              <div
                aria-hidden
                className="grid-faint ab-grid pointer-events-none absolute inset-[-80px] opacity-70"
              />
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 1200 340"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
              >
                <path
                  className="ab-dash"
                  d="M-60 260 C 260 220, 480 90, 800 110 S 1140 60, 1280 40"
                  stroke="#3AF1FF"
                  strokeOpacity="0.35"
                  strokeWidth="1"
                />
                <path
                  className="ab-dash2"
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
                    Let's Build Something That Matters.
                  </h2>
                </Reveal>
                <Reveal delay={90}>
                  <p className="mt-7 text-lg leading-relaxed text-white/75">
                    Tell us where you want to go. We'll help you work out how to get there.
                  </p>
                </Reveal>
                <Reveal delay={150}>
                  <div className="mt-10">
                    <Link to="/contact" className="btn-primary group">
                      Talk to Nexen
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
