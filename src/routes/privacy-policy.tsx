// import { createFileRoute, Link } from "@tanstack/react-router";
// import { ArrowRight, ShieldCheck } from "lucide-react";
// import { Footer } from "@/components/site/Footer";
// import { Header } from "@/components/site/Header";

// export const Route = createFileRoute("/privacy-policy")({
//   component: PrivacyPolicyPage,
// });

// function PrivacyPolicyPage() {
//   return (
//     <>
//       <style>{`
//         @keyframes privacy-grid {
//           from { transform: translate3d(0, 0, 0); }
//           to { transform: translate3d(-72px, -72px, 0); }
//         }
//         .privacy-grid { animation: privacy-grid 40s linear infinite; }
//         .privacy-hero-mark {
//           color: rgba(255, 255, 255, 0.035);
//           font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
//           font-size: clamp(12rem, 30vw, 30rem);
//           font-weight: 700;
//           letter-spacing: -0.12em;
//           line-height: 0.72;
//           pointer-events: none;
//           position: absolute;
//           right: -0.06em;
//           top: 0.35em;
//           user-select: none;
//         }
//         .privacy-index {
//           background: linear-gradient(150deg, #010C62 0%, #02052D 100%);
//           box-shadow: 0 24px 60px -38px rgba(1, 12, 98, 0.8);
//         }
//         .privacy-index::after {
//           border: 1px solid rgba(58, 241, 255, 0.18);
//           content: "";
//           inset: 0.65rem;
//           pointer-events: none;
//           position: absolute;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .privacy-grid { animation: none; }
//         }
//       `}</style>
//       <Header overHero />
//       <main className="min-h-screen bg-background text-foreground">
//         <section
//           className="relative isolate overflow-hidden bg-navy pt-32 text-white lg:pt-40"
//           style={{
//             background: "linear-gradient(135deg, #02052D 0%, #010C62 52%, #17237D 100%)",
//           }}
//         >
//           <div aria-hidden className="privacy-hero-mark">
//             01
//           </div>
//           <div
//             aria-hidden
//             className="privacy-grid pointer-events-none absolute inset-[-90px] -z-10 grid-faint opacity-70"
//           />
//           <div className="mx-auto max-w-[1400px] px-6 pb-20 lg:px-12 lg:pb-28">
//             <div className="grid items-end gap-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-24">
//               <div className="max-w-3xl">
//                 <div className="flex items-center gap-3 text-cyan">
//                   <ShieldCheck className="h-5 w-5" strokeWidth={1.5} />
//                   <p className="eyebrow">Legal / Trust</p>
//                 </div>
//                 <h1 className="display mt-7 max-w-2xl text-5xl sm:text-6xl lg:text-8xl">
//                   Privacy Policy
//                 </h1>
//                 <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
//                   How Nexen Strategy handles the information you share when you start a conversation
//                   with us.
//                 </p>
//                 <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/55">
//                   <span>Last updated: September 2026</span>
//                   <span className="h-px w-12 bg-cyan/60" />
//                   <span>15 sections</span>
//                 </div>
//               </div>
//               <div className="hidden border-l border-white/20 pl-7 lg:block">
//                 <p className="eyebrow text-cyan/80">Nexen Strategy</p>
//                 <p className="mt-5 text-sm leading-relaxed text-white/55">
//                   A clear record of how we protect, use, and respect the information entrusted to
//                   us.
//                 </p>
//                 <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/35">
//                   <span className="h-px w-8 bg-cyan/60" />
//                   <span>Edition 01</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             aria-hidden
//             className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-cyan via-azure to-transparent"
//           />
//         </section>

//         <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-24">
//           <div className="grid gap-14 lg:grid-cols-[250px_minmax(0,760px)] lg:gap-24">
//             <aside className="lg:sticky lg:top-28 lg:self-start">
//               <div className="privacy-index relative overflow-hidden p-6 text-white sm:p-7">
//                 <div
//                   aria-hidden
//                   className="absolute left-0 top-0 h-1 w-24 bg-gradient-to-r from-cyan to-azure"
//                 />
//                 <div className="relative z-10 flex items-end justify-between gap-4">
//                   <div>
//                     <p className="eyebrow text-cyan">On this page</p>
//                     <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-white/45">
//                       Policy index
//                     </p>
//                   </div>
//                   <span className="font-mono text-4xl font-semibold leading-none text-white/15">
//                     15
//                   </span>
//                 </div>
//                 <nav
//                   className="relative z-10 mt-7 grid grid-cols-2 gap-x-6 gap-y-1 border-t border-white/15 pt-4 text-sm sm:grid-cols-3 lg:grid-cols-1"
//                   aria-label="Privacy policy sections"
//                 >
//                   {[
//                     "Who We Are",
//                     "Information We Collect",
//                     "How We Receive Contact Enquiries",
//                     "How We Use Your Information",
//                     "Legal Basis for Processing",
//                     "Sharing Information",
//                     "Data Retention",
//                     "Data Security",
//                     "Your Rights",
//                     "Cookies",
//                     "External Links",
//                     "International Transfers",
//                     "Children's Privacy",
//                     "Changes",
//                     "Contact Us",
//                   ].map((item, index) => (
//                     <a
//                       key={item}
//                       href={`#section-${index + 1}`}
//                       className="group flex min-w-0 items-start gap-3 border-b border-white/[0.09] py-2.5 text-white/55 transition-colors last:border-0 hover:text-white"
//                     >
//                       <span className="mt-0.5 shrink-0 font-mono text-[0.68rem] font-semibold text-cyan/70 transition-colors group-hover:text-amber">
//                         {String(index + 1).padStart(2, "0")}.
//                       </span>
//                       <span className="leading-snug">{item}</span>
//                     </a>
//                   ))}
//                 </nav>
//               </div>
//               <Link
//                 to="/contact"
//                 className="group mt-5 hidden items-center gap-2 border-b border-navy/15 pb-2 text-sm font-semibold text-navy transition-colors hover:border-azure lg:inline-flex"
//               >
//                 Have a question{" "}
//                 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Link>
//             </aside>

//             <div className="max-w-3xl">
//               <p className="mb-12 max-w-2xl text-xl leading-relaxed text-navy sm:text-2xl">
//                 Nexen Strategy respects your privacy and is committed to handling personal
//                 information responsibly.
//               </p>
//               <div className="space-y-14 border-t border-border pt-12">
//                 {/* 1 */}
//                 <section id="section-1" className="privacy-section scroll-mt-28">
//                   <h2 className="text-2xl font-semibold tracking-tight text-navy">1. Who We Are</h2>

//                   <p className="mt-5 leading-relaxed text-muted-foreground">
//                     This website is operated by Nexen Strategy, a digital solutions company serving
//                     clients in the UK and internationally.
//                   </p>

//                   <p className="mt-4 leading-relaxed text-muted-foreground">
//                     If you have questions about this Privacy Policy or how your information is
//                     handled, you can contact us at{" "}
//                     <a
//                       href="mailto:info@nexenstrategy.com"
//                       className="font-medium text-navy underline decoration-border underline-offset-4 transition-colors hover:text-azure"
//                     >
//                       info@nexenstrategy.com
//                     </a>
//                     .
//                   </p>
//                 </section>

//                 {/* 2 */}
//                 <section id="section-2" className="privacy-section scroll-mt-28">
//                   <h2 className="text-2xl font-semibold tracking-tight text-navy">
//                     2. Information We Collect
//                   </h2>

//                   <p className="mt-5 leading-relaxed text-muted-foreground">
//                     When you use the contact form on our website, you may provide information
//                     including:
//                   </p>

//                   <ul className="mt-5 list-disc space-y-3 pl-6 leading-relaxed text-muted-foreground">
//                     <li>Your name</li>
//                     <li>Your company name</li>
//                     <li>Your email address</li>
//                     <li>Your telephone or mobile number</li>
//                     <li>The service or project type you are interested in</li>
//                     <li>The message or project information you choose to provide</li>
//                   </ul>

//                   <p className="mt-5 leading-relaxed text-muted-foreground">
//                     We only ask for information that is relevant to responding to your enquiry and
//                     discussing your potential project with us.
//                   </p>
//                 </section>

//                 {/* 3 */}
//                 <section id="section-3" className="privacy-section scroll-mt-28">
//                   <h2 className="text-2xl font-semibold tracking-tight text-navy">
//                     3. How We Receive Contact Enquiries
//                   </h2>

//                   <p className="mt-5 leading-relaxed text-muted-foreground">
//                     Our website contact form is designed to help you start a conversation with Nexen
//                     Strategy. When you submit the form, the information you enter is formatted into
//                     an enquiry message and directed to WhatsApp for communication with our team.
//                   </p>

//                   <p className="mt-4 leading-relaxed text-muted-foreground">
//                     This means that information submitted through the contact form may be processed
//                     by WhatsApp in accordance with WhatsApp's own privacy practices and terms. You
//                     should review WhatsApp's privacy information if you use this communication
//                     method.
//                   </p>
//                 </section>

//                 {/* 4 */}
//                 <section id="section-4" className="privacy-section scroll-mt-28">
//                   <h2 className="text-2xl font-semibold tracking-tight text-navy">
//                     4. How We Use Your Information
//                   </h2>

//                   <p className="mt-5 leading-relaxed text-muted-foreground">
//                     Information you provide may be used to:
//                   </p>

//                   <ul className="mt-5 list-disc space-y-3 pl-6 leading-relaxed text-muted-foreground">
//                     <li>Respond to your enquiry</li>
//                     <li>Understand your business or project requirements</li>
//                     <li>Discuss requested services</li>
//                     <li>Communicate with you about a potential project</li>
//                     <li>Provide information or assistance you have requested</li>
//                     <li>Maintain appropriate business records</li>
//                   </ul>

//                   <p className="mt-5 leading-relaxed text-muted-foreground">
//                     We do not sell your personal information to third parties.
//                   </p>
//                 </section>

//                 {/* 5 */}
//                 <section id="section-5" className="privacy-section scroll-mt-28">
//                   <h2 className="text-2xl font-semibold tracking-tight text-navy">
//                     5. Legal Basis for Processing
//                   </h2>

//                   <p className="mt-5 leading-relaxed text-muted-foreground">
//                     Where UK data protection law applies, we will seek to rely on an appropriate
//                     lawful basis for processing personal information. Depending on the
//                     circumstances, this may include taking steps at your request before entering
//                     into a contract, pursuing legitimate business interests, complying with legal
//                     obligations, or obtaining consent where consent is required.
//                   </p>
//                 </section>

//                 {/* 6 */}
//                 <section id="section-6" className="privacy-section scroll-mt-28">
//                   <h2 className="text-2xl font-semibold tracking-tight text-navy">
//                     6. Sharing Information With Third Parties
//                   </h2>

//                   <p className="mt-5 leading-relaxed text-muted-foreground">
//                     We may use third-party services where necessary to operate our website or
//                     communicate with you.
//                   </p>

//                   <p className="mt-4 leading-relaxed text-muted-foreground">
//                     In particular, contact enquiries submitted through our website may be directed
//                     to WhatsApp. Third-party providers may process information according to their
//                     own terms and privacy policies.
//                   </p>

//                   <p className="mt-4 leading-relaxed text-muted-foreground">
//                     We do not otherwise share personal information with third parties unless there
//                     is a legitimate business, contractual, legal, or security reason to do so.
//                   </p>
//                 </section>

//                 {/* 7 */}
//                 <section id="section-7" className="privacy-section scroll-mt-28">
//                   <h2 className="text-2xl font-semibold tracking-tight text-navy">
//                     7. Data Retention
//                   </h2>

//                   <p className="mt-5 leading-relaxed text-muted-foreground">
//                     We retain personal information only for as long as reasonably necessary for the
//                     purpose for which it was collected, including responding to enquiries, managing
//                     potential or existing business relationships, maintaining business records, and
//                     meeting legal or regulatory requirements.
//                   </p>

//                   <p className="mt-4 leading-relaxed text-muted-foreground">
//                     The appropriate retention period may vary depending on the type of information
//                     and the circumstances in which it was collected.
//                   </p>
//                 </section>

//                 {/* 8 */}
//                 <section id="section-8" className="privacy-section scroll-mt-28">
//                   <h2 className="text-2xl font-semibold tracking-tight text-navy">
//                     8. Data Security
//                   </h2>

//                   <p className="mt-5 leading-relaxed text-muted-foreground">
//                     We take reasonable technical and organisational measures to protect personal
//                     information against unauthorised access, accidental loss, misuse, alteration, or
//                     disclosure.
//                   </p>

//                   <p className="mt-4 leading-relaxed text-muted-foreground">
//                     However, no method of transmission or electronic storage can be guaranteed to be
//                     completely secure.
//                   </p>
//                 </section>

//                 {/* 9 */}
//                 <section id="section-9" className="privacy-section scroll-mt-28">
//                   <h2 className="text-2xl font-semibold tracking-tight text-navy">
//                     9. Your Data Protection Rights
//                   </h2>

//                   <p className="mt-5 leading-relaxed text-muted-foreground">
//                     Depending on your location and the applicable law, you may have rights relating
//                     to your personal information. These may include the right to:
//                   </p>

//                   <ul className="mt-5 list-disc space-y-3 pl-6 leading-relaxed text-muted-foreground">
//                     <li>Request access to personal information we hold about you</li>
//                     <li>Request correction of inaccurate information</li>
//                     <li>Request deletion of information in certain circumstances</li>
//                     <li>Request restriction of processing in certain circumstances</li>
//                     <li>Object to certain types of processing</li>
//                     <li>Request transfer of information where applicable</li>
//                     <li>Withdraw consent where processing is based on consent</li>
//                   </ul>

//                   <p className="mt-5 leading-relaxed text-muted-foreground">
//                     To exercise an applicable right, contact us at{" "}
//                     <a
//                       href="mailto:info@nexenstrategy.com"
//                       className="font-medium text-navy underline decoration-border underline-offset-4 transition-colors hover:text-azure"
//                     >
//                       info@nexenstrategy.com
//                     </a>
//                     .
//                   </p>
//                 </section>

//                 {/* 10 */}
//                 <section id="section-10" className="privacy-section scroll-mt-28">
//                   <h2 className="text-2xl font-semibold tracking-tight text-navy">
//                     10. Cookies and Similar Technologies
//                   </h2>

//                   <p className="mt-5 leading-relaxed text-muted-foreground">
//                     Our current website implementation does not intentionally use advertising or
//                     analytics tracking technologies such as Google Analytics, Meta Pixel, or similar
//                     behavioural tracking tools.
//                   </p>

//                   <p className="mt-4 leading-relaxed text-muted-foreground">
//                     Your browser or third-party services you choose to interact with may
//                     nevertheless use cookies or similar technologies according to their own
//                     policies. For more information about the website's use of cookies, please see
//                     our{" "}
//                     <Link
//                       to="/cookie-policy"
//                       className="font-medium text-navy underline decoration-border underline-offset-4 transition-colors hover:text-azure"
//                     >
//                       Cookie Policy
//                     </Link>
//                     .
//                   </p>
//                 </section>

//                 {/* 11 */}
//                 <section id="section-11" className="privacy-section scroll-mt-28">
//                   <h2 className="text-2xl font-semibold tracking-tight text-navy">
//                     11. External Links and Third-Party Services
//                   </h2>

//                   <p className="mt-5 leading-relaxed text-muted-foreground">
//                     Our website may contain links or connections to third-party websites and
//                     services, including communication platforms such as WhatsApp.
//                   </p>

//                   <p className="mt-4 leading-relaxed text-muted-foreground">
//                     We are not responsible for the privacy practices, security, or content of
//                     third-party websites and services. We recommend reviewing their privacy policies
//                     before providing personal information.
//                   </p>
//                 </section>

//                 {/* 12 */}
//                 <section id="section-12" className="privacy-section scroll-mt-28">
//                   <h2 className="text-2xl font-semibold tracking-tight text-navy">
//                     12. International Data Transfers
//                   </h2>

//                   <p className="mt-5 leading-relaxed text-muted-foreground">
//                     Some service providers we use may process information outside the country in
//                     which you are located. Where applicable, appropriate safeguards will be
//                     considered in accordance with relevant data protection requirements.
//                   </p>
//                 </section>

//                 {/* 13 */}
//                 <section id="section-13" className="privacy-section scroll-mt-28">
//                   <h2 className="text-2xl font-semibold tracking-tight text-navy">
//                     13. Children's Privacy
//                   </h2>

//                   <p className="mt-5 leading-relaxed text-muted-foreground">
//                     Our website and services are intended for businesses and general audiences and
//                     are not specifically directed toward children. We do not knowingly request
//                     personal information from children for the purpose of providing our business
//                     services.
//                   </p>
//                 </section>

//                 {/* 14 */}
//                 <section id="section-14" className="privacy-section scroll-mt-28">
//                   <h2 className="text-2xl font-semibold tracking-tight text-navy">
//                     14. Changes to This Privacy Policy
//                   </h2>

//                   <p className="mt-5 leading-relaxed text-muted-foreground">
//                     We may update this Privacy Policy from time to time to reflect changes to our
//                     website, services, technology, legal requirements, or business practices.
//                   </p>

//                   <p className="mt-4 leading-relaxed text-muted-foreground">
//                     The updated version will be published on this page with a revised "Last updated"
//                     date.
//                   </p>
//                 </section>

//                 {/* 15 */}
//                 <section id="section-15" className="privacy-section scroll-mt-28">
//                   <h2 className="text-2xl font-semibold tracking-tight text-navy">
//                     15. Contact Us
//                   </h2>

//                   <p className="mt-5 leading-relaxed text-muted-foreground">
//                     If you have questions about this Privacy Policy or wish to make a
//                     privacy-related request, please contact:
//                   </p>

//                   <div className="mt-6 rounded-2xl border border-border bg-muted/30 p-6">
//                     <div className="flex items-start justify-between gap-5">
//                       <p className="font-semibold text-navy">Nexen Strategy</p>
//                       <ShieldCheck className="h-5 w-5 text-azure" strokeWidth={1.5} />
//                     </div>

//                     <p className="mt-2 text-muted-foreground">
//                       Email:{" "}
//                       <a
//                         href="mailto:info@nexenstrategy.com"
//                         className="text-navy underline decoration-border underline-offset-4 transition-colors hover:text-azure"
//                       >
//                         info@nexenstrategy.com
//                       </a>
//                     </p>

//                     <p className="mt-2 text-muted-foreground">
//                       Location: United Kingdom | Pakistan
//                     </p>

//                     <p className="mt-2 text-muted-foreground">
//                       Phone:{" "}
//                       <a
//                         href="tel:+923358084973"
//                         className="text-navy underline decoration-border underline-offset-4 transition-colors hover:text-azure"
//                       >
//                         +92 335 8084973
//                       </a>
//                     </p>
//                   </div>
//                 </section>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// }

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [{ title: "Privacy Policy — Nexen Strategy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <>
      <style>{`
        @keyframes privacy-grid {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-72px, -72px, 0); }
        }

        .privacy-grid {
          animation: privacy-grid 40s linear infinite;
        }

        .privacy-hero-mark {
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

        .privacy-index {
          background: linear-gradient(150deg, #010C62 0%, #02052D 100%);
          box-shadow: 0 24px 60px -38px rgba(1, 12, 98, 0.8);
        }

        .privacy-index::after {
          border: 1px solid rgba(58, 241, 255, 0.18);
          content: "";
          inset: 0.65rem;
          pointer-events: none;
          position: absolute;
        }

        @media (prefers-reduced-motion: reduce) {
          .privacy-grid {
            animation: none;
          }
        }
      `}</style>

      <Header overHero />

      <main className="min-h-screen bg-background text-foreground">
        {/* HERO */}
        <section
          className="relative isolate overflow-hidden bg-navy pt-32 text-white lg:pt-40"
          style={{
            background: "linear-gradient(135deg, #02052D 0%, #010C62 52%, #17237D 100%)",
          }}
        >
          <div aria-hidden className="privacy-hero-mark">
            01
          </div>

          <div
            aria-hidden
            className="privacy-grid pointer-events-none absolute inset-[-90px] -z-10 grid-faint opacity-70"
          />

          <div className="mx-auto max-w-[1400px] px-6 pb-20 lg:px-12 lg:pb-28">
            <div className="grid items-end gap-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-24">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 text-cyan">
                  <ShieldCheck className="h-5 w-5" strokeWidth={1.5} />
                  <p className="eyebrow">Legal / Privacy</p>
                </div>

                <h1 className="display mt-7 max-w-2xl text-5xl sm:text-6xl lg:text-8xl">
                  Privacy Policy
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                  How Nexen Strategy handles personal information and protects your privacy when you
                  use our website.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/55">
                  <span>Last updated: September 2026</span>
                  <span className="h-px w-12 bg-cyan/60" />
                  <span>15 sections</span>
                </div>
              </div>

              <div className="hidden border-l border-white/20 pl-7 lg:block">
                <p className="eyebrow text-cyan/80">Nexen Strategy</p>

                <p className="mt-5 text-sm leading-relaxed text-white/55">
                  A clear explanation of how we collect, use and protect personal information.
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

        {/* CONTENT */}
        <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[250px_minmax(0,760px)] lg:gap-24">
            {/* SIDE INDEX */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="privacy-index relative overflow-hidden p-6 text-white sm:p-7">
                <div
                  aria-hidden
                  className="absolute left-0 top-0 h-1 w-24 bg-gradient-to-r from-cyan to-azure"
                />

                <div className="relative z-10 flex items-end justify-between gap-4">
                  <div>
                    <p className="eyebrow text-cyan">On this page</p>

                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-white/45">
                      Privacy index
                    </p>
                  </div>

                  <span className="font-mono text-4xl font-semibold leading-none text-white/15">
                    15
                  </span>
                </div>

                <nav
                  className="relative z-10 mt-7 grid grid-cols-2 gap-x-6 gap-y-1 border-t border-white/15 pt-4 text-sm sm:grid-cols-3 lg:grid-cols-1"
                  aria-label="Privacy policy sections"
                >
                  {[
                    "Who We Are",
                    "Information We Collect",
                    "How We Receive Contact Enquiries",
                    "How We Use Your Information",
                    "Legal Basis for Processing",
                    "Sharing Information With Third Parties",
                    "Data Retention",
                    "Data Security",
                    "Your Data Protection Rights",
                    "Cookies and Similar Technologies",
                    "External Links and Third-Party Services",
                    "International Data Transfers",
                    "Children's Privacy",
                    "Changes to This Privacy Policy",
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
                Have a question
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </aside>

            {/* PRIVACY CONTENT */}
            <div className="max-w-3xl">
              <p className="mb-12 max-w-2xl text-xl leading-relaxed text-navy sm:text-2xl">
                Nexen Strategy respects your privacy and is committed to handling personal
                information responsibly.
              </p>

              <div className="space-y-14 border-t border-border pt-12">
                {/* 1 */}
                <section id="section-1" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">1. Who We Are</h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    This website is operated by Nexen Strategy, a digital solutions company serving
                    clients in the UK and internationally.
                  </p>

                  <div className="mt-6 rounded-2xl border border-border bg-muted/30 p-6">
                    <p className="font-semibold text-navy">NEXEN STRATEGY LIMITED</p>

                    <p className="mt-2 text-muted-foreground">Company number: 16967581</p>

                    <p className="mt-2 text-muted-foreground">
                      Company type: Private company limited by shares
                    </p>

                    <p className="mt-2 text-muted-foreground">Registered in: England and Wales</p>

                    <p className="mt-2 text-muted-foreground">
                      Registered office: 17 Old Town, Croydon, United Kingdom, CR0 1AU
                    </p>
                  </div>

                  <p className="mt-6 leading-relaxed text-muted-foreground">
                    If you have questions about this Privacy Policy or how your information is
                    handled, you can contact us at{" "}
                    <a
                      href="mailto:info@nexenstrategy.com"
                      className="font-medium text-navy underline decoration-border underline-offset-4 transition-colors hover:text-azure"
                    >
                      info@nexenstrategy.com
                    </a>
                    .
                  </p>
                </section>

                {/* 2 */}
                <section id="section-2" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    2. Information We Collect
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    When you use the contact form on our website, you may provide information
                    including:
                  </p>

                  <ul className="mt-5 list-disc space-y-3 pl-6 leading-relaxed text-muted-foreground">
                    <li>Your name</li>
                    <li>Your company name</li>
                    <li>Your email address</li>
                    <li>Your telephone or mobile number</li>
                    <li>The service or project type you are interested in</li>
                    <li>The message or project information you choose to provide</li>
                  </ul>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    We only ask for information that is relevant to responding to your enquiry and
                    discussing your potential project with us.
                  </p>
                </section>

                {/* 3 */}
                <section id="section-3" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    3. How We Receive Contact Enquiries
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Our website contact form is designed to help you start a conversation with Nexen
                    Strategy. When you submit the form, the information you enter is formatted into
                    an enquiry message and directed to WhatsApp for communication with our team.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    This means that information submitted through the contact form may be processed
                    by WhatsApp in accordance with WhatsApp's own privacy practices and terms. You
                    should review WhatsApp's privacy information if you use this communication
                    method.
                  </p>
                </section>

                {/* 4 */}
                <section id="section-4" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    4. How We Use Your Information
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Information you provide may be used to:
                  </p>

                  <ul className="mt-5 list-disc space-y-3 pl-6 leading-relaxed text-muted-foreground">
                    <li>Respond to your enquiry</li>
                    <li>Understand your business or project requirements</li>
                    <li>Discuss requested services</li>
                    <li>Communicate with you about a potential project</li>
                    <li>Provide information or assistance you have requested</li>
                    <li>Maintain appropriate business records</li>
                  </ul>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    We do not sell your personal information to third parties.
                  </p>
                </section>

                {/* 5 */}
                <section id="section-5" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    5. Legal Basis for Processing
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Where UK data protection law applies, we will seek to rely on an appropriate
                    lawful basis for processing personal information. Depending on the
                    circumstances, this may include taking steps at your request before entering
                    into a contract, pursuing legitimate business interests, complying with legal
                    obligations, or obtaining consent where consent is required.
                  </p>
                </section>

                {/* 6 */}
                <section id="section-6" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    6. Sharing Information With Third Parties
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    We may use third-party services where necessary to operate our website or
                    communicate with you.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    In particular, contact enquiries submitted through our website may be directed
                    to WhatsApp. Third-party providers may process information according to their
                    own terms and privacy policies.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    We do not otherwise share personal information with third parties unless there
                    is a legitimate business, contractual, legal, or security reason to do so.
                  </p>
                </section>

                {/* 7 */}
                <section id="section-7" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    7. Data Retention
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    We retain personal information only for as long as reasonably necessary for the
                    purpose for which it was collected, including responding to enquiries, managing
                    potential or existing business relationships, maintaining business records, and
                    meeting legal or regulatory requirements.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    The appropriate retention period may vary depending on the type of information
                    and the circumstances in which it was collected.
                  </p>
                </section>

                {/* 8 */}
                <section id="section-8" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    8. Data Security
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    We take reasonable technical and organisational measures to protect personal
                    information against unauthorised access, accidental loss, misuse, alteration, or
                    disclosure.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    However, no method of transmission or electronic storage can be guaranteed to be
                    completely secure.
                  </p>
                </section>

                {/* 9 */}
                <section id="section-9" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    9. Your Data Protection Rights
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Depending on your location and the applicable law, you may have rights relating
                    to your personal information. These may include the right to:
                  </p>

                  <ul className="mt-5 list-disc space-y-3 pl-6 leading-relaxed text-muted-foreground">
                    <li>Request access to personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of information in certain circumstances</li>
                    <li>Request restriction of processing in certain circumstances</li>
                    <li>Object to certain types of processing</li>
                    <li>Request transfer of information where applicable</li>
                    <li>Withdraw consent where processing is based on consent</li>
                  </ul>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    To exercise an applicable right, contact us at{" "}
                    <a
                      href="mailto:info@nexenstrategy.com"
                      className="font-medium text-navy underline decoration-border underline-offset-4 transition-colors hover:text-azure"
                    >
                      info@nexenstrategy.com
                    </a>
                    .
                  </p>
                </section>

                {/* 10 */}
                <section id="section-10" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    10. Cookies and Similar Technologies
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Our current website implementation does not intentionally use advertising or
                    analytics tracking technologies such as Google Analytics, Meta Pixel, or similar
                    behavioural tracking tools.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Your browser or third-party services you choose to interact with may
                    nevertheless use cookies or similar technologies according to their own
                    policies. For more information about the website's use of cookies, please see
                    our{" "}
                    <Link
                      to="/cookie-policy"
                      className="font-medium text-navy underline decoration-border underline-offset-4 transition-colors hover:text-azure"
                    >
                      Cookie Policy
                    </Link>
                    .
                  </p>
                </section>

                {/* 11 */}
                <section id="section-11" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    11. External Links and Third-Party Services
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Our website may contain links or connections to third-party websites and
                    services, including communication platforms such as WhatsApp.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    We are not responsible for the privacy practices, security, or content of
                    third-party websites and services. We recommend reviewing their privacy policies
                    before providing personal information.
                  </p>
                </section>

                {/* 12 */}
                <section id="section-12" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    12. International Data Transfers
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Some service providers we use may process information outside the country in
                    which you are located. Where applicable, appropriate safeguards will be
                    considered in accordance with relevant data protection requirements.
                  </p>
                </section>

                {/* 13 */}
                <section id="section-13" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    13. Children's Privacy
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Our website and services are intended for businesses and general audiences and
                    are not specifically directed toward children. We do not knowingly request
                    personal information from children for the purpose of providing our business
                    services.
                  </p>
                </section>

                {/* 14 */}
                <section id="section-14" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    14. Changes to This Privacy Policy
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    We may update this Privacy Policy from time to time to reflect changes to our
                    website, services, technology, legal requirements, or business practices.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    The updated version will be published on this page with a revised "Last updated"
                    date.
                  </p>
                </section>

                {/* 15 */}
                <section id="section-15" className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy">
                    15. Contact Us
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    If you have questions about this Privacy Policy or wish to make a
                    privacy-related request, please contact:
                  </p>

                  <div className="mt-6 rounded-2xl border border-border bg-muted/30 p-6">
                    <p className="font-semibold text-navy">NEXEN STRATEGY LIMITED</p>

                    <p className="mt-2 text-muted-foreground">Company number: 16967581</p>

                    <p className="mt-2 text-muted-foreground">Registered in: England and Wales</p>

                    <p className="mt-2 text-muted-foreground">
                      Registered office: 17 Old Town, Croydon, United Kingdom, CR0 1AU
                    </p>

                    <p className="mt-3 text-muted-foreground">
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
