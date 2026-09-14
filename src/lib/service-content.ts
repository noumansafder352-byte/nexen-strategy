import brandImg from "@/assets/homepageservices/svc-brand-design.jpg";
import webImg from "@/assets/homepageservices/svc-web-development.jpeg";
import softwareImg from "@/assets/homepageservices/svc-software-solutions.jpg";
import aiImg from "@/assets/homepageservices/svc-ai-automation.jpg";
import marketingImg from "@/assets/homepageservices/svc-marketing-growth.jpg";
import mediaImg from "@/assets/homepageservices/svc-media-production.jpg";
import type { ServiceKey } from "./site-data";

export interface ServiceContent {
  slug: ServiceKey;
  no: string;
  label: string;
  hero: string;
  intro: string;
  body: string[];
  image: string;
  imageAlt: string;
  capabilities: { name: string; text: string }[];
  outcomes: string[];
  closing: string;
}

export const serviceContent: Record<ServiceKey, ServiceContent> = {
  "brand-design": {
    slug: "brand-design",
    no: "01",
    label: "Brand & Design",
    hero: "Build a Brand People Remember.",
    intro:
      "Your brand is the first judgement anyone makes about your business. We design identities and visual systems that make that judgement work in your favour.",
    body: [
      "Great design is not decoration. It is the clearest expression of what a business stands for, how it behaves and why it deserves attention. We work with established organisations and ambitious challengers to define that expression with precision.",
      "From the core identity through to every applied touchpoint, we build brands that hold together in the real world: on screen, in print, in product and in the room where the decision gets made.",
    ],
    image: brandImg,
    imageAlt: "Brand identity system with logo studies, colour swatches and typography specimens",
    capabilities: [
      {
        name: "Brand Identity",
        text: "Positioning, personality and the strategic foundation the rest of the work stands on.",
      },
      {
        name: "Logo Design",
        text: "Marks built to last, tested at every size and in every context you will use them.",
      },
      {
        name: "Visual Identity",
        text: "Colour, typography, imagery and layout resolved into one coherent visual language.",
      },
      {
        name: "Graphic Design",
        text: "Print, packaging, presentations and campaign assets, art-directed to the same standard.",
      },
      {
        name: "UI/UX Design",
        text: "Interfaces designed around real user behaviour and real commercial objectives.",
      },
      {
        name: "Packaging Design",
        text: "Product packaging, labels, boxes, bags and branded product materials.",
      },
      {
        name: "Design Systems",
        text: "Documented components and rules so your teams can scale the work without losing control.",
      },
    ],
    outcomes: [
      "A brand that is recognised, not just seen",
      "Consistency across every channel and team",
      "Design decisions grounded in commercial logic",
    ],
    closing: "Ready to give your brand the presence it deserves?",
  },
  "web-and-app-development": {
    slug: "web-and-app-development",
    no: "02",
    label: "Web & App Development",
    hero: "Digital Experiences Built to Perform.",
    intro:
      "We build websites, platforms and applications that are fast, dependable and designed around the outcome your business needs.",
    body: [
      "A digital product only matters if it performs commercially. We start with the business case, then engineer for speed, accessibility, search visibility and conversion, rather than treating those as afterthoughts.",
      "Everything we ship is built to be maintained, extended and measured, so your investment continues to earn long after launch.",
    ],
    image: webImg,
    imageAlt: "Responsive website and mobile application interfaces in a dark studio setting",
    capabilities: [
      {
        name: "Website Development",
        text: "Corporate and marketing sites engineered for performance, search and conversion.",
      },
      {
        name: "Web Applications",
        text: "Secure, scalable applications that carry real operational workload.",
      },
      {
        name: "Mobile Applications",
        text: "iOS and Android experiences designed for the way people actually use their phones.",
      },
      {
        name: "WordPress Development",
        text: "Cleanly built, genuinely editable WordPress that your team can run confidently.",
      },
      {
        name: "Shopify Development",
        text: "Commerce experiences built for merchandising, speed and repeat purchase.",
      },
      {
        name: "E-commerce Development",
        text: "End-to-end retail platforms integrated with the systems behind the sale.",
      },
    ],
    outcomes: [
      "Faster load times and stronger search performance",
      "Platforms your team can manage without friction",
      "Digital experiences measured against revenue, not vanity metrics",
    ],
    closing: "Have a platform to build, replace or rescue?",
  },
  "software-solutions": {
    slug: "software-solutions",
    no: "03",
    label: "Software Solutions",
    hero: "Software That Works Around Your Business.",
    intro:
      "Off-the-shelf systems force you to work their way. We build software that fits the way your business already operates, then makes it sharper.",
    body: [
      "Most organisations are held back by disconnected tools, manual handovers and data nobody trusts. We design connected systems that give teams one reliable version of the truth and leadership a clear view of performance.",
      "The result is not software for its own sake. It is operational clarity, less wasted effort and decisions made on evidence.",
    ],
    image: softwareImg,
    imageAlt: "Abstract visualisation of connected business software systems and data",
    capabilities: [
      {
        name: "CRM Solutions",
        text: "Pipelines, records and reporting shaped around how your people actually sell and serve.",
      },
      {
        name: "CMS Platforms",
        text: "Content systems that let teams publish quickly without breaking anything.",
      },
      {
        name: "Business Portals",
        text: "Secure client, partner and staff portals that replace email chains and spreadsheets.",
      },
      {
        name: "Custom Software",
        text: "Purpose-built tools for the processes that make your business different.",
      },
      {
        name: "Dashboards & Management Platforms",
        text: "Live operational visibility, presented so decisions become obvious.",
      },
      {
        name: "Integrations",
        text: "Existing systems connected properly, so data flows instead of being re-entered.",
      },
    ],
    outcomes: [
      "Manual processes replaced with dependable systems",
      "One source of truth across teams",
      "Reporting leadership can act on immediately",
    ],
    closing: "Outgrown the tools you started with?",
  },
  "ai-and-automation": {
    slug: "ai-and-automation",
    no: "04",
    label: "AI & Automation",
    hero: "Put AI to Work.",
    intro:
      "We apply artificial intelligence where it produces a measurable commercial return, and nowhere it does not.",
    body: [
      "AI is only valuable when it is pointed at the right problem. We look for the repetitive, high-volume and slow-moving parts of your business, then design intelligent systems that handle them reliably.",
      "Everything is built with human oversight, clear boundaries and proper governance, so you gain speed without losing control of quality or accountability.",
    ],
    image: aiImg,
    imageAlt: "Sophisticated abstract visual of intelligent automation and flowing data",
    capabilities: [
      {
        name: "AI Chatbots",
        text: "Assistants that answer accurately, qualify properly and hand over cleanly.",
      },
      {
        name: "AI Assistants",
        text: "Internal copilots trained on your own knowledge, documents and process.",
      },
      {
        name: "AI Agents",
        text: "Task-completing systems that carry out multi-step work under defined rules.",
      },
      {
        name: "Workflow Automation",
        text: "Manual admin removed from the day, end to end, with an audit trail.",
      },
      {
        name: "Marketing Automation",
        text: "Timely, relevant communication triggered by real customer behaviour.",
      },
      {
        name: "AI Integrations",
        text: "Intelligence added into the platforms your teams already use every day.",
      },
    ],
    outcomes: [
      "Hours returned to your team every week",
      "Faster response times without more headcount",
      "Automation you can trust, monitor and explain",
    ],
    closing: "Want to know where AI would actually pay off in your business?",
  },
  "marketing-and-growth": {
    slug: "marketing-and-growth",
    no: "05",
    label: "Marketing & Growth",
    hero: "Turn Attention Into Opportunity.",
    intro:
      "Visibility is not the goal. Qualified demand is. We build marketing that moves the numbers your board cares about.",
    body: [
      "We start with the commercial model: who buys, what they are worth and where the growth realistically comes from. Strategy, channels and creative follow from there, never the other way round.",
      "Then we run it properly, with clear measurement, honest reporting and continuous refinement against pipeline rather than impressions.",
    ],
    image: marketingImg,
    imageAlt: "Editorial composition representing marketing campaigns and business growth",
    capabilities: [
      {
        name: "Social Media Marketing",
        text: "Presence with a point of view, built for the platform and the audience.",
      },
      {
        name: "SEO",
        text: "Technical, content and authority work that compounds into durable visibility.",
      },
      {
        name: "Paid Advertising",
        text: "Search, social and display campaigns managed against cost per opportunity.",
      },
      {
        name: "Content Marketing",
        text: "Content that earns attention and answers the questions buyers actually ask.",
      },
      {
        name: "Lead Generation",
        text: "Structured demand programmes that fill the pipeline with the right conversations.",
      },
      {
        name: "Marketing Automation",
        text: "Nurture and follow-up that runs reliably, so nothing valuable goes cold.",
      },
    ],
    outcomes: [
      "Pipeline you can forecast against",
      "Lower cost per qualified opportunity",
      "Marketing accountable to commercial results",
    ],
    closing: "Ready to make marketing a growth engine?",
  },
  "media-production": {
    slug: "media-production",
    no: "06",
    label: "Media Production",
    hero: "Make Your Story Impossible to Ignore.",
    intro:
      "Video and photography, produced to a standard that makes people stop, watch and believe you.",
    body: [
      "We plan, shoot, direct and finish work in-house: concept, script, crew, lighting, sound, edit and grade. That means the story stays intact from the first idea to the final export.",
      "Every production is built for where it will actually live, whether that is a brand film, a launch campaign, a product library or a month of social content shot in a single day.",
    ],
    image: mediaImg,
    imageAlt: "Cinema camera on a dolly inside a premium production studio",
    capabilities: [
      {
        name: "Corporate Video",
        text: "Brand films, culture pieces and leadership communication with real craft.",
      },
      {
        name: "Promotional Video",
        text: "Campaign-led films made to sell a moment, an offer or a launch.",
      },
      {
        name: "Product & Service Videos",
        text: "Clear, considered pieces that show exactly why the thing is worth buying.",
      },
      {
        name: "Photography",
        text: "Brand, product, team and location photography, art-directed end to end.",
      },
      {
        name: "Social Media Content",
        text: "Vertical-first content produced in volume without dropping the standard.",
      },
      {
        name: "Motion Graphics",
        text: "Typography, data and identity brought into motion with restraint.",
      },
      {
        name: "Animation",
        text: "Explanatory and narrative animation for ideas that cameras cannot capture.",
      },
      {
        name: "Video Editing",
        text: "Edit, sound, colour and finishing that lift good footage into a finished film.",
      },
    ],
    outcomes: [
      "A library of assets that works across every channel",
      "Consistent art direction in film and photography",
      "Production values that match your ambition",
    ],
    closing: "Got a story worth telling properly?",
  },
};
