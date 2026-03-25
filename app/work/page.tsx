import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { showreelVideos } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Presenter-led reporting, segments, digitised reports and other editorial video work by Issa Kheirallah.",
};

type VideoItem = {
  title: string;
  embedUrl: string;
  watchUrl?: string;
  role: string;
  programme: string;
};

type WorkSection = {
  title: string;
  intro: string;
  items: VideoItem[];
};

const workSections: WorkSection[] = [
  {
    title: "On-screen reporting",
    intro: "A selection of presenter-led reports available to watch directly from their YouTube embeds.",
    items: [
      {
        title: showreelVideos[1].title,
        embedUrl: showreelVideos[1].embedUrl,
        role: "Producer | Presenter | Video Editor | Graphics",
        programme: "4Tech",
      },
      {
        title: showreelVideos[2].title,
        embedUrl: showreelVideos[2].embedUrl,
        role: "Producer | Presenter | Video Editor | Graphics",
        programme: "4Tech",
      },
      {
        title: "Artificial blood vessels made from human tissue",
        embedUrl: "https://www.youtube.com/embed/LuWaGMmpaBY",
        role: "Producer | Presenter",
        programme: "4Tech",
      },
    ],
  },
  {
    title: "Segments",
    intro: "A dedicated space for shorter report formats and quick-turn editorial pieces.",
    items: [
      {
        title: showreelVideos[0].title,
        embedUrl: showreelVideos[0].embedUrl,
        role: "Producer | Video Editor",
        programme: "4Tech",
      },
      {
        title: "Deepfake and AI in UK elections",
        embedUrl: "https://www.youtube.com/embed/37cZIDbD4EQ",
        role: "Producer | Video Editor",
        programme: "4Tech",
      },
      {
        title: "Euro 2024 technologies",
        embedUrl: "https://www.youtube.com/embed/ZPVHmm8xzF4",
        role: "Producer | Video Editor",
        programme: "4Tech",
      },
      {
        title: "Why NASA wants to go back to the moon",
        embedUrl: "https://www.youtube.com/embed/ERqYzHdDV9k",
        role: "Producer | Video Editor",
        programme: "4Tech",
      },
      {
        title: "Using brain waves to produce music",
        embedUrl: "https://www.youtube.com/embed/Fbf0skU_7oM",
        role: "Producer | Video Editor",
        programme: "4Tech",
      },
      {
        title: "Technology at the BBC: 100 years on",
        embedUrl: "https://www.youtube.com/embed/cpQti3iIp7U",
        role: "Producer | Video Editor",
        programme: "4Tech",
      },
    ],
  },
  {
    title: "Digitised reports",
    intro: "A section for digitised or reformatted reports adapted for online-first viewing.",
    items: [
      {
        title: "Nude drawings: My society's taboo",
        embedUrl: "https://www.youtube.com/embed/IGOAyWEVvN8",
        role: "Digital Producer | Video Editor",
        programme: "Art for Life",
      },
      {
        title: "Acapella and my religion",
        embedUrl: "https://www.youtube.com/embed/mneVKbvg-88",
        role: "Digital Producer | Video Editor",
        programme: "Art for Life",
      },
      {
        title: "I treated my mental health with the art of photography",
        embedUrl: "https://www.youtube.com/embed/vGYMgmFF-Ks",
        role: "Digital Producer | Video Editor",
        programme: "Art for Life",
      },
      {
        title: "How I used photography to treat my Borderline Personality Disorder",
        embedUrl: "https://www.youtube.com/embed/QgWKasEclF4",
        role: "Digital Producer | Video Editor",
        programme: "Art for Life",
      },
      {
        title: "Photography, my mother and Alzheimer's",
        embedUrl: "https://www.youtube.com/embed/APX-_dwZZWg",
        role: "Digital Producer | Video Editor",
        programme: "Art for Life",
      },
      {
        title: "The Ottoman effect on the Arabic language",
        embedUrl: "https://www.youtube.com/embed/zqX40BRKRbY",
        role: "Digital Producer | Video Editor",
        programme: "Art for Life",
      },
      {
        title: "A corona mask made with...aubergine?",
        embedUrl: "https://www.youtube.com/embed/CdTRomWnSxk",
        role: "Digital Producer | Video Editor",
        programme: "Art for Life",
      },
      {
        title: "How one woman is reviving lost Palestinian foods",
        embedUrl: "https://www.youtube.com/embed/G9hcLwvmJEk",
        role: "Digital Producer | Video Editor",
        programme: "Art for Life",
      },
    ],
  },
  {
    title: "Field Producing",
    intro: "A section for location-based production work, reporting support and field-led editorial delivery.",
    items: [
      {
        title: "Bioengineered mosquitoes to fight Dengue fever",
        embedUrl: "https://www.bbc.com/ws/av-embeds/articles/cg4qpkxpz4go/p0jx55tc/ar",
        watchUrl: "https://www.bbc.com/ws/av-embeds/articles/cg4qpkxpz4go/p0jx55tc/ar",
        role: "Producer | Field Producer",
        programme: "4Tech",
      },
      {
        title: "Ibrahim Keivo: Blending ancient Mesopotamian languages into one song",
        embedUrl: "https://www.bbc.com/arabic/av-embeds/tv-and-radio-62066450",
        watchUrl: "https://www.bbc.com/arabic/av-embeds/tv-and-radio-62066450",
        role: "Producer | Field Producer",
        programme: "Art for Life",
      },
      {
        title: "Syrian Cassette Archive: Preserving the art of popular music in cassettes",
        embedUrl: "https://www.youtube.com/embed/t6HEkEkaLl0",
        watchUrl: "https://www.youtube.com/watch?v=t6HEkEkaLl0",
        role: "Producer | Field Producer",
        programme: "Art for Life",
      },
      {
        title: "SACF: The first Syrian arts and culture festival in London",
        embedUrl: "https://www.bbc.com/arabic/av-embeds/tv-and-radio-62066452",
        watchUrl: "https://www.bbc.com/arabic/av-embeds/tv-and-radio-62066452",
        role: "Producer | Field Producer",
        programme: "Art for Life",
      },
      {
        title: "Dima Orsho: A soprano singer’s journey in the world of music",
        embedUrl: "https://www.bbc.com/arabic/av-embeds/blog-tv-and-radio-64641842",
        watchUrl: "https://www.bbc.com/arabic/av-embeds/blog-tv-and-radio-64641842",
        role: "Producer | Field Producer",
        programme: "Art for Life",
      },
      {
        title: "N3rdistan: Arabic poetry in music",
        embedUrl: "https://www.bbc.com/arabic/av-embeds/tv-and-radio-65978455",
        watchUrl: "https://www.bbc.com/arabic/av-embeds/tv-and-radio-65978455",
        role: "Producer | Field Producer",
        programme: "Art for Life",
      },
    ],
  },
  {
    title: "High-profile political interviews",
    intro: "A selection of political interviews featuring senior diplomatic and policy voices.",
    items: [
      {
        title: "Daniel Levy: Former Israeli peace negotiator",
        embedUrl: "https://www.youtube.com/embed/inSNyyLyQp0",
        watchUrl: "https://www.youtube.com/watch?v=inSNyyLyQp0&t=5s",
        role: "Producer",
        programme: "HARDtalk",
      },
      {
        title: "Muhanad Al Aklouk: Palestinian envoy to the League of Arab States",
        embedUrl: "https://www.youtube.com/embed/iD8af5t8L-c",
        watchUrl:
          "https://www.youtube.com/watch?v=iD8af5t8L-c&list=PLF614048CA3E017F0&index=127",
        role: "Producer",
        programme: "HARDtalk",
      },
      {
        title:
          "Hassan Asfour: Former Palestinian minister and member on the Oslo Accord committee",
        embedUrl: "https://www.youtube.com/embed/Sv7ndCUpDVE",
        watchUrl:
          "https://www.youtube.com/watch?v=Sv7ndCUpDVE&list=PLF614048CA3E017F0&index=130&t=28s",
        role: "Producer",
        programme: "HARDtalk",
      },
    ],
  },
  {
    title: "Promos and trailers",
    intro: "A section for teasers, promotional edits and trailer-style pieces.",
    items: [],
  },
];

function getVideoHref(item: VideoItem) {
  if (item.watchUrl) return item.watchUrl;
  return item.embedUrl.replace("/embed/", "/watch?v=");
}

export default function WorkPage() {
  return (
    <SiteShell
      eyebrow="Work"
      title="Investigations, reporting and factual production"
      intro="A cross-section of presenter-led reporting, short-form journalism and editorial video formats organised by output type."
    >
      {workSections.map((section) => (
        <section
          key={section.title}
          className="border-y border-white/10 bg-white/[0.03] first:border-t-0"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
              Work section
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
              {section.title}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
              {section.intro}
            </p>

            {section.items.length > 0 ? (
              <div className="mt-12 grid gap-8 xl:grid-cols-3">
                {section.items.map((item) => (
                  <article
                    key={item.title}
                    className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/70 shadow-xl"
                  >
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
                        <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                          Role
                        </p>
                        <p className="mt-3 text-lg text-white">{item.role}</p>
                      </div>
                      <div className="mt-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                          Programme
                        </p>
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
                ))}
              </div>
            ) : (
              <div className="mt-12 rounded-[2rem] border border-dashed border-white/15 bg-stone-900/40 p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-stone-400">
                  Ready for content
                </p>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-300">
                  This section is set up and ready for YouTube links. Once you share the
                  reports you want here, I can drop them straight into the layout.
                </p>
              </div>
            )}
          </div>
        </section>
      ))}
    </SiteShell>
  );
}
