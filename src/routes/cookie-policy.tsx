import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cookie } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [{ title: "Cookie Policy — Nexen Strategy" }],
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <>
      <style>{`
        @keyframes cookie-grid {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-72px, -72px, 0); }
        }
        .cookie-grid { animation: cookie-grid 40s linear infinite; }
        .cookie-hero-mark {
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
        .cookie-index {
          background: linear-gradient(150deg, #010C62 0%, #02052D 100%);
          box-shadow: 0 24px 60px -38px rgba(1, 12, 98, 0.8);
        }
        .cookie-index::after {
          border: 1px solid rgba(58, 241, 255, 0.18);
          content: "";
          inset: 0.65rem;
          pointer-events: none;
          position: absolute;
        }
        @media (prefers-reduced-motion: reduce) {
          .cookie-grid { animation: none; }
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
          <div aria-hidden className="cookie-hero-mark">
            03
          </div>
          <div
            aria-hidden
            className="cookie-grid pointer-events-none absolute inset-[-90px] -z-10 grid-faint opacity-70"
          />
          <div className="mx-auto max-w-[1400px] px-6 pb-20 lg:px-12 lg:pb-28">
            <div className="grid items-end gap-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-24">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 text-cyan">
                  <Cookie className="h-5 w-5" strokeWidth={1.5} />
                  <p className="eyebrow">Legal / Preferences</p>
                </div>
                <h1 className="display mt-7 max-w-2xl text-5xl sm:text-6xl lg:text-8xl">
                  Cookie Policy
                </h1>
                <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                  How cookies and similar technologies support your experience on our website.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/55">
                  <span>Last updated: September 2026</span>
                  <span className="h-px w-12 bg-cyan/60" />
                  <span>9 sections</span>
                </div>
              </div>
              <div className="hidden border-l border-white/20 pl-7 lg:block">
                <p className="eyebrow text-cyan/80">Nexen Strategy</p>
                <p className="mt-5 text-sm leading-relaxed text-white/55">
                  A transparent guide to the small technologies that help our website work well.
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
              <div className="cookie-index relative overflow-hidden p-6 text-white sm:p-7">
                <div
                  aria-hidden
                  className="absolute left-0 top-0 h-1 w-24 bg-gradient-to-r from-cyan to-azure"
                />
                <div className="relative z-10 flex items-end justify-between gap-4">
                  <div>
                    <p className="eyebrow text-cyan">On this page</p>
                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-white/45">
                      Cookie index
                    </p>
                  </div>
                  <span className="font-mono text-4xl font-semibold leading-none text-white/15">
                    09
                  </span>
                </div>
                <nav
                  className="relative z-10 mt-7 grid grid-cols-2 gap-x-6 gap-y-1 border-t border-white/15 pt-4 text-sm sm:grid-cols-3 lg:grid-cols-1"
                  aria-label="Cookie policy sections"
                >
                  {[
                    "What Are Cookies?",
                    "How Nexen Strategy Uses Cookies",
                    "Types of Cookies",
                    "Third-Party Services",
                    "Managing Cookies",
                    "Browser Settings",
                    "Changes to This Cookie Policy",
                    "Relationship With Our Privacy Policy",
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
                We keep our use of cookies limited to what is necessary for the website to function
                and for visitors to use its features.
              </p>
              <div className="space-y-14 border-t border-border pt-12">
                {/* 1 */}
                <section id="section-1" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    1. What Are Cookies?
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Cookies are small text files that websites may place on your device when you
                    visit them. They can be used to remember information, support website
                    functionality, understand how a website is used, or provide personalised
                    advertising.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Similar technologies, such as local storage or other browser technologies, may
                    also be used by websites for related purposes.
                  </p>
                </section>

                {/* 2 */}
                <section id="section-2" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    2. How Nexen Strategy Uses Cookies
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    The current Nexen Strategy website does not intentionally use advertising
                    cookies or analytics tracking technologies such as Google Analytics, Google Tag
                    Manager, Meta Pixel, or similar behavioural tracking systems.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    The website may nevertheless use technologies provided by the browser, hosting
                    environment, security services, or third-party services that you choose to
                    interact with.
                  </p>
                </section>

                {/* 3 */}
                <section id="section-3" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    3. Types of Cookies
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Cookies are commonly divided into several categories:
                  </p>

                  <ul className="mt-5 list-disc space-y-3 pl-6 leading-relaxed text-muted-foreground">
                    <li>
                      <strong className="text-navy">Strictly necessary cookies</strong> help a
                      website operate and provide requested functionality.
                    </li>
                    <li>
                      <strong className="text-navy">Preference cookies</strong> can remember choices
                      or settings made by visitors.
                    </li>
                    <li>
                      <strong className="text-navy">Analytics cookies</strong> are generally used to
                      understand how visitors use a website.
                    </li>
                    <li>
                      <strong className="text-navy">Advertising cookies</strong> may be used to
                      track visitors for advertising or marketing purposes.
                    </li>
                  </ul>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Nexen Strategy does not currently intentionally deploy analytics or advertising
                    cookie systems on this website.
                  </p>
                </section>

                {/* 4 */}
                <section id="section-4" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    4. Third-Party Services
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Some features of the website may connect you with third-party services. For
                    example, our contact form and website contact functionality can direct enquiries
                    to WhatsApp.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Third-party services may use cookies or similar technologies independently of
                    Nexen Strategy. Their use of such technologies is governed by their own privacy
                    policies and terms.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    We recommend reviewing the privacy and cookie information of any third-party
                    service before using it.
                  </p>
                </section>

                {/* 5 */}
                <section id="section-5" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    5. Managing Cookies
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Most modern web browsers allow you to control or delete cookies through their
                    settings.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    You can generally configure your browser to block cookies, delete existing
                    cookies, or notify you before a cookie is stored. The exact options vary
                    depending on the browser and device you use.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Disabling certain cookies may affect the functionality of some websites or
                    third-party services.
                  </p>
                </section>

                {/* 6 */}
                <section id="section-6" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    6. Browser Settings
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    You can manage cookie settings through commonly used browsers such as Chrome,
                    Microsoft Edge, Firefox, Safari, and others.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Because browser settings and interfaces can change over time, please refer to
                    the help or privacy section of your browser for the most current instructions.
                  </p>
                </section>

                {/* 7 */}
                <section id="section-7" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    7. Changes to This Cookie Policy
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    We may update this Cookie Policy if our website, technologies, services, or
                    legal requirements change.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Any updated version will be published on this page together with a revised "Last
                    updated" date.
                  </p>
                </section>

                {/* 8 */}
                <section id="section-8" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    8. Relationship With Our Privacy Policy
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    This Cookie Policy should be read together with our{" "}
                    <Link
                      to="/privacy-policy"
                      className="font-medium text-navy underline decoration-border underline-offset-4 transition-colors hover:text-azure"
                    >
                      Privacy Policy
                    </Link>
                    , which explains how Nexen Strategy handles personal information submitted
                    through the website.
                  </p>
                </section>

                {/* 9 */}
                <section id="section-9" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">9. Contact Us</h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    If you have questions about this Cookie Policy or our use of cookies and similar
                    technologies, you can contact us at:
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
