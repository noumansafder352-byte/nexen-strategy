import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";
import logo from "@/assets/nexen-logo-white.png";
import { services } from "@/lib/site-data";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={className}
  >
    <path
      d="M15.5 3.5c.8 1.6 2.2 2.7 4 3.1v2.9a7.1 7.1 0 0 1-4-1.3v6.7a5.6 5.6 0 1 1-5.6-5.6c.2 0 .4 0 .6.1v2.7a2.9 2.9 0 1 0 2.1 2.8V3.5h3.9Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/nexenstrategy", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/nexenstrategy/", Icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/nexenstrategy/", Icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com", Icon: Youtube },
  { label: "TikTok", href: "https://tiktok.com", Icon: TikTokIcon },
];

const contactItems = [
  { Icon: Mail, label: "info@nexenstrategy.com", href: "mailto:info@nexenstrategy.com" },
  { Icon: Phone, label: "+92 335 8084973", href: "tel:+923358084973" },
  { Icon: MapPin, label: "United Kingdom | Pakistan", href: null as string | null },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="relative isolate overflow-hidden bg-navy text-white">
      {/* animated background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-70 [animation:ftr-drift_26s_ease-in-out_infinite] [background:radial-gradient(60%_70%_at_15%_0%,rgba(74,115,255,0.28),transparent_60%),radial-gradient(50%_60%_at_85%_100%,rgba(58,241,255,0.16),transparent_65%)]" />
        <div className="absolute inset-0 grid-faint opacity-60 [animation:ftr-grid_36s_linear_infinite]" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.35]"
          viewBox="0 0 1400 520"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="ftrLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3AF1FF" stopOpacity="0" />
              <stop offset="50%" stopColor="#3AF1FF" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#4A73FF" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[
            "M-50 120 C 300 40, 620 220, 1450 90",
            "M-50 300 C 380 210, 780 400, 1450 260",
            "M-50 450 C 260 380, 900 520, 1450 400",
          ].map((d, i) => (
            <path
              key={d}
              d={d}
              fill="none"
              stroke="url(#ftrLine)"
              strokeWidth="1"
              strokeDasharray="14 22"
              style={{ animation: `ftr-dash ${18 + i * 5}s linear infinite` }}
            />
          ))}
          {[
            [180, 105],
            [640, 268],
            [1040, 150],
            [900, 452],
            [340, 392],
          ].map(([cx, cy], i) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r="2.5"
              fill="#3AF1FF"
              style={{ animation: `ftr-pulse ${7 + i * 2}s ease-in-out infinite` }}
            />
          ))}
        </svg>
        <span className="ghost-type absolute -bottom-10 left-1/2 -translate-x-1/2 text-[24vw] text-white/[0.028] [animation:ftr-float_30s_ease-in-out_infinite]">
          NEXEN
        </span>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-10 lg:px-12 lg:pt-24 lg:pb-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.55fr_0.85fr_0.85fr_1.15fr] lg:gap-10">
          <div>
            <img
              src={logo}
              alt="Nexen Strategy"
              width={200}
              height={52}
              loading="lazy"
              className="h-9 w-auto object-contain"
            />
            <p className="mt-7 max-w-sm text-[0.95rem] leading-relaxed text-white/65">
              Nexen Strategy is a digital solutions partner helping ambitious businesses build,
              transform, and grow through strategy, technology, creativity, and innovation.
            </p>
            <div className="mt-8 h-px w-24 bg-gradient-to-r from-cyan to-azure" />
            <div className="mt-7 flex items-center gap-5">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="text-cyan transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-white"
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links" className="lg:pl-8">
            <p className="eyebrow text-cyan">Quick Links</p>
            <ul className="mt-6 space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/clients", label: "Clients" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services" className="lg:pl-2">
            <p className="eyebrow text-cyan">Services</p>
            <ul className="mt-6 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-cyan">Contact</p>
            <ul className="mt-6 space-y-3.5">
              {contactItems.map(({ Icon, label, href }) => {
                const inner = (
                  <span className="group flex items-center gap-3 text-sm text-white/70 transition-colors duration-300 hover:text-white">
                    <Icon
                      className="h-4 w-4 shrink-0 text-white/55 transition-colors duration-300 group-hover:text-cyan"
                      strokeWidth={1.6}
                    />
                    {label}
                  </span>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} className="inline-flex">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-7 h-px w-full max-w-xs bg-white/12" />

            {/* <p className="eyebrow mt-7 text-cyan">Subscribe</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              Stay connected with Nexen Strategy. Get occasional insights, ideas and updates from
              our team.
            </p> */}
            <form
              className="mt-5 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSent(true);
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                aria-label="Email address"
                className="w-full rounded-lg border border-white/20 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/40 transition-colors duration-300 hover:border-white/35 focus:border-cyan focus:bg-white/[0.09] focus:outline-none"
              />
              <button type="submit" className="btn-primary w-full justify-center py-3 text-sm">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
              {sent && <p className="text-xs text-cyan">Thanks — you&apos;re on the list.</p>}
            </form>
          </div>
        </div>

        {/* <div className="mt-14 flex flex-col gap-3 border-t border-white/12 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 All rights reserved by Nexen Strategy</p>
          <p>Build Better. Move Smarter. Grow Further.</p>
        </div> */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/12 pt-6 text-xs text-white/45 lg:flex-row lg:items-center lg:justify-between">
          <p>&copy; 2026 All rights reserved by Nexen Strategy</p>

          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/privacy-policy" className="transition-colors duration-300 hover:text-cyan">
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="transition-colors duration-300 hover:text-cyan"
            >
              Terms &amp; Conditions
            </Link>

            <Link to="/cookie-policy" className="transition-colors duration-300 hover:text-cyan">
              Cookie Policy
            </Link>

            <Link to="/disclaimer" className="transition-colors duration-300 hover:text-cyan">
              Disclaimer
            </Link>
          </nav>

          <p className="lg:text-right">Build Better. Move Smarter. Grow Further.</p>
        </div>
      </div>
    </footer>
  );
}
