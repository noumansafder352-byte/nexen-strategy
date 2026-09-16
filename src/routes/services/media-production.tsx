import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { HeroScale } from "@/components/site/HeroScale";
import { cn } from "@/lib/utils";

import mpHeroMain from "@/assets/services/media-production/mp-hero-main.jpg";
import mpHeroVertical from "@/assets/services/media-production/mp-hero-vertical.jpg";
import mpCorporate from "@/assets/services/media-production/mp-corporate-video.jpg";
import mpPromotional from "@/assets/services/media-production/mp-promotional-video.jpg";
import mpProduct from "@/assets/services/media-production/mp-product-video.jpg";
import mpPhotography from "@/assets/services/media-production/mp-photography.jpg";
import mpSocial from "@/assets/services/media-production/mp-social-content.jpg";
import mpMotion from "@/assets/services/media-production/mp-motion-graphics-v4.jpg";
import mpAnimation from "@/assets/services/media-production/mp-animation-v3.jpg";
import mpEditing from "@/assets/services/media-production/mp-video-editing.jpg";
import mpDetail from "@/assets/services/media-production/media-2.jpg";

/* ================================================================
   FINAL APPROVED CONTENT — do not alter wording
   ================================================================ */

const heroIntro =
  "From corporate films to social content, professional photography and motion graphics, we create visual experiences that communicate your message and strengthen your brand.";

const closingIntro =
  "We combine strategy, creative direction and production to create content that doesn't just look good — it communicates.";

const capabilities = [
  {
    name: "Corporate Video",
    text: "Professional films that communicate your organisation, people, capabilities and story.",
    img: mpCorporate,
    alt: "Corporate film shoot with an executive interview lit on a professional set",
  },
  {
    name: "Promotional Video",
    text: "Creative campaigns designed to capture attention and communicate value.",
    img: mpPromotional,
    alt: "Cinematic commercial campaign production with a film crew and dramatic stage lighting",
  },
  {
    name: "Product & Service Videos",
    text: "Show your customers what you offer and why it matters.",
    img: mpProduct,
    alt: "Premium product filming set with studio lighting and a cinema camera on a slider",
  },
  {
    name: "Photography",
    text: "Professional corporate, product, event, commercial and brand photography.",
    img: mpPhotography,
    alt: "Professional commercial photography studio with softboxes, backdrop and tethered camera",
  },
  {
    name: "Social Media Content",
    text: "Short-form visual content designed for today's social platforms.",
    img: mpSocial,
    alt: "Creator filming vertical short-form social content with a ring light and smartphone rig",
  },
  {
    name: "Motion Graphics",
    text: "Bring ideas, data and messages to life through movement and visual storytelling.",
    img: mpMotion,
    alt: "Abstract motion design frame with flowing ribbons and geometric shapes",
  },
  {
    name: "Animation",
    text: "Explain complex concepts and create memorable experiences through animation.",
    img: mpAnimation,
    alt: "High-end animation render with sculptural forms and volumetric lighting",
  },
  {
    name: "Video Editing",
    text: "Professional post-production that turns footage into polished final content.",
    img: mpEditing,
    alt: "Professional video editing and colour grading suite with timeline and colour wheels",
  },
];

export const Route = createFileRoute("/services/media-production")({
  head: () => ({
    meta: [
      { title: "Media Production — Nexen Strategy" },
      { name: "description", content: heroIntro.slice(0, 155) },
      {
        property: "og:title",
        content: "Make Your Story Impossible to Ignore. | Media Production — Nexen Strategy",
      },
      { property: "og:description", content: heroIntro.slice(0, 155) },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MediaProductionPage,
});

function FrameCorners() {
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l border-t border-white/40"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r border-t border-white/40"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b border-l border-white/40"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b border-r border-white/40"
      />
    </>
  );
}

function MediaProductionPage() {
  const [activeCapability, setActiveCapability] = useState(0);
  const active = capabilities[activeCapability] ?? capabilities[0]!;

  return (
    <>
      <style>{`
        @keyframes mp-caption{0%{opacity:0;transform:translateY(8px)}100%{opacity:1;transform:translateY(0)}}
        .mp-caption{animation:mp-caption .45s ease-out both}
        @keyframes mp-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
        .mp-float{animation:mp-float 10s ease-in-out infinite}
        @keyframes mp-pulse{0%,100%{transform:scale(1);opacity:.85}50%{transform:scale(1.12);opacity:1}}
        .mp-pulse{animation:mp-pulse 3.2s ease-in-out infinite}
        @keyframes mp-rec{0%,100%{opacity:.25}50%{opacity:1}}
        .mp-rec{animation:mp-rec 2.4s ease-in-out infinite}
        @keyframes mp-playhead{0%{left:0}100%{left:100%}}
        .mp-playhead{animation:mp-playhead 12s linear infinite}
        @keyframes mp-scrub{0%{transform:scaleX(0)}100%{transform:scaleX(1)}}
        .mp-scrub{transform-origin:left;animation:mp-scrub 12s linear infinite}
        @keyframes mp-dash{to{stroke-dashoffset:-1600}}
        .mp-dash{stroke-dasharray:160 900;animation:mp-dash 22s linear infinite}
        .mp-dash2{stroke-dasharray:120 1000;animation:mp-dash 28s linear infinite;animation-delay:-8s}
        @keyframes mp-cta-drift{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(3%,-2.5%,0) scale(1.06)}}
        .mp-cta-drift{animation:mp-cta-drift 26s ease-in-out infinite}
        @keyframes mp-ring{0%,100%{transform:translate(-50%,-50%) rotate(-7deg) scale(1)}50%{transform:translate(-50%,-50%) rotate(3deg) scale(1.035)}}
        .mp-ring{animation:mp-ring 18s ease-in-out infinite}
        @media (prefers-reduced-motion: reduce){.mp-caption,.mp-float,.mp-pulse,.mp-rec,.mp-playhead,.mp-scrub,.mp-dash,.mp-dash2,.mp-cta-drift,.mp-ring{animation:none !important}}
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
              {/* LEFT — editorial */}
              <div className="relative z-10 lg:col-span-6">
                <Reveal>
                  <div className="flex items-center gap-5">
                    <p className="eyebrow text-cyan">06 — Media Production</p>
                    <span aria-hidden className="h-px w-12 bg-gradient-to-r from-amber to-ember" />
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <h1 className="display mt-7 text-[3rem] leading-[1.03] text-white sm:text-6xl lg:text-[4.4rem]">
                    Make
                    <br />
                    Your Story Impossible to Ignore.
                  </h1>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">{heroIntro}</p>
                </Reveal>
                <Reveal delay={230}>
                  <div className="mt-10 flex items-center gap-8">
                    <Link to="/contact" className="btn-primary group">
                      Start a Production Project
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <span aria-hidden className="hidden h-px w-16 bg-white/20 sm:block" />
                  </div>
                </Reveal>
              </div>

              {/* RIGHT — cinematic composition */}
              <Reveal delay={180} className="lg:col-span-6">
                <HeroScale designWidth={620} className="relative">
                  <div className="relative mx-auto w-full pb-16 pl-8 pr-2">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute left-[54%] top-[48%] block h-[78%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] border border-cyan/10 bg-[radial-gradient(ellipse_at_58%_48%,rgba(58,241,255,0.13),transparent_58%),linear-gradient(135deg,rgba(74,115,255,0.09),transparent_62%)] shadow-[0_0_90px_rgba(58,241,255,0.08)]"
                    />
                    <span
                      aria-hidden
                      className="mp-ring pointer-events-none absolute left-[55%] top-[48%] block h-[82%] w-[94%] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] border border-white/[0.08]"
                      style={{ transform: "translate(-50%, -50%) rotate(-7deg)" }}
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute right-[-8%] top-[-10%] h-[80%] w-[80%] rounded-full opacity-[0.10] blur-[110px]"
                      style={{ background: "radial-gradient(circle, #3AF1FF 0%, transparent 70%)" }}
                    />
                    {/* depth layers */}
                    <span
                      aria-hidden
                      className="absolute right-0 top-3 block h-[72%] w-[88%] rounded-2xl border border-white/15 bg-white/[0.06]"
                    />
                    <span
                      aria-hidden
                      className="absolute right-2 top-6 block h-[68%] w-[84%] rounded-2xl border border-white/[0.08]"
                    />

                    {/* 01 — dominant cinematic frame */}
                    <div
                      className="relative ml-auto w-[95%] overflow-hidden rounded-2xl border border-white/25 bg-navy shadow-[0_52px_90px_-34px_rgba(0,0,0,0.78),0_0_34px_-18px_rgba(58,241,255,0.5)]"
                      style={{
                        transform:
                          "perspective(1600px) rotateY(-9deg) rotateX(4deg) rotate(-1.5deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <img
                        src={mpHeroMain}
                        alt="Cinema camera rig on a film set during a premium production shoot"
                        width={1600}
                        height={1000}
                        className="aspect-[16/10] w-full object-cover"
                      />
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(1,12,98,0.28) 0%, transparent 42%, rgba(1,12,98,0.45) 100%)",
                        }}
                      />
                      <FrameCorners />

                      {/* REC indicator */}
                      <span className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm">
                        <span className="mp-rec h-1.5 w-1.5 rounded-full bg-[#ff483f]" />
                        Rec
                      </span>

                      {/* play indicator */}
                      <span className="mp-pulse absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm">
                        <Play aria-hidden className="ml-0.5 h-5 w-5 fill-white text-white" />
                      </span>
                    </div>

                    {/* 02 — vertical social frame */}
                    <div className="mp-float absolute bottom-4 left-0 w-[18%] overflow-hidden rounded-[0.9rem] border-[3px] border-white/90 bg-navy shadow-[0_30px_58px_-24px_rgba(0,0,0,0.82),0_0_24px_-14px_rgba(255,165,60,0.5)]">
                      <img
                        src={mpHeroVertical}
                        alt="Vertical social video frame of a creator filmed in a studio"
                        loading="lazy"
                        width={720}
                        height={1280}
                        className="aspect-[9/16] w-full object-cover"
                      />
                      <span className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-[#3af1ff]" />
                    </div>

                    {/* 03 — photography / edit preview */}
                    <div
                      className="absolute bottom-8 right-[6%] w-[30%] overflow-hidden rounded-xl border border-white/30 bg-white p-1 shadow-[0_30px_58px_-24px_rgba(0,0,0,0.8),0_0_26px_-14px_rgba(58,241,255,0.45)]"
                      style={{
                        transform: "perspective(1200px) rotateY(-11deg) rotateX(3deg) rotate(2deg)",
                      }}
                    >
                      <img
                        src={mpDetail}
                        alt="Photography studio lighting setup used during a commercial shoot"
                        loading="lazy"
                        width={1280}
                        height={960}
                        className="aspect-[4/3] w-full rounded-lg object-cover"
                      />
                      <span className="absolute bottom-3 left-3 rounded-full bg-navy/70 px-2 py-0.5 font-mono text-[9px] tracking-[0.2em] text-white">
                        FRAME 04
                      </span>
                    </div>

                    {/* fine technical accents */}
                    <span
                      aria-hidden
                      className="absolute left-[6%] top-[10%] block h-14 w-px bg-gradient-to-b from-cyan/70 to-transparent"
                    />
                    <span
                      aria-hidden
                      className="absolute right-[6%] top-[-10px] block h-px w-20 bg-gradient-to-r from-amber to-ember"
                    />
                  </div>
                </HeroScale>
              </Reveal>
            </div>

            {/* production strip */}
            <Reveal delay={260}>
              <ul
                aria-hidden
                className="mt-16 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 lg:mt-20"
              >
                {["Direction", "Production", "Photography", "Motion", "Post"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gradient-to-r from-amber to-ember" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ============ WHAT WE CREATE ============ */}
        <section className="relative overflow-hidden border-t border-border bg-secondary/30">
          <div aria-hidden className="grid-faint-dark absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
            <Reveal className="lg:hidden">
              <p className="eyebrow text-azure">Capabilities</p>
              <h2 className="display mt-5 text-4xl text-navy">What We Create</h2>
            </Reveal>

            {/* ---- Desktop ---- */}
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <p className="eyebrow text-azure">Capabilities</p>
                <h2 className="display mt-5 text-4xl text-navy lg:text-5xl">What We Create</h2>
                <span
                  aria-hidden
                  className="mt-9 block h-px w-24 bg-gradient-to-r from-amber to-ember"
                />
                <ul className="mt-12">
                  {capabilities.map((s, i) => {
                    const on = i === activeCapability;
                    return (
                      <li key={s.name}>
                        <button
                          type="button"
                          onMouseEnter={() => setActiveCapability(i)}
                          onFocus={() => setActiveCapability(i)}
                          onClick={() => setActiveCapability(i)}
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
              <Reveal delay={120} className="flex flex-col lg:col-span-7">
                <div key={activeCapability} className="mp-caption flex flex-1 flex-col">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ember">
                    {String(activeCapability + 1).padStart(2, "0")} — Production
                  </p>
                  <h3 className="display mt-4 text-3xl text-navy xl:text-[2.4rem]">
                    {active.name}
                  </h3>
                  <p className="mt-6 max-w-2xl text-[1.15rem] leading-[1.7] text-navy/80">
                    {active.text}
                  </p>
                  <div className="relative mt-9 min-h-[440px] flex-1 lg:mt-10">
                    <span
                      aria-hidden
                      className="absolute -top-4 -right-4 hidden h-full w-full rounded-2xl border border-navy/10 lg:block"
                    />
                    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-navy/10 bg-navy shadow-[0_50px_90px_-45px_rgba(1,12,98,0.45)]">
                      {capabilities.map((s, i) => (
                        <img
                          key={s.name}
                          src={s.img}
                          alt={s.alt}
                          loading="lazy"
                          width={1280}
                          height={960}
                          aria-hidden={i !== activeCapability}
                          className={cn(
                            "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out",
                            i === activeCapability
                              ? "scale-100 opacity-100"
                              : "scale-[1.03] opacity-0",
                          )}
                        />
                      ))}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(1,12,98,0.22) 0%, transparent 40%, rgba(1,12,98,0.42) 100%)",
                        }}
                      />
                      <FrameCorners />
                      <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-navy/55 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.18em] text-white backdrop-blur-sm">
                        {String(activeCapability + 1).padStart(2, "0")} /{" "}
                        {String(capabilities.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ---- Mobile / tablet accordion ---- */}
            <div className="mt-10 lg:hidden">
              <ul className="border-t border-border">
                {capabilities.map((s, i) => {
                  const on = i === activeCapability;
                  return (
                    <li key={s.name} className="border-b border-border">
                      <button
                        type="button"
                        onClick={() => setActiveCapability(i)}
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
                          <div className="relative mt-5 overflow-hidden rounded-xl bg-navy shadow-[0_30px_60px_-30px_rgba(1,12,98,0.35)]">
                            <img
                              src={s.img}
                              alt={s.alt}
                              loading="lazy"
                              width={1280}
                              height={960}
                              className="aspect-[16/10] w-full object-cover"
                            />
                            <span className="absolute left-3 top-3 rounded-full border border-white/25 bg-navy/55 px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] text-white">
                              {String(i + 1).padStart(2, "0")} /{" "}
                              {String(capabilities.length).padStart(2, "0")}
                            </span>
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

        {/* ============ CLOSING CTA ============ */}
        <section className="relative border-t border-border bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="relative isolate overflow-hidden rounded-[24px] bg-navy px-7 py-14 sm:px-12 lg:px-20 lg:py-20">
              <div
                aria-hidden
                className="mp-cta-drift pointer-events-none absolute inset-[-20%]"
                style={{
                  background:
                    "radial-gradient(40% 60% at 18% 25%, rgba(74,115,255,0.4) 0%, transparent 65%), radial-gradient(40% 60% at 85% 78%, rgba(255,165,60,0.22) 0%, transparent 70%)",
                }}
              />
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 1200 340"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
              >
                <path
                  className="mp-dash"
                  d="M-60 280 C 260 240, 480 110, 800 120 S 1140 60, 1280 30"
                  stroke="#3AF1FF"
                  strokeOpacity="0.3"
                  strokeWidth="1"
                />
                <path
                  className="mp-dash2"
                  d="M-60 110 C 300 150, 520 290, 880 250 S 1180 180, 1280 150"
                  stroke="#4A73FF"
                  strokeOpacity="0.4"
                  strokeWidth="1"
                />
              </svg>

              {/* subtle film-strip detail */}
              <div
                aria-hidden
                className="pointer-events-none absolute right-0 top-0 hidden h-full w-24 border-l border-white/10 lg:block"
              >
                <div className="flex h-full flex-col justify-around py-6">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <span
                      key={i}
                      className="mx-auto block h-6 w-10 rounded-sm border border-white/10"
                    />
                  ))}
                </div>
              </div>

              <div className="relative max-w-3xl">
                <Reveal>
                  <div className="flex items-center gap-4">
                    <span className="mp-rec h-1.5 w-1.5 rounded-full bg-[#ff483f]" />
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/60">
                      Media Production
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={70}>
                  <h2
                    className="display mt-6 text-white"
                    style={{ fontSize: "clamp(2rem, 4.2vw, 3.4rem)" }}
                  >
                    Visuals
                    <br />
                    That Make Your Brand Seen.
                  </h2>
                </Reveal>
                <Reveal delay={140}>
                  <p className="mt-7 text-lg leading-relaxed text-white/75">{closingIntro}</p>
                </Reveal>
                <Reveal delay={200}>
                  <div className="mt-10">
                    <Link to="/contact" className="btn-primary group">
                      Start a Production Project
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Reveal>

                {/* minimal timeline detail */}
                <div aria-hidden className="relative mt-12 h-px w-full max-w-md bg-white/15">
                  <span className="mp-playhead absolute -top-[3px] h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-[#3af1ff]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
