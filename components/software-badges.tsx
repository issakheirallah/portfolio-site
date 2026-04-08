type SoftwareBadge = {
  name: string;
  mark: string;
  className?: string;
};

type SoftwareSection = {
  title: string;
  items: SoftwareBadge[];
};

const defaultBadgeClass =
  "border border-white/10 bg-stone-900 text-white";

const softwareSections: SoftwareSection[] = [
  {
    title: "Video Editing",
    items: [
      {
        name: "Final Cut Pro X",
        mark: "FCP",
        className: "bg-gradient-to-br from-sky-400 via-cyan-400 to-emerald-300 text-slate-950",
      },
      {
        name: "Adobe Premiere Pro",
        mark: "Pr",
        className:
          "bg-gradient-to-br from-violet-700 via-fuchsia-700 to-violet-900 text-violet-100",
      },
      {
        name: "AVID",
        mark: "A",
        className: "bg-gradient-to-br from-zinc-100 via-slate-200 to-zinc-300 text-zinc-950",
      },
      {
        name: "DaVinci Resolve",
        mark: "DR",
        className: "bg-gradient-to-br from-orange-400 via-amber-300 to-cyan-300 text-slate-950",
      },
    ],
  },
  {
    title: "Newsroom & Editorial Systems",
    items: [
      { name: "OpenMedia", mark: "OM" },
      { name: "Jupiter/Q-Edit", mark: "JQ" },
    ],
  },
  {
    title: "Localisation Tools",
    items: [
      { name: "Agora", mark: "AG" },
      { name: "OOONA", mark: "OO" },
      { name: "ZOO Digital", mark: "ZD" },
      { name: "SDVI Rally", mark: "SR" },
    ],
  },
  {
    title: "Cloud & Transfer",
    items: [
      { name: "Aspera", mark: "AS" },
      { name: "Signiant", mark: "SG" },
    ],
  },
  {
    title: "Analytics & OSINT",
    items: [
      { name: "Chartbeat", mark: "CB" },
      { name: "CrowdTangle", mark: "CT" },
      { name: "InVID", mark: "IV" },
      { name: "WeVerify", mark: "WV" },
      { name: "YouTube Analytics", mark: "YT" },
    ],
  },
  {
    title: "Motion Graphics & Image Editing",
    items: [
      { name: "After Effects", mark: "Ae" },
      { name: "Photoshop", mark: "Ps" },
      { name: "Illustrator", mark: "Ai" },
    ],
  },
  {
    title: "Audio Editing",
    items: [
      { name: "Audition", mark: "Au" },
      { name: "VCS", mark: "VC" },
    ],
  },
  {
    title: "Operations",
    items: [
      { name: "MS Office", mark: "MS" },
      { name: "Smartsheet", mark: "SS" },
    ],
  },
] as const;

export function SoftwareBadges() {
  return (
    <div className="mt-12 space-y-16">
      {softwareSections.map((section) => (
        <div key={section.title}>
          <h3 className="text-2xl font-semibold text-white md:text-4xl">{section.title}</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {section.items.map((item) => (
              <div
                key={item.name}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl text-lg font-semibold tracking-[0.08em] ${
                    item.className ?? defaultBadgeClass
                  }`}
                >
                  {item.mark}
                </div>
                <p className="mt-5 text-lg font-medium text-white">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
