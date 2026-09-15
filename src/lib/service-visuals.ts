import detailBrand from "@/assets/services/brand-design/brand-hero.jpg";
import detailWeb from "@/assets/services/web-app-development/wad-hero-main.jpg";
import detailSoftware from "@/assets/services/software-solution/sw-hero-main-v2.jpg";
import detailAi from "@/assets/services/ai-automation/ai-hero-main.jpg";
import detailMarketing from "@/assets/mkt-hero-main.jpg";
import detailMedia from "@/assets/services/media-production/mp-hero-main.jpg";
import media1 from "@/assets/media-1.jpg";
import media2 from "@/assets/services/media-production/media-2.jpg";
import media3 from "@/assets/media-3.jpg";
import media4 from "@/assets/media-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import type { ServiceKey } from "./site-data";

export type HeroLayout = "split" | "full-bleed" | "backdrop";

export interface ServiceVisuals {
  heroLayout: HeroLayout;
  detail: string;
  detailAlt: string;
  detailRatio: string;
  support?: string;
  supportAlt?: string;
  gallery?: { src: string; alt: string; span: string; ratio: string }[];
}

export const serviceVisuals: Record<ServiceKey, ServiceVisuals> = {
  "brand-design": {
    heroLayout: "split",
    detail: detailBrand,
    detailAlt: "Printed brand identity system with typography specimens and colour swatches",
    detailRatio: "aspect-[4/5]",
    support: work6,
    supportAlt: "Brand applications across stationery, signage and packaging",
  },
  "web-and-app-development": {
    heroLayout: "full-bleed",
    detail: detailWeb,
    detailAlt: "Desktop, tablet and mobile interfaces of a premium digital product",
    detailRatio: "aspect-[16/10]",
    support: work5,
    supportAlt: "Mobile application screens from a recent build",
  },
  "software-solutions": {
    heroLayout: "split",
    detail: detailSoftware,
    detailAlt: "Business analytics and CRM dashboard on a widescreen display",
    detailRatio: "aspect-[16/11]",
    support: detailAi,
    supportAlt: "Connected systems and integrated data flows",
  },
  "ai-and-automation": {
    heroLayout: "backdrop",
    detail: detailAi,
    detailAlt: "Abstract visualisation of intelligent workflows and connected data",
    detailRatio: "aspect-[16/10]",
    support: detailSoftware,
    supportAlt: "Automation monitored through an operational dashboard",
  },
  "marketing-and-growth": {
    heroLayout: "split",
    detail: detailMarketing,
    detailAlt: "Campaign artwork, social content frames and performance charts",
    detailRatio: "aspect-[4/5]",
    support: work5,
    supportAlt: "Campaign creative adapted for mobile channels",
  },
  "media-production": {
    heroLayout: "full-bleed",
    detail: detailMedia,
    detailAlt: "Cinema camera on a dolly inside a lit production studio",
    detailRatio: "aspect-[16/9]",
    gallery: [
      {
        src: media1,
        alt: "Cinema lens close-up with anamorphic flare",
        span: "lg:col-span-4",
        ratio: "aspect-[3/4]",
      },
      {
        src: media2,
        alt: "Product photography studio lighting setup",
        span: "lg:col-span-8",
        ratio: "aspect-[7/5]",
      },
      {
        src: media4,
        alt: "Colour grading suite with a cinematic timeline",
        span: "lg:col-span-7",
        ratio: "aspect-[16/10]",
      },
      {
        src: media3,
        alt: "Vertical social content shoot in progress",
        span: "lg:col-span-5",
        ratio: "aspect-[3/4]",
      },
    ],
  },
};
