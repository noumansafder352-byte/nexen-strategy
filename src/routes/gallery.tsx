import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import mediaShoot1 from "@/assets/gallery/media-img1.png";
import mediaShoot2 from "@/assets/gallery/media-img2.png";
import mediaShoot3 from "@/assets/gallery/media-img3.png";
import mediaShoot4 from "@/assets/gallery/media-img4.png";
import mediaShoot5 from "@/assets/gallery/media-img5.png";
import mediaShoot6 from "@/assets/gallery/media-img6.png";
import drshahidimg1 from "@/assets/gallery/drshahid-img1.png";
import drshahidimg2 from "@/assets/gallery/drshahid-img2.png";
import drshahidimg3 from "@/assets/gallery/drshahid-img3.png";
import drshahidimg4 from "@/assets/gallery/drshahid-img4.png";

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

interface GalleryItem {
  src: string;
  title: string;
  alt: string;
}

const items: GalleryItem[] = [
  {
    src: mediaShoot1,
    title: "Dr. Shoaib — Clinical Shoot",
    alt: "Professional photography and video production for Dr. Shoaib.",
  },
  {
    src: mediaShoot2,
    title: "Dr. Shoaib — Clinical Shoot",
    alt: "Professional photography and video production for Dr. Shoaib.",
  },
  {
    src: mediaShoot3,
    title: "Dr. Shoaib — Clinical Shoot",
    alt: "Professional photography and video production for Dr. Shoaib.",
  },
  {
    src: mediaShoot4,
    title: "Dr. Shoaib — Clinical Shoot",
    alt: "Professional photography and video production for Dr. Shoaib.",
  },
  {
    src: mediaShoot5,
    title: "Dr. Shoaib — Clinical Shoot",
    alt: "Professional photography and video production for Dr. Shoaib.",
  },
  {
    src: mediaShoot6,
    title: "Dr. Shoaib — Clinical Shoot",
    alt: "Professional photography and video production for Dr. Shoaib.",
  },

  {
    src: drshahidimg1,
    title: "Dr. Shahid Mahmud — Clinical Shoot",
    alt: "Professional photography and video production for Dr. Shahid Mahmud",
  },
  {
    src: drshahidimg2,
    title: "Dr. Shahid Mahmud — Clinical Shoot",
    alt: "Professional photography and video production for Dr. Shahid Mahmud",
  },
  {
    src: drshahidimg3,
    title: "Dr. Shahid Mahmud — Clinical Shoot",
    alt: "Professional photography and video production for Dr. Shahid Mahmud",
  },
  {
    src: drshahidimg4,
    title: "Dr. Shahid Mahmud — Clinical Shoot",
    alt: "Professional photography and video production for Dr. Shahid Mahmud",
  },
];

function GalleryPage() {
  const visible = items;

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

        {/* ================= GALLERY ================= */}
        <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-20">
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
            {visible.map((item, i) => (
              <Reveal key={item.src} delay={60 + i * 70}>
                <GalleryCard item={item} />
              </Reveal>
            ))}
          </div>
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
        <p className="text-lg font-semibold tracking-tight text-white lg:text-xl">{item.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-white/80">{item.alt}</p>
      </figcaption>
      {/* accent line */}
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#FFA53C] to-[#FF483F] transition-all duration-500 group-hover:w-full"
      />
    </figure>
  );
}
