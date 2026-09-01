import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import royaWeb from "@/assets/roya-laptop.png";
import hitechBrand from "@/assets/hitech-profile-1.jpg";
import drShahidSocial from "@/assets/Dr-Shahid-Posts-Mockup.jpg";
import umamiSocial from "@/assets/umami-1.jpg";

const projects = [
  {
    title: "Roya Ventures",
    sector: "Investment & Advisory",
    category: "Web & App Development",
    summary:
      "A responsive digital experience engineered end to end — clear communication, intuitive journeys and a scalable foundation built to support growth.",
    image: royaWeb,
  },
  {
    title: "Hightech",
    sector: "Industrial Engineering",
    category: "Brand & Design",
    summary:
      "Brand identity and a professional company profile that brings Hightech's identity, services and capabilities together through a clear, cohesive visual system.",
    image: hitechBrand,
  },
  {
    title: "Dr Shahid Mahmud Clinic",
    sector: "Healthcare",
    category: "Social Media Marketing",
    summary:
      "Social media marketing across multiple platforms — consistent content, increased visibility and strong engagement and audience growth for the clinic.",
    image: drShahidSocial,
  },
  {
    title: "Umami",
    sector: "UK · Hospitality",
    category: "Social Media Marketing",
    summary:
      "We delivered social media marketing for Umami, creating engaging content and a consistent digital presence designed to strengthen visibility, connect with the right audience and support brand growth.",
    image: umamiSocial,
  },
];

const ROTATE_MS = 5500;

export function PortfolioPreview() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % projects.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, cycle]);

  useEffect(
    () => () => {
      if (resumeRef.current) clearTimeout(resumeRef.current);
    },
    [],
  );

  const select = useCallback((i: number) => {
    setActive(i);
    setCycle((c) => c + 1);
    setPaused(true);
    if (resumeRef.current) clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => setPaused(false), 2500);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const el = sectionRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--pp-x", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--pp-y", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  const safeActive = active < projects.length ? active : 0;
  const p = projects[safeActive]!;

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMove}
      className="pp relative overflow-hidden"
      style={{ backgroundColor: "#010C62" }}
    >
      <style>{`
        .pp{--pp-x:50%;--pp-y:35%}
        @keyframes pp-a{0%{transform:translate3d(-6%,-4%,0) scale(1)}50%{transform:translate3d(8%,5%,0) scale(1.12)}100%{transform:translate3d(-6%,-4%,0) scale(1)}}
        @keyframes pp-b{0%{transform:translate3d(5%,6%,0) scale(1.08)}50%{transform:translate3d(-7%,-3%,0) scale(1)}100%{transform:translate3d(5%,6%,0) scale(1.08)}}
        @keyframes pp-grid{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(0,-72px,0)}}
        @keyframes pp-dash{to{stroke-dashoffset:-1600}}
        @keyframes pp-pulse{0%,100%{opacity:.05}50%{opacity:.16}}
        @keyframes pp-in{0%{opacity:0;transform:scale(1.035)}100%{opacity:1;transform:scale(1)}}
        @keyframes pp-rise{0%{opacity:0;transform:translateY(12px)}100%{opacity:1;transform:translateY(0)}}
        @keyframes pp-bar{0%{transform:scaleX(0)}100%{transform:scaleX(1)}}
        .pp-a{animation:pp-a 24s ease-in-out infinite}
        .pp-b{animation:pp-b 30s ease-in-out infinite}
        .pp-grid{animation:pp-grid 26s linear infinite}
        .pp-dash{stroke-dasharray:260 1400;animation:pp-dash 30s linear infinite}
        .pp-dash2{stroke-dasharray:160 1500;animation:pp-dash 42s linear infinite;animation-delay:-11s}
        .pp-pulse{animation:pp-pulse 18s ease-in-out infinite}
        .pp-img{animation:pp-in 620ms cubic-bezier(.22,.61,.36,1) both}
        .pp-rise{animation:pp-rise 520ms cubic-bezier(.22,.61,.36,1) both}
        .pp-bar{transform-origin:left;animation:pp-bar ${ROTATE_MS}ms linear forwards}
        .pp-bar-paused{transform-origin:left;transform:scaleX(0)}
        @media (prefers-reduced-motion: reduce){
          .pp-a,.pp-b,.pp-grid,.pp-dash,.pp-dash2,.pp-pulse,.pp-img,.pp-rise,.pp-bar{animation:none !important}
        }
      `}</style>

      {/* motion background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-[-20%]">
          <div
            className="pp-a absolute left-[-8%] top-[-18%] h-[760px] w-[760px] rounded-full opacity-40 blur-[190px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 68%)" }}
          />
          <div
            className="pp-b absolute bottom-[-22%] right-[-10%] h-[680px] w-[680px] rounded-full opacity-25 blur-[200px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
          />
          <div
            className="pp-pulse absolute left-[42%] top-[6%] hidden h-[420px] w-[420px] rounded-full blur-[170px] lg:block"
            style={{ background: "radial-gradient(circle, #3AF1FF 0%, transparent 70%)" }}
          />
        </div>

        {/* cursor-follow glow (desktop) */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "radial-gradient(420px circle at var(--pp-x) var(--pp-y), rgba(58,241,255,0.07), transparent 70%)",
            transition: "background-position 600ms ease-out",
          }}
        />

        <div className="absolute inset-0 opacity-60 [mask-image:radial-gradient(120%_90%_at_50%_20%,black,transparent_78%)]">
          <div
            className="pp-grid absolute inset-x-0 -top-[72px] bottom-[-72px]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
        </div>

        <svg
          className="absolute inset-0 hidden h-full w-full lg:block"
          preserveAspectRatio="none"
          viewBox="0 0 1440 900"
        >
          <path
            className="pp-dash"
            d="M-100 690 C 320 640, 520 300, 900 250 S 1420 150, 1560 120"
            fill="none"
            stroke="#3AF1FF"
            strokeOpacity="0.25"
            strokeWidth="1"
          />
          <path
            className="pp-dash2"
            d="M-100 300 C 360 380, 620 720, 1080 700 S 1440 640, 1560 620"
            fill="none"
            stroke="#4A73FF"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
        </svg>

        <span className="ghost-type absolute -left-6 bottom-4 text-[6rem] text-white/[0.022] sm:text-[12rem] lg:text-[15rem]">
          NEXEN
        </span>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-24">
        {/* Intro */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-x-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow" style={{ color: "#3AF1FF" }}>
              Portfolio Preview
            </p>
            <span
              aria-hidden
              className="mt-4 block h-px w-14 bg-gradient-to-r from-[#4A73FF] to-[#3AF1FF]"
            />
            <h2
              className="display mt-5 text-white"
              style={{ fontSize: "clamp(2.4rem, 4.6vw, 4.6rem)", lineHeight: 1.04 }}
            >
              Ideas Built Into Real Experiences.
            </h2>
          </Reveal>
          <Reveal delay={110} className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-md text-[0.96rem] leading-relaxed text-white/65">
              Explore selected projects where strategy, design, technology and creativity came
              together to solve real business challenges.
            </p>
            <Link to="/portfolio" className="btn-primary group mt-6">
              View Our Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Showcase */}
        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:items-center lg:gap-x-14">
          {/* Image */}
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center gap-4">
              <span className="eyebrow text-[0.62rem] text-white/50">
                {String(safeActive + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
              <span className="h-px flex-1 bg-white/10">
                <span
                  key={`${safeActive}-${cycle}-${paused}`}
                  className={cn("block h-px", paused ? "pp-bar-paused" : "pp-bar")}
                  style={{ background: "linear-gradient(90deg,#4A73FF,#3AF1FF)" }}
                />
              </span>
            </div>

            <Link
              to="/portfolio"
              className="group relative block overflow-hidden border border-white/10 transition-colors duration-500 hover:border-[#3AF1FF]/40"
              style={{ boxShadow: "0 30px 80px -40px rgba(0,0,0,0.8)" }}
            >
              <img
                key={p.image}
                src={p.image}
                alt={`${p.title} — ${p.category} case study`}
                loading="lazy"
                className="pp-img h-[240px] w-full object-cover object-center transition-transform duration-[600ms] ease-out group-hover:scale-[1.02] sm:h-[320px] lg:h-[400px]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(1,12,98,0.10) 0%, rgba(1,12,98,0.55) 100%)",
                }}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 opacity-0 transition-all duration-[900ms] ease-out group-hover:left-[110%] group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(58,241,255,0.16), transparent)",
                }}
              />
              <span
                aria-hidden
                className="absolute left-0 top-0 h-6 w-6 border-l border-t border-[#3AF1FF]/50"
              />
              <span
                aria-hidden
                className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-[#3AF1FF]/50"
              />
            </Link>
          </div>

          {/* Info */}
          <div className="lg:col-span-5">
            <div key={safeActive} className="pp-rise">
              <p className="eyebrow text-[0.6rem] text-white/45">
                {String(safeActive + 1).padStart(2, "0")} / Selected Work
              </p>
              <p className="eyebrow mt-4 text-[0.64rem]" style={{ color: "#3AF1FF" }}>
                {p.sector} · {p.category}
              </p>
              <h3 className="display mt-3 text-[2rem] text-white sm:text-[2.6rem] lg:text-[3rem]">
                {p.title}
              </h3>
              <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-white/65">
                {p.summary}
              </p>
              <Link to="/portfolio" className="btn-primary group mt-7">
                View Case Study
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 grid grid-cols-1 gap-px border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((proj, i) => {
            const on = i === safeActive;
            return (
              <button
                key={proj.title}
                type="button"
                onClick={() => select(i)}
                onMouseEnter={() => select(i)}
                className="group relative flex items-baseline gap-4 border-b border-white/10 py-5 text-left sm:border-b-0 sm:pr-6"
              >
                <span
                  className={cn(
                    "eyebrow text-[0.6rem] transition-colors duration-300",
                    on ? "" : "text-white/35",
                  )}
                  style={on ? { color: "#3AF1FF" } : undefined}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "text-[0.98rem] font-semibold tracking-tight transition-colors duration-300",
                    on ? "text-white" : "text-white/45 group-hover:text-white/80",
                  )}
                >
                  {proj.title}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-0 top-0 h-px w-full origin-left transition-transform duration-500",
                    on ? "scale-x-100" : "scale-x-0",
                  )}
                  style={{ background: "linear-gradient(90deg,#4A73FF,#3AF1FF)" }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
