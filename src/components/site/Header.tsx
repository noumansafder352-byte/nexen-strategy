import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Menu, X, ArrowRight, Plus, Minus, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/nexen-logo.png";
import logoWhite from "@/assets/nexen-logo-white.png";
import { services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header({
  overHero = false,
  transparentDefault = false,
}: {
  overHero?: boolean;
  transparentDefault?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const body = document.body;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  useEffect(() => {
    if (!open) setMobileServicesOpen(false);
  }, [open]);

  const light = overHero && !scrolled;
  const transparentStatic = transparentDefault && !scrolled;

  const navLink = cn(
    "text-sm font-medium tracking-tight transition-colors",
    light ? "text-white/85 hover:text-white" : "text-navy/75 hover:text-navy",
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,padding] duration-500",
        light ? "py-6" : transparentStatic ? "py-4" : "bg-white/92 py-4 backdrop-blur-xl",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <Link to="/" aria-label="Nexen Strategy home" className="shrink-0">
          <img
            src={light ? logoWhite : logo}
            alt="Nexen Strategy"
            width={160}
            height={42}
            className={cn("h-8 w-auto object-contain transition-all duration-500 sm:h-9")}
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          <Link to="/" className={navLink}>
            Home
          </Link>
          <Link to="/about" className={navLink}>
            About Us
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
              className={cn(navLink, "flex items-center gap-1.5")}
            >
              Services
              <ChevronDown
                className={cn("h-3.5 w-3.5 transition-transform", servicesOpen && "rotate-180")}
              />
            </button>
            <div
              className={cn(
                "absolute left-1/2 top-full w-[320px] -translate-x-1/2 pt-5 transition-all duration-300",
                servicesOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-1 opacity-0",
              )}
            >
              <div className="overflow-hidden rounded-md border border-border bg-white p-2 shadow-[0_30px_70px_-30px_rgba(1,12,98,0.45)]">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group flex items-center justify-between px-4 py-3 text-sm font-medium text-navy/80 transition-colors hover:bg-secondary hover:text-navy"
                  >
                    {s.title}
                    <ArrowRight className="h-4 w-4 -translate-x-1 text-azure opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/portfolio" className={navLink}>
            Portfolio
          </Link>
          <Link to="/clients" className={navLink}>
            Clients
          </Link>
          <Link to="/gallery" className={navLink}>
            Gallery
          </Link>
          <Link to="/contact" className={navLink}>
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-primary hidden !py-3 !text-[0.85rem] lg:inline-flex">
            Start a Project
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className={cn("p-2 lg:hidden", light ? "text-white" : "text-navy")}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mounted &&
        createPortal(
          <div
            className={cn(
              "fixed inset-0 z-[9999] overflow-hidden bg-navy transition-all duration-500 lg:hidden",
              open ? "opacity-100" : "pointer-events-none opacity-0",
            )}
          >
            {/* premium background layers */}
            <div className="pointer-events-none absolute inset-0 grid-faint opacity-60" />
            <div
              className="pointer-events-none absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full opacity-50 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--azure) 55%, transparent), transparent 70%)",
              }}
            />
            <div
              className="pointer-events-none absolute -bottom-40 -left-28 h-[380px] w-[380px] rounded-full opacity-35 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--cyan) 45%, transparent), transparent 70%)",
              }}
            />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{ backgroundImage: "var(--gradient-tech)", opacity: 0.7 }}
            />

            <div className="relative flex items-center justify-between px-6 pt-7 pb-5 sm:px-8">
              <img
                src={logoWhite}
                alt="Nexen Strategy"
                width={160}
                height={42}
                className="h-8 w-auto object-contain"
              />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 bg-white/[0.06] text-white backdrop-blur-sm transition-colors hover:border-cyan/60 hover:text-cyan"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav
              className="relative flex h-[calc(100%-92px)] flex-col overflow-y-auto px-6 pb-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-8"
              aria-label="Mobile"
            >
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between border-b border-white/10 py-4 text-[1.15rem] font-semibold sm:text-[1.25rem] tracking-tight text-white transition-colors hover:text-cyan"
                >
                  {l.label}
                  <ArrowRight className="h-4 w-4 -translate-x-1 text-cyan opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              ))}

              <div className="border-b border-white/10">
                <button
                  type="button"
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between py-4 text-[1.15rem] font-semibold sm:text-[1.25rem] tracking-tight text-white transition-colors hover:text-cyan"
                >
                  Services
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-white/20 text-cyan transition-colors">
                    {mobileServicesOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-400 ease-out",
                    mobileServicesOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="mb-4 ml-1 border-l border-white/12 pl-4">
                      <p className="eyebrow pt-1 pb-1 text-[0.72rem] text-cyan/80">All Services</p>
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          onClick={() => setOpen(false)}
                          className="block py-2.5 text-[1.05rem] font-medium text-white/75 transition-colors hover:text-cyan"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {[
                { to: "/portfolio", label: "Portfolio" },
                { to: "/clients", label: "Clients" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact Us" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between border-b border-white/10 py-4 text-[1.15rem] font-semibold sm:text-[1.25rem] tracking-tight text-white transition-colors hover:text-cyan"
                >
                  {l.label}
                  <ArrowRight className="h-4 w-4 -translate-x-1 text-cyan opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-8 mb-4 justify-center"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="mt-7 border-t border-white/10 pt-5 pb-3">
                <p className="eyebrow mb-3 text-[0.65rem] text-cyan">Contact</p>
                <ul className="divide-y divide-white/8 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:divide-y-0">
                  <li className="flex items-center gap-2.5 py-2 text-[0.9rem] text-white/70 sm:col-span-2 sm:py-1.5">
                    <Mail className="h-3.5 w-3.5 shrink-0 text-cyan/70" />
                    <a
                      href="mailto:info@nexenstrategy.com"
                      className="truncate transition-colors hover:text-cyan"
                    >
                      info@nexenstrategy.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5 py-2 text-[0.9rem] text-white/70 sm:py-1.5">
                    <Phone className="h-3.5 w-3.5 shrink-0 text-cyan/70" />
                    <a href="tel:+923358084973" className="transition-colors hover:text-cyan">
                      +92 335 8084973
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5 py-2 text-[0.9rem] text-white/70 sm:py-1.5">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-cyan/70" />
                    UK / Islamabad
                  </li>
                </ul>
              </div>
            </nav>
          </div>,
          document.body,
        )}
    </header>
  );
}
