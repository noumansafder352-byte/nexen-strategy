import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaSection } from "@/components/site/CtaSection";
import { Reveal } from "@/components/site/Reveal";
import { MockupComposition } from "@/components/site/MockupComposition";
import { cn } from "@/lib/utils";
import gatdMobile from "@/assets/portfolio/gatd-mobile-3.png";
import gatdLaptop from "@/assets/portfolio/gatd-laptop-2.png";
import gatdThird from "@/assets/portfolio/gatd-img3-3.png";
import mohsanLaptop from "@/assets/portfolio/mohsan-laptop.png";
import mohsanMobile from "@/assets/portfolio/mohsan-mobile.png";
import mohsanThird from "@/assets/portfolio/mohsan-img3.png";
import drshahidLaptop from "@/assets/portfolio/drshahid-laptop-2.png";
import drshahidMobile from "@/assets/portfolio/drshahid-mobile-2.png";
import drshahidThird from "@/assets/portfolio/drshahid-img3.png";
import royaLaptop from "@/assets/portfolio/roya-laptop.png";
import royaMobile from "@/assets/portfolio/roya-mobile.png";
import royaMobile2 from "@/assets/portfolio/roya-mobile-2.png";
import royaThird from "@/assets/portfolio/roya-img3.png";
import drsarfrazLaptop from "@/assets/portfolio/drsarfraz-laptop.png";
import drsarfrazMobile from "@/assets/portfolio/drsarfraz-mobile-2.png";
import drsarfrazThird from "@/assets/portfolio/drsarfraz-img3-2.png";
import smmPrimary from "@/assets/portfolio/Dr-Shahid-Posts-Mockup.jpg";
import smmSupport1 from "@/assets/portfolio/Dr-Shahid-Posts-Mockup-2.jpg";
import smmSupport2 from "@/assets/portfolio/Dr-Shahid-Posts-Mockup-3.jpg";
import aiChatbotMain from "@/assets/pf-ai-chatbot-main.jpg";
import aiChatbotConv from "@/assets/pf-ai-chatbot-conv.jpg";
import aiChatbotAnalytics from "@/assets/pf-ai-chatbot-analytics.jpg";
import nexaflowMain from "@/assets/pf-nexaflow-main.jpg";
import nexaflowCrm from "@/assets/pf-nexaflow-crm.jpg";
import nexaflowWorkflow from "@/assets/pf-nexaflow-workflow.jpg";
import opsMain from "@/assets/pf-ops-main.jpg";
import opsWorkflow from "@/assets/pf-ops-workflow.jpg";
import opsAnalytics from "@/assets/pf-ops-analytics.jpg";
import crmMain from "@/assets/pf-crm-main.jpg";
import crmPipeline from "@/assets/pf-crm-pipeline.jpg";
import crmPortal from "@/assets/pf-crm-portal.jpg";
import aiAutoMain from "@/assets/pf-aiauto-main.jpg";
import aiAutoFlow from "@/assets/pf-aiauto-flow.jpg";
import aiAutoDash from "@/assets/pf-aiauto-dash.jpg";
import aiAssistMain from "@/assets/pf-aiassist-main.jpg";
import aiAssistTasks from "@/assets/pf-aiassist-tasks.jpg";
import aiAssistInsights from "@/assets/pf-aiassist-insights.jpg";
import hitech1 from "@/assets/portfolio/hitech-profile-1.jpg";
import roya1 from "@/assets/portfolio/roya-profile-1.jpg";
import roya2 from "@/assets/portfolio/roya-profile-2.jpg";
import roya3 from "@/assets/portfolio/roya-profile-3.jpg";
import shazia1 from "@/assets/portfolio/shazia-profile-1.jpg";
import logoCst from "@/assets/portfolio/logo-cst.jpg";
import logoHirex from "@/assets/portfolio/logo-hirex.jpg";
import logoRoya from "@/assets/portfolio/logo-roya.jpg";
import shazia2 from "@/assets/portfolio/shazia-profile-2.jpg";
import shazia3 from "@/assets/portfolio/shazia-profile-3.jpg";
import hitech2 from "@/assets/portfolio/hitech-profile-2.jpg";
import hitech3 from "@/assets/portfolio/hitech-profile-3.jpg";
import umami2 from "@/assets/portfolio/umami-2.jpg";
import umami1 from "@/assets/portfolio/umami-1.jpg";
import umami3 from "@/assets/portfolio/umami-3.jpg";
import mediaShoot1 from "@/assets/portfolio/media-img1.png";
import mediaShoot2 from "@/assets/portfolio/media-img2.png";
import mediaShoot3 from "@/assets/portfolio/media-img4.png";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Nexen Strategy" },
      {
        name: "description",
        content:
          "Selected digital solutions, technology platforms and business-focused projects built by Nexen Strategy to help organisations launch, transform, automate and grow.",
      },
      {
        property: "og:title",
        content: "Solutions Built for Real Business Challenges — Nexen Strategy",
      },
      {
        property: "og:description",
        content:
          "Digital experiences, software, AI and automation, brand, growth and media projects built around how businesses operate.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

type PortfolioCategory =
  | "Brand & Design"
  | "Web & App Development"
  | "Software Solutions"
  | "AI & Automation"
  | "Marketing & Growth"
  | "Media Production";

type Project = {
  id: string;
  number: string;
  category: PortfolioCategory;
  title: string;
  description: string;
  capabilities: string[];
  images: string[];
  layout: "layered" | "simple";
  frameColor?: "white" | "navy" | "black";
  ratios?: string[] | undefined;
  thirdImageClassName?: string | undefined;
  href: string;
};

const projects: Project[] = [
  {
    id: "gatd-web-experience",
    number: "01",
    category: "Web & App Development",
    title: "Digital Experiences Built Around Business Goals",
    description:
      "A modern digital experience designed to communicate the business clearly, improve customer journeys and create a stronger digital foundation for growth.",
    capabilities: ["Strategy", "UX/UI", "Web Development"],
    images: [gatdLaptop, gatdMobile, gatdThird],
    layout: "layered",
    href: "/contact",
  },
  {
    id: "roya-web-experience",
    number: "02",
    category: "Web & App Development",
    title: "A Responsive Digital Experience Engineered End to End",
    description:
      "A responsive digital experience designed around business goals, usability and modern technology — combining clear communication, intuitive journeys and a scalable foundation built to support growth.",
    capabilities: ["Web Design", "UX/UI", "Web Development"],
    images: [royaLaptop, royaMobile2, royaThird],
    layout: "layered",
    ratios: ["1527/797", "528/930", "1275/811"],
    href: "/contact",
  },
  {
    id: "hightech-brand-profile",
    number: "04",
    category: "Brand & Design",
    title: "Building a Stronger Brand Identity for Hightech",
    description:
      "We developed a distinctive brand identity for Hightech and designed a professional company profile that brings its brand, services and capabilities together into a clear and cohesive visual presentation.",
    capabilities: ["Branding", "Visual Identity", "Company Profile"],
    images: [hitech1, hitech2, hitech3],
    layout: "simple",
    href: "/contact",
  },
  {
    id: "nexaflow-platform",
    number: "03",
    category: "Software Solutions",
    title: "One Platform. Complete Control Over Your Operations.",
    description:
      "A custom business management platform designed to centralise operations, customer information, workflows and reporting in one connected environment, giving teams better visibility and control over everyday business processes.",
    capabilities: ["Custom Software", "Business Management", "Dashboards & Integrations"],
    images: [nexaflowMain, nexaflowCrm, nexaflowWorkflow],
    layout: "simple",
    href: "/contact",
  },
  {
    id: "business-operations-platform",
    number: "13",
    category: "Software Solutions",
    title: "Business Operations Platform",
    description:
      "A centralized software platform designed to simplify business operations, connect information and give teams better control over everyday workflows.",
    capabilities: ["Custom Software", "Business Platforms", "Dashboard Development"],
    images: [opsMain, opsWorkflow, opsAnalytics],
    layout: "simple",
    href: "/contact",
  },
  {
    id: "customer-management-system",
    number: "14",
    category: "Software Solutions",
    title: "Customer Management System",
    description:
      "A scalable customer management solution designed to organize customer information, streamline communication and improve internal processes.",
    capabilities: ["CRM Solutions", "Custom Software", "System Integration"],
    images: [crmMain, crmPipeline, crmPortal],
    layout: "simple",
    href: "/contact",
  },
  {
    id: "ai-customer-support-chatbot",
    number: "05",
    category: "AI & Automation",
    title: "AI Chatbot Built for Smarter Customer Support",
    description:
      "An intelligent AI chatbot designed to help businesses automate customer conversations, provide instant answers and guide users toward the right information or action.",
    capabilities: ["AI Chatbots", "Conversational AI", "Customer Support Automation"],
    images: [aiChatbotMain, aiChatbotConv, aiChatbotAnalytics],
    layout: "simple",
    href: "/contact",
  },
  {
    id: "intelligent-workflow-automation",
    number: "16",
    category: "AI & Automation",
    title: "Intelligent Workflow Automation",
    description:
      "An AI-powered automation platform designed to reduce repetitive tasks, connect business processes and help teams work more efficiently.",
    capabilities: ["AI Automation", "Workflow Automation", "AI Integration"],
    images: [aiAutoMain, aiAutoFlow, aiAutoDash],
    layout: "simple",
    href: "/contact",
  },
  {
    id: "ai-business-assistant",
    number: "17",
    category: "AI & Automation",
    title: "AI Business Assistant",
    description:
      "An intelligent assistant solution designed to help teams access information, complete everyday tasks and make better use of business data.",
    capabilities: ["AI Assistants", "AI Agents", "Business Automation"],
    images: [aiAssistMain, aiAssistTasks, aiAssistInsights],
    layout: "simple",
    href: "/contact",
  },
  {
    id: "dr-shahid-social-growth",
    number: "06",
    category: "Marketing & Growth",
    title: "Growing Digital Visibility Through Social Media",
    description:
      "We manage social media marketing for Dr Shahid Mahmud Child & Neuro Clinic, creating consistent, engaging content across multiple social media platforms to strengthen their digital presence, connect with the right audience and drive meaningful results.",
    capabilities: ["Social Media Marketing", "Content Strategy", "Multi-Platform Growth"],
    images: [smmPrimary, smmSupport1, smmSupport2],
    layout: "simple",
    href: "/contact",
  },
  {
    id: "dr-shoaib-video-production",
    number: "07",
    category: "Media Production",
    title: "Social Media Video Production for Dr Shoaib Ahmed",
    description:
      "We produced professional video content for Dr Shoaib Ahmed, creating engaging visuals specifically designed for social media platforms. From production and shooting to creating content suited for digital audiences, the work was focused on building a stronger and more engaging social media presence.",
    capabilities: ["Video Production", "Social Media Content", "Creative Direction"],
    images: [mediaShoot1, mediaShoot2, mediaShoot3],
    layout: "simple",
    href: "/contact",
  },
  {
    id: "mohsan-web-experience",
    number: "08",
    category: "Web & App Development",
    title: "Digital Experiences Built for Modern Businesses",
    description:
      "A responsive digital experience designed to create a seamless journey across devices, strengthen the digital presence and support meaningful business growth.",
    capabilities: ["Strategy", "UX/UI", "Web Development"],
    images: [mohsanLaptop, mohsanMobile, mohsanThird],
    layout: "layered",
    ratios: ["1567/922", "532/895", "1267/893"],
    href: "/contact",
  },
  {
    id: "dr-shahid-web-experience",
    number: "09",
    category: "Web & App Development",
    title: "Digital Experiences Built for Modern Businesses",
    description:
      "A responsive digital experience designed around usability, performance and the evolving needs of modern businesses.",
    capabilities: ["Web Design", "UX/UI", "Web Development"],
    images: [drshahidLaptop, drshahidMobile, drshahidThird],
    layout: "layered",
    ratios: ["945/593", "517/890", "846/548"],
    thirdImageClassName: "!p-0",
    href: "/contact",
  },
  {
    id: "dr-sarfraz-web-experience",
    number: "10",
    category: "Web & App Development",
    title: "Digital Experiences Built for Modern Businesses",
    description:
      "A responsive digital solution designed around usability, performance and a seamless experience across modern devices.",
    capabilities: ["Web Design", "UX/UI", "Web Development"],
    images: [drsarfrazLaptop, drsarfrazMobile, drsarfrazThird],
    layout: "layered",
    ratios: ["1277/832", "532/892", "836/668"],
    href: "/contact",
  },
  {
    id: "roya-brand-profile",
    number: "11",
    category: "Brand & Design",
    title: "A Professional Company Profile for RoyaVentures",
    description:
      "We designed a professional company profile for RoyaVentures, bringing its brand, services and capabilities together into a clear, structured and visually engaging presentation.",
    capabilities: ["Company Profile", "Brand Presentation", "Visual Design"],
    images: [roya1, roya2, roya3],
    layout: "simple",
    href: "/contact",
  },
  {
    id: "shazia-brand-profile",
    number: "12",
    category: "Brand & Design",
    title: "Creating a Distinctive Company Profile for Shazia Boutique",
    description:
      "We designed a polished company profile for Shazia Boutique, creating a cohesive visual presentation that communicates the brand, its offerings and its identity with clarity and sophistication.",
    capabilities: ["Company Profile", "Brand Identity", "Visual Presentation"],
    images: [shazia1, shazia2, shazia3],
    layout: "simple",
    href: "/contact",
  },
  {
    id: "logo-identity-collection",
    number: "13",
    category: "Brand & Design",
    title: "Distinctive Logos Built to Be Remembered",
    description:
      "A collection of custom logo identities designed to give businesses a clear, distinctive and memorable visual presence.",
    capabilities: ["Logo Design", "Visual Identity", "Brand Identity"],
    images: [logoCst, logoHirex, logoRoya],
    layout: "simple",
    href: "/contact",
  },
  {
    id: "umami-social-growth",
    number: "15",

    category: "Marketing & Growth",
    title: "Building a Stronger Social Presence for Umami",
    description:
      "We delivered social media marketing for Umami, creating engaging content and a consistent digital presence across social platforms to strengthen brand visibility, connect with the right audience and support ongoing growth.",
    capabilities: ["Social Media Marketing", "Content Strategy", "Social Media Growth"],
    images: [umami1, umami2, umami3],
    layout: "simple",
    href: "/contact",
  },
];

function ProjectSection({ p, index, first }: { p: Project; index: number; first?: boolean }) {
  const imageRight = index % 2 === 1;

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-white pb-14 lg:pb-20",
        first ? "pt-8 lg:pt-12" : "pt-14 lg:pt-20",
      )}
    >
      <div className="relative mx-auto w-full max-w-[1400px] min-w-0 px-6 lg:px-12">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-12 lg:gap-x-16">
          {/* Category — shown above the visuals on mobile only */}
          <div className="flex min-w-0 items-center gap-4 lg:hidden">
            <span className={"h-px w-8 bg-gradient-to-r from-amber to-ember"} />
            <span className={"eyebrow text-[0.65rem] text-azure"}>{p.category}</span>
          </div>

          {/* Mockups */}
          <Reveal
            className={cn(
              "min-w-0 lg:col-span-7",
              imageRight ? "lg:order-2 lg:col-start-6" : "lg:order-1",
            )}
          >
            <MockupComposition
              images={p.images}
              alt={p.title}
              flip={imageRight}
              layout={p.layout}
              frameColor={p.frameColor ?? "white"}
              ratios={p.ratios}
              thirdImageClassName={p.thirdImageClassName}
            />
          </Reveal>

          {/* Content */}
          <Reveal
            delay={120}
            className={cn(
              "min-w-0 lg:col-span-5 lg:-mt-10",
              imageRight ? "lg:order-1 lg:col-start-1" : "lg:order-2",
            )}
          >
            <div className="hidden items-center gap-4 lg:flex">
              <span className={"h-px w-8 bg-gradient-to-r from-amber to-ember"} />
              <span className={"eyebrow text-[0.65rem] text-azure"}>{p.category}</span>
            </div>

            <h2 className="display mt-6 text-[1.9rem] leading-[1.1] text-navy sm:text-[2.4rem] lg:text-[2.7rem]">
              {p.title}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {p.description}
            </p>

            <p className="mt-7 text-sm tracking-wide text-muted-foreground">
              {p.capabilities.join("  ·  ")}
            </p>

            <span
              aria-hidden
              className={"mt-3 block h-px w-24 bg-gradient-to-r from-amber to-ember"}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const filters = [
  "All",
  "Brand & Design",
  "Web & App Development",
  "Software Solutions",
  "AI & Automation",
  "Marketing & Growth",
  "Media Production",
] as const;

function PortfolioPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible =
    active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <>
      <Header overHero />
      <main className="bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy pt-[11.75rem] pb-24 lg:pt-52 lg:pb-32">
          <div aria-hidden className="grid-faint absolute inset-0" />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/3 top-[-25%] h-[560px] w-[560px] rounded-full opacity-25 blur-[150px]"
            style={{ background: "radial-gradient(circle, #3AF1FF 0%, transparent 70%)" }}
          />
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            preserveAspectRatio="none"
            viewBox="0 0 1440 720"
          >
            <path
              d="M-100 520 C 320 470, 520 190, 900 160 S 1420 90, 1560 60"
              fill="none"
              stroke="#3AF1FF"
              strokeOpacity="0.22"
              strokeWidth="1"
            />
            <path
              d="M-100 220 C 360 300, 620 600, 1080 560 S 1440 500, 1560 480"
              fill="none"
              stroke="#4A73FF"
              strokeOpacity="0.3"
              strokeWidth="1"
            />
          </svg>
          <span
            aria-hidden
            className="ghost-type absolute -left-6 bottom-0 text-[7rem] text-white/[0.03] lg:text-[14rem]"
          >
            NEXEN
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="eyebrow text-cyan">Portfolio</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-8 max-w-4xl text-[2.6rem] text-white sm:text-6xl lg:text-[4.6rem]">
                Solutions Built for Real Business Challenges.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
                Explore selected digital solutions, technology experiences and business-focused
                projects we've built to help organisations launch, transform, automate and grow.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <Link to="/contact" className="btn-primary group mt-10">
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Selected work intro */}
        <section className="mx-auto max-w-[1400px] px-6 pt-16 pb-6 lg:px-12 lg:pt-24 lg:pb-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-x-16">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow text-azure">Selected Work</p>
              <h2 className="display mt-5 text-[2rem] text-navy sm:text-[2.6rem] lg:text-[3.1rem]">
                Technology, Creativity & Solutions Built Around Business Needs.
              </h2>
            </Reveal>
            <Reveal delay={110} className="lg:col-span-5">
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                From digital experiences and software solutions to AI, automation, branding and
                growth-focused platforms, our work is designed around how businesses operate and
                where they want to go next.
              </p>
            </Reveal>
          </div>
          <span aria-hidden className="mt-12 block h-px w-full bg-border lg:mt-16" />
          {/* Service filter tabs */}
          <div className="mt-14 min-w-0 max-w-full lg:mt-20">
            <style>{`
              @keyframes pf-in{0%{opacity:0;transform:translateY(14px)}100%{opacity:1;transform:translateY(0)}}
              .pf-item{animation:pf-in 460ms cubic-bezier(.22,.61,.36,1) both}
              @media (prefers-reduced-motion: reduce){.pf-item{animation:none !important}}
            `}</style>
            <div className="grid grid-cols-2 gap-2 place-items-center sm:grid-cols-3 lg:flex lg:flex-nowrap lg:justify-center lg:gap-1.5 xl:gap-3">
              {filters.map((f) => {
                const on = f === active;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setActive(f)}
                    aria-pressed={on}
                    className={cn(
                      "w-full rounded-full border px-4 py-2.5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.12em] transition-all duration-300 lg:w-auto lg:px-3 lg:text-[0.62rem] lg:tracking-[0.08em] xl:px-5 xl:text-[0.75rem] xl:tracking-[0.12em]",
                      on
                        ? "border-transparent text-white shadow-[0_12px_30px_-14px_rgba(255,72,63,0.85)]"
                        : "border-border bg-transparent text-muted-foreground hover:border-azure/40 hover:text-navy",
                    )}
                    style={
                      on ? { backgroundImage: "linear-gradient(90deg,#FFA53C,#FF483F)" } : undefined
                    }
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Only the active category is mounted, so filtered projects never reserve layout space. */}
        <div key={active}>
          {visible.map((p, i) => (
            <div key={p.id} className="pf-item" style={{ animationDelay: `${i * 70}ms` }}>
              <ProjectSection p={p} index={i} first={i === 0} />
              {i < visible.length - 1 && (
                <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                  <span aria-hidden className="block h-px w-full bg-border" />
                </div>
              )}
            </div>
          ))}

          {visible.length === 0 && (
            <div className="mx-auto max-w-[1400px] px-6 py-24 text-center lg:px-12 lg:py-32">
              <p className="text-lg text-muted-foreground">More projects coming soon.</p>
            </div>
          )}
        </div>

        <div className="pt-10 lg:pt-16" />

        <CtaSection
          eyebrow="Your project"
          heading="Have an Idea? Let's Build What's Next."
          body="Whether you're launching a new digital product, modernising your website, automating your operations or looking to accelerate growth, we're ready to help."
          ctaLabel="Start a Conversation"
        />
      </main>
      <Footer />
    </>
  );
}
