import { SiteShell } from "@/components/site-shell";
import { showreelVideos } from "@/lib/portfolio-data";

type VideoItem = {
  title: string;
  url: string;
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
      ...showreelVideos,
      {
        title: "Artificial blood vessels made from human tissue",
        url: "https://www.youtube.com/embed/LuWaGMmpaBY",
      },
    ],
  },
  {
    title: "Short segments",
    intro: "A dedicated space for shorter report formats and quick-turn editorial pieces.",
    items: [
      {
        title: "Deepfake and AI in UK elections",
        url: "https://www.youtube.com/embed/37cZIDbD4EQ",
      },
      {
        title: "Euro 2024 technologies",
        url: "https://www.youtube.com/embed/ZPVHmm8xzF4",
      },
      {
        title: "Why NASA wants to go back to the moon",
        url: "https://www.youtube.com/embed/ERqYzHdDV9k",
      },
      {
        title: "Using brain waves to produce music",
        url: "https://www.youtube.com/embed/Fbf0skU_7oM",
      },
      {
        title: "Technology at the BBC: 100 years on",
        url: "https://www.youtube.com/embed/cpQti3iIp7U",
      },
    ],
  },
  {
    title: "Digitised reports",
    intro: "A section for digitised or reformatted reports adapted for online-first viewing.",
    items: [
      {
        title: "Nude drawings: My society's taboo",
        url: "https://www.youtube.com/embed/IGOAyWEVvN8",
      },
      {
        title: "Acapella and my religion",
        url: "https://www.youtube.com/embed/mneVKbvg-88",
      },
      {
        title: "I treated my mental health with the art of photography",
        url: "https://www.youtube.com/embed/vGYMgmFF-Ks",
      },
      {
        title: "How I used photography to treat my Borderline Personality Disorder",
        url: "https://www.youtube.com/embed/QgWKasEclF4",
      },
      {
        title: "Photography, my mother and Alzheimer's",
        url: "https://www.youtube.com/embed/APX-_dwZZWg",
      },
      {
        title: "The Ottoman effect on the Arabic language",
        url: "https://www.youtube.com/embed/zqX40BRKRbY",
      },
      {
        title: "A corona mask made with...aubergine?",
        url: "https://www.youtube.com/embed/CdTRomWnSxk",
      },
      {
        title: "How one woman is reviving lost Palestinian foods",
        url: "https://www.youtube.com/embed/G9hcLwvmJEk",
      },
    ],
  },
  {
    title: "Voice-over work",
    intro: "A section for reports and packages built around narration and voice-led storytelling.",
    items: [],
  },
  {
    title: "Promos and trailers",
    intro: "A section for teasers, promotional edits and trailer-style pieces.",
    items: [],
  },
];

function getYoutubeHref(embedUrl: string) {
  return embedUrl.replace("/embed/", "/watch?v=");
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
                        src={item.url}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-medium text-white">{item.title}</h3>
                      <div className="mt-6 flex flex-wrap gap-4">
                        <a
                          href={getYoutubeHref(item.url)}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-stone-950 transition hover:-translate-y-1 hover:shadow-2xl"
                        >
                          Watch on YouTube
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
