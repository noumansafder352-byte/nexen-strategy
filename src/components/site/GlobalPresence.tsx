import { Reveal } from "@/components/site/Reveal";
import saudiFlag from "@/assets/clients/flag_of_saudi_arabia.png";
import singaporeFlag from "@/assets/clients/flag_of_singapore.png";
import pakistanFlag from "@/assets/clients/flag_of_pakistan.png";
import qatarFlag from "@/assets/clients/flag_of_qatar.png";
import ukFlag from "@/assets/clients/flag_of_united_kingdom.png";
import usaFlag from "@/assets/clients/flag_of_united_states.png";

type Country = { name: string; short: string; flag: React.ReactNode };

const V = "0 0 60 40";

const countries: Country[] = [
  {
    name: "Pakistan",
    short: "PK",
    flag: <img src={pakistanFlag} alt="" className="h-full w-full object-cover" loading="lazy" />,
  },
  {
    name: "United Kingdom",
    short: "UK",
    flag: <img src={ukFlag} alt="" className="h-full w-full object-cover" loading="lazy" />,
  },
  {
    name: "United Arab Emirates",
    short: "UAE",
    flag: (
      <svg viewBox="0 0 12 6" preserveAspectRatio="none" className="h-full w-full">
        <rect width="12" height="6" fill="#00843d" />
        <rect width="12" height="4" y="2" fill="#fff" />
        <rect width="12" height="2" y="4" />
        <rect width="3" height="6" fill="#c8102e" />
      </svg>
    ),
  },
  {
    name: "Saudi Arabia",
    short: "KSA",
    flag: <img src={saudiFlag} alt="" className="h-full w-full object-cover" loading="lazy" />,
  },
  {
    name: "Singapore",
    short: "SG",
    flag: <img src={singaporeFlag} alt="" className="h-full w-full object-cover" loading="lazy" />,
  },
  {
    name: "Qatar",
    short: "QA",
    flag: <img src={qatarFlag} alt="" className="h-full w-full object-cover" loading="lazy" />,
  },
  {
    name: "United States",
    short: "US",
    flag: <img src={usaFlag} alt="" className="h-full w-full object-cover" loading="lazy" />,
  },
];

export function GlobalPresence() {
  const track = [...countries, ...countries, ...countries];

  return (
    <section className="gp relative overflow-hidden bg-white py-14 lg:py-16">
      <style>{`
        .gp{--gp-dur:38s}
        @keyframes gp-marquee{from{transform:translate3d(0,0,0)}to{transform:translate3d(-33.3333%,0,0)}}
        @keyframes gp-wave{0%{transform:rotateY(-8deg) rotateX(2.5deg) skewY(1.2deg) translateY(0)}25%{transform:rotateY(0deg) rotateX(-1deg) skewY(-1.4deg) translateY(-3px)}50%{transform:rotateY(8deg) rotateX(-2deg) skewY(1deg) translateY(-5px)}75%{transform:rotateY(0deg) rotateX(1.5deg) skewY(-1.2deg) translateY(-2px)}100%{transform:rotateY(-8deg) rotateX(2.5deg) skewY(1.2deg) translateY(0)}}
        @keyframes gp-cloth{0%{background-position:0% 50%}100%{background-position:200% 50%}}
        @keyframes gp-drift{0%{transform:translateX(-2%)}50%{transform:translateX(2%)}100%{transform:translateX(-2%)}}
        @keyframes gp-dash{to{stroke-dashoffset:-320}}
        .gp-track{display:flex;width:max-content;animation:gp-marquee var(--gp-dur) linear infinite}
        .gp-flag{animation:gp-wave 6s ease-in-out infinite;transform-style:preserve-3d}
        .gp-cloth{background-size:200% 100%;animation:gp-cloth 4.5s linear infinite}
        @media (prefers-reduced-motion: reduce){.gp-track,.gp-flag,.gp-cloth,.gp-dash,.gp-glow{animation:none !important}}
      `}</style>

      {/* light premium background details */}
      <div aria-hidden className="grid-faint absolute inset-0 opacity-[0.35]" />
      <div
        aria-hidden
        className="gp-glow pointer-events-none absolute inset-0"
        style={{
          animation: "gp-drift 30s ease-in-out infinite",
          background:
            "radial-gradient(45% 70% at 15% 20%, color-mix(in oklab, #4a73ff 9%, transparent), transparent 70%), radial-gradient(40% 60% at 85% 85%, color-mix(in oklab, #3af1ff 10%, transparent), transparent 70%)",
        }}
      />
      <svg
        aria-hidden
        viewBox="0 0 1200 260"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      >
        <defs>
          <linearGradient id="gp-line" x1="0" x2="1">
            <stop offset="0%" stopColor="#3af1ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#4a73ff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#3af1ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[70, 170].map((y, i) => (
          <path
            key={y}
            d={`M-40 ${y} C 280 ${y - 55}, 700 ${y + 60}, 1240 ${y - 25}`}
            fill="none"
            stroke="url(#gp-line)"
            strokeWidth="1"
            strokeDasharray="7 13"
            className="gp-dash"
            style={{ animation: `gp-dash ${18 + i * 6}s linear infinite` }}
          />
        ))}
      </svg>

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[40%_1fr] lg:gap-12 lg:px-12">
        <div className="min-w-0">
          <Reveal>
            <p className="eyebrow text-azure">Where We Work</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="display mt-4 text-[1.9rem] text-navy sm:text-[2.3rem] lg:text-[2.8rem]">
              Global Reach. Local Understanding.
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <div
              className="mt-6 h-px w-24"
              style={{ backgroundImage: "var(--gradient-tech)", opacity: 0.7 }}
            />
          </Reveal>
        </div>

        <div className="relative min-w-0 overflow-hidden" style={{ perspective: "1000px" }}>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent"
          />
          <div className="gp-track py-6">
            {track.map((c, i) => (
              <div key={`${c.name}-${i}`} className="shrink-0 px-4 lg:px-6">
                <div
                  className="gp-flag relative h-[62px] w-[92px] rounded-[6px] lg:h-[70px] lg:w-[104px]"
                  style={{
                    animationDelay: `${(i % countries.length) * 0.4}s`,
                    boxShadow: "0 16px 28px -16px rgba(1,12,98,0.45), 0 0 0 1px rgba(1,12,98,0.08)",
                  }}
                >
                  <div className="h-full w-full overflow-hidden rounded-[6px]">{c.flag}</div>
                  <span
                    aria-hidden
                    className="gp-cloth pointer-events-none absolute inset-0 rounded-[6px]"
                    style={{
                      animationDelay: `${(i % countries.length) * 0.35}s`,
                      background:
                        "linear-gradient(105deg, rgba(255,255,255,0.42) 0%, rgba(1,12,98,0.20) 14%, rgba(255,255,255,0.30) 28%, rgba(1,12,98,0.18) 42%, rgba(255,255,255,0.34) 56%, rgba(1,12,98,0.20) 72%, rgba(255,255,255,0.40) 100%)",
                      mixBlendMode: "overlay",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
