import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Bot, BrainCircuit, Sparkles } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { HeroScale } from "@/components/site/HeroScale";
import { cn } from "@/lib/utils";

import aiHeroMain from "@/assets/services/ai-automation/ai-hero-main.jpg";
import aiHeroPanel from "@/assets/services/ai-automation/ai-hero-panel.jpg";
import aiHeroMobile from "@/assets/ai-hero-mobile.jpg";
import aiChatbots from "@/assets/services/ai-automation/ai-chatbots.jpg";
import aiAssistants from "@/assets/services/ai-automation/ai-assistants.jpg";
import aiAgents from "@/assets/services/ai-automation/ai-agents.jpg";
import aiWorkflow from "@/assets/services/ai-automation/ai-workflow.jpg";
import aiMarketing from "@/assets/services/ai-automation/ai-marketing.jpg";
import aiIntegrations from "@/assets/services/ai-automation/ai-integrations.jpg";
import aiSocialMediaAutomation from "@/assets/services/ai-automation/ai-social-media-automation.jpg";
import aiDataInsights from "@/assets/services/ai-automation/ai-data-insights.jpg";
import aiBusinessValue from "@/assets/services/ai-automation/ai-business-value.jpg";

/* ================================================================
   FINAL APPROVED CONTENT — do not alter wording
   ================================================================ */

const heroParagraphs = [
  "AI is no longer something businesses simply experiment with.",
  "We help organisations identify where AI and automation can save time, improve customer experiences and transform everyday operations.",
];

const capabilities = [
  {
    name: "AI Chatbots",
    text: "Intelligent conversational experiences that help customers find information, get support and take action.",
    img: aiChatbots,
    alt: "AI chatbot interface answering a customer question and suggesting a recommended action",
  },
  {
    name: "AI Assistants",
    text: "AI-powered assistants that help teams access information, create content and complete everyday tasks.",
    img: aiAssistants,
    alt: "AI assistant panel alongside a business dashboard retrieving information and drafting content",
  },
  {
    name: "AI Agents",
    text: "Automated AI systems capable of handling defined tasks and workflows with greater autonomy.",
    img: aiAgents,
    alt: "Autonomous AI agent run showing trigger, agent, decision, action and completed task stages",
  },
  {
    name: "Workflow Automation",
    text: "Connect processes, applications and actions to reduce repetitive manual work.",
    img: aiWorkflow,
    alt: "Automation builder canvas with trigger, process, condition, action and notification nodes",
  },
  {
    name: "Marketing Automation",
    text: "Automate parts of your customer journey, communications and lead management.",
    img: aiMarketing,
    alt: "Customer journey automation showing lead, engagement, communication, follow-up and conversion stages",
  },
  {
    name: "AI Integrations",
    text: "Connect AI capabilities with your existing websites, software and business platforms.",
    img: aiIntegrations,
    alt: "AI connected through APIs to a website, CRM, business software and analytics platforms",
  },
  {
    name: "Social Media Automation",
    text: "Automate social media content, publishing, engagement and campaign workflows to maintain a consistent digital presence with less manual effort.",
    img: aiSocialMediaAutomation,
    alt: "Social media automation platform showing content creation, scheduling, multi-platform publishing and analytics",
  },
  {
    name: "AI-Powered Data & Insights",
    text: "Use AI to analyse business information, identify patterns and turn complex data into clearer insights for better decision-making.",
    img: aiDataInsights,
    alt: "AI analytics dashboard turning business data into charts, patterns and decision insights",
  },
];

const purposeParagraphs = [
  "We focus on practical applications where AI can create measurable value.",
  "That could mean reducing repetitive work, improving response times, supporting customers around the clock or helping your team make better use of information.",
];

export const Route = createFileRoute("/services/ai-and-automation")({
  head: () => ({
    meta: [
      { title: "AI & Automation — Nexen Strategy" },
      { name: "description", content: heroParagraphs[1]!.slice(0, 155) },
      {
        property: "og:title",
        content: "Put AI to Work. | AI & Automation — Nexen Strategy",
      },
      { property: "og:description", content: heroParagraphs[0]! },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://nexen-launchpad-studio.lovable.app/services/ai-and-automation",
      },
    ],
  }),
  component: AiAutomationPage,
});

function AiAutomationPage() {
  const [activeCapability, setActiveCapability] = useState(0);
  const active = capabilities[activeCapability] ?? capabilities[0]!;

  return (
    <>
      <style>{`
        @keyframes ai-caption{0%{opacity:0;transform:translateY(8px)}100%{opacity:1;transform:translateY(0)}}
        .ai-caption{animation:ai-caption .45s ease-out both}
        @keyframes ai-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        .ai-float{animation:ai-float 9s ease-in-out infinite}
        @keyframes ai-cta-drift{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(3%,-2.5%,0) scale(1.06)}}
        .ai-cta-drift{animation:ai-cta-drift 24s ease-in-out infinite}
        @keyframes ai-cta-grid{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(-72px,-72px,0)}}
        .ai-cta-grid{animation:ai-cta-grid 40s linear infinite}
        @keyframes ai-dash{to{stroke-dashoffset:-1600}}
        .ai-dash{stroke-dasharray:160 900;animation:ai-dash 20s linear infinite}
        .ai-dash2{stroke-dasharray:120 1000;animation:ai-dash 26s linear infinite;animation-delay:-8s}
        @keyframes ai-flow{to{stroke-dashoffset:-240}}
        .ai-flow{stroke-dasharray:6 10;animation:ai-flow 6s linear infinite}
        @keyframes ai-ring{0%,100%{transform:translate(-50%,-50%) rotate(-7deg) scale(1)}50%{transform:translate(-50%,-50%) rotate(3deg) scale(1.035)}}
        .ai-ring{animation:ai-ring 18s ease-in-out infinite}
        @media (prefers-reduced-motion: reduce){.ai-caption,.ai-float,.ai-cta-drift,.ai-cta-grid,.ai-dash,.ai-dash2,.ai-flow,.ai-ring{animation:none !important}}
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
                    <p className="eyebrow text-cyan">04 — AI &amp; Automation</p>
                    <span aria-hidden className="h-px w-12 bg-gradient-to-r from-amber to-ember" />
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <h1 className="display mt-7 text-[3.2rem] leading-[1.02] text-white sm:text-6xl lg:text-[4.6rem]">
                    Put
                    <br />
                    AI to Work.
                  </h1>
                </Reveal>
                <Reveal delay={160}>
                  <div className="mt-8 space-y-5">
                    {heroParagraphs.map((p) => (
                      <p key={p} className="max-w-lg text-lg leading-relaxed text-white/70">
                        {p}
                      </p>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={230}>
                  <div className="mt-10 flex items-center gap-8">
                    <Link to="/contact" className="btn-primary group">
                      Discover What's Possible
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <span aria-hidden className="hidden h-px w-16 bg-white/20 sm:block" />
                  </div>
                </Reveal>
              </div>

              {/* ---- AI operations & automation system ---- */}
              <Reveal delay={180} className="lg:col-span-6">
                <div className="relative">
                  {/* atmospheric depth */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-16 right-0 h-[420px] w-[420px] rounded-full opacity-[0.10] blur-[130px]"
                    style={{ background: "radial-gradient(circle, #3AF1FF 0%, transparent 70%)" }}
                  />

                  {/* ===== One proportionally scaled composition at every breakpoint ===== */}
                  <HeroScale designWidth={560} className="relative">
                    <div className="relative aspect-[10/9] w-full">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute left-[54%] top-[51%] block h-[82%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] border border-cyan/10 bg-[radial-gradient(ellipse_at_58%_48%,rgba(58,241,255,0.13),transparent_58%),linear-gradient(135deg,rgba(74,115,255,0.09),transparent_62%)] shadow-[0_0_90px_rgba(58,241,255,0.08)]"
                      />
                      <span
                        aria-hidden
                        className="ai-ring pointer-events-none absolute left-[55%] top-[50%] block h-[86%] w-[94%] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] border border-white/[0.08]"
                        style={{ transform: "translate(-50%, -50%) rotate(-7deg)" }}
                      />
                      <svg
                        aria-hidden
                        className="pointer-events-none absolute inset-0 h-full w-full"
                        viewBox="0 0 100 90"
                        preserveAspectRatio="none"
                        fill="none"
                      >
                        {/* mobile → bottom rail → robot icon */}
                        <path
                          d="M30 78 L62 78 L62 84 L86 84"
                          stroke="#3AF1FF"
                          strokeOpacity="0.35"
                          strokeWidth="0.3"
                          strokeDasharray="1.4 2"
                        />
                        <path
                          className="ai-flow"
                          d="M30 78 L62 78 L62 84 L86 84"
                          stroke="#3AF1FF"
                          strokeOpacity="0.75"
                          strokeWidth="0.4"
                        />
                        {/* brain icon → down → right → down → top of mobile assistant */}
                        <path
                          d="M6 22 L6 34 L14 34 L14 42"
                          stroke="#3AF1FF"
                          strokeOpacity="0.35"
                          strokeWidth="0.3"
                          strokeDasharray="1.4 2"
                        />
                        <path
                          className="ai-flow"
                          d="M6 22 L6 34 L14 34 L14 42"
                          stroke="#3AF1FF"
                          strokeOpacity="0.75"
                          strokeWidth="0.4"
                        />
                        {/* automation panel → sparkle */}
                        <path
                          d="M97 45 L97 20"
                          stroke="#3AF1FF"
                          strokeOpacity="0.3"
                          strokeWidth="0.3"
                          strokeDasharray="1.4 2"
                        />

                        <circle cx="14" cy="42" r="0.8" fill="#3AF1FF" fillOpacity="0.7" />
                        <circle cx="62" cy="78" r="0.8" fill="#3AF1FF" fillOpacity="0.7" />
                        <circle cx="97" cy="45" r="0.8" fill="#3AF1FF" fillOpacity="0.7" />
                      </svg>

                      {/* MAIN — AI operations dashboard */}
                      <figure
                        className="absolute left-[12%] top-[8%] w-[76%] overflow-hidden rounded-2xl border border-white/25 bg-white shadow-[0_52px_90px_-34px_rgba(0,0,0,0.78),0_0_34px_-18px_rgba(58,241,255,0.5)]"
                        style={{
                          transform:
                            "perspective(1600px) rotateY(-9deg) rotateX(4deg) rotate(-1.5deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <div className="flex h-7 items-center gap-1.5 border-b border-navy/[0.07] bg-[#F7F8FC] px-3">
                          <span className="h-1.5 w-1.5 rounded-full bg-navy/15" />
                          <span className="h-1.5 w-1.5 rounded-full bg-navy/10" />
                          <span className="h-1.5 w-1.5 rounded-full bg-navy/10" />
                          <span className="ml-3 font-mono text-[8px] uppercase tracking-[0.22em] text-navy/40">
                            AI Operations
                          </span>
                          <span className="ml-auto flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#3AF1FF]" />
                            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-navy/35">
                              Live
                            </span>
                          </span>
                        </div>
                        <img
                          src={aiHeroMain}
                          alt="AI assistant working alongside a live business operations dashboard"
                          width={1280}
                          height={1024}
                          className="aspect-[5/4] w-full object-cover"
                        />
                      </figure>

                      {/* AUTOMATION FLOW — floating vertical panel, right of dashboard */}
                      <figure
                        className="absolute right-0 top-[38%] w-[30%] overflow-hidden rounded-xl border border-white/30 bg-white shadow-[0_30px_58px_-24px_rgba(0,0,0,0.8),0_0_26px_-14px_rgba(58,241,255,0.45)]"
                        style={{
                          transform:
                            "perspective(1200px) rotateY(-11deg) rotateX(3deg) rotate(2deg)",
                        }}
                      >
                        <div className="flex items-center justify-between border-b border-navy/[0.07] bg-white px-2.5 py-1.5">
                          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-navy/45">
                            Automation Flow
                          </span>
                          <span className="h-1 w-1 rounded-full bg-[#ffa53c]" />
                        </div>
                        <img
                          src={aiHeroPanel}
                          alt="Automation flow panel showing trigger, AI processing, action and outcome steps"
                          loading="lazy"
                          width={1024}
                          height={1280}
                          className="aspect-[4/5] w-full object-cover"
                        />
                      </figure>

                      {/* MOBILE AI ASSISTANT — lower-left, overlapping dashboard */}
                      <figure className="ai-float absolute bottom-[6%] left-[2%] w-[24%] overflow-hidden rounded-[1rem] border-[3px] border-white/90 bg-white shadow-[0_30px_58px_-24px_rgba(0,0,0,0.82),0_0_24px_-14px_rgba(255,165,60,0.5)]">
                        <img
                          src={aiHeroMobile}
                          alt="Mobile AI assistant showing a conversation and an automation status card"
                          loading="lazy"
                          width={720}
                          height={1280}
                          className="aspect-[9/16] w-full rounded-[0.75rem] object-cover object-center"
                        />
                      </figure>

                      {/* Floating AI markers */}
                      <span
                        aria-hidden
                        className="absolute left-0 top-[13%] flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-navy/75 shadow-[0_18px_36px_-22px_rgba(0,0,0,0.7)] backdrop-blur-sm"
                      >
                        <BrainCircuit className="h-5 w-5 text-cyan" strokeWidth={1.4} />
                      </span>
                      <span
                        aria-hidden
                        className="absolute bottom-[4%] right-[8%] flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-navy/75 shadow-[0_18px_36px_-22px_rgba(0,0,0,0.7)] backdrop-blur-sm"
                      >
                        <Bot className="h-5 w-5 text-cyan" strokeWidth={1.4} />
                      </span>
                      <span
                        aria-hidden
                        className="absolute right-[1%] top-[14%] flex h-8 w-8 items-center justify-center rounded-lg border border-white/25 bg-navy/75 shadow-[0_14px_28px_-20px_rgba(0,0,0,0.7)] backdrop-blur-sm"
                      >
                        <Sparkles className="h-4 w-4 text-[#3AF1FF]" strokeWidth={1.6} />
                      </span>
                    </div>
                  </HeroScale>
                </div>
              </Reveal>
            </div>

            {/* AI inside the business — technical strip */}
            <Reveal delay={260}>
              <ul
                aria-hidden
                className="mt-16 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 lg:mt-20"
              >
                {[
                  "Customer",
                  "AI Assistant",
                  "Business Logic",
                  "Automation",
                  "CRM",
                  "Website",
                  "Data",
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

        {/* ============ WHAT WE DELIVER ============ */}
        <section className="relative overflow-hidden border-t border-border bg-secondary/30">
          <div aria-hidden className="grid-faint-dark absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
            <Reveal className="lg:hidden">
              <p className="eyebrow text-azure">Capabilities</p>
              <h2 className="display mt-5 text-4xl text-navy">What We Deliver</h2>
            </Reveal>

            {/* ---- Desktop ---- */}
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <p className="eyebrow text-azure">Capabilities</p>
                <h2 className="display mt-5 text-4xl text-navy lg:text-5xl">What We Deliver</h2>
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
                <div key={activeCapability} className="ai-caption">
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

        {/* ============ AI WITH A BUSINESS PURPOSE ============ */}
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
                      src={aiBusinessValue}
                      alt="Business operations dashboard where AI-powered automations reduce manual processes"
                      loading="lazy"
                      width={1280}
                      height={1024}
                      className="aspect-[5/4] w-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={120} className="order-1 lg:order-2 lg:col-span-5">
                <p className="eyebrow text-azure">AI with a business purpose</p>
                <h2 className="display mt-5 text-[2rem] leading-[1.1] text-navy sm:text-4xl lg:text-[2.7rem]">
                  Not AI for the Sake of AI.
                </h2>
                <span
                  aria-hidden
                  className="mt-8 block h-px w-24 bg-gradient-to-r from-amber to-ember"
                />
                <div className="mt-9 space-y-6">
                  {purposeParagraphs.map((p) => (
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
                className="ai-cta-drift pointer-events-none absolute inset-[-20%]"
                style={{
                  background:
                    "radial-gradient(40% 60% at 15% 25%, rgba(74,115,255,0.4) 0%, transparent 65%), radial-gradient(40% 60% at 85% 75%, rgba(58,241,255,0.25) 0%, transparent 70%)",
                }}
              />
              <div
                aria-hidden
                className="grid-faint ai-cta-grid pointer-events-none absolute inset-[-80px] opacity-70"
              />
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 1200 340"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
              >
                <path
                  className="ai-dash"
                  d="M-60 260 C 260 220, 480 90, 800 110 S 1140 60, 1280 40"
                  stroke="#3AF1FF"
                  strokeOpacity="0.35"
                  strokeWidth="1"
                />
                <path
                  className="ai-dash2"
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
                    AI That Works for Your Business.
                  </h2>
                </Reveal>
                <Reveal delay={90}>
                  <p className="mt-7 text-lg leading-relaxed text-white/75">
                    Turn everyday processes into smarter, faster operations with practical AI and
                    automation solutions designed around your business needs.
                  </p>
                </Reveal>
                <Reveal delay={150}>
                  <div className="mt-10">
                    <Link to="/contact" className="btn-primary group">
                      Discover What's Possible
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
