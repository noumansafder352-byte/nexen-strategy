// Single source of truth for each page's search title and description.
// Used by route `head()` at runtime and by the build step in vite.config.ts,
// which writes a static HTML file per page so crawlers see the right tags
// without running JavaScript. Keep this file free of asset/React imports.

export const SITE_URL = "https://nexenstrategy.com";
export const SITE_NAME = "Nexen Strategy";

export interface PageSeo {
  title: string;
  description: string;
}

export const pageSeo = {
  "/": {
    title: "Nexen Strategy — Build Better. Move Smarter. Grow Further.",
    description:
      "A UK digital solutions partner for brand, web and app development, software, AI and automation, marketing and media production.",
  },
  "/about": {
    title: "About Us — Nexen Strategy",
    description:
      "Nexen Strategy brings together strategy, technology, creativity, and innovation to help businesses build, transform, and grow in an increasingly digital world.",
  },
  "/clients": {
    title: "Clients — Nexen Strategy",
    description:
      "Businesses Nexen Strategy has helped move forward across real estate, healthcare, education, fashion, engineering and hospitality.",
  },
  "/gallery": {
    title: "Gallery — Nexen Strategy",
    description:
      "Visual Work. Real Stories. A curated selection of visual content created by Nexen Strategy to bring brands, people and ideas to life.",
  },
  "/portfolio": {
    title: "Portfolio — Nexen Strategy",
    description:
      "Selected digital solutions, technology platforms and business-focused projects built by Nexen Strategy to help organisations launch, transform, automate and grow.",
  },
  "/contact": {
    title: "Contact — Nexen Strategy",
    description:
      "Let's build something that matters. Talk to Nexen Strategy about your business, digital, technology, AI, marketing or creative requirements.",
  },
  "/services/brand-design": {
    title: "Brand & Design — Nexen Strategy",
    description:
      "Your brand is more than a logo. We create distinctive visual identities and digital experiences that help businesses communicate with clarity, consistency and confidence.",
  },
  "/services/web-and-app-development": {
    title: "Web & App Development — Nexen Strategy",
    description:
      "From high-impact websites to custom applications and e-commerce platforms, we create digital experiences designed around your users and business objectives.",
  },
  "/services/software-solutions": {
    title: "Software Solutions — Nexen Strategy",
    description:
      "Nexen develops custom software and business platforms that help organisations manage operations, customers, information and workflows more effectively.",
  },
  "/services/ai-and-automation": {
    title: "AI & Automation — Nexen Strategy",
    description:
      "We help organisations identify where AI and automation can save time, improve customer experiences and transform everyday operations.",
  },
  "/services/marketing-and-growth": {
    title: "Marketing & Growth — Nexen Strategy",
    description:
      "We help businesses build visibility, connect with the right audiences and create marketing systems that support sustainable growth.",
  },
  "/services/media-production": {
    title: "Media Production — Nexen Strategy",
    description:
      "From corporate films to social content, professional photography and motion graphics, we create visual experiences that communicate your message and strengthen your brand.",
  },
  "/privacy-policy": {
    title: "Privacy Policy — Nexen Strategy",
    description:
      "How Nexen Strategy collects, uses, stores and protects your personal information when you use our website and services.",
  },
  "/cookie-policy": {
    title: "Cookie Policy — Nexen Strategy",
    description:
      "How Nexen Strategy uses cookies and similar technologies on our website, and how you can manage your cookie preferences.",
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions — Nexen Strategy",
    description:
      "The terms and conditions that govern your use of the Nexen Strategy website and the digital services we provide.",
  },
  "/disclaimer": {
    title: "Disclaimer — Nexen Strategy",
    description:
      "Important information about the accuracy, use and limitations of the content published on the Nexen Strategy website.",
  },
} satisfies Record<string, PageSeo>;

export type SeoPath = keyof typeof pageSeo;

export const canonicalUrl = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

/** `<title>` and description meta for a route's `head().meta`. */
export const seoMeta = (path: SeoPath) => [
  { title: pageSeo[path].title },
  { name: "description", content: pageSeo[path].description },
];

/** Canonical link for a route's `head().links`. */
export const seoLinks = (path: SeoPath) => [{ rel: "canonical", href: canonicalUrl(path) }];
