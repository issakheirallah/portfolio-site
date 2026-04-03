import Link from "next/link";
import { VideoItem, WorkSection, getVideoHref } from "@/lib/work-data";

function WorkCard({ item }: { item: VideoItem }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/70 shadow-xl">
      <div className="aspect-video overflow-hidden border-b border-white/10">
        <iframe
          className="h-full w-full"
          src={item.embedUrl}
          title={item.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-medium text-white">{item.title}</h3>
        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-400">Role</p>
          <p className="mt-3 text-lg text-white">{item.role}</p>
        </div>
        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-400">Programme</p>
          <p className="mt-3 text-lg text-white">{item.programme}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={getVideoHref(item)}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-stone-950 transition hover:-translate-y-1 hover:shadow-2xl"
          >
            Watch video
          </a>
        </div>
      </div>
    </article>
  );
}

export function WorkSections({
  sections,
  emptyMessage,
  ctaHref,
  ctaLabel,
}: {
  sections: WorkSection[];
  emptyMessage?: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  if (sections.length === 0) {
    return (
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="rounded-[2rem] border border-dashed border-white/15 bg-stone-900/40 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-400">Portfolio</p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-300">
              {emptyMessage ?? "This page is ready for work examples."}
            </p>
            {ctaHref && ctaLabel ? (
              <div className="mt-8">
                <Link
                  href={ctaHref}
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-stone-950 transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  {ctaLabel}
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {sections.map((section) => (
        <section
          key={section.title}
          className="border-y border-white/10 bg-white/[0.03] first:border-t-0"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-400">Work section</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
              {section.title}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
              {section.intro}
            </p>

            <div className="mt-12 grid gap-8 xl:grid-cols-3">
              {section.items.map((item) => (
                <WorkCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
