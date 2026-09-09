import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaSection } from "@/components/site/CtaSection";
import { Reveal } from "@/components/site/Reveal";
import { GlobalPresence } from "@/components/site/GlobalPresence";

import adobeProperty from "@/assets/clients/client-adobe-property-advisor.svg";
import dxb from "@/assets/clients/client-dxb-real-estate.svg";
import mayfair from "@/assets/clients/client-mayfair.svg";
import muazzamEstate from "@/assets/clients/client-muazzam-estate.svg";
import mustafaAlAnsari from "@/assets/clients/client-mustafa-al-ansari.png";
import rightMove from "@/assets/clients/client-right-move.svg";
import drKhurram from "@/assets/clients/client-dr-khurram.svg";
import drSarfraz from "@/assets/clients/client-dr-sarfraz.svg";
import drShahid from "@/assets/clients/client-dr-shahid-v2.svg";
import drShoaib from "@/assets/clients/client-dr-shoaib.svg";
import drWaseem from "@/assets/clients/client-dr-waseem.svg";
import healthyLifePath from "@/assets/clients/client-healthy-life-path.svg";
import organicRoots from "@/assets/clients/client-organic-roots.svg";
import pakMedinet from "@/assets/clients/client-pakmedinet.svg";
import soapSuds from "@/assets/clients/client-soap-suds.svg";
import comwave from "@/assets/clients/client-comwave.svg";
import gatd from "@/assets/clients/client-gatd.svg";
import phr from "@/assets/clients/client-phr.svg";
import quranReading from "@/assets/clients/client-quran-reading.svg";
import torque from "@/assets/clients/client-torque.svg";
import vivd from "@/assets/clients/client-vivd-v2.svg";
import borsac from "@/assets/clients/client-borsac.svg";
import nhFusion from "@/assets/clients/client-nh-fusion.svg";
import flyShop from "@/assets/clients/client-fly-shop.svg";
import glamByNoor from "@/assets/clients/client-glam-by-noor.svg";
import minahilKhan from "@/assets/clients/client-minahil-khan.svg";
import hiTech from "@/assets/clients/client-hi-tech.svg";
import mumpsMotors from "@/assets/clients/client-mumps-motors.png";
import sbidernet from "@/assets/clients/client-sbidernet.svg";
import oceanOffshore from "@/assets/clients/client-ocean-offshore.svg";
import mohsanCo from "@/assets/clients/client-mohsan-co.svg";
import roofConnect from "@/assets/clients/client-roofconnect.svg";
import royaVenture from "@/assets/clients/client-roya-venture.svg";
import umami from "@/assets/clients/client-umami.svg";
import heroVideo from "@/assets/clients/clients-hero.mp4";

type Client = { name: string; src: string };

const industries: { num: string; title: string; note: string; clients: Client[] }[] = [
  {
    num: "01",
    title: "Education & Training",
    note: "From education providers to training organisations, we create digital solutions that support learning, communication, and professional development.",
    clients: [
      { name: "Comwave", src: comwave },
      { name: "GATD", src: gatd },
      { name: "PHR", src: phr },
      { name: "Quran Reading", src: quranReading },
      { name: "Torque", src: torque },
      { name: "VIVD", src: vivd },
    ],
  },
  {
    num: "02",
    title: "Medical & Healthcare",
    note: "We support healthcare providers with digital experiences designed to improve communication, accessibility, and patient engagement.",
    clients: [
      { name: "Dr Khurram", src: drKhurram },
      { name: "Dr Sarfraz", src: drSarfraz },
      { name: "Dr Shahid", src: drShahid },
      { name: "Dr Shoaib", src: drShoaib },
      { name: "Dr Waseem", src: drWaseem },
      { name: "Healthy Life Path", src: healthyLifePath },
      { name: "Organic Roots", src: organicRoots },
      { name: "Pak Medinet", src: pakMedinet },
      { name: "SoapSuds", src: soapSuds },
    ],
  },
  {
    num: "03",
    title: "Real Estate",
    note: "We help property brands, developers, and real estate businesses create digital experiences that build trust and connect them with their audiences.",
    clients: [
      { name: "Adobe Property Advisor", src: adobeProperty },
      { name: "DXB Real Estate", src: dxb },
      { name: "May Fair", src: mayfair },
      { name: "Muazzam Real Estate", src: muazzamEstate },
      { name: "Mustafa Al Ansari Real Estate", src: mustafaAlAnsari },
      { name: "Right Move", src: rightMove },
      { name: "Roof Connect", src: roofConnect },
    ],
  },
  {
    num: "04",
    title: "Technology & Business Solutions",
    note: "We work with technology and business-focused organisations to create practical digital solutions that improve operations, experiences, and growth.",
    clients: [
      { name: "Hi Tech", src: hiTech },
      { name: "Mumps Motors", src: mumpsMotors },
      { name: "Sbidernet", src: sbidernet },
      { name: "Ocean of Shore", src: oceanOffshore },
      { name: "Mohsan & Co", src: mohsanCo },
      { name: "Roya Ventures", src: royaVenture },
    ],
  },
  {
    num: "05",
    title: "Fashion & Clothing",
    note: "We help fashion and lifestyle brands build distinctive digital experiences that showcase their products and connect with their audiences.",
    clients: [
      { name: "Borsac", src: borsac },
      { name: "NH Fusion", src: nhFusion },
      { name: "Fly Shop", src: flyShop },
      { name: "Glam by Noor", src: glamByNoor },
      { name: "Minahil Khan", src: minahilKhan },
    ],
  },
  {
    num: "06",
    title: "Food & Hospitality",
    note: "We create digital experiences for food, hospitality, and consumer-focused brands that help them present their offerings and connect with customers.",
    clients: [{ name: "Umami", src: umami }],
  },
];

const totalClients = industries.reduce((n, i) => n + i.clients.length, 0);

function LogoGrid({ clients }: { clients: Client[] }) {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      {clients.map((c, i) => (
        <Reveal
          key={c.name}
          delay={i * 55}
          className="w-[calc(50%-0.5rem)] sm:w-[calc(33.3333%-0.6667rem)] lg:w-[calc(20%-0.8rem)]"
        >
          <div className="group relative flex h-[132px] items-center justify-center rounded-lg border border-[#E5E7EB] bg-white px-6 py-6 transition-colors duration-500 hover:border-[color-mix(in_oklab,var(--azure)_35%,#E5E7EB)] lg:h-[150px]">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(120% 100% at 50% 0%, color-mix(in oklab, var(--azure) 12%, transparent), transparent 70%)",
              }}
            />
            <img
              src={c.src}
              alt={c.name}
              loading="lazy"
              className="relative m-auto max-h-[72px] w-auto max-w-[165px] object-contain transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients — Nexen Strategy" },
      {
        name: "description",
        content:
          "Businesses Nexen Strategy has helped move forward across real estate, healthcare, education, fashion, engineering and hospitality.",
      },
      { property: "og:title", content: "Clients — Nexen Strategy" },
      {
        property: "og:description",
        content:
          "Strategy, design, technology and creativity delivered for businesses across six industries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  return (
    <>
      <Header overHero />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy pt-[9.5rem] pb-28 lg:pt-40 lg:pb-36">
          <video
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden
            tabIndex={-1}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(1,12,98,0.62) 0%, rgba(1,12,98,0.48) 45%, rgba(1,12,98,0.72) 100%)",
            }}
          />
          <div aria-hidden className="grid-faint absolute inset-0 opacity-30" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-[560px] w-[560px] rounded-full opacity-30 blur-[150px]"
            style={{ background: "radial-gradient(circle, #4A73FF 0%, transparent 70%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 left-[8%] h-[420px] w-[420px] rounded-full opacity-20 blur-[140px]"
            style={{ background: "radial-gradient(circle, #3AF1FF 0%, transparent 70%)" }}
          />
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
            preserveAspectRatio="none"
            viewBox="0 0 1200 600"
          >
            <defs>
              <linearGradient id="cl-path" x1="0" x2="1">
                <stop offset="0%" stopColor="#3AF1FF" stopOpacity="0" />
                <stop offset="50%" stopColor="#3AF1FF" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#4A73FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[120, 260, 400, 520].map((y, i) => (
              <path
                key={y}
                d={`M-50 ${y} C 300 ${y - 70}, 700 ${y + 80}, 1250 ${y - 30}`}
                fill="none"
                stroke="url(#cl-path)"
                strokeWidth="1"
                style={{
                  animation: `fade-in 1.2s ease-out ${i * 0.15}s both`,
                }}
              />
            ))}
          </svg>

          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="eyebrow text-cyan">Clients</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-8 max-w-5xl text-[2.6rem] text-white sm:text-6xl lg:text-[5rem]">
                Businesses We&apos;ve Helped Move Forward.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-9 max-w-2xl text-lg leading-relaxed text-white/70">
                We work with businesses across industries and markets, combining strategy, design,
                technology, and creativity to create meaningful digital experiences and solutions.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <dl className="mt-14 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-8 sm:flex sm:max-w-none sm:flex-nowrap sm:items-start sm:gap-x-10 lg:gap-x-16">
                {[
                  { k: `${totalClients}+`, v: "Brands served" },
                  { k: "06", v: "Industries" },
                  { k: "GLOBAL", v: "Reach" },
                  { k: "End-to-end", v: "Delivery" },
                ].map((s) => (
                  <div key={s.v} className="min-w-0">
                    <dt className="display whitespace-nowrap text-[1.6rem] text-white sm:text-[1.8rem] lg:text-[2.2rem]">
                      {s.k}
                    </dt>
                    <dd className="mt-2 text-sm text-white/55">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        <GlobalPresence />

        {/* Industries */}
        <section className="relative overflow-hidden bg-white">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{ backgroundImage: "var(--gradient-tech)", opacity: 0.6 }}
          />
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
            {industries.map((ind, idx) => (
              <div key={ind.num} className={idx === 0 ? "mt-0" : "mt-24 lg:mt-32"}>
                <Reveal>
                  <div className="min-w-0 text-center">
                    <span className="font-mono text-[0.75rem] text-azure">{ind.num}</span>
                    <h2 className="display mt-3 text-[1.7rem] uppercase text-navy sm:text-[2.2rem] lg:text-[2.7rem]">
                      {ind.title}
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                      {ind.note}
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={60}>
                  <div
                    className="mt-6 h-px w-full"
                    style={{ backgroundImage: "var(--gradient-tech)", opacity: 0.35 }}
                  />
                </Reveal>
                <LogoGrid clients={ind.clients} />
              </div>
            ))}
          </div>
        </section>

        <CtaSection eyebrow="Work with us" heading="Let's Build What's Next Together." />
      </main>
      <Footer />
    </>
  );
}
