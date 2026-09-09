// import { createFileRoute, Link } from "@tanstack/react-router";
// import { ArrowDown, ArrowRight } from "lucide-react";
// import { Header } from "@/components/site/Header";
// import { Footer } from "@/components/site/Footer";
// import { CtaSection, CtaFooterGap } from "@/components/site/CtaSection";
// import { WhyNexen } from "@/components/site/WhyNexen";
// import { Reveal } from "@/components/site/Reveal";
// import { ServiceShowcase } from "@/components/site/ServiceShowcase";
// import { ProcessTimeline } from "@/components/site/ProcessTimeline";
// import { PortfolioPreview } from "@/components/site/PortfolioPreview";
// import { ClientLogos } from "@/components/site/ClientLogos";
// import heroVideo from "@/assets/hero-bg.mp4.asset.json";
// import gatdLogo from "@/assets/gatd-logo.png.asset.json";
// import royaLogo from "@/assets/roya-ventures-logo.png.asset.json";
// import torqueLogo from "@/assets/client-torque.svg.asset.json";

// const partnerLogos = [
//   {
//     name: "GATD — Global Association for Training and Development",
//     src: gatdLogo.url,
//     cls: "max-h-14 lg:max-h-16",
//   },
//   { name: "Roya Ventures", src: royaLogo.url, cls: "max-h-16 lg:max-h-20" },
//   { name: "Torque", src: torqueLogo.url, cls: "max-h-16 lg:max-h-20" },
// ];

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: "Nexen Strategy — Build Better. Move Smarter. Grow Further." },
//       {
//         name: "description",
//         content:
//           "A UK digital solutions partner for brand, web and app development, software, AI and automation, marketing and media production.",
//       },
//       { property: "og:title", content: "Build Better. Move Smarter. Grow Further." },
//       {
//         property: "og:description",
//         content:
//           "Nexen Strategy helps established businesses build, transform and grow through strategy, design, technology and creative work.",
//       },
//       { property: "og:type", content: "website" },
//       { name: "twitter:card", content: "summary_large_image" },
//     ],
//   }),
//   component: Home,
// });

// function Home() {
//   return (
//     <>
//       <Header overHero />

//       <main>
//         <section className="min-h-screen bg-white px-6 py-32">
//           <h1 className="text-5xl font-bold text-navy">Nexen Strategy</h1>

//           <p className="mt-6 text-lg text-gray-600">Home page is rendering correctly.</p>

//           <div className="mt-10 rounded-xl bg-gray-100 p-8">
//             <p>Section 1 is working.</p>
//           </div>

//           <div className="mt-10 rounded-xl bg-gray-200 p-8">
//             <p>Section 2 is working.</p>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

// // function Home() {
// //   return (
// //     <>
// //       <Header overHero />
// //       <main>
// //         {/* 01 HERO */}
// //         <section className="relative flex min-h-[76svh] w-full flex-col overflow-hidden bg-navy lg:min-h-[83svh]">
// //           <video
// //             className="absolute inset-0 h-full w-full object-cover [object-position:center]"
// //             autoPlay
// //             muted
// //             loop
// //             playsInline
// //             preload="auto"
// //             aria-hidden="true"
// //           >
// //             <source src={heroVideo.url} type="video/mp4" />
// //           </video>
// //           {/* cinematic grade: blue wash + focused darkness behind copy */}
// //           <div
// //             aria-hidden
// //             className="absolute inset-0"
// //             style={{
// //               background:
// //                 "linear-gradient(180deg, rgba(1,12,98,0.45) 0%, rgba(1,12,98,0.08) 38%, rgba(1,12,98,0.78) 100%)",
// //             }}
// //           />
// //           <div
// //             aria-hidden
// //             className="absolute inset-0 mix-blend-multiply"
// //             style={{
// //               background: "linear-gradient(115deg, rgba(1,12,98,0.55) 0%, rgba(1,12,98,0.06) 65%)",
// //             }}
// //           />
// //           <div
// //             aria-hidden
// //             className="absolute inset-0"
// //             style={{ boxShadow: "inset 0 0 220px 60px rgba(1,12,98,0.6)" }}
// //           />
// //           <div aria-hidden className="grid-faint absolute inset-0 opacity-60" />

// //           <div className="relative mx-auto flex min-h-[76svh] w-full max-w-[1400px] flex-1 flex-col px-6 pb-8 lg:min-h-[83svh] lg:px-12 lg:pb-8">
// //             <div className="h-[15vh] min-h-[116px] shrink-0 lg:h-[21vh]" />
// //             <div>
// //               <Reveal>
// //                 <p className="eyebrow text-cyan">
// //                   Digital Solutions <span className="mx-2 text-cyan/50">•</span> Technology
// //                   <span className="mx-2 text-cyan/50">•</span> Growth
// //                 </p>
// //               </Reveal>
// //               <Reveal delay={90}>
// //                 <h1 className="display mt-6 max-w-5xl text-[2.85rem] text-white sm:text-6xl lg:text-[6rem]">
// //                   Build Better.
// //                   <br />
// //                   Move Smarter.
// //                   <br />
// //                   Grow Further.
// //                 </h1>
// //               </Reveal>
// //               <div className="mt-8 grid gap-7 lg:grid-cols-12 lg:items-end">
// //                 <Reveal delay={170} className="lg:col-span-6">
// //                   <p className="max-w-xl text-base leading-relaxed text-white/70">
// //                     Nexen Strategy helps established businesses and growing organisations design,
// //                     build and scale what comes next, across brand, digital platforms, software, AI,
// //                     marketing and media.
// //                   </p>
// //                 </Reveal>
// //                 <Reveal delay={240} className="lg:col-span-6 lg:justify-self-end">
// //                   <div className="flex flex-wrap gap-4">
// //                     <a href="#services" className="btn-primary group">
// //                       Explore Our Services
// //                       <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
// //                     </a>
// //                     <Link to="/contact" className="btn-ghost-light">
// //                       Start a Project
// //                     </Link>
// //                   </div>
// //                 </Reveal>
// //               </div>
// //             </div>
// //             <div className="flex flex-1 items-end justify-center pt-12 pb-1 lg:pt-14">
// //               <span className="flex flex-col items-center gap-2 text-white/45">
// //                 <span className="text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
// //                 <ArrowDown className="h-4 w-4 animate-bounce" />
// //               </span>
// //             </div>
// //           </div>
// //         </section>

// //         {/* WHERE WE WORK — global presence banner */}

// //         {/* 02 INTRODUCTION — typography-led editorial section */}
// //         <section className="relative overflow-hidden">
// //           <div
// //             aria-hidden
// //             className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-navy/[0.05] to-transparent"
// //           />
// //           <span
// //             aria-hidden
// //             className="ghost-type absolute -left-6 top-24 text-[7rem] text-navy/[0.025] sm:text-[13rem] lg:text-[18rem]"
// //           >
// //             NEXEN
// //           </span>
// //           <div className="relative mx-auto max-w-[1400px] px-6 pt-16 pb-20 lg:px-12 lg:pt-28 lg:pb-28">
// //             <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-12">
// //               <Reveal delay={80} className="lg:col-span-7">
// //                 <p className="eyebrow text-azure">Introduction</p>
// //                 <span
// //                   aria-hidden
// //                   className="mt-4 block h-px w-14 bg-gradient-to-r from-azure to-cyan"
// //                 />
// //                 <h2 className="display mt-6 text-[2.3rem] text-navy sm:text-5xl lg:text-[4.1rem]">
// //                   A single partner for everything digital your business depends on.
// //                 </h2>

// //                 {/* editorial statistics — inside left column */}
// //                 <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10 lg:mt-16 lg:gap-8">
// //                   {[
// //                     { k: "6", v: "Connected disciplines" },
// //                     { k: "10+", v: "Industries served" },
// //                     { k: "GLOBAL", v: "Based and accountable" },
// //                   ].map((s) => (
// //                     <div key={s.v}>
// //                       <p className="display text-[1.7rem] text-navy sm:text-[2.3rem] lg:text-[3rem]">
// //                         {s.k}
// //                       </p>
// //                       <span
// //                         aria-hidden
// //                         className="mt-4 block h-px w-10 bg-gradient-to-r from-azure to-cyan"
// //                       />
// //                       <p className="eyebrow mt-4 text-[0.62rem] text-muted-foreground">{s.v}</p>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </Reveal>
// //               <Reveal delay={150} className="lg:col-span-4 lg:col-start-9 lg:pt-22">
// //                 <p className="text-base leading-relaxed text-muted-foreground">
// //                   Businesses rarely struggle because of one missing capability. They struggle
// //                   because brand, technology, operations and marketing are being handled separately,
// //                   by people who never speak to each other.
// //                 </p>
// //                 <p className="mt-6 text-base leading-relaxed text-muted-foreground">
// //                   Nexen Strategy brings those disciplines into one connected team. One plan, one
// //                   standard, one point of accountability.
// //                 </p>
// //               </Reveal>
// //             </div>
// //           </div>
// //         </section>

// //         {/* 03 SERVICES */}
// //         <section id="services" className="scroll-mt-24 bg-white">
// //           <div className="mx-auto max-w-[1400px] px-6 pb-[5rem] pt-[3.5rem] lg:px-12 lg:pb-[6.5rem] lg:pt-[4.5rem]">
// //             <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-x-14">
// //               <Reveal className="lg:col-span-7">
// //                 <p className="eyebrow text-azure">Services</p>
// //                 <h2
// //                   className="display mt-4 text-navy"
// //                   style={{ fontSize: "clamp(2.1rem, 4vw, 4.5rem)", lineHeight: 1.04 }}
// //                 >
// //                   Everything You Need to
// //                   <br className="hidden sm:block" /> Move Digital Forward.
// //                 </h2>
// //               </Reveal>
// //               <Reveal delay={100} className="lg:col-span-4 lg:col-start-9">
// //                 <p className="text-[0.98rem] leading-relaxed text-muted-foreground">
// //                   Digital transformation doesn&rsquo;t happen through one service. It happens when
// //                   technology, creativity and business objectives work together.
// //                 </p>
// //                 <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-foreground">
// //                   At Nexen, we bring these capabilities together under one team.
// //                 </p>
// //               </Reveal>
// //             </div>
// //             <ServiceShowcase />
// //           </div>
// //         </section>

// //         {/* 04 WHY NEXEN */}
// //         <WhyNexen />

// //         {/* 05 OUR APPROACH */}
// //         <section className="relative overflow-hidden border-b border-border">
// //           <div aria-hidden className="grid-faint-dark absolute inset-0" />
// //           <div className="relative mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
// //             <Reveal className="w-full">
// //               <p className="eyebrow text-azure">Our approach</p>
// //               <h2
// //                 className="display mt-7 w-full max-w-none text-navy"
// //                 style={{ fontSize: "clamp(2.2rem, 5.6vw, 5.5rem)", lineHeight: 1.04 }}
// //               >
// //                 A process that keeps momentum without cutting corners.
// //               </h2>
// //             </Reveal>
// //             <ProcessTimeline />
// //           </div>
// //         </section>

// //         {/* 06 PORTFOLIO PREVIEW */}
// //         <PortfolioPreview />

// //         {/* 08 PARTNERS */}
// //         <section className="ptn relative overflow-hidden border-t border-border">
// //           <style>{`
// //             @keyframes ptn-a{0%{transform:translate3d(-4%,-3%,0) scale(1)}50%{transform:translate3d(6%,4%,0) scale(1.1)}100%{transform:translate3d(-4%,-3%,0) scale(1)}}
// //             @keyframes ptn-b{0%{transform:translate3d(4%,4%,0) scale(1.06)}50%{transform:translate3d(-5%,-2%,0) scale(1)}100%{transform:translate3d(4%,4%,0) scale(1.06)}}
// //             @keyframes ptn-grid{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(0,-64px,0)}}
// //             @keyframes ptn-dash{to{stroke-dashoffset:-1600}}
// //             .ptn-a{animation:ptn-a 26s ease-in-out infinite}
// //             .ptn-b{animation:ptn-b 30s ease-in-out infinite}
// //             .ptn-grid{animation:ptn-grid 24s linear infinite}
// //             .ptn-dash{stroke-dasharray:240 1400;animation:ptn-dash 28s linear infinite}
// //             .ptn-dash2{stroke-dasharray:160 1500;animation:ptn-dash 40s linear infinite;animation-delay:-9s}
// //             @media (prefers-reduced-motion: reduce){.ptn-a,.ptn-b,.ptn-grid,.ptn-dash,.ptn-dash2{animation:none !important}}
// //           `}</style>
// //           <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
// //             <div
// //               className="ptn-a absolute -left-32 -top-40 h-[560px] w-[560px] rounded-full opacity-[0.13] blur-[150px]"
// //               style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
// //             />
// //             <div
// //               className="ptn-b absolute -bottom-40 -right-24 h-[520px] w-[520px] rounded-full opacity-[0.10] blur-[160px]"
// //               style={{ background: "radial-gradient(circle, #3AF1FF 0%, transparent 70%)" }}
// //             />
// //             <div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(120%_90%_at_50%_40%,black,transparent_80%)]">
// //               <div
// //                 className="ptn-grid absolute inset-x-0 -top-16 bottom-[-64px]"
// //                 style={{
// //                   backgroundImage:
// //                     "linear-gradient(to right, rgba(1,12,98,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(1,12,98,0.045) 1px, transparent 1px)",
// //                   backgroundSize: "64px 64px",
// //                 }}
// //               />
// //             </div>
// //             <svg
// //               className="absolute inset-0 hidden h-full w-full lg:block"
// //               preserveAspectRatio="none"
// //               viewBox="0 0 1440 500"
// //             >
// //               <path
// //                 className="ptn-dash"
// //                 d="M-100 380 C 340 340, 560 140, 900 130 S 1400 80, 1560 60"
// //                 fill="none"
// //                 stroke="#4A73FF"
// //                 strokeOpacity="0.28"
// //                 strokeWidth="1"
// //               />
// //               <path
// //                 className="ptn-dash2"
// //                 d="M-100 140 C 360 200, 620 420, 1080 400 S 1440 340, 1560 320"
// //                 fill="none"
// //                 stroke="#3AF1FF"
// //                 strokeOpacity="0.35"
// //                 strokeWidth="1"
// //               />
// //             </svg>
// //           </div>
// //           <span
// //             aria-hidden
// //             className="ghost-type pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[7rem] text-navy/[0.03] sm:text-[13rem] lg:text-[19rem]"
// //           >
// //             NEXEN
// //           </span>
// //           <div className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
// //             <Reveal className="mx-auto max-w-3xl text-center">
// //               <p className="eyebrow text-azure">Partners</p>
// //               <span
// //                 aria-hidden
// //                 className="mx-auto mt-5 block h-px w-14 bg-gradient-to-r from-azure to-cyan"
// //               />
// //               <h2 className="display mt-6 text-[2rem] text-navy sm:text-4xl lg:text-[2.9rem]">
// //                 Technology and expertise,
// //                 <br className="hidden sm:block" /> connected.
// //               </h2>
// //             </Reveal>

// //             <Reveal delay={90} className="mt-16 lg:mt-20">
// //               <div
// //                 aria-hidden
// //                 className="h-px w-full bg-gradient-to-r from-transparent via-navy/12 to-transparent"
// //               />
// //               <div className="grid grid-cols-1 divide-y divide-navy/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
// //                 {partnerLogos.map((p) => (
// //                   <div
// //                     key={p.name}
// //                     className="group relative flex items-center justify-center px-6 py-12 lg:py-16"
// //                   >
// //                     <span
// //                       aria-hidden
// //                       className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
// //                       style={{
// //                         background:
// //                           "radial-gradient(circle at 50% 50%, rgba(74,115,255,0.10) 0%, transparent 70%)",
// //                       }}
// //                     />
// //                     <img
// //                       src={p.src}
// //                       alt={`${p.name} logo`}
// //                       loading="lazy"
// //                       className={`relative h-auto w-auto max-w-[180px] object-contain opacity-70 transition-all duration-500 group-hover:scale-[1.02] group-hover:opacity-100 group-hover:brightness-105 lg:max-w-[210px] ${p.cls}`}
// //                     />
// //                   </div>
// //                 ))}
// //               </div>
// //               <div
// //                 aria-hidden
// //                 className="h-px w-full bg-gradient-to-r from-transparent via-navy/12 to-transparent"
// //               />
// //               <div className="mt-8 flex items-center justify-center gap-3">
// //                 <span aria-hidden className="h-px w-10 bg-navy/15" />
// //                 <span className="eyebrow text-[0.6rem] text-muted-foreground">
// //                   A connected partner ecosystem
// //                 </span>
// //                 <span aria-hidden className="h-px w-10 bg-navy/15" />
// //               </div>
// //             </Reveal>
// //           </div>
// //         </section>

// //         {/* 09 CTA */}
// //         <CtaSection
// //           eyebrow="Start a conversation"
// //           heading="Have an Idea? Let's Build What's Next."
// //           body="Whether you're launching a new digital product, modernising your website, automating your operations or looking to accelerate growth, we're ready to help."
// //           ctaLabel="Start a Conversation"
// //         />
// //       </main>
// //       <CtaFooterGap />
// //       {/* 10 CLIENTS */}
// //       <ClientLogos />
// //       {/* 10 FOOTER */}
// //       <Footer />
// //     </>
// //   );
// // }

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaSection, CtaFooterGap } from "@/components/site/CtaSection";
import { WhyNexen } from "@/components/site/WhyNexen";
import { Reveal } from "@/components/site/Reveal";
import { ServiceShowcase } from "@/components/site/ServiceShowcase";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { PortfolioPreview } from "@/components/site/PortfolioPreview";
import { ClientLogos } from "@/components/site/ClientLogos";

import heroVideo from "@/assets/hero-bg.mp4";
import gatdLogo from "@/assets/gatd-logo.png";
import royaLogo from "@/assets/roya-ventures-logo.png";
import torqueLogo from "@/assets/client-torque.svg";

const partnerLogos = [
  {
    name: "GATD — Global Association for Training and Development",
    src: gatdLogo,
    cls: "max-h-14 lg:max-h-16",
  },
  {
    name: "Roya Ventures",
    src: royaLogo,
    cls: "max-h-16 lg:max-h-20",
  },
  {
    name: "Torque",
    src: torqueLogo,
    cls: "max-h-16 lg:max-h-20",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Nexen Strategy — Build Better. Move Smarter. Grow Further.",
      },
      {
        name: "description",
        content:
          "A UK digital solutions partner for brand, web and app development, software, AI and automation, marketing and media production.",
      },
      {
        property: "og:title",
        content: "Build Better. Move Smarter. Grow Further.",
      },
      {
        property: "og:description",
        content:
          "Nexen Strategy helps established businesses build, transform and grow through strategy, design, technology and creative work.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Header overHero />

      <main>
        <section className="relative flex min-h-[76svh] w-full flex-col overflow-hidden bg-navy lg:min-h-[83svh]">
          <video
            className="absolute inset-0 h-full w-full object-cover [object-position:center]"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(1,12,98,0.45) 0%, rgba(1,12,98,0.08) 38%, rgba(1,12,98,0.78) 100%)",
            }}
          />

          <div
            aria-hidden
            className="absolute inset-0 mix-blend-multiply"
            style={{
              background: "linear-gradient(115deg, rgba(1,12,98,0.55) 0%, rgba(1,12,98,0.06) 65%)",
            }}
          />

          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              boxShadow: "inset 0 0 220px 60px rgba(1,12,98,0.6)",
            }}
          />

          <div aria-hidden className="grid-faint absolute inset-0 opacity-60" />

          <div className="relative mx-auto flex min-h-[76svh] w-full max-w-[1400px] flex-1 flex-col px-6 pb-8 lg:min-h-[83svh] lg:px-12 lg:pb-8">
            <div className="h-[15vh] min-h-[116px] shrink-0 lg:h-[21vh]" />

            <div>
              <Reveal>
                <p className="eyebrow text-cyan">
                  Digital Solutions <span className="mx-2 text-cyan/50">•</span> Technology
                  <span className="mx-2 text-cyan/50">•</span> Growth
                </p>
              </Reveal>

              <Reveal delay={90}>
                <h1 className="display mt-6 max-w-5xl text-[2.85rem] text-white sm:text-6xl lg:text-[6rem]">
                  Build Better.
                  <br />
                  Move Smarter.
                  <br />
                  Grow Further.
                </h1>
              </Reveal>

              <div className="mt-8 grid gap-7 lg:grid-cols-12 lg:items-end">
                <Reveal delay={170} className="lg:col-span-6">
                  <p className="max-w-xl text-base leading-relaxed text-white/70">
                    We help ambitious businesses turn ideas into digital experiences, intelligent
                    solutions, and measurable growth, combining strategy, technology, creativity,
                    and innovation for businesses worldwide.
                  </p>
                </Reveal>

                <Reveal delay={240} className="lg:col-span-6 lg:justify-self-end">
                  <div className="flex flex-wrap gap-4">
                    <a href="#services" className="btn-primary group">
                      Explore Our Services
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>

                    <Link to="/contact" className="btn-ghost-light">
                      Start a Conversation
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="flex flex-1 items-end justify-center pt-12 pb-1 lg:pt-14">
              <span className="flex flex-col items-center gap-2 text-white/45">
                <span className="text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
                <ArrowDown className="h-4 w-4 animate-bounce" />
              </span>
            </div>
          </div>
        </section>

        {/* 02 INTRODUCTION */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-navy/[0.05] to-transparent"
          />

          <span
            aria-hidden
            className="ghost-type absolute -left-6 top-24 text-[7rem] text-navy/[0.025] sm:text-[13rem] lg:text-[18rem]"
          >
            NEXEN
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 pt-16 pb-20 lg:px-12 lg:pt-28 lg:pb-28">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-12">
              <Reveal delay={80} className="lg:col-span-7">
                <p className="eyebrow text-azure">Introduction</p>

                <span
                  aria-hidden
                  className="mt-4 block h-px w-14 bg-gradient-to-r from-azure to-cyan"
                />

                <h2 className="display mt-6 text-[2.3rem] text-navy sm:text-5xl lg:text-[4.1rem]">
                  A single partner for everything digital your business depends on.
                </h2>

                <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10 lg:mt-16 lg:gap-8">
                  {[
                    {
                      k: "6",
                      v: "Connected disciplines",
                    },
                    {
                      k: "10+",
                      v: "Industries served",
                    },
                    {
                      k: "GLOBAL",
                      v: "Business Reach",
                    },
                  ].map((s) => (
                    <div key={s.v}>
                      <p className="display text-[1.7rem] text-navy sm:text-[2.3rem] lg:text-[3rem]">
                        {s.k}
                      </p>

                      <span
                        aria-hidden
                        className="mt-4 block h-px w-10 bg-gradient-to-r from-azure to-cyan"
                      />

                      <p className="eyebrow mt-4 text-[0.62rem] text-muted-foreground">{s.v}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={150} className="lg:col-span-4 lg:col-start-9 lg:pt-22">
                <p className="text-base leading-relaxed text-muted-foreground">
                  From strategy and design to technology, automation, marketing, and digital
                  experiences, we bring the expertise businesses need to move forward, wherever they
                  operate.
                </p>

                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Nexen Strategy brings those disciplines into one connected team. One plan, one
                  standard, one point of accountability.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
        {/* 03 SERVICES */}
        <section id="services" className="scroll-mt-24 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 pb-[5rem] pt-[3.5rem] lg:px-12 lg:pb-[6.5rem] lg:pt-[4.5rem]">
            <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-x-14">
              <Reveal className="lg:col-span-7">
                <p className="eyebrow text-azure">Services</p>

                <h2
                  className="display mt-4 text-navy"
                  style={{
                    fontSize: "clamp(2.1rem, 4vw, 4.5rem)",
                    lineHeight: 1.04,
                  }}
                >
                  Everything You Need to
                  <br className="hidden sm:block" /> Move Digital Forward.
                </h2>
              </Reveal>

              <Reveal delay={100} className="lg:col-span-4 lg:col-start-9">
                <p className="text-[0.98rem] leading-relaxed text-muted-foreground">
                  Digital transformation doesn&rsquo;t happen through one service. It happens when
                  technology, creativity and business objectives work together.
                </p>

                <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-foreground">
                  At Nexen, we bring these capabilities together under one team.
                </p>
              </Reveal>
            </div>

            <ServiceShowcase />
          </div>
        </section>
        {/* 04 WHY NEXEN */}
        <WhyNexen />
        {/* 05 OUR APPROACH */}
        <section className="relative overflow-hidden border-b border-border">
          <div aria-hidden className="grid-faint-dark absolute inset-0" />

          <div className="relative mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
            <Reveal className="w-full">
              <p className="eyebrow text-azure">Our approach</p>

              <h2
                className="display mt-7 w-full max-w-none text-navy"
                style={{
                  fontSize: "clamp(2.2rem, 5.6vw, 5.5rem)",
                  lineHeight: 1.04,
                }}
              >
                A process that keeps momentum without cutting corners.
              </h2>
            </Reveal>

            <ProcessTimeline />
          </div>
        </section>
        {/* 06 PORTFOLIO PREVIEW */}
        <PortfolioPreview />
        {/* 08 PARTNERS */}
        <section className="ptn relative overflow-hidden border-t border-border">
          <style>{`
            @keyframes ptn-a {
              0% { transform: translate3d(-4%, -3%, 0) scale(1); }
              50% { transform: translate3d(6%, 4%, 0) scale(1.1); }
              100% { transform: translate3d(-4%, -3%, 0) scale(1); }
            }

            @keyframes ptn-b {
              0% { transform: translate3d(4%, 4%, 0) scale(1.06); }
              50% { transform: translate3d(-5%, -2%, 0) scale(1); }
              100% { transform: translate3d(4%, 4%, 0) scale(1.06); }
            }

            @keyframes ptn-grid {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(0, -64px, 0); }
            }

            @keyframes ptn-dash {
              to { stroke-dashoffset: -1600; }
            }

            .ptn-a {
              animation: ptn-a 26s ease-in-out infinite;
            }

            .ptn-b {
              animation: ptn-b 30s ease-in-out infinite;
            }

            .ptn-grid {
              animation: ptn-grid 24s linear infinite;
            }

            .ptn-dash {
              stroke-dasharray: 240 1400;
              animation: ptn-dash 28s linear infinite;
            }

            .ptn-dash2 {
              stroke-dasharray: 160 1500;
              animation: ptn-dash 40s linear infinite;
              animation-delay: -9s;
            }

            @media (prefers-reduced-motion: reduce) {
              .ptn-a,
              .ptn-b,
              .ptn-grid,
              .ptn-dash,
              .ptn-dash2 {
                animation: none !important;
              }
            }
          `}</style>

          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="ptn-a absolute -left-32 -top-40 h-[560px] w-[560px] rounded-full opacity-[0.13] blur-[150px]"
              style={{
                background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)",
              }}
            />

            <div
              className="ptn-b absolute -bottom-40 -right-24 h-[520px] w-[520px] rounded-full opacity-[0.10] blur-[160px]"
              style={{
                background: "radial-gradient(circle, #3AF1FF 0%, transparent 70%)",
              }}
            />

            <div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(120%_90%_at_50%_40%,black,transparent_80%)]">
              <div
                className="ptn-grid absolute inset-x-0 -top-16 bottom-[-64px]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(1,12,98,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(1,12,98,0.045) 1px, transparent 1px)",
                  backgroundSize: "64px 64px",
                }}
              />
            </div>

            <svg
              className="absolute inset-0 hidden h-full w-full lg:block"
              preserveAspectRatio="none"
              viewBox="0 0 1440 500"
            >
              <path
                className="ptn-dash"
                d="M-100 380 C 340 340, 560 140, 900 130 S 1400 80, 1560 60"
                fill="none"
                stroke="#4A73FF"
                strokeOpacity="0.28"
                strokeWidth="1"
              />

              <path
                className="ptn-dash2"
                d="M-100 140 C 360 200, 620 420, 1080 400 S 1440 340, 1560 320"
                fill="none"
                stroke="#3AF1FF"
                strokeOpacity="0.35"
                strokeWidth="1"
              />
            </svg>
          </div>

          <span
            aria-hidden
            className="ghost-type pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[7rem] text-navy/[0.03] sm:text-[13rem] lg:text-[19rem]"
          >
            NEXEN
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="eyebrow text-azure">Partners</p>

              <span
                aria-hidden
                className="mx-auto mt-5 block h-px w-14 bg-gradient-to-r from-azure to-cyan"
              />

              <h2 className="display mt-6 text-[2rem] text-navy sm:text-4xl lg:text-[2.9rem]">
                Technology and Expertise,
                <br className="hidden sm:block" /> Working as One.
              </h2>
            </Reveal>

            <Reveal delay={90} className="mt-16 lg:mt-20">
              <div
                aria-hidden
                className="h-px w-full bg-gradient-to-r from-transparent via-navy/12 to-transparent"
              />

              <div className="grid grid-cols-1 divide-y divide-navy/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {partnerLogos.map((p) => (
                  <div
                    key={p.name}
                    className="group relative flex items-center justify-center px-6 py-12 lg:py-16"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 50%, rgba(74,115,255,0.10) 0%, transparent 70%)",
                      }}
                    />

                    <img
                      src={p.src}
                      alt={`${p.name} logo`}
                      loading="lazy"
                      className={`relative h-auto w-auto max-w-[180px] object-contain opacity-70 transition-all duration-500 group-hover:scale-[1.02] group-hover:opacity-100 group-hover:brightness-105 lg:max-w-[210px] ${p.cls}`}
                    />
                  </div>
                ))}
              </div>

              <div
                aria-hidden
                className="h-px w-full bg-gradient-to-r from-transparent via-navy/12 to-transparent"
              />

              <div className="mt-8 flex items-center justify-center gap-3">
                <span aria-hidden className="h-px w-10 bg-navy/15" />

                <span className="eyebrow text-[0.6rem] text-muted-foreground">
                  A connected partner ecosystem
                </span>

                <span aria-hidden className="h-px w-10 bg-navy/15" />
              </div>
            </Reveal>
          </div>
        </section>
        {/* 09 CTA */}
        <CtaSection
          eyebrow="Start a conversation"
          heading="Have an Idea? Let's Build What's Next."
          body="Whether you're launching something new, transforming an existing business, or looking for a smarter way forward, let's turn your next idea into something that moves your business ahead."
          ctaLabel="Start a Conversation"
        />
      </main>
      <CtaFooterGap />

      {/* 10 CLIENTS */}
      <ClientLogos />
      {/* 10 FOOTER */}
      <Footer />
    </>
  );
}
