import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileCheck2 } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [{ title: "Terms & Conditions — Nexen Strategy" }],
  }),
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
  return (
    <>
      <style>{`
        @keyframes terms-grid {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-72px, -72px, 0); }
        }
        .terms-grid { animation: terms-grid 40s linear infinite; }
        .terms-hero-mark {
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
        .terms-index {
          background: linear-gradient(150deg, #010C62 0%, #02052D 100%);
          box-shadow: 0 24px 60px -38px rgba(1, 12, 98, 0.8);
        }
        .terms-index::after {
          border: 1px solid rgba(58, 241, 255, 0.18);
          content: "";
          inset: 0.65rem;
          pointer-events: none;
          position: absolute;
        }
        @media (prefers-reduced-motion: reduce) {
          .terms-grid { animation: none; }
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
          <div aria-hidden className="terms-hero-mark">
            02
          </div>
          <div
            aria-hidden
            className="terms-grid pointer-events-none absolute inset-[-90px] -z-10 grid-faint opacity-70"
          />
          <div className="mx-auto max-w-[1400px] px-6 pb-20 lg:px-12 lg:pb-28">
            <div className="grid items-end gap-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-24">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 text-cyan">
                  <FileCheck2 className="h-5 w-5" strokeWidth={1.5} />
                  <p className="eyebrow">Legal / Agreement</p>
                </div>
                <h1 className="display mt-7 max-w-3xl text-5xl sm:text-6xl lg:text-8xl">
                  Terms &amp; Conditions
                </h1>
                <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                  The terms that govern your use of the Nexen Strategy website and our digital work.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/55">
                  <span>Last updated: September 2026</span>
                  <span className="h-px w-12 bg-cyan/60" />
                  <span>16 sections</span>
                </div>
              </div>
              <div className="hidden border-l border-white/20 pl-7 lg:block">
                <p className="eyebrow text-cyan/80">Nexen Strategy</p>
                <p className="mt-5 text-sm leading-relaxed text-white/55">
                  The essential terms for working clearly, responsibly, and confidently together.
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
              <div className="terms-index relative overflow-hidden p-6 text-white sm:p-7">
                <div
                  aria-hidden
                  className="absolute left-0 top-0 h-1 w-24 bg-gradient-to-r from-cyan to-azure"
                />
                <div className="relative z-10 flex items-end justify-between gap-4">
                  <div>
                    <p className="eyebrow text-cyan">On this page</p>
                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-white/45">
                      Terms index
                    </p>
                  </div>
                  <span className="font-mono text-4xl font-semibold leading-none text-white/15">
                    16
                  </span>
                </div>
                <nav
                  className="relative z-10 mt-7 grid grid-cols-2 gap-x-6 gap-y-1 border-t border-white/15 pt-4 text-sm sm:grid-cols-3 lg:grid-cols-1"
                  aria-label="Terms and conditions sections"
                >
                  {[
                    "About Nexen Strategy",
                    "Using This Website",
                    "Website Content",
                    "Services and Project Information",
                    "Enquiries and Communications",
                    "Intellectual Property",
                    "Portfolio and Third-Party Materials",
                    "Third-Party Links and Services",
                    "Availability and Security",
                    "Disclaimer of Warranties",
                    "Limitation of Liability",
                    "User-Provided Information",
                    "Privacy",
                    "Changes to These Terms",
                    "Governing Law",
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
                Discuss a project{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </aside>

            <div className="max-w-3xl">
              <p className="mb-12 max-w-2xl text-xl leading-relaxed text-navy sm:text-2xl">
                These Terms &amp; Conditions set out the ground rules for using the Nexen Strategy
                website and engaging with our work.
              </p>
              <div className="space-y-14 border-t border-border pt-12">
                {/* 1 */}
                <section id="section-1" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    1. About Nexen Strategy
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Nexen Strategy is a digital solutions company providing services including brand
                    and design, web and app development, software solutions, AI and automation,
                    marketing and growth, and media production.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Information presented on this website is provided for general business and
                    informational purposes.
                  </p>
                </section>

                {/* 2 */}
                <section id="section-2" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    2. Using This Website
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    You may use this website for lawful purposes and in accordance with these Terms
                    &amp; Conditions.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    You must not use the website in a way that could damage, disable, overburden,
                    interfere with, or compromise the website, its functionality, security, or
                    availability.
                  </p>
                </section>

                {/* 3 */}
                <section id="section-3" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    3. Website Content
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    We make reasonable efforts to keep the information on this website accurate and
                    up to date. However, we do not guarantee that all content is complete, accurate,
                    current, or free from errors.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Website content may be changed, updated, removed, or replaced without prior
                    notice.
                  </p>
                </section>

                {/* 4 */}
                <section id="section-4" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    4. Services and Project Information
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Descriptions of services displayed on this website are intended to provide an
                    overview of the types of solutions Nexen Strategy may provide.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    A website description, portfolio item, service description, or enquiry does not
                    by itself create a contract between you and Nexen Strategy.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Specific project scope, deliverables, pricing, timelines, responsibilities,
                    payment terms, and other commercial conditions should be agreed separately where
                    applicable.
                  </p>
                </section>

                {/* 5 */}
                <section id="section-5" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    5. Enquiries and Communications
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    You may contact Nexen Strategy through the contact functionality provided on the
                    website.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Information submitted through the website contact form is formatted as an
                    enquiry and directed to WhatsApp for communication with our team.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Submitting an enquiry does not guarantee that Nexen Strategy will accept a
                    project, provide a quotation, or enter into a business relationship.
                  </p>
                </section>

                {/* 6 */}
                <section id="section-6" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    6. Intellectual Property
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Unless otherwise stated, content appearing on this website, including text,
                    graphics, logos, visual elements, design, branding, and other materials, may be
                    owned by or licensed to Nexen Strategy.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    You may view the website and its content for personal or legitimate business
                    evaluation purposes. You must not reproduce, redistribute, modify, publish,
                    sell, or commercially exploit website content without appropriate permission.
                  </p>
                </section>

                {/* 7 */}
                <section id="section-7" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    7. Portfolio and Third-Party Materials
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Portfolio examples, project references, logos, images, or other materials
                    displayed on the website may relate to clients, partners, platforms, or third
                    parties.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Third-party names, trademarks, and logos remain the property of their respective
                    owners unless otherwise stated.
                  </p>
                </section>

                {/* 8 */}
                <section id="section-8" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    8. Third-Party Links and Services
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    The website may contain links or connections to third-party websites, platforms,
                    or services.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Nexen Strategy does not control and is not responsible for the content,
                    availability, security, privacy practices, or terms of third-party websites and
                    services.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    You use third-party services at your own discretion and should review their
                    applicable terms and privacy policies.
                  </p>
                </section>

                {/* 9 */}
                <section id="section-9" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    9. Availability and Security
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    We aim to keep the website available and functioning properly, but we do not
                    guarantee uninterrupted or error-free access.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    We may temporarily suspend, restrict, or modify access to the website for
                    maintenance, security, technical, or operational reasons.
                  </p>
                </section>

                {/* 10 */}
                <section id="section-10" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    10. Disclaimer of Warranties
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    To the extent permitted by applicable law, the website and its content are
                    provided without warranties that the information will always be complete,
                    accurate, available, or suitable for every particular purpose.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Information on this website should not be treated as a guarantee of a particular
                    business, technical, financial, marketing, or other outcome.
                  </p>
                </section>

                {/* 11 */}
                <section id="section-11" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    11. Limitation of Liability
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    To the maximum extent permitted by applicable law, Nexen Strategy will not be
                    responsible for losses or damages arising solely from your use of, or inability
                    to use, this website or reliance on general information presented on it.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Nothing in these Terms &amp; Conditions is intended to exclude or limit
                    liability where doing so would be unlawful.
                  </p>
                </section>

                {/* 12 */}
                <section id="section-12" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    12. User-Provided Information
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    When submitting information through our website, you should ensure that the
                    information you provide is accurate and that you have the right to provide it.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    You should not submit confidential, unlawful, harmful, or third-party
                    information unless you have appropriate authority to do so.
                  </p>
                </section>

                {/* 13 */}
                <section id="section-13" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">13. Privacy</h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Your use of the website may involve the processing of personal information.
                    Details about how we handle personal information are explained in our{" "}
                    <Link
                      to="/privacy-policy"
                      className="font-medium text-navy underline decoration-border underline-offset-4 transition-colors hover:text-azure"
                    >
                      Privacy Policy
                    </Link>
                    .
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

                {/* 14 */}
                <section id="section-14" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    14. Changes to These Terms
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Nexen Strategy may update these Terms &amp; Conditions from time to time to
                    reflect changes to the website, services, business practices, or legal
                    requirements.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    The latest version will be published on this page with a revised "Last updated"
                    date.
                  </p>
                </section>

                {/* 15 */}
                <section id="section-15" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    15. Governing Law
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    These Terms &amp; Conditions are intended to operate subject to applicable laws
                    and regulations.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Where a specific client agreement or contract applies, the governing law and
                    dispute provisions contained in that agreement will take precedence for that
                    contractual relationship.
                  </p>
                </section>

                {/* 16 */}
                <section id="section-16" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    16. Contact Us
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    If you have questions about these Terms &amp; Conditions, you can contact Nexen
                    Strategy:
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
