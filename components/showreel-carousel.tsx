"use client";

import { useState } from "react";
import { showreelVideos } from "@/lib/portfolio-data";

export function ShowreelCarousel() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % showreelVideos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + showreelVideos.length) % showreelVideos.length);
  };

  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[#B80000]">Showreel</p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
          On-screen reporting
        </h2>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src={showreelVideos[currentVideo].url}
              title={showreelVideos[currentVideo].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <button
            onClick={prevVideo}
            className="rounded-xl border border-white/20 px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 hover:shadow-xl"
          >
            Previous
          </button>

          <p className="text-center text-stone-400">{showreelVideos[currentVideo].title}</p>

          <button
            onClick={nextVideo}
            className="rounded-xl border border-white/20 px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 hover:shadow-xl"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
