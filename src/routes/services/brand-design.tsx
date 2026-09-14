import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Search,
  Crosshair,
  PenTool,
  SlidersHorizontal,
  Rocket,
  type LucideIcon,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { HeroScale } from "@/components/site/HeroScale";
import { cn } from "@/lib/utils";
import brandHero from "@/assets/services/brand-design/brand-hero.jpg";
import brandSignatureVideo from "@/assets/about-video-brand-signature.mp4";
import brandTouchpoints from "@/assets/services/brand-design/brand-touchpoints.jpg";

import svcBrandIdentity from "@/assets/services/brand-design/svc-brand-identity.jpg";
import svcLogoDesign from "@/assets/services/brand-design/svc-logo-design.jpg";
import svcVisualIdentity from "@/assets/services/brand-design/svc-visual-identity.jpg";
import svcGraphicDesign from "@/assets/services/brand-design/svc-graphic-design.jpg";
import svcUiuxDesign from "@/assets/services/brand-design/svc-uiux-design.jpg";
import svcpkgdesign from "@/assets/services/brand-design/svc-pkg-design.jpg";
import svcDesignSystems from "@/assets/services/brand-design/svc-design-systems.jpg";
import svcBrandGuidelines from "@/assets/services/brand-design/svc-brand-guidelines.jpg";

/* ================================================================
   FINAL APPROVED CONTENT — do not alter wording
   ================================================================ */

const heroParagraph =
  "Your brand is more than a logo. We create distinctive visual identities and digital experiences that help businesses communicate with clarity, consistency and confidence.";

const serviceAreas = [
  {
    name: "Brand Identity",
    text: "Develop a clear and distinctive visual identity that gives your business a recognisable presence across every channel.",
    img: svcBrandIdentity,
    alt: "Brand identity system presented across guidelines, stationery and business cards",
  },
  {
    name: "Logo Design",
    text: "Create memorable logos that provide a strong visual foundation for your brand.",
    img: svcLogoDesign,
    alt: "Logo design exploration sheet with construction grid, lockups and variations",
  },
  {
    name: "Visual Identity",
    text: "Define colours, typography, imagery and visual elements that create consistency across your communications.",
    img: svcVisualIdentity,
    alt: "Visual identity system with typography specimen, colour palette and pattern samples",
  },
  {
    name: "Graphic Design",
    text: "Create professional visual assets for digital platforms, marketing campaigns, print and business communications.",
    img: svcGraphicDesign,
    alt: "Graphic design collateral across brochures, posters and marketing print",
  },
  {
    name: "UI/UX Design",
    text: "Design intuitive interfaces and meaningful user experiences around the needs of your customers.",
    img: svcUiuxDesign,
    alt: "Polished mobile and tablet interface screens for a digital product",
  },
  {
    name: "Packaging Design",
    text: "Product packaging, labels, boxes, bags and branded product materials.",
    img: svcpkgdesign,
    alt: "Packaging design shown across product packaging, labels, boxes and bags",
  },
  {
    name: "Design Systems",
    text: "Develop scalable design frameworks that keep digital products and communications consistent as they grow.",
    img: svcDesignSystems,
    alt: "Design system component library with colours, typography and UI components",
  },
  {
    name: "Brand Guidelines",
    text: "Develop clear brand guidelines that define how your identity should be used consistently across digital, print and marketing communications.",
    img: svcBrandGuidelines,
    alt: "Brand guidelines book showing logo usage, typography, colour palette and print applications",
  },
];

const processStages: { name: string; text: string; icon: LucideIcon }[] = [
  {
    name: "Discover",
    text: "Understand your brand, audience, market and objectives.",
    icon: Search,
  },
  {
    name: "Define",
    text: "Establish the creative direction and visual opportunity.",
    icon: Crosshair,
  },
  { name: "Design", text: "Develop concepts, interfaces and visual assets.", icon: PenTool },
  {
    name: "Refine",
    text: "Review, test and improve the work based on feedback.",
    icon: SlidersHorizontal,
  },
  {
    name: "Deliver",
    text: "Provide the final assets and systems ready for implementation.",
    icon: Rocket,
  },
];

const closingParagraph =
  "We combine creativity with strategic thinking to create brands and digital experiences that people understand, remember and trust.";

export const Route = createFileRoute("/services/brand-design")({
  head: () => ({
    meta: [
      { title: "Brand & Design — Nexen Strategy" },
      { name: "description", content: heroParagraph.slice(0, 155) },
      {
        property: "og:title",
        content: "Build a Brand People Remember. | Brand & Design — Nexen Strategy",
      },
      { property: "og:description", content: heroParagraph.slice(0, 155) },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BrandDesignPage,
});

function BrandDesignPage() {
  const [activeStage, setActiveStage] = useState(0);
  const [stageAutoPlay, setStageAutoPlay] = useState(true);
  const [activeService, setActiveService] = useState(0);
  const signatureVideoRef = useRef<HTMLVideoElement>(null);
  const stageTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stageAutoPlay) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setActiveStage((v) => (v + 1) % processStages.length),
      2600,
    );
    return () => window.clearInterval(id);
  }, [stageAutoPlay]);

  const selectStage = (i: number) => {
    setStageAutoPlay(false);
    setActiveStage(i);
  };

  const scrollStageTrack = (i: number) => {
    selectStage(i);
    const el = stageTrackRef.current;
    const child = el?.children[i] as HTMLElement | undefined;
    if (el && child) {
      el.scrollTo({ left: child.offsetLeft - el.clientWidth * 0.12, behavior: "smooth" });
    }
  };

  const onStageTrackScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const child = el.children[0] as HTMLElement | undefined;
    if (!child) return;
    const step = child.offsetWidth + 16;
    const idx = Math.min(processStages.length - 1, Math.max(0, Math.round(el.scrollLeft / step)));
    if (idx !== activeStage) {
      setStageAutoPlay(false);
      setActiveStage(idx);
    }
  };

  useEffect(() => {
    const video = signatureVideoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes bd-drift{0%{transform:scale(1.06) translateX(-1.2%)}100%{transform:scale(1.06) translateX(1.2%)}}
        .bd-kenburns{animation:bd-drift 26s ease-in-out infinite alternate;will-change:transform}
        @keyframes bd-caption{0%{opacity:0;transform:translateY(6px)}100%{opacity:1;transform:translateY(0)}}
        .bd-caption{animation:bd-caption .45s ease-out both}
        @keyframes bd-cta-drift{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(3%,-2.5%,0) scale(1.06)}}
        .bd-cta-drift{animation:bd-cta-drift 24s ease-in-out infinite}
        @keyframes bd-cta-grid{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(-72px,-72px,0)}}
        .bd-cta-grid{animation:bd-cta-grid 40s linear infinite}
        @keyframes bd-cta-dash{to{stroke-dashoffset:-1600}}
        .bd-cta-dash{stroke-dasharray:160 900;animation:bd-cta-dash 20s linear infinite}
        .bd-cta-dash2{stroke-dasharray:120 1000;animation:bd-cta-dash 26s linear infinite;animation-delay:-8s}
        @media (prefers-reduced-motion: reduce){.bd-kenburns,.bd-caption,.bd-cta-drift,.bd-cta-grid,.bd-cta-dash,.bd-cta-dash2{animation:none !important}}
      `}</style>

      <Header />
      <main className="bg-white">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden pt-[8.75rem] pb-16 lg:pt-36 lg:pb-24">
          <div aria-hidden className="grid-faint-dark absolute inset-0 opacity-40" />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-[-12%] h-[560px] w-[560px] rounded-full opacity-[0.07] blur-[140px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
              {/* ---- Copy ---- */}
              <div className="relative z-10 lg:col-span-6">
                <Reveal>
                  <div className="flex items-center gap-5">
                    <p className="eyebrow text-azure">01 — Brand &amp; Design</p>
                    <span aria-hidden className="h-px w-12 bg-gradient-to-r from-amber to-ember" />
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <h1 className="display mt-7 text-[3rem] leading-[1.02] text-navy sm:text-6xl lg:text-[4.6rem]">
                    Build
                    <br />a Brand People Remember.
                  </h1>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
                    {heroParagraph}
                  </p>
                </Reveal>
                <Reveal delay={230}>
                  <div className="mt-10 flex items-center gap-8">
                    <Link to="/contact" className="btn-primary group">
                      Start a Design Project
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <span aria-hidden className="hidden h-px w-16 bg-navy/15 sm:block" />
                  </div>
                </Reveal>
              </div>

              {/* ---- Art-directed visual composition ---- */}
              <Reveal delay={180} className="lg:col-span-6">
                <HeroScale designWidth={600} className="relative">
                  <div className="relative flex items-center justify-center px-12 py-10">
                    {/* inner composition container: reduced & rebalanced */}
                    <div className="relative w-[85%]">
                      {/* thin offset framing line */}
                      <span
                        aria-hidden
                        className="absolute -top-6 -right-6 block h-full w-full rounded-xl border border-navy/12"
                      />
                      {/* primary brand visual */}
                      <div className="relative overflow-hidden rounded-xl bg-secondary/40 shadow-[0_50px_90px_-40px_rgba(1,12,98,0.4)]">
                        <img
                          src={brandHero}
                          alt="Premium brand identity system with typography, colour palette and logo applications"
                          width={1024}
                          height={1280}
                          className="aspect-[4/5] w-full object-cover"
                        />
                      </div>
                      {/* small cropped brand detail — overlapping bottom-left */}
                      <div className="absolute -bottom-8 -left-10 block w-36 overflow-hidden rounded-lg border-[5px] border-white shadow-[0_30px_60px_-25px_rgba(1,12,98,0.45)]">
                        <img
                          src={brandTouchpoints}
                          alt="Brand identity applied across digital and print touchpoints"
                          loading="lazy"
                          width={1600}
                          height={1200}
                          className="aspect-square w-full object-cover object-left-top"
                        />
                      </div>
                      {/* colour swatch detail — overlapping top-left edge */}
                      <div aria-hidden className="absolute -left-5 top-10 flex flex-col gap-2.5">
                        <span className="h-9 w-9 rounded-[4px] bg-navy shadow-[0_14px_28px_-12px_rgba(1,12,98,0.5)]" />
                        <span className="h-9 w-9 rounded-[4px] bg-gradient-to-br from-amber to-ember shadow-[0_14px_28px_-12px_rgba(255,72,63,0.5)]" />
                        <span className="h-9 w-9 rounded-[4px] border border-navy/15 bg-white shadow-[0_14px_28px_-12px_rgba(1,12,98,0.25)]" />
                      </div>
                      {/* fine orange accent marker */}
                      <span
                        aria-hidden
                        className="absolute -bottom-5 right-12 block h-px w-24 bg-gradient-to-r from-amber to-ember"
                      />
                    </div>
                  </div>
                </HeroScale>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ SIGNATURE VISUAL / VIDEO ============ */}
        <section className="relative overflow-hidden bg-navy">
          <div>
            <video
              ref={signatureVideoRef}
              src={brandSignatureVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-[52vh] min-h-[320px] w-full object-cover opacity-90 lg:h-[78vh]"
            />
          </div>
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(1,12,98,0.35) 0%, transparent 35%, transparent 70%, rgba(1,12,98,0.55) 100%)",
            }}
          />
        </section>

        {/* ============ WHAT WE DO — image-led showcase ============ */}
        <section className="relative overflow-hidden border-t border-border bg-white">
          <div aria-hidden className="grid-faint-dark absolute inset-0 opacity-[0.03]" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
            {/* Section header — mobile / tablet only (desktop header lives in the left column) */}
            <Reveal className="lg:hidden">
              <div className="flex items-end justify-between gap-8">
                <div>
                  <p className="eyebrow text-azure">What we do</p>
                  <h2 className="display mt-5 text-4xl text-navy lg:text-5xl">What We Do</h2>
                </div>
              </div>
            </Reveal>

            {/* ---- Desktop: editorial navigation + label / title / description / visual ---- */}
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-16">
              {/* Left: header + premium service navigation */}
              <Reveal className="lg:col-span-5">
                <p className="eyebrow text-azure">What we do</p>
                <h2 className="display mt-5 text-4xl text-navy lg:text-5xl">What We Do</h2>
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
                          {/* outline number */}
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

                          {/* service name */}
                          <span
                            className={cn(
                              "display text-[1.55rem] leading-none tracking-tight transition-all duration-300 ease-out",
                              on ? "text-navy" : "text-navy/40 group-hover:text-navy/75",
                            )}
                          >
                            {s.name}
                          </span>

                          {/* arrow indicator */}
                          <ArrowRight
                            aria-hidden
                            className={cn(
                              "ml-auto h-4 w-4 shrink-0 text-ember transition-all duration-300",
                              on
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-50",
                            )}
                          />

                          {/* active / hover accent line */}
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

              {/* Right: label → title → description → large visual */}
              <Reveal delay={120} className="lg:col-span-7">
                <div key={activeService} className="bd-caption">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ember">
                    {String(activeService + 1).padStart(2, "0")} — Capability
                  </p>
                  <h3 className="display mt-4 text-3xl text-navy xl:text-[2.6rem]">
                    {serviceAreas[activeService]?.name ?? serviceAreas[0]?.name}
                  </h3>
                  <p className="mt-7 max-w-2xl text-[1.35rem] leading-[1.7] text-navy/80">
                    {serviceAreas[activeService]?.text ?? serviceAreas[0]?.text}
                  </p>
                </div>
                <div className="relative mt-10">
                  {/* offset frame line */}
                  <span
                    aria-hidden
                    className="absolute -top-4 -right-4 hidden h-full w-full rounded-xl border border-navy/10 lg:block"
                  />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary/40 shadow-[0_50px_90px_-45px_rgba(1,12,98,0.4)]">
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
                          i === activeService ? "scale-100 opacity-100" : "scale-[1.04] opacity-0",
                        )}
                      />
                    ))}
                    {/* index marker */}
                    <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-navy/55 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.18em] text-white backdrop-blur-sm">
                      {String(activeService + 1).padStart(2, "0")} /{" "}
                      {String(serviceAreas.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ---- Mobile / tablet: touch accordion ---- */}
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
                            "flex h-7 w-7 items-center justify-center font-mono text-[12px] font-medium tracking-[0.02em] text-transparent transition-all duration-300",
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
                          <div className="mt-5 overflow-hidden rounded-lg shadow-[0_30px_60px_-30px_rgba(1,12,98,0.35)]">
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

        {/* ============ OUR DESIGN PROCESS ============ */}
        <section className="relative overflow-hidden border-t border-border bg-secondary/40">
          <div aria-hidden className="grid-faint-dark absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-24">
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow text-azure">Our design process</p>
                <h2 className="display mt-5 text-[2rem] text-navy sm:text-4xl lg:text-[2.75rem]">
                  Our Design Process
                </h2>
              </div>
              <p
                aria-hidden
                className="hidden items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground lg:flex"
              >
                <span className="h-px w-10 bg-gradient-to-r from-amber to-ember" />
                Discover — Define — Design — Refine — Deliver
              </p>
            </Reveal>

            {/* ---- Desktop / tablet: horizontal timeline ---- */}
            <div className="relative mt-14 hidden md:block">
              <div aria-hidden className="absolute left-[10%] right-[10%] top-7 h-px bg-navy/10" />
              <div
                aria-hidden
                className="absolute left-[10%] top-7 h-px bg-gradient-to-r from-amber to-ember transition-[width] duration-700 ease-out"
                style={{
                  width: `${(activeStage / (processStages.length - 1)) * 80}%`,
                }}
              />
              <ol className="relative grid grid-cols-5">
                {processStages.map((s, i) => {
                  const on = i <= activeStage;
                  const current = i === activeStage;
                  const Icon = s.icon;
                  return (
                    <Reveal key={s.name} delay={i * 80} as="li">
                      <div
                        onMouseEnter={() => selectStage(i)}
                        onFocus={() => selectStage(i)}
                        tabIndex={0}
                        className="group flex flex-col items-center px-3 text-center outline-none"
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
                            "relative mt-4 flex h-16 w-16 items-center justify-center rounded-2xl border transition-all duration-500",
                            current
                              ? "-translate-y-1 border-navy bg-navy text-white shadow-[0_20px_44px_-18px_rgba(1,12,98,0.55)]"
                              : "border-navy/10 bg-white text-navy/45 group-hover:border-navy/25 group-hover:text-navy",
                          )}
                        >
                          <Icon className="h-6 w-6" strokeWidth={1.5} />
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
                            "mt-5 text-lg font-semibold tracking-tight transition-colors duration-500",
                            current ? "text-navy" : "text-navy/40",
                          )}
                        >
                          {s.name}
                        </h3>
                        <p
                          className={cn(
                            "mt-2.5 max-w-[230px] text-sm leading-relaxed transition-colors duration-500",
                            current ? "text-navy/70" : "text-muted-foreground",
                          )}
                        >
                          {s.text}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </ol>
            </div>

            {/* ---- Mobile: compact horizontal carousel ---- */}
            <div className="mt-12 md:hidden">
              <div className="mb-6 flex items-center">
                {processStages.map((s, i) => (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => scrollStageTrack(i)}
                    aria-label={`Go to step ${i + 1}: ${s.name}`}
                    className="flex items-center"
                  >
                    <span
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-full border font-mono text-[11px] transition-all duration-300",
                        i === activeStage
                          ? "border-ember bg-ember text-white"
                          : i < activeStage
                            ? "border-navy bg-navy text-white"
                            : "border-navy/15 bg-white text-muted-foreground",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < processStages.length - 1 && (
                      <span
                        aria-hidden
                        className={cn(
                          "h-px w-5 transition-colors duration-300",
                          i < activeStage ? "bg-ember" : "bg-navy/15",
                        )}
                      />
                    )}
                  </button>
                ))}
              </div>
              <div
                ref={stageTrackRef}
                onScroll={onStageTrackScroll}
                className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {processStages.map((s, i) => {
                  const current = i === activeStage;
                  const Icon = s.icon;
                  return (
                    <article
                      key={s.name}
                      className={cn(
                        "w-[76%] shrink-0 snap-center rounded-2xl border bg-white p-6 transition-all duration-500",
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
                            current
                              ? "border-navy bg-navy text-white"
                              : "border-navy/10 text-navy/50",
                          )}
                        >
                          <Icon className="h-5 w-5" strokeWidth={1.5} />
                          {current && (
                            <span
                              aria-hidden
                              className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-gradient-to-br from-amber to-ember"
                            />
                          )}
                        </span>
                      </div>
                      <h3 className="mt-5 text-xl font-semibold tracking-tight text-navy">
                        {s.name}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                        {s.text}
                      </p>
                    </article>
                  );
                })}
              </div>
              <div aria-hidden className="mt-5 flex gap-1.5">
                {processStages.map((s, i) => (
                  <span
                    key={s.name}
                    className={cn(
                      "h-[3px] flex-1 rounded-full transition-colors duration-300",
                      i <= activeStage ? "bg-gradient-to-r from-amber to-ember" : "bg-navy/10",
                    )}
                  />
                ))}
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
                className="bd-cta-drift pointer-events-none absolute inset-[-20%]"
                style={{
                  background:
                    "radial-gradient(40% 60% at 15% 25%, rgba(74,115,255,0.4) 0%, transparent 65%), radial-gradient(40% 60% at 85% 75%, rgba(58,241,255,0.25) 0%, transparent 70%)",
                }}
              />
              <div
                aria-hidden
                className="grid-faint bd-cta-grid pointer-events-none absolute inset-[-80px] opacity-70"
              />
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 1200 340"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
              >
                <path
                  className="bd-cta-dash"
                  d="M-60 260 C 260 220, 480 90, 800 110 S 1140 60, 1280 40"
                  stroke="#3AF1FF"
                  strokeOpacity="0.35"
                  strokeWidth="1"
                />
                <path
                  className="bd-cta-dash2"
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
                    Good Design Creates Recognition. Great Design Creates Connection.
                  </h2>
                </Reveal>
                <Reveal delay={90}>
                  <p className="mt-7 text-lg leading-relaxed text-white/75">{closingParagraph}</p>
                </Reveal>
                <Reveal delay={150}>
                  <div className="mt-10">
                    <Link to="/contact" className="btn-primary group">
                      Start a Design Project
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
