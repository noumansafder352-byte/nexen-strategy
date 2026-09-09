import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldAlert } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export const Route = createFileRoute("/disclaimer")({
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <>
      <style>{`
        @keyframes disclaimer-grid {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-72px, -72px, 0); }
        }
        .disclaimer-grid { animation: disclaimer-grid 40s linear infinite; }
        .disclaimer-hero-mark {
          color: rgba(255, 255, 255, 0.035);
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: clamp(12rem, 30vw, 30rem);
          font-weight: 700;
          letter-spacing: -0.12em;
          line-height: 0.72;
          pointer-events: none;
          position: absolute;
          right: -0.06em;
          top: 0.35em;
          user-select: none;
        }
        .disclaimer-index {
          background: linear-gradient(150deg, #010C62 0%, #02052D 100%);
          box-shadow: 0 24px 60px -38px rgba(1, 12, 98, 0.8);
        }
        .disclaimer-index::after {
          border: 1px solid rgba(58, 241, 255, 0.18);
          content: "";
          inset: 0.65rem;
          pointer-events: none;
          position: absolute;
        }
        @media (prefers-reduced-motion: reduce) {
          .disclaimer-grid { animation: none; }
        }
      `}</style>
      <Header overHero />
      <main className="min-h-screen bg-background text-foreground">
        <section
          className="relative isolate overflow-hidden bg-navy pt-32 text-white lg:pt-40"
          style={{
            background: "linear-gradient(135deg, #02052D 0%, #010C62 52%, #17237D 100%)",
          }}
        >
          <div aria-hidden className="disclaimer-hero-mark">
            04
          </div>
          <div
            aria-hidden
            className="disclaimer-grid pointer-events-none absolute inset-[-90px] -z-10 grid-faint opacity-70"
          />
          <div className="mx-auto max-w-[1400px] px-6 pb-20 lg:px-12 lg:pb-28">
            <div className="grid items-end gap-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-24">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 text-cyan">
                  <ShieldAlert className="h-5 w-5" strokeWidth={1.5} />
                  <p className="eyebrow">Legal / Notice</p>
                </div>
                <h1 className="display mt-7 max-w-2xl text-5xl sm:text-6xl lg:text-8xl">
                  Disclaimer
                </h1>
                <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                  Important information about the scope, limitations, and use of the Nexen Strategy
                  website.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/55">
                  <span>Last updated: September 2026</span>
                  <span className="h-px w-12 bg-cyan/60" />
                  <span>14 sections</span>
                </div>
              </div>
              <div className="hidden border-l border-white/20 pl-7 lg:block">
                <p className="eyebrow text-cyan/80">Nexen Strategy</p>
                <p className="mt-5 text-sm leading-relaxed text-white/55">
                  Important boundaries for using our website, services, and published information.
                </p>
                <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/35">
                  <span className="h-px w-8 bg-cyan/60" />
                  <span>Edition 01</span>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden
            className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-cyan via-azure to-transparent"
          />
        </section>

        <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[250px_minmax(0,760px)] lg:gap-24">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="disclaimer-index relative overflow-hidden p-6 text-white sm:p-7">
                <div
                  aria-hidden
                  className="absolute left-0 top-0 h-1 w-24 bg-gradient-to-r from-cyan to-azure"
                />
                <div className="relative z-10 flex items-end justify-between gap-4">
                  <div>
                    <p className="eyebrow text-cyan">On this page</p>
                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-white/45">
                      Disclaimer index
                    </p>
                  </div>
                  <span className="font-mono text-4xl font-semibold leading-none text-white/15">
                    14
                  </span>
                </div>
                <nav
                  className="relative z-10 mt-7 grid grid-cols-2 gap-x-6 gap-y-1 border-t border-white/15 pt-4 text-sm sm:grid-cols-3 lg:grid-cols-1"
                  aria-label="Disclaimer sections"
                >
                  {[
                    "General Information",
                    "No Professional Advice",
                    "Digital and Technology Services",
                    "No Guarantee of Results",
                    "Website Availability",
                    "Third-Party Services and Links",
                    "WhatsApp Communications",
                    "Portfolio and Client References",
                    "Intellectual Property",
                    "External Information",
                    "Limitation of Liability",
                    "Privacy and Cookies",
                    "Changes to This Disclaimer",
                    "Contact Us",
                  ].map((item, index) => (
                    <a
                      key={item}
                      href={`#section-${index + 1}`}
                      className="group flex min-w-0 items-start gap-3 border-b border-white/[0.09] py-2.5 text-white/55 transition-colors last:border-0 hover:text-white"
                    >
                      <span className="mt-0.5 shrink-0 font-mono text-[0.68rem] font-semibold text-cyan/70 transition-colors group-hover:text-amber">
                        {String(index + 1).padStart(2, "0")}.
                      </span>
                      <span className="leading-snug">{item}</span>
                    </a>
                  ))}
                </nav>
              </div>
              <Link
                to="/contact"
                className="group mt-5 hidden items-center gap-2 border-b border-navy/15 pb-2 text-sm font-semibold text-navy transition-colors hover:border-azure lg:inline-flex"
              >
                Have a question{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </aside>

            <div className="max-w-3xl">
              <p className="mb-12 max-w-2xl text-xl leading-relaxed text-navy sm:text-2xl">
                The information provided on the Nexen Strategy website is intended for general
                informational and business purposes. This Disclaimer explains the limitations that
                apply to information, services, examples, and third-party resources presented
                through the website.
              </p>
              <div className="space-y-14 border-t border-border pt-12">
                {/* 1 */}
                <section id="section-1" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    1. General Information
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    The content published on this website is provided for general information only.
                    Although Nexen Strategy aims to provide useful and accurate information, we do
                    not guarantee that all content is complete, accurate, current, or suitable for
                    every individual situation.
                  </p>
                </section>

                {/* 2 */}
                <section id="section-2" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    2. No Professional Advice
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Information available on this website should not be interpreted as legal,
                    financial, accounting, investment, medical, or other professional advice.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    You should obtain appropriate professional advice before making decisions based
                    on information that may have legal, financial, technical, commercial, or other
                    significant consequences.
                  </p>
                </section>

                {/* 3 */}
                <section id="section-3" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    3. Digital and Technology Services
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Nexen Strategy provides digital and technology-related services. Information
                    about web development, software, AI, automation, marketing, branding, media, or
                    other services is provided as a general overview.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Results from digital, marketing, technology, or business projects can vary
                    depending on factors including project requirements, implementation, market
                    conditions, third-party platforms, technical infrastructure, client decisions,
                    and other factors outside our control.
                  </p>
                </section>

                {/* 4 */}
                <section id="section-4" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    4. No Guarantee of Results
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    References to potential benefits, improvements, performance, growth, efficiency,
                    or other outcomes should not be interpreted as guarantees of specific results.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Every project is different, and actual results depend on the circumstances and
                    requirements of the particular client and project.
                  </p>
                </section>

                {/* 5 */}
                <section id="section-5" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    5. Website Availability
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    We aim to keep the website accessible and functioning properly, but we do not
                    guarantee that it will always be available, uninterrupted, secure, or free from
                    errors.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Access may occasionally be interrupted due to maintenance, technical issues,
                    hosting problems, security measures, network conditions, or circumstances beyond
                    our reasonable control.
                  </p>
                </section>

                {/* 6 */}
                <section id="section-6" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    6. Third-Party Services and Links
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    The website may include links, integrations, or references to third-party
                    websites, platforms, tools, or services.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Nexen Strategy does not control third-party services and does not guarantee
                    their accuracy, availability, security, performance, or suitability.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Your use of third-party services is subject to the applicable terms, conditions,
                    and privacy policies of those providers.
                  </p>
                </section>

                {/* 7 */}
                <section id="section-7" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    7. WhatsApp Communications
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Our website provides functionality that can direct contact enquiries to WhatsApp
                    for communication with Nexen Strategy.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    WhatsApp is a third-party communication platform. Nexen Strategy does not
                    control WhatsApp's systems, security practices, privacy practices, availability,
                    or terms of service.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Please review the applicable WhatsApp terms and privacy information before using
                    the service.
                  </p>
                </section>

                {/* 8 */}
                <section id="section-8" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    8. Portfolio and Client References
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Portfolio examples, project descriptions, client references, images, logos, and
                    other examples shown on the website are provided to demonstrate the type of work
                    or capabilities that may be relevant to Nexen Strategy.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Past performance or previous project examples should not be understood as a
                    guarantee that a future project will achieve the same results.
                  </p>
                </section>

                {/* 9 */}
                <section id="section-9" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    9. Intellectual Property
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Website content, including text, graphics, branding, designs, images, and other
                    materials, may be protected by intellectual property rights.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Third-party names, trademarks, logos, and other protected materials remain the
                    property of their respective owners.
                  </p>
                </section>

                {/* 10 */}
                <section id="section-10" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    10. External Information
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Where the website references information, resources, technologies, platforms, or
                    services provided by third parties, such references are provided for convenience
                    or general information.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    We do not necessarily endorse or guarantee the accuracy, suitability, or
                    reliability of third-party information.
                  </p>
                </section>

                {/* 11 */}
                <section id="section-11" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    11. Limitation of Liability
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    To the extent permitted by applicable law, Nexen Strategy is not responsible for
                    losses or damages arising from reliance on general information provided through
                    this website.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Nothing in this Disclaimer is intended to exclude or limit liability where such
                    exclusion or limitation would be unlawful.
                  </p>
                </section>

                {/* 12 */}
                <section id="section-12" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    12. Privacy and Cookies
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Information submitted through the website may involve the processing of personal
                    information. Please review our{" "}
                    <Link
                      to="/privacy-policy"
                      className="font-medium text-navy underline decoration-border underline-offset-4 transition-colors hover:text-azure"
                    >
                      Privacy Policy
                    </Link>{" "}
                    for information about how personal information is handled.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Information about cookies and similar technologies is available in our{" "}
                    <Link
                      to="/cookie-policy"
                      className="font-medium text-navy underline decoration-border underline-offset-4 transition-colors hover:text-azure"
                    >
                      Cookie Policy
                    </Link>
                    .
                  </p>
                </section>

                {/* 13 */}
                <section id="section-13" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    13. Changes to This Disclaimer
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Nexen Strategy may update this Disclaimer from time to time to reflect changes
                    to the website, services, technology, business practices, or applicable legal
                    requirements.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    The latest version will be published on this page with a revised "Last updated"
                    date.
                  </p>
                </section>

                {/* 14 */}
                <section id="section-14" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    14. Contact Us
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    If you have questions regarding this Disclaimer, please contact Nexen Strategy:
                  </p>

                  <div className="mt-6 rounded-2xl border border-border bg-muted/30 p-6">
                    <p className="font-semibold text-navy">Nexen Strategy</p>

                    <p className="mt-2 text-muted-foreground">
                      Email:{" "}
                      <a
                        href="mailto:info@nexenstrategy.com"
                        className="text-navy underline decoration-border underline-offset-4 transition-colors hover:text-azure"
                      >
                        info@nexenstrategy.com
                      </a>
                    </p>

                    <p className="mt-2 text-muted-foreground">
                      Location: United Kingdom | Pakistan
                    </p>

                    <p className="mt-2 text-muted-foreground">
                      Phone:{" "}
                      <a
                        href="tel:+923358084973"
                        className="text-navy underline decoration-border underline-offset-4 transition-colors hover:text-azure"
                      >
                        +92 335 8084973
                      </a>
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
