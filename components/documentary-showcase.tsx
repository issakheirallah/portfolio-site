"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { documentaries } from "@/lib/portfolio-data";

export function DocumentaryShowcase() {
  const [selectedDocumentary, setSelectedDocumentary] = useState(documentaries[0]);
  const [spotlightVisible, setSpotlightVisible] = useState(true);

  const selectedIndex = useMemo(
    () => documentaries.findIndex((doc) => doc.slug === selectedDocumentary.slug),
    [selectedDocumentary.slug]
  );

  const changeDocumentary = (slug: string) => {
    const nextDoc = documentaries.find((doc) => doc.slug === slug);
    if (!nextDoc) return;

    setSpotlightVisible(false);
    window.setTimeout(() => {
      setSelectedDocumentary(nextDoc);
      setSpotlightVisible(true);
    }, 150);
  };

  const nextDocumentary = () => {
    const nextIndex = (selectedIndex + 1) % documentaries.length;
    changeDocumentary(documentaries[nextIndex].slug);
  };

  const prevDocumentary = () => {
    const prevIndex = (selectedIndex - 1 + documentaries.length) % documentaries.length;
    changeDocumentary(documentaries[prevIndex].slug);
  };

  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
              Localisation work
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
              Selected Africa Eye investigations
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
              A curated selection of BBC Africa Eye investigations I worked on through
              localisation and international delivery.
            </p>

            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              {documentaries.map((doc) => {
                const isActive = selectedDocumentary.slug === doc.slug;

                return (
                  <button
                    key={doc.slug}
                    onClick={() => changeDocumentary(doc.slug)}
                    className={`group block overflow-hidden rounded-[2rem] border text-left shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                      isActive
                        ? "border-white/30 bg-stone-900 shadow-2xl"
                        : "border-white/10 bg-stone-900/70 hover:border-white/20 hover:shadow-2xl"
                    }`}
                  >
                    <div className="relative h-80 overflow-hidden bg-stone-950">
                      <Image
                        src={doc.image}
                        alt=""
                        aria-hidden="true"
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl opacity-35"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-stone-950/40" />
                      <div className="absolute inset-0 ring-1 ring-white/10" />

                      <Image
                        src={doc.image}
                        alt={doc.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="relative z-10 h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6">
                      <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                        BBC Africa Eye
                      </p>
                      <h3 className="mt-2 text-xl font-medium leading-snug text-white">
                        {doc.title}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/70 shadow-2xl lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
              <div
                key={selectedDocumentary.slug}
                className={`transition-opacity duration-300 ${
                  spotlightVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative h-[24rem] overflow-hidden bg-stone-950 lg:sticky lg:top-0 lg:z-10">
                  <Image
                    src={selectedDocumentary.image}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="absolute inset-0 h-full w-full scale-110 object-cover blur-3xl opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-stone-950/30" />
                  <div className="absolute inset-0 ring-1 ring-white/10" />

                  <video
                    key={selectedDocumentary.preview}
                    src={selectedDocumentary.preview}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="relative z-10 h-full w-full object-contain p-4 transition-opacity duration-300"
                  />
                </div>

                <div className="bg-stone-900/95 p-8 backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
                      Documentary spotlight
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={prevDocumentary}
                        className="rounded-full border border-white/15 px-3 py-2 text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/5"
                        aria-label="Previous documentary"
                      >
                        ←
                      </button>
                      <button
                        onClick={nextDocumentary}
                        className="rounded-full border border-white/15 px-3 py-2 text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/5"
                        aria-label="Next documentary"
                      >
                        →
                      </button>
                    </div>
                  </div>

                  <h3 className="mt-4 text-3xl font-semibold text-white">
                    {selectedDocumentary.title}
                  </h3>
                  <p className="mt-6 text-lg leading-8 text-stone-300">
                    {selectedDocumentary.summary}
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                        Role
                      </p>
                      <p className="mt-2 text-base text-white">{selectedDocumentary.role}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                        Strand
                      </p>
                      <p className="mt-2 text-base text-white">{selectedDocumentary.strand}</p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                      My contribution
                    </p>
                    <p className="mt-3 leading-7 text-stone-300">
                      {selectedDocumentary.contribution}
                    </p>
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                      Process
                    </p>
                    <div className="mt-4 space-y-3">
                      {selectedDocumentary.process.map((step) => (
                        <div
                          key={step}
                          className="rounded-xl border border-white/10 bg-stone-950/40 px-4 py-3 text-sm leading-6 text-stone-300"
                        >
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={selectedDocumentary.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-stone-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >
                      Watch documentary
                    </a>
                    <Link
                      href={`/documentaries/${selectedDocumentary.slug}`}
                      className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 hover:shadow-2xl"
                    >
                      View project page
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
