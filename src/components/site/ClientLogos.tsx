import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import cosh from "@/assets/clients/client-cosh.svg";
import college from "@/assets/clients/client-college-of-science.svg";
import drAmir from "@/assets/clients/client-dr-amir.svg";
import adobeProperty from "@/assets/clients/client-adobe-property-advisor.svg";
import comwave from "@/assets/clients/client-comwave.svg";
import dxb from "@/assets/clients/client-dxb-real-estate.svg";
import drKhurram from "@/assets/clients/client-dr-khurram.svg";
import drSarfraz from "@/assets/clients/client-dr-sarfraz.svg";
import drShahid from "@/assets/clients/client-dr-shahid-v2.svg";
import drShoaib from "@/assets/clients/client-dr-shoaib.svg";
import drWaseem from "@/assets/clients/client-dr-waseem.svg";
import englishCoach from "@/assets/clients/client-english-coach.svg";
import flyShop from "@/assets/clients/client-fly-shop.svg";
import gatd from "@/assets/clients/client-gatd.svg";
import glamByNoor from "@/assets/clients/client-glam-by-noor.svg";
import healthyLifePath from "@/assets/clients/client-healthy-life-path.svg";
import hiTech from "@/assets/clients/client-hi-tech.svg";
import mayfair from "@/assets/clients/client-mayfair.svg";
import minahilKhan from "@/assets/clients/client-minahil-khan.svg";
import mohsanCo from "@/assets/clients/client-mohsan-co.svg";
import muazzamEstate from "@/assets/clients/client-muazzam-estate.svg";
import nhFusion from "@/assets/clients/client-nh-fusion.svg";
import oceanOffshore from "@/assets/clients/client-ocean-offshore.svg";
import organicRoots from "@/assets/clients/client-organic-roots.svg";
import pakMedinet from "@/assets/clients/client-pakmedinet.svg";
import phr from "@/assets/clients/client-phr.svg";
import quranReading from "@/assets/clients/client-quran-reading.svg";
import rightMove from "@/assets/clients/client-right-move.svg";
import roofConnect from "@/assets/clients/client-roofconnect.svg";
import royaVenture from "@/assets/clients/client-roya-venture.svg";
import mumpsMotors from "@/assets/clients/client-mumps-motors.png";
import mustafaAlAnsari from "@/assets/clients/client-mustafa-al-ansari.png";
import sbidernet from "@/assets/clients/client-sbidernet.svg";
import soapSuds from "@/assets/clients/client-soap-suds.svg";
import torque from "@/assets/clients/client-torque.svg";
import umami from "@/assets/clients/client-umami.svg";
import vivd from "@/assets/clients/client-vivd-v2.svg";

const LOGO_CLS = "h-9 lg:h-12";
const COMPACT_LOGO_CLS = "h-12 lg:h-16";
const clients = [
  { name: "COSH", src: cosh, cls: LOGO_CLS },
  { name: "College of Science", src: college, cls: LOGO_CLS },
  { name: "Dr Amir", src: drAmir, cls: COMPACT_LOGO_CLS },
  { name: "English Coach", src: englishCoach, cls: LOGO_CLS },
  { name: "Dr Shahid", src: drShahid, cls: COMPACT_LOGO_CLS },
  { name: "Dr Shoaib", src: drShoaib, cls: LOGO_CLS },
  { name: "Dr Sarfraz", src: drSarfraz, cls: LOGO_CLS },
  { name: "Dr Khurram", src: drKhurram, cls: LOGO_CLS },
  { name: "Dr Waseem", src: drWaseem, cls: LOGO_CLS },
  { name: "Comwave", src: comwave, cls: LOGO_CLS },
  { name: "DXB Real Estate", src: dxb, cls: LOGO_CLS },
  { name: "Adobe Property Advisor", src: adobeProperty, cls: COMPACT_LOGO_CLS },
  { name: "Fly Shop", src: flyShop, cls: LOGO_CLS },
  { name: "GATD", src: gatd, cls: LOGO_CLS },
  { name: "Hi Tech", src: hiTech, cls: LOGO_CLS },
  { name: "Mayfair", src: mayfair, cls: LOGO_CLS },
  { name: "Healthy Life Path", src: healthyLifePath, cls: LOGO_CLS },
  { name: "Glam by Noor", src: glamByNoor, cls: COMPACT_LOGO_CLS },
  { name: "Minahil Khan", src: minahilKhan, cls: COMPACT_LOGO_CLS },
  { name: "Mohsan & Co", src: mohsanCo, cls: COMPACT_LOGO_CLS },
  { name: "Muazzam Estate", src: muazzamEstate, cls: LOGO_CLS },
  { name: "NH Fusion", src: nhFusion, cls: COMPACT_LOGO_CLS },
  { name: "Ocean Offshore", src: oceanOffshore, cls: COMPACT_LOGO_CLS },
  { name: "Organic Roots", src: organicRoots, cls: LOGO_CLS },
  { name: "PakMedinet", src: pakMedinet, cls: LOGO_CLS },
  { name: "PHR", src: phr, cls: COMPACT_LOGO_CLS },
  { name: "Quran Reading", src: quranReading, cls: COMPACT_LOGO_CLS },
  { name: "Right Move", src: rightMove, cls: LOGO_CLS },
  { name: "RoofConnect", src: roofConnect, cls: LOGO_CLS },
  { name: "Roya Venture", src: royaVenture, cls: LOGO_CLS },
  { name: "Mumps Motors", src: mumpsMotors, cls: LOGO_CLS },
  { name: "Mustafa Al Ansari Real Estate", src: mustafaAlAnsari, cls: LOGO_CLS },
  { name: "Sbidernet", src: sbidernet, cls: LOGO_CLS },
  { name: "Soap Suds", src: soapSuds, cls: LOGO_CLS },
  { name: "Torque", src: torque, cls: LOGO_CLS },
  { name: "Umami", src: umami, cls: LOGO_CLS },
  { name: "VIVD", src: vivd, cls: COMPACT_LOGO_CLS },
];

export function ClientLogos() {
  const [paused, setPaused] = useState(false);
  const [delay, setDelay] = useState(0);
  const DURATION = 126;
  const PER_GROUP = clients.length;
  const STEP = DURATION / PER_GROUP;
  const rafRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  const nudge = (dir: 1 | -1) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const start = performance.now();
    const from = delay;
    const to = delay + dir * STEP;
    const dur = 650;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setDelay(from + (to - from) * eased);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  return (
    <section className="cll relative overflow-hidden border-t border-border bg-white">
      <style>{`
        @keyframes cll-marquee{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}
        @keyframes cll-glow{0%{transform:translate3d(-8%,0,0) scale(1)}50%{transform:translate3d(8%,0,0) scale(1.08)}100%{transform:translate3d(-8%,0,0) scale(1)}}
        .cll-track{animation:cll-marquee ${DURATION}s linear infinite;width:max-content}
        .cll-track[data-paused="true"]{animation-play-state:paused}
        .cll-glow{animation:cll-glow 26s ease-in-out infinite}
        @media (prefers-reduced-motion: reduce){.cll-track,.cll-glow{animation:none !important}}
      `}</style>

      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-70 [mask-image:radial-gradient(120%_80%_at_50%_50%,black,transparent_78%)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(1,12,98,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(1,12,98,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          className="cll-glow absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.10] blur-[140px]"
          style={{
            background: "radial-gradient(circle, #4A73FF 0%, #3AF1FF 45%, transparent 72%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-azure">Clients</p>
          <span
            aria-hidden
            className="mx-auto mt-4 block h-px w-12 bg-gradient-to-r from-azure to-cyan"
          />
          <h2 className="display mt-5 text-[1.7rem] text-navy sm:text-3xl lg:text-[2.4rem]">
            Trusted by businesses building what&rsquo;s next.
          </h2>
        </Reveal>

        <Reveal delay={90} className="mt-12 lg:mt-14">
          <div
            aria-hidden
            className="h-px w-full bg-gradient-to-r from-transparent via-navy/12 to-transparent"
          />
          <div className="relative">
            <div className="relative overflow-hidden py-10 lg:py-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div
                className="cll-track flex items-center"
                data-paused={paused}
                style={{ animationDelay: `${delay}s` }}
              >
                {[0, 1].map((dup) => (
                  <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
                    {[0].map((rep) =>
                      clients.map((c) => (
                        <div
                          key={`${rep}-${c.name}`}
                          className="flex items-center justify-center px-8 sm:px-12 lg:px-16"
                        >
                          <img
                            src={c.src}
                            alt={`${c.name} logo`}
                            loading="lazy"
                            onMouseEnter={() => setPaused(true)}
                            onMouseLeave={() => setPaused(false)}
                            className={`w-auto max-w-[150px] object-contain lg:max-w-[190px] ${c.cls}`}
                          />
                        </div>
                      )),
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            aria-hidden
            className="h-px w-full bg-gradient-to-r from-transparent via-navy/12 to-transparent"
          />
          <div className="mt-7 flex items-center justify-center gap-10">
            <button
              type="button"
              aria-label="Previous client logos"
              onClick={() => nudge(1)}
              className="p-2 text-[#ff7a3d] transition-transform duration-300 hover:-translate-x-0.5 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.4} />
            </button>
            <button
              type="button"
              aria-label="Next client logos"
              onClick={() => nudge(-1)}
              className="p-2 text-[#ff7a3d] transition-transform duration-300 hover:translate-x-0.5 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.4} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
