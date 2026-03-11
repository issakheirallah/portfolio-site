import Image from "next/image";
import { ShowreelCarousel } from "@/components/showreel-carousel";
import { SiteShell } from "@/components/site-shell";
import { featuredWork } from "@/lib/portfolio-data";

export default function WorkPage() {
  return (
    <SiteShell
      eyebrow="Work"
      title="Investigations, reporting and factual production"
      intro="A cross-section of presenter-led reporting, BBC investigations and factual formats produced for broadcast and digital audiences."
    >
      <ShowreelCarousel />

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-stone-400">Featured work</p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
          Editorial projects and formats
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {featuredWork.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/70 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden bg-stone-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="relative z-10 h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-stone-400">
                  {item.category}
                </p>
                <h3 className="mt-3 text-2xl font-medium text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-stone-300">{item.description}</p>
                <div className="mt-6 text-sm font-medium text-stone-200">Featured work</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
