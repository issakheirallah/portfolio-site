"use client";

import { useState } from "react";

export default function PortfolioWebsite() {
  const videos = [
    {
      title: "Africa Eye – Sing, Freetown",
      url: "https://www.youtube.com/embed/ZFO_vnkpLBA",
    },
    {
      title: "Investigative Feature",
      url: "https://www.youtube.com/embed/2eOiy7dC3nE",
    },
    {
      title: "BBC Reporting Segment",
      url: "https://www.youtube.com/embed/OcGbQclUDQw",
    },
  ];

  const featuredWork = [
    {
      title: "BBC Eye Investigations",
      category: "Investigations",
      description:
        "Producing and localising flagship BBC investigations for international audiences, managing editorial workflows, translation, dubbing and delivery across multiple markets.",
    },
    {
      title: "BBC Arabic – 4Tech",
      category: "Presenter‑led reporting",
      description:
        "Producer and presenter of 280+ episodes covering global technology, innovation and digital culture across broadcast and social platforms.",
    },
    {
      title: "Art for Life",
      category: "Documentary & Culture",
      description:
        "Produced and directed reports across Europe covering digital art, NFTs and cultural events, leading teams from development through final edit.",
    },
  ];

  const impactStats = [
    { label: "Years in production", value: "9+" },
    { label: "4Tech episodes produced", value: "280+" },
    { label: "Weekly Africa Eye reach", value: "6M+ viewers" },
    { label: "Documentaries localised yearly", value: "20+" },
    { label: "Freelancers & vendors managed", value: "10+" },
    { label: "Cost reduction in localisation", value: "50%" },
  ];

  const localisationHighlights = [
    "End‑to‑end reversioning strategy for BBC Eye Investigations films",
    "Editorial adaptation of investigative documentaries for new audiences",
    "Management of translation, dubbing and compliance workflows",
    "Budget planning and vendor coordination across multiple countries",
    "Streamlined localisation pipelines reducing delivery time from 4 to 3 weeks",
    "Scaling Africa Eye reach to millions of viewers across Africa",
  ];

  const expertise = [
    "Investigations and editorial decision‑making",
    "Producer‑presenter storytelling",
    "International documentary localisation",
    "Scriptwriting and story development",
    "Editorial leadership and team management",
    "Audience growth and digital strategy",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  const nextVideo = () => setCurrentVideo((prev) => (prev + 1) % videos.length);
  const prevVideo = () =>
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/40" />
        </div>

        <div className="relative mx-auto grid min-h-[85vh] max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm uppercase tracking-[0.38em] text-stone-300">
              BBC Producer • Journalist • Presenter
            </p>

            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Issa Kheirallah
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-9 text-stone-200">
              Producer specialising in investigations, documentary localisation,
              and presenter‑led reporting for global audiences.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
              Producing original reporting, managing complex international
              productions, and scaling documentary storytelling across broadcast
              and digital platforms.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="#showreel"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-stone-950"
              >
                Watch showreel
              </a>

              <a
                href="#work"
                className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white"
              >
                View work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWREEL */}
      <section id="showreel" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
            Showreel
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            Investigations, reporting and documentaries
          </h2>

          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={videos[currentVideo].url}
                title={videos[currentVideo].title}
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={prevVideo}
              className="rounded-xl border border-white/20 px-4 py-2"
            >
              Previous
            </button>

            <p className="text-stone-400">{videos[currentVideo].title}</p>

            <button
              onClick={nextVideo}
              className="rounded-xl border border-white/20 px-4 py-2"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
              Producer working across investigations and global factual
              storytelling
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-stone-300">
            <p>
              I am a BBC producer and journalist with more than nine years of
              experience delivering broadcast, digital and on‑location
              productions. My work spans investigative journalism, documentary
              storytelling and presenter‑led reporting.
            </p>

            <p>
              I currently lead localisation and reversioning operations for BBC
              Eye Investigations, adapting flagship documentaries for new
              international audiences while managing editorial workflows,
              translation, dubbing and production delivery.
            </p>

            <p>
              Alongside investigations, I have produced and presented hundreds
              of episodes of BBC Arabic's technology programme 4Tech and worked
              across newsroom journalism, digital investigations and cultural
              documentary production.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
            Impact
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            Production and editorial impact
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <p className="text-4xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-stone-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
          Selected work
        </p>

        <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
          Investigations, reporting and factual production
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredWork.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-stone-900/70 p-8"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
                {item.category}
              </p>

              <h3 className="mt-4 text-2xl font-medium text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-stone-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOCALISATION */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
            Documentary localisation
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            International reversioning and documentary adaptation
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {localisationHighlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
          Expertise
        </p>

        <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
          Editorial and production expertise
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {expertise.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            Collaborations, documentaries and editorial work
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            Open to documentary projects, investigations, presenting
            opportunities and international editorial collaborations.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="mailto:issakheirallah@gmail.com"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-stone-950"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com"
              className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
