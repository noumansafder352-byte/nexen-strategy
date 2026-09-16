import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Eye,
  Magnet,
  MousePointerClick,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { HeroScale } from "@/components/site/HeroScale";
import { cn } from "@/lib/utils";

import mktHeroMain from "@/assets/mkt-hero-main.jpg";
import mktHeroPanel from "@/assets/mkt-hero-panel.jpg";
import mktHeroMobile from "@/assets/mkt-hero-mobile.jpg";
import mktSocial from "@/assets/mkt-social.jpg";
import mktSeo from "@/assets/mkt-seo.jpg";
import mktPaidAds from "@/assets/mkt-paid-ads.jpg";
import mktContent from "@/assets/mkt-content.jpg";
import mktLeadgen from "@/assets/mkt-leadgen.jpg";
import mktAutomation from "@/assets/mkt-automation.jpg";
import mktEmail from "@/assets/mg-email-marketing-v3.jpg";
import mktCro from "@/assets/mg-cro-v3.jpg";
import mktApproach from "@/assets/mkt-approach.jpg";
import mktPanelA from "@/assets/mkt-approach-panel-a.jpg";
import mktPanelB from "@/assets/mkt-approach-panel-b.jpg";

/* ================================================================
   FINAL APPROVED CONTENT — do not alter wording
   ================================================================ */

const heroIntro =
  "We help businesses build visibility, connect with the right audiences and create marketing systems that support sustainable growth.";

const capabilities = [
  {
    name: "Social Media Marketing",
    text: "Build an active, consistent and meaningful presence across the platforms that matter to your audience.",
    img: mktSocial,
    alt: "Social media management platform showing a content calendar, scheduled posts, engagement metrics and platform performance",
  },
  {
    name: "SEO",
    text: "Improve your visibility in search and build sustainable organic traffic.",
    img: mktSeo,
    alt: "SEO analytics dashboard showing search visibility, keyword rankings, organic traffic growth and site health",
  },
  {
    name: "Paid Advertising",
    text: "Reach high-intent audiences through targeted digital advertising campaigns.",
    img: mktPaidAds,
    alt: "Digital advertising dashboard with campaign performance, impressions, clicks, conversion rate and audience targeting",
  },
  {
    name: "Content Marketing",
    text: "Create useful, relevant content that builds trust and supports the customer journey.",
    img: mktContent,
    alt: "Content marketing platform showing an editorial workflow board, publishing calendar and content performance",
  },
  {
    name: "Lead Generation",
    text: "Turn digital channels into consistent sources of qualified opportunities.",
    img: mktLeadgen,
    alt: "Lead generation dashboard with a traffic to opportunity conversion funnel, lead pipeline and capture form",
  },
  {
    name: "Marketing Automation",
    text: "Use automation to nurture prospects, improve follow-up and streamline customer communications.",
    img: mktAutomation,
    alt: "Marketing automation workflow builder connecting lead, trigger, message, follow-up, nurture and conversion steps",
  },
  {
    name: "Email Marketing",
    text: "Create targeted email campaigns and customer communications that nurture relationships, support conversions and keep audiences engaged.",
    img: mktEmail,
    alt: "Email marketing platform showing campaign creation, audience segmentation, email delivery, engagement metrics and conversion",
  },
  {
    name: "Conversion Rate Optimisation",
    text: "Improve digital experiences, landing pages and customer journeys to turn more visitors into leads and customers.",
    img: mktCro,
    alt: "Conversion rate optimisation dashboard showing landing page, user behaviour, optimisation variants, conversion lift and growth",
  },
];

const approachParagraphs = [
  "We don't believe in chasing vanity metrics.",
  "Our focus is on the metrics that matter to your business — visibility, engagement, leads, customers and growth.",
];

const growthStages: { name: string; icon: LucideIcon }[] = [
  { name: "Visibility", icon: Eye },
  { name: "Engagement", icon: MousePointerClick },
  { name: "Leads", icon: Magnet },
  { name: "Customers", icon: Users },
  { name: "Growth", icon: TrendingUp },
];

function GrowthJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const [stepAutoPlay, setStepAutoPlay] = useState(true);
  const stepTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stepAutoPlay) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActiveStep((v) => (v + 1) % growthStages.length), 2400);
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
    const idx = Math.min(growthStages.length - 1, Math.max(0, Math.round(el.scrollLeft / step)));
    if (idx !== activeStep) {
      setStepAutoPlay(false);
      setActiveStep(idx);
    }
  };

  return (
    <div className="relative">
      {/* Desktop / tablet pipeline — mirrors Web & App Development "Our Approach" */}
      <div className="relative hidden lg:block">
        <div aria-hidden className="absolute left-[10%] right-[10%] top-7 h-px bg-navy/10" />
        <div
          aria-hidden
          className="absolute left-[10%] top-7 h-px bg-gradient-to-r from-amber to-ember transition-[width] duration-700 ease-out"
          style={{ width: `${(activeStep / (growthStages.length - 1)) * 80}%` }}
        />
        <ol className="relative grid grid-cols-5">
          {growthStages.map((s, i) => {
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

      {/* Mobile carousel — mirrors Web & App Development "Our Approach" */}
      <div className="lg:hidden">
        <div className="mb-6 flex items-center">
          {growthStages.map((s, i) => (
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
              {i < growthStages.length - 1 && (
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
          {growthStages.map((s, i) => {
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
                    {String(i + 1).padStart(2, "0")} / 05
                  </span>
                  <span
                    className={cn(
                      "relative flex h-11 w-11 items-center justify-center rounded-xl border transition-colors duration-300",
                      current ? "border-navy bg-navy text-white" : "border-navy/10 text-navy/50",
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-navy">{s.name}</h3>
              </article>
            );
          })}
        </div>
        <div aria-hidden className="mt-5 flex gap-1.5">
          {growthStages.map((s, i) => (
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
  );
}

export const Route = createFileRoute("/services/marketing-and-growth")({
  head: () => ({
    meta: [
      { title: "Marketing & Growth — Nexen Strategy" },
      { name: "description", content: heroIntro.slice(0, 155) },
      {
        property: "og:title",
        content: "Turn Attention Into Opportunity. | Marketing & Growth — Nexen Strategy",
      },
      { property: "og:description", content: heroIntro.slice(0, 155) },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MarketingGrowthPage,
});

function MarketingGrowthPage() {
  const [activeCapability, setActiveCapability] = useState(0);
  const active = capabilities[activeCapability] ?? capabilities[0]!;

  return (
    <>
      <style>{`
        @keyframes mkt-caption{0%{opacity:0;transform:translateY(8px)}100%{opacity:1;transform:translateY(0)}}
        .mkt-caption{animation:mkt-caption .45s ease-out both}
        @keyframes mkt-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        .mkt-float{animation:mkt-float 9s ease-in-out infinite}
        @keyframes mkt-draw{to{stroke-dashoffset:0}}
        .mkt-draw{stroke-dasharray:600;stroke-dashoffset:600;animation:mkt-draw 2.6s ease-out .3s forwards}
        @keyframes mkt-flow{to{stroke-dashoffset:-240}}
        .mkt-flow{stroke-dasharray:6 10;animation:mkt-flow 6s linear infinite}
        @keyframes mkt-cta-drift{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(3%,-2.5%,0) scale(1.06)}}
        .mkt-cta-drift{animation:mkt-cta-drift 24s ease-in-out infinite}
        @keyframes mkt-cta-grid{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(-72px,-72px,0)}}
        .mkt-cta-grid{animation:mkt-cta-grid 40s linear infinite}
        @keyframes mkt-dash{to{stroke-dashoffset:-1600}}
        .mkt-dash{stroke-dasharray:160 900;animation:mkt-dash 20s linear infinite}
        .mkt-dash2{stroke-dasharray:120 1000;animation:mkt-dash 26s linear infinite;animation-delay:-8s}
        @keyframes mkt-ring{0%,100%{transform:translate(-50%,-50%) rotate(-7deg) scale(1)}50%{transform:translate(-50%,-50%) rotate(3deg) scale(1.035)}}
        .mkt-ring{animation:mkt-ring 18s ease-in-out infinite}
        @media (prefers-reduced-motion: reduce){.mkt-caption,.mkt-float,.mkt-draw,.mkt-flow,.mkt-cta-drift,.mkt-cta-grid,.mkt-dash,.mkt-dash2,.mkt-ring{animation:none !important}.mkt-draw{stroke-dashoffset:0}}
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
              <div className="relative z-10 lg:col-span-6">
                <Reveal>
                  <div className="flex items-center gap-5">
                    <p className="eyebrow text-cyan">05 — Marketing &amp; Growth</p>
                    <span aria-hidden className="h-px w-12 bg-gradient-to-r from-amber to-ember" />
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <h1 className="display mt-7 text-[3rem] leading-[1.03] text-white sm:text-6xl lg:text-[4.4rem]">
                    Turn
                    <br />
                    Attention Into Opportunity.
                  </h1>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">{heroIntro}</p>
                </Reveal>
                <Reveal delay={230}>
                  <div className="mt-10 flex items-center gap-8">
                    <Link to="/contact" className="btn-primary group">
                      Start Growing
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <span aria-hidden className="hidden h-px w-16 bg-white/20 sm:block" />
                  </div>
                </Reveal>
              </div>

              {/* ---- Marketing intelligence composition ---- */}
              <Reveal delay={180} className="lg:col-span-6">
                <HeroScale designWidth={620} className="relative">
                  <div className="relative mx-auto w-full pb-16 pl-8 pr-2">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute left-[54%] top-[48%] block h-[78%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] border border-cyan/10 bg-[radial-gradient(ellipse_at_58%_48%,rgba(58,241,255,0.13),transparent_58%),linear-gradient(135deg,rgba(74,115,255,0.09),transparent_62%)] shadow-[0_0_90px_rgba(58,241,255,0.08)]"
                    />
                    <span
                      aria-hidden
                      className="mkt-ring pointer-events-none absolute left-[55%] top-[48%] block h-[82%] w-[94%] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] border border-white/[0.08]"
                      style={{ transform: "translate(-50%, -50%) rotate(-7deg)" }}
                    />
                    {/* soft background glow */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute right-[-8%] top-[-10%] h-[80%] w-[80%] rounded-full opacity-[0.12] blur-[110px]"
                      style={{ background: "radial-gradient(circle, #3AF1FF 0%, transparent 70%)" }}
                    />
                    {/* depth layers behind the dashboard */}
                    <span
                      aria-hidden
                      className="absolute right-0 top-3 block h-[74%] w-[88%] rounded-2xl border border-white/15 bg-white/[0.06]"
                    />
                    <span
                      aria-hidden
                      className="absolute right-2 top-6 block h-[70%] w-[84%] rounded-2xl border border-white/[0.08]"
                    />

                    {/* 1 — main dashboard, biased right */}
                    <div
                      className="relative ml-auto w-[94%] overflow-hidden rounded-2xl border border-white/25 bg-white shadow-[0_52px_90px_-34px_rgba(0,0,0,0.78),0_0_34px_-18px_rgba(58,241,255,0.5)]"
                      style={{
                        transform:
                          "perspective(1600px) rotateY(-9deg) rotateX(4deg) rotate(-1.5deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <img
                        src={mktHeroMain}
                        alt="Marketing intelligence dashboard showing audience analytics, campaign performance, traffic and conversion growth"
                        width={1280}
                        height={1024}
                        className="aspect-[5/4] w-full object-cover"
                      />
                    </div>

                    {/* 2 — growth / conversion insight panel, docked to the dashboard */}
                    <div
                      className="absolute bottom-4 right-[6%] w-[42%] overflow-hidden rounded-xl border border-white/30 bg-white p-1 shadow-[0_30px_58px_-24px_rgba(0,0,0,0.8),0_0_26px_-14px_rgba(58,241,255,0.45)]"
                      style={{
                        transform: "perspective(1200px) rotateY(-11deg) rotateX(3deg) rotate(2deg)",
                      }}
                    >
                      <img
                        src={mktHeroPanel}
                        alt="Growth journey panel linking attention, engagement, leads, customers and growth"
                        loading="lazy"
                        width={1024}
                        height={768}
                        className="aspect-[4/3] w-full rounded-lg object-cover"
                      />
                    </div>

                    {/* 3 — supporting mobile preview, lower-left with controlled overlap */}
                    <div className="mkt-float absolute bottom-6 left-0 w-[15%] overflow-hidden rounded-[0.9rem] border-[4px] border-white/90 bg-white shadow-[0_30px_58px_-24px_rgba(0,0,0,0.82),0_0_24px_-14px_rgba(255,165,60,0.5)]">
                      <img
                        src={mktHeroMobile}
                        alt="Mobile marketing app showing campaign performance and new lead volume"
                        loading="lazy"
                        width={720}
                        height={1280}
                        className="aspect-[9/16] w-full object-cover object-top"
                      />
                    </div>

                    {/* refined accents */}
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

            {/* Growth chain — technical strip */}
            <Reveal delay={260}>
              <ul
                aria-hidden
                className="mt-16 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 lg:mt-20"
              >
                {["Attention", "Engagement", "Leads", "Customers", "Growth"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gradient-to-r from-amber to-ember" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ============ WHAT WE DO ============ */}
        <section className="relative overflow-hidden border-t border-border bg-secondary/30">
          <div aria-hidden className="grid-faint-dark absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
            <Reveal className="lg:hidden">
              <p className="eyebrow text-azure">Capabilities</p>
              <h2 className="display mt-5 text-4xl text-navy">What We Do</h2>
            </Reveal>

            {/* ---- Desktop ---- */}
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <p className="eyebrow text-azure">Capabilities</p>
                <h2 className="display mt-5 text-4xl text-navy lg:text-5xl">What We Do</h2>
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
              <Reveal delay={120} className="lg:col-span-7">
                <div key={activeCapability} className="mkt-caption">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ember">
                    {String(activeCapability + 1).padStart(2, "0")} — Capability
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

        {/* ============ OUR APPROACH ============ */}
        <section className="relative overflow-hidden border-t border-border bg-white">
          <div aria-hidden className="grid-faint pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* LEFT */}
              <Reveal className="order-1 lg:col-span-5">
                <p className="eyebrow text-azure">Our approach</p>
                <h2 className="display mt-4 text-[2rem] leading-[1.08] text-navy sm:text-[2.35rem] lg:text-[2.6rem]">
                  Marketing Built Around
                  <br className="hidden sm:block" /> Your Goals.
                </h2>
                <span
                  aria-hidden
                  className="mt-6 block h-[3px] w-16 rounded-full bg-gradient-to-r from-amber to-ember"
                />
                <div className="mt-6 space-y-4">
                  {approachParagraphs.map((p) => (
                    <p key={p} className="max-w-xl text-[1.0625rem] leading-[1.7] text-navy/75">
                      {p}
                    </p>
                  ))}
                </div>
                <div className="mt-8 hidden lg:block">
                  <Link to="/contact" className="btn-primary group">
                    Start Growing
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>

              {/* GROWTH JOURNEY — mobile position */}
              <Reveal delay={80} className="order-2 lg:hidden">
                <GrowthJourney />
              </Reveal>

              {/* RIGHT VISUAL */}
              <Reveal delay={120} className="order-3 lg:order-2 lg:col-span-7">
                <div className="relative">
                  <div className="relative mx-auto w-[86%] overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_50px_90px_-45px_rgba(1,12,98,0.45)]">
                    <img
                      src={mktApproach}
                      alt="Growth dashboard where marketing channels feed visibility, engagement, leads, customers and overall growth"
                      loading="lazy"
                      width={1280}
                      height={800}
                      className="aspect-[8/5] w-full object-cover"
                    />
                  </div>

                  {/* floating analytics panel */}
                  <div className="animate-fade-in absolute -left-2 bottom-6 w-[34%] overflow-hidden rounded-xl border border-navy/10 bg-white shadow-[0_28px_60px_-30px_rgba(1,12,98,0.5)] sm:-left-4">
                    <img
                      src={mktPanelA}
                      alt="Audience insights panel with campaign performance breakdown"
                      loading="lazy"
                      width={960}
                      height={688}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>

                  {/* conversion / funnel panel */}
                  <div className="animate-fade-in absolute -right-1 top-6 w-[30%] overflow-hidden rounded-xl border border-navy/10 bg-white shadow-[0_28px_60px_-30px_rgba(1,12,98,0.5)] sm:-right-3">
                    <img
                      src={mktPanelB}
                      alt="Conversion funnel panel showing lead generation and conversion stages"
                      loading="lazy"
                      width={960}
                      height={688}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>

                  {/* small growth indicator */}
                  <div className="animate-fade-in absolute -bottom-4 right-4 flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 shadow-[0_18px_40px_-20px_rgba(1,12,98,0.55)] sm:right-10">
                    <TrendingUp aria-hidden className="h-4 w-4 text-ember" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy/70">
                      Growth
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* GROWTH JOURNEY — desktop full width */}
              <Reveal delay={160} className="order-4 hidden lg:col-span-12 lg:block">
                <GrowthJourney />
              </Reveal>

              <div className="order-5 lg:hidden">
                <Link to="/contact" className="btn-primary group">
                  Start Growing
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CLOSING CTA ============ */}
        <section className="relative bg-white pb-16 lg:pb-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="relative isolate overflow-hidden rounded-[24px] bg-navy px-7 py-14 sm:px-12 lg:px-20 lg:py-20">
              <div
                aria-hidden
                className="mkt-cta-drift pointer-events-none absolute inset-[-20%]"
                style={{
                  background:
                    "radial-gradient(40% 60% at 18% 25%, rgba(74,115,255,0.4) 0%, transparent 65%), radial-gradient(40% 60% at 85% 78%, rgba(255,165,60,0.22) 0%, transparent 70%)",
                }}
              />
              <div
                aria-hidden
                className="grid-faint mkt-cta-grid pointer-events-none absolute inset-[-80px] opacity-70"
              />
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 1200 340"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
              >
                <path
                  className="mkt-dash"
                  d="M-60 280 C 260 240, 480 110, 800 120 S 1140 60, 1280 30"
                  stroke="#3AF1FF"
                  strokeOpacity="0.32"
                  strokeWidth="1"
                />
                <path
                  className="mkt-dash2"
                  d="M-60 110 C 300 150, 520 290, 880 250 S 1180 180, 1280 150"
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
                    Turn Attention Into Opportunity.
                  </h2>
                </Reveal>
                <Reveal delay={90}>
                  <p className="mt-7 text-lg leading-relaxed text-white/75">{heroIntro}</p>
                </Reveal>
                <Reveal delay={150}>
                  <div className="mt-10">
                    <Link to="/contact" className="btn-primary group">
                      Start Growing
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
