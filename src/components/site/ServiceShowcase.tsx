import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  Camera,
  Layers,
  MonitorSmartphone,
  PenTool,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import type { ServiceKey } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import imgBrand from "@/assets/homepageservices/svc-brand-design.jpg";
import imgWeb from "@/assets/homepageservices/svc-web-development.jpeg";
import imgSoftware from "@/assets/homepageservices/svc-software-solutions.jpg";
import imgAi from "@/assets/homepageservices/svc-ai-automation.jpg";
import imgMarketing from "@/assets/homepageservices/svc-marketing-growth.jpg";
import imgMedia from "@/assets/homepageservices/svc-media-production.jpg";

interface ShowcaseItem {
  no: string;
  slug: ServiceKey;
  title: string;
  headline: string;
  description: string;
  cta: string;
  icon: LucideIcon;
  image: string;
  alt: string;
}

const items: ShowcaseItem[] = [
  {
    no: "01",
    slug: "brand-design",
    title: "Brand & Design",
    headline: "Build a brand people recognise and remember.",
    description:
      "From logos and visual identities to UI/UX and digital design, we create brands and experiences that communicate clearly, look distinctive and remain consistent across every touchpoint.",
    cta: "Explore Brand & Design",
    icon: PenTool,
    image: imgBrand,
    alt: "Brand identity and visual design system laid out across print and digital collateral",
  },
  {
    no: "02",
    slug: "web-and-app-development",
    title: "Web & App Development",
    headline: "Digital experiences designed around your business and your customers.",
    description:
      "We create responsive websites, web applications, mobile apps and e-commerce experiences that combine strong design with reliable technology.",
    cta: "Explore Web & App Development",
    icon: MonitorSmartphone,
    image: imgWeb,
    alt: "High-end website and mobile application interfaces displayed on modern devices",
  },
  {
    no: "03",
    slug: "software-solutions",
    title: "Software Solutions",
    headline: "Technology built around the way your business works.",
    description:
      "From CRM and CMS platforms to custom software, dashboards and business portals, we develop solutions that simplify operations and connect your business.",
    cta: "Explore Software Solutions",
    icon: Layers,
    image: imgSoftware,
    alt: "Business software platform and operational dashboard environment",
  },
  {
    no: "04",
    slug: "ai-and-automation",
    title: "AI & Automation",
    headline: "Make your business smarter, faster and more efficient.",
    description:
      "We develop AI-powered chatbots, assistants, agents and automated workflows that reduce repetitive work and create better customer and team experiences.",
    cta: "Explore AI & Automation",
    icon: Sparkles,
    image: imgAi,
    alt: "Intelligent automation and AI assisted workflow visual",
  },
  {
    no: "05",
    slug: "marketing-and-growth",
    title: "Marketing & Growth",
    headline: "Turn visibility into meaningful business opportunities.",
    description:
      "We help businesses build their digital presence, reach the right audiences and create marketing strategies that generate engagement, leads and growth.",
    cta: "Explore Marketing & Growth",
    icon: TrendingUp,
    image: imgMarketing,
    alt: "Digital marketing campaign performance and audience analytics",
  },
  {
    no: "06",
    slug: "media-production",
    title: "Media Production",
    headline: "Bring your brand and ideas to life.",
    description:
      "From corporate videos and promotional content to professional photography, motion graphics and animation, we create visual content designed to capture attention and communicate with impact.",
    cta: "Explore Media Production",
    icon: Camera,
    image: imgMedia,
    alt: "Cinematic media production set with professional camera equipment",
  },
];

const ROTATE_MS = 4500;
const RESUME_MS = 2500;

export function ServiceShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const current = items[active]!;
  const Icon = current.icon;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % items.length);
      setCycle((c) => c + 1);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const select = useCallback((i: number) => {
    setActive(i);
    setCycle((c) => c + 1);
    setPaused(true);
    if (resumeRef.current) clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => setPaused(false), RESUME_MS);
  }, []);

  useEffect(
    () => () => {
      if (resumeRef.current) clearTimeout(resumeRef.current);
    },
    [],
  );

  return (
    <div className="mt-10 w-full max-w-full lg:mt-12">
      {/* LARGE VISUAL CANVAS */}
      <Reveal>
        <div className="relative mx-auto w-full">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-4 -top-4 hidden h-20 w-20 border-l border-t border-azure/35 lg:block"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-4 -right-4 hidden h-20 w-20 border-b border-r border-navy/15 lg:block"
          />
          <div
            className="relative h-[470px] overflow-hidden border border-navy/10 bg-navy sm:h-[520px] lg:h-[420px]"
            style={{
              boxShadow:
                "0 40px 90px -50px color-mix(in oklab, var(--color-navy) 60%, transparent)",
            }}
          >
            {items.map((s, i) => (
              <img
                key={s.slug}
                src={s.image}
                alt={s.alt}
                loading="lazy"
                className={
                  "absolute inset-0 h-full w-full object-cover transition-all duration-[420ms] ease-out motion-reduce:transition-none " +
                  (i === active
                    ? "scale-100 opacity-100 blur-0"
                    : "scale-[1.04] opacity-0 blur-[2px]")
                }
              />
            ))}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 lg:hidden"
              style={{
                background:
                  "linear-gradient(180deg, color-mix(in oklab, var(--color-navy) 35%, transparent) 0%, color-mix(in oklab, var(--color-navy) 55%, transparent) 32%, color-mix(in oklab, var(--color-navy) 92%, transparent) 100%)",
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 hidden lg:block"
              style={{
                background:
                  "linear-gradient(180deg, color-mix(in oklab, var(--color-navy) 55%, transparent) 0%, color-mix(in oklab, var(--color-navy) 22%, transparent) 40%, color-mix(in oklab, var(--color-navy) 84%, transparent) 100%)",
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.16]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px)",
                backgroundSize: "100px 100px",
              }}
            />

            {/* top metadata */}
            <div className="absolute left-5 right-5 top-5 flex items-center justify-between sm:left-6 sm:right-6 lg:left-9 lg:right-9 lg:top-6">
              <span className="font-mono text-[0.6rem] tracking-[0.28em] text-white/70 sm:text-[0.66rem] sm:tracking-[0.3em]">
                NEXEN / DIGITAL CAPABILITY {current.no}
              </span>
              <span className="hidden items-center gap-3 sm:flex">
                <Icon aria-hidden strokeWidth={1.3} className="h-4 w-4 text-cyan/80" />
                <span aria-hidden className="h-px w-16 bg-white/25" />
              </span>
            </div>

            {/* overlay title block */}
            <div
              key={current.slug}
              className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-8 lg:left-9 lg:right-9"
            >
              <div className="grid gap-3 sm:gap-4 lg:grid-cols-12 lg:items-end lg:gap-x-10">
                <div className="lg:col-span-6">
                  <span className="font-mono text-[0.6rem] tracking-[0.28em] text-cyan/80 sm:text-[0.62rem]">
                    {current.no} / 06
                  </span>
                  <h3 className="display mt-2 text-[2rem] leading-[1.04] text-white sm:text-[2.5rem] lg:text-[3rem]">
                    {current.title}
                  </h3>
                </div>
                <div className="lg:col-span-6">
                  <p className="max-w-lg text-[0.98rem] font-medium leading-snug text-white/85 sm:text-[1.05rem] lg:text-[1.2rem]">
                    {current.headline}
                  </p>
                  <p className="mt-2 max-w-lg text-[0.83rem] leading-[1.5] text-white/70 sm:text-[0.9rem] lg:text-[0.86rem] lg:leading-relaxed lg:text-white/60">
                    {current.description}
                  </p>
                  <Link
                    to="/services/$slug"
                    params={{ slug: current.slug }}
                    aria-label={current.cta}
                    className="btn-primary group mt-4 !px-5 !py-3 !text-[0.82rem] sm:!px-6 sm:!py-3.5 sm:!text-[0.9rem]"
                  >
                    {current.cta}
                    <ArrowRight
                      aria-hidden
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                    />
                  </Link>
                </div>
              </div>

              {/* compact progress indicator (mobile + tablet) */}
              <div className="mt-4 flex items-center gap-3 lg:hidden">
                <span className="font-mono text-[0.62rem] tracking-[0.26em] text-white/70">
                  {current.no} / 06
                </span>
                <span className="relative h-px flex-1 overflow-hidden bg-white/20">
                  <span
                    key={cycle}
                    className="absolute inset-y-0 left-0 w-full origin-left bg-cyan motion-reduce:hidden"
                    style={{
                      animation: paused ? "none" : `svc-progress ${ROTATE_MS}ms linear forwards`,
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* PREV / NEXT NAVIGATION — tablet + mobile only, icon-only */}
      <Reveal delay={60}>
        <div className="mt-6 flex w-full max-w-full box-border items-center justify-center gap-12 lg:hidden">
          <button
            type="button"
            onClick={() => select((active - 1 + items.length) % items.length)}
            aria-label="Previous service"
            className="group inline-flex h-12 w-12 items-center justify-center bg-transparent"
          >
            <ArrowLeft
              aria-hidden
              className="h-8 w-8 text-[#FF6E3F] transition-all duration-300 group-hover:-translate-x-[3px] group-hover:text-[#FFA53C] motion-reduce:transition-none"
            />
          </button>
          <button
            type="button"
            onClick={() => select((active + 1) % items.length)}
            aria-label="Next service"
            className="group inline-flex h-12 w-12 items-center justify-center bg-transparent"
          >
            <ArrowRight
              aria-hidden
              className="h-8 w-8 text-[#FF483F] transition-all duration-300 group-hover:translate-x-[3px] group-hover:text-[#FFA53C] motion-reduce:transition-none"
            />
          </button>
        </div>
      </Reveal>

      {/* HORIZONTAL SERVICE NAVIGATION (desktop only) */}
      <Reveal delay={80}>
        <nav aria-label="Services" className="mt-6 hidden w-full max-w-full lg:mt-7 lg:block">
          <ul className="flex border-t border-border">
            {items.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.slug} className="min-w-0 flex-1 border-r border-border last:border-r-0">
                  <button
                    type="button"
                    onMouseEnter={() => select(i)}
                    onFocus={() => select(i)}
                    onClick={() => select(i)}
                    aria-pressed={isActive}
                    className="group relative block w-full px-4 py-4 text-left outline-none"
                  >
                    <span
                      aria-hidden
                      className={
                        "absolute left-0 top-[-1px] h-px w-full origin-left bg-azure transition-transform duration-300 motion-reduce:transition-none " +
                        (isActive ? "scale-x-100" : "scale-x-0")
                      }
                    />
                    <span className="flex min-w-0 items-center gap-2">
                      <span
                        className={
                          "shrink-0 font-mono text-[0.62rem] leading-5 tracking-[0.24em] transition-colors duration-300 " +
                          (isActive ? "text-azure" : "text-muted-foreground")
                        }
                      >
                        {s.no}
                      </span>
                      <span
                        className={
                          "min-w-0 text-[0.82rem] font-semibold uppercase leading-tight tracking-[0.04em] transition-colors duration-300 " +
                          (isActive ? "text-navy" : "text-navy/40 group-hover:text-navy/70")
                        }
                      >
                        {s.title}
                      </span>
                      <ArrowUpRight
                        aria-hidden
                        strokeWidth={1.5}
                        className={
                          "mt-0.5 h-3.5 w-3.5 shrink-0 transition-all duration-300 motion-reduce:transition-none " +
                          (isActive
                            ? "text-azure opacity-100"
                            : "-translate-x-1 translate-y-1 opacity-0")
                        }
                      />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </Reveal>
    </div>
  );
}
