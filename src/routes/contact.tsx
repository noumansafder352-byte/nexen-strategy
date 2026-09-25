import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Search,
} from "lucide-react";
import { toast } from "sonner";
import {
  AsYouType,
  getCountries,
  getCountryCallingCode,
  isValidPhoneNumber,
} from "libphonenumber-js";
import type { CountryCode } from "libphonenumber-js";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { serviceOptions } from "@/lib/site-data";

function countryFlag(code: string) {
  return String.fromCodePoint(...[...code].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nexen Strategy" },
      {
        name: "description",
        content:
          "Let's build something that matters. Talk to Nexen Strategy about your business, digital, technology, AI, marketing or creative requirements.",
      },
      { property: "og:title", content: "Contact — Nexen Strategy" },
      {
        property: "og:description",
        content:
          "Start a conversation with Nexen Strategy about where your business is heading next.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const fieldClass =
  "peer h-[52px] w-full border-0 border-b border-border bg-transparent px-0 text-base text-navy outline-none transition-colors duration-300 placeholder:text-muted-foreground/55 hover:border-navy/30 focus:border-[#FFA53C] aria-[invalid=true]:border-[#FF483F]";

const labelClass = "block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-navy/70";

const contactDetails = [
  {
    Icon: MapPin,
    label: "Location",
    value: "United Kingdom | Pakistan",
    href: null as string | null,
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+92 335 8084973",
    href: "tel:+923358084973",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "info@nexenstrategy.com",
    href: "mailto:info@nexenstrategy.com",
  },
];

const countryOptions = (() => {
  const display =
    typeof Intl !== "undefined" && "DisplayNames" in Intl
      ? new Intl.DisplayNames(["en"], { type: "region" })
      : null;
  return getCountries()
    .map((code) => ({
      code,
      name: display?.of(code) ?? code,
      dialCode: `+${getCountryCallingCode(code)}`,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
})();

type FormDataState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};
type FieldErrors = Partial<Record<keyof FormDataState, string | undefined>>;

function validateForm(data: FormDataState, country: CountryCode): FieldErrors {
  const errors: FieldErrors = {};
  const name = data.name.trim();
  if (!name) errors.name = "Name is required.";
  else if (name.length < 2) errors.name = "Name must be at least 2 characters.";
  else if (!/\p{L}/u.test(name)) errors.name = "Please enter a valid name.";

  const company = data.company.trim();
  if (!company) errors.company = "Company is required.";
  else if (company.length < 2) errors.company = "Company must be at least 2 characters.";

  const email = data.email.trim();
  if (!email) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    errors.email = "Please enter a valid email address.";

  const phone = data.phone.trim();
  if (!phone) errors.phone = "Phone number is required.";
  else if (!/^[\d\s\-()]+$/.test(phone) || !isValidPhoneNumber(phone, country))
    errors.phone = "Please enter a valid phone number.";

  if (!data.service) errors.service = "Please select a service.";

  const message = data.message.trim();
  if (!message) errors.message = "Message is required.";
  else if (message.length < 10) errors.message = "Message must be at least 10 characters.";

  return errors;
}

function CountrySelect({
  value,
  onChange,
  invalid,
}: {
  value: CountryCode;
  onChange: (code: CountryCode) => void;
  invalid?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const info = countryOptions.find((c) => c.code === value);
  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return countryOptions;
    return countryOptions.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.dialCode.includes(q) ||
        c.code.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <Popover
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) setQuery("");
      }}
    >
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label="Country calling code"
          className={`flex h-[52px] shrink-0 items-center gap-1.5 border-b pr-3 text-navy outline-none transition-colors duration-300 ${
            invalid ? "border-[#FF483F]" : "border-border hover:border-navy/30"
          } ${open ? "border-[#FFA53C]" : ""}`}
        >
          <span aria-hidden className="text-base leading-none">
            {countryFlag(value)}
          </span>
          <span className="text-sm font-medium tabular-nums">{info?.dialCode}</span>
          <ChevronDown
            className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={10}
        collisionPadding={16}
        className="z-50 w-[min(20rem,calc(100vw-2rem))] rounded-xl border border-border bg-background p-0 shadow-xl"
      >
        <div className="flex items-center gap-2 border-b border-border px-3.5 py-2.5">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search country"
            className="h-8 w-full bg-transparent text-sm text-navy outline-none placeholder:text-muted-foreground/60"
          />
        </div>
        <div className="max-h-64 overflow-y-auto py-1.5">
          {list.length === 0 && (
            <p className="px-4 py-6 text-center text-sm text-muted-foreground">No country found.</p>
          )}
          {list.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => {
                onChange(c.code as CountryCode);
                setOpen(false);
                setQuery("");
              }}
              className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-muted ${
                c.code === value ? "text-navy" : "text-navy/80"
              }`}
            >
              <span aria-hidden className="text-base leading-none">
                {countryFlag(c.code)}
              </span>
              <span className="min-w-0 flex-1 truncate">{c.name}</span>
              <span className="shrink-0 tabular-nums text-muted-foreground">{c.dialCode}</span>
              {c.code === value && <Check className="h-3.5 w-3.5 shrink-0 text-[#FFA53C]" />}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [country, setCountry] = useState<CountryCode>("PK");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const countryInfo = useMemo(() => countryOptions.find((c) => c.code === country), [country]);

  function updateField(field: keyof FormDataState, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextErrors = validateForm(formData, country);
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) {
      toast.error("Please correct the highlighted fields.");
      return;
    }

    const formattedPhone = new AsYouType(country).input(formData.phone.trim());
    const fullPhone = `${countryInfo?.dialCode ?? ""} ${formattedPhone}`.trim();

    const whatsappMessage = [
      "New Website Enquiry",
      "",
      `Name: ${formData.name.trim()}`,
      `Company: ${formData.company.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Phone: ${fullPhone}`,
      `Service / Project Type: ${formData.service}`,
      `Message: ${formData.message.trim()}`,
    ].join("\n");

    const encoded = encodeURIComponent(whatsappMessage);
    window.location.href = `https://wa.me/923358084973?text=${encoded}`;

    setSent(true);
    toast.success("Enquiry received", {
      description: "Thank you. A member of the team will be in touch shortly.",
    });
    setFormData({ name: "", company: "", email: "", phone: "", service: "", message: "" });
    setErrors({});
  }

  function FieldError({ field }: { field: keyof FormDataState }) {
    if (!errors[field]) return null;
    return <p className="mt-2 text-xs font-medium text-[#FF483F]">{errors[field]}</p>;
  }

  return (
    <>
      <Header transparentDefault />
      <main className="overflow-x-hidden">
        {/* ================= HERO ================= */}
        <section className="relative isolate overflow-hidden pt-[9.5rem] lg:pt-44">
          {/* subtle visual treatment — fine grid + flowing line */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 grid-faint opacity-50" />
            <div className="absolute inset-0 [background:radial-gradient(55%_60%_at_85%_10%,rgba(74,115,255,0.08),transparent_65%),radial-gradient(40%_45%_at_10%_90%,rgba(58,241,255,0.06),transparent_60%)]" />
            <svg
              className="absolute right-0 top-0 h-full w-[60%] opacity-60"
              viewBox="0 0 800 600"
              fill="none"
              preserveAspectRatio="xMaxYMin slice"
            >
              <defs>
                <linearGradient id="contactLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#4A73FF" stopOpacity="0" />
                  <stop offset="55%" stopColor="#4A73FF" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#FF483F" stopOpacity="0.25" />
                </linearGradient>
              </defs>
              <path
                d="M-20 140 C 220 60, 480 240, 840 120"
                stroke="url(#contactLine)"
                strokeWidth="1"
                strokeDasharray="10 18"
              />
              <path
                d="M-20 320 C 260 240, 520 420, 840 300"
                stroke="url(#contactLine)"
                strokeWidth="1"
                strokeDasharray="10 18"
                opacity="0.7"
              />
              <circle cx="560" cy="198" r="3.5" fill="#4A73FF" opacity="0.5" />
              <circle cx="560" cy="198" r="9" fill="none" stroke="#4A73FF" strokeOpacity="0.3" />
              <circle cx="690" cy="346" r="3.5" fill="#FFA53C" opacity="0.55" />
              <circle cx="690" cy="346" r="9" fill="none" stroke="#FFA53C" strokeOpacity="0.3" />
            </svg>
          </div>

          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="eyebrow text-azure">Contact us</p>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="display mt-8 max-w-4xl text-[2.75rem] leading-[1.04] text-navy sm:text-6xl lg:text-[5rem]">
                Let's Build Something That{" "}
                <span className="bg-gradient-to-r from-[#FFA53C] to-[#FF483F] bg-clip-text text-transparent">
                  Matters.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
                Whether it's your business, digital presence, technology, AI, marketing or creative
                requirements, tell us where you're heading and we'll show you how we can help you
                get there.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-14 border-t border-border" />
            </Reveal>
          </div>
        </section>

        {/* ================= CONTACT AREA ================= */}
        <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            {/* LEFT — heading + contact details */}
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="text-3xl font-semibold tracking-tight text-navy lg:text-4xl">
                  Start a conversation.
                </h2>
              </Reveal>
              <Reveal delay={70}>
                <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                  Share a few details about your project and a senior member of the team will come
                  back to you with an honest view on how we'd approach it, and whether we're the
                  right partner for the work.
                </p>
              </Reveal>

              <Reveal delay={140}>
                <dl className="mt-14 space-y-0 border-t border-border">
                  {contactDetails.map(({ Icon, label, value, href }) => (
                    <div
                      key={label}
                      className="group flex items-start gap-5 border-b border-border py-7"
                    >
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-navy transition-colors duration-300 group-hover:border-azure group-hover:text-azure">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <dt className="eyebrow text-muted-foreground">{label}</dt>
                        <dd className="mt-2">
                          {href ? (
                            <a
                              href={href}
                              className="inline-flex items-center gap-1.5 text-lg font-medium text-navy transition-colors hover:text-azure lg:text-xl"
                            >
                              {value}
                              <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </a>
                          ) : (
                            <span className="text-lg font-medium text-navy lg:text-xl">
                              {value}
                            </span>
                          )}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* RIGHT — form */}
            <Reveal delay={140} className="lg:col-span-7">
              <div className="relative lg:pl-16">
                <div
                  aria-hidden
                  className="absolute inset-y-0 left-0 hidden w-px bg-border lg:block"
                />
                <h2 className="text-xl font-semibold tracking-tight text-navy">
                  Tell us about your project
                </h2>
                <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-8 lg:space-y-10">
                  <div className="grid gap-8 sm:grid-cols-2 sm:gap-x-10 lg:gap-y-10">
                    <div className="min-w-0">
                      <label htmlFor="name" className={labelClass}>
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className={fieldClass}
                        placeholder="Your name"
                        aria-invalid={!!errors.name}
                      />
                      <FieldError field="name" />
                    </div>
                    <div className="min-w-0">
                      <label htmlFor="company" className={labelClass}>
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={(e) => updateField("company", e.target.value)}
                        className={fieldClass}
                        placeholder="Company name"
                        aria-invalid={!!errors.company}
                      />
                      <FieldError field="company" />
                    </div>
                    <div className="min-w-0">
                      <label htmlFor="email" className={labelClass}>
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className={fieldClass}
                        placeholder="you@company.com"
                        aria-invalid={!!errors.email}
                      />
                      <FieldError field="email" />
                    </div>
                    <div className="min-w-0">
                      <label htmlFor="phone" className={labelClass}>
                        Phone
                      </label>
                      <div className="flex items-stretch gap-3">
                        <CountrySelect
                          value={country}
                          invalid={!!errors.phone}
                          onChange={(code) => {
                            setCountry(code);
                            setErrors((prev) =>
                              prev.phone ? { ...prev, phone: undefined } : prev,
                            );
                          }}
                        />
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          inputMode="tel"
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                          className={`${fieldClass} min-w-0 flex-1`}
                          placeholder="335 8084973"
                          aria-invalid={!!errors.phone}
                        />
                      </div>
                      <FieldError field="phone" />
                    </div>
                  </div>

                  <div className="min-w-0">
                    <label htmlFor="service" className={labelClass}>
                      Service / Project Type
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(v) => updateField("service", v)}
                    >
                      <SelectTrigger
                        id="service"
                        aria-invalid={!!errors.service}
                        className={`${fieldClass} justify-between rounded-none px-0 py-0 shadow-none focus:ring-0 focus-visible:ring-0 data-[state=open]:border-[#FFA53C] [&>svg]:opacity-60 ${
                          formData.service ? "" : "text-muted-foreground/55"
                        }`}
                      >
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent
                        position="popper"
                        sideOffset={10}
                        className="z-50 max-h-72 w-[var(--radix-select-trigger-width)] rounded-xl border border-border bg-background p-1.5 shadow-xl"
                      >
                        {serviceOptions.map((s) => (
                          <SelectItem
                            key={s}
                            value={s}
                            className="cursor-pointer rounded-lg px-3 py-2.5 text-sm text-navy focus:bg-muted"
                          >
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FieldError field="service" />
                  </div>

                  <div className="min-w-0">
                    <label htmlFor="message" className={labelClass}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      className={`${fieldClass} h-auto min-h-[9.5rem] resize-none py-3.5 leading-relaxed`}
                      placeholder="What are you looking to achieve?"
                      aria-invalid={!!errors.message}
                    />
                    <FieldError field="message" />
                  </div>

                  <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      className="group inline-flex h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#FFA53C] to-[#FF483F] px-8 text-sm font-semibold tracking-wide text-white shadow-[0_10px_30px_-12px_rgba(255,72,63,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
                    >
                      Start a Conversation
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    <p aria-live="polite" className="text-sm text-muted-foreground">
                      {sent ? "Thank you — your enquiry has been received." : ""}
                    </p>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
