import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import mediaShoot1 from "@/assets/gallery/media-img1.png";
import mediaShoot2 from "@/assets/gallery/media-img2.png";
import mediaShoot3 from "@/assets/gallery/media-img4.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Nexen Strategy" },
      {
        name: "description",
        content:
          "Visual Work. Real Stories. A curated selection of visual content created by Nexen Strategy to bring brands, people and ideas to life.",
      },
      { property: "og:title", content: "Gallery — Nexen Strategy" },
      {
        property: "og:description",
        content:
          "A curated selection of visual content created to bring brands, people and ideas to life.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

type Category = "ALL" | "CORPORATE" | "MEDIA PRODUCTION";

const filters: Category[] = ["ALL", "CORPORATE", "MEDIA PRODUCTION"];

interface GalleryItem {
  src: string;
  category: Exclude<Category, "ALL">;
  title: string;
  alt: string;
}

const items: GalleryItem[] = [
  {
    src: mediaShoot1,
    category: "MEDIA PRODUCTION",
    title: "Social Media Video Production",
    alt: "Camera on tripod capturing two men reviewing documents during a production shoot",
  },
  {
    src: mediaShoot2,
    category: "MEDIA PRODUCTION",
    title: "Behind the Lens — Brand Storytelling",
    alt: "Photographer framing a shot of two men in an office setting",
  },
  {
    src: mediaShoot3,
    category: "MEDIA PRODUCTION",
    title: "On-Set Capture — Clinical Campaign",
    alt: "Camera monitor showing a man and child during a clinical video shoot",
  },
];

function GalleryPage() {
  const [filter, setFilter] = useState<Category>("ALL");
  const visible = items.filter((i) => filter === "ALL" || i.category === filter);

  return (
    <>
      <Header />
      <main>
        {/* ================= HERO ================= */}
        <section className="relative isolate overflow-hidden pt-[9.5rem] lg:pt-44">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 grid-faint opacity-50" />
            <div className="absolute inset-0 [background:radial-gradient(55%_60%_at_85%_10%,rgba(74,115,255,0.08),transparent_65%),radial-gradient(40%_45%_at_10%_90%,rgba(58,241,255,0.06),transparent_60%)]" />
          </div>

          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="eyebrow text-azure">Gallery</p>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="display mt-8 max-w-4xl text-[2.75rem] leading-[1.04] text-navy sm:text-6xl lg:text-[5rem]">
                Visual Work.{" "}
                <span className="bg-gradient-to-r from-[#FFA53C] to-[#FF483F] bg-clip-text text-transparent">
                  Real Stories.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
                A curated selection of visual content created to bring brands, people and ideas to
                life.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ================= FILTERS + GALLERY ================= */}
        <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 border-y border-border py-6">
              <span className="mr-2 hidden h-px w-10 bg-gradient-to-r from-[#FFA53C] to-[#FF483F] sm:block" />
              {filters.map((f) => {
                const active = filter === f;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    className={
                      active
                        ? "rounded-full bg-gradient-to-r from-[#FFA53C] to-[#FF483F] px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.14em] text-white transition-all duration-300"
                        : "rounded-full border border-border px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.14em] text-navy/70 transition-all duration-300 hover:border-azure hover:text-navy"
                    }
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {visible.length === 0 ? (
            <div className="py-24 text-center">
              <p className="eyebrow text-muted-foreground">Coming soon</p>
              <p className="mt-4 text-lg text-muted-foreground">
                New work in this category is on its way.
              </p>
            </div>
          ) : (
            <div
              key={filter}
              className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6"
            >
              {visible.map((item, i) => (
                <Reveal key={item.src} delay={60 + i * 70}>
                  <GalleryCard item={item} />
                </Reveal>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <figure className="group relative isolate aspect-[4/5] cursor-pointer overflow-hidden rounded-xl border border-border bg-navy">
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />
      {/* overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100"
      />
      {/* caption */}
      <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100 lg:p-8">
        <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-[#FFA53C]">
          {item.category}
        </p>
        <p className="mt-2 text-lg font-semibold tracking-tight text-white lg:text-xl">
          {item.title}
        </p>
      </figcaption>
      {/* accent line */}
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#FFA53C] to-[#FF483F] transition-all duration-500 group-hover:w-full"
      />
    </figure>
  );
}
