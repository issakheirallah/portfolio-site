export type VideoItem = {
  title: string;
  embedUrl: string;
  watchUrl?: string;
  role: string;
  programme: string;
};

export type WorkSection = {
  title: string;
  intro: string;
  items: VideoItem[];
};

type BrandWorkPage = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  sections: WorkSection[];
  emptyMessage?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

const showreelVideos = [
  {
    title: "Technologies at the 2024 Paris Olympics",
    embedUrl: "https://www.youtube.com/embed/ZFO_vnkpLBA",
    role: "Producer | Video Editor",
    programme: "4Tech",
  },
  {
    title: "Implantable device to help with regulating diabetes",
    embedUrl: "https://www.youtube.com/embed/2eOiy7dC3nE",
    role: "Producer | Presenter | Video Editor | Graphics",
    programme: "4Tech",
  },
  {
    title: "Spinal cord rehabilitation device",
    embedUrl: "https://www.youtube.com/embed/OcGbQclUDQw",
    role: "Producer | Presenter | Video Editor | Graphics",
    programme: "4Tech",
  },
] as const satisfies readonly VideoItem[];

export const workSections: WorkSection[] = [
  {
    title: "On-screen reporting",
    intro: "A selection of presenter-led reports available to watch directly from their YouTube embeds.",
    items: [
      showreelVideos[1],
      showreelVideos[2],
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
      showreelVideos[0],
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
] as const;

export function getVideoHref(item: VideoItem) {
  if (item.watchUrl) return item.watchUrl;
  return item.embedUrl.replace("/embed/", "/watch?v=");
}

function getSectionsByProgramme(programme: string) {
  return workSections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => item.programme === programme),
    }))
    .filter((section) => section.items.length > 0);
}

export const brandWorkPages: BrandWorkPage[] = [
  {
    slug: "4tech",
    eyebrow: "Brand portfolio",
    title: "4Tech",
    intro:
      "A weekly show that covers everything technology from the medical sector on earth to the endless bounds of space.",
    sections: getSectionsByProgramme("4Tech"),
  },
  {
    slug: "art-for-life",
    eyebrow: "Brand portfolio",
    title: "Art for Life",
    intro:
      "Art for Life is a weekly culture programme showcasing a variety of Arab culture genres, from music to cinema to poetry.",
    sections: getSectionsByProgramme("Art for Life"),
  },
  {
    slug: "hardtalk",
    eyebrow: "Brand portfolio",
    title: "HARDtalk",
    intro:
      "In-depth interviews with hard-hitting questions and sensitive topics being covered as famous personalities from all walks of life talk about the highs and lows in their lives.",
    sections: getSectionsByProgramme("HARDtalk"),
  },
  {
    slug: "eye-investigations",
    eyebrow: "Brand portfolio",
    title: "Eye Investigations",
    intro:
      "Documentary series offering high-impact investigations and in-depth reporting from award-winning World Service teams across the globe.",
    sections: [],
    emptyMessage:
      "The Eye Investigations work is presented in the Localisation section rather than the main Portfolio format.",
    ctaHref: "/documentaries",
    ctaLabel: "Browse localisation work",
  },
  {
    slug: "bbc-news",
    eyebrow: "Brand portfolio",
    title: "BBC News",
    intro:
      "BBC News provides trusted World and UK news as well as local and regional perspectives.",
    sections: [],
    emptyMessage:
      "This page is ready for BBC News examples once you want to add them.",
  },
  {
    slug: "xtra",
    eyebrow: "Brand portfolio",
    title: "Xtra",
    intro:
      "A weekly magazine show looking at a range of social, political and cultural topics across the Middle East.",
    sections: [],
    emptyMessage:
      "This page is ready for Xtra examples once you want to add them.",
  },
];

export function getBrandWorkPage(slug: string) {
  return brandWorkPages.find((page) => page.slug === slug);
}
