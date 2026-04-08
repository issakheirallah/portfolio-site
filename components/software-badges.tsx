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
      {
        name: "OpenMedia",
        mark: "OM",
        className: "bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 text-slate-950",
      },
      {
        name: "Jupiter/Q-Edit",
        mark: "JQ",
        className: "bg-gradient-to-br from-amber-300 via-orange-400 to-red-500 text-slate-950",
      },
    ],
  },
  {
    title: "Localisation Tools",
    items: [
      {
        name: "Agora",
        mark: "AG",
        className: "bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 text-white",
      },
      {
        name: "OOONA",
        mark: "OO",
        className: "bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-600 text-white",
      },
      {
        name: "ZOO Digital",
        mark: "ZD",
        className: "bg-gradient-to-br from-lime-300 via-emerald-400 to-green-500 text-slate-950",
      },
      {
        name: "SDVI Rally",
        mark: "SR",
        className: "bg-gradient-to-br from-red-500 via-orange-500 to-amber-300 text-white",
      },
    ],
  },
  {
    title: "Cloud & Transfer",
    items: [
      {
        name: "Aspera",
        mark: "AS",
        className: "bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-700 text-white",
      },
      {
        name: "Signiant",
        mark: "SG",
        className: "bg-gradient-to-br from-orange-300 via-amber-400 to-yellow-500 text-slate-950",
      },
    ],
  },
  {
    title: "Analytics & OSINT",
    items: [
      {
        name: "Chartbeat",
        mark: "CB",
        className: "bg-gradient-to-br from-emerald-300 via-green-400 to-teal-500 text-slate-950",
      },
      {
        name: "CrowdTangle",
        mark: "CT",
        className: "bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 text-white",
      },
      {
        name: "InVID",
        mark: "IV",
        className: "bg-gradient-to-br from-violet-400 via-fuchsia-500 to-pink-500 text-white",
      },
      {
        name: "WeVerify",
        mark: "WV",
        className: "bg-gradient-to-br from-cyan-300 via-teal-400 to-emerald-500 text-slate-950",
      },
      {
        name: "YouTube Analytics",
        mark: "YT",
        className: "bg-gradient-to-br from-red-500 via-rose-500 to-pink-500 text-white",
      },
    ],
  },
  {
    title: "Motion Graphics & Image Editing",
    items: [
      {
        name: "After Effects",
        mark: "Ae",
        className: "bg-gradient-to-br from-indigo-950 via-violet-900 to-fuchsia-800 text-violet-100",
      },
      {
        name: "Photoshop",
        mark: "Ps",
        className: "bg-gradient-to-br from-sky-950 via-blue-900 to-cyan-800 text-sky-100",
      },
      {
        name: "Illustrator",
        mark: "Ai",
        className: "bg-gradient-to-br from-orange-950 via-amber-900 to-yellow-800 text-amber-100",
      },
    ],
  },
  {
    title: "Audio Editing",
    items: [
      {
        name: "Audition",
        mark: "Au",
        className: "bg-gradient-to-br from-emerald-950 via-green-900 to-teal-800 text-emerald-100",
      },
      {
        name: "VCS",
        mark: "VC",
        className: "bg-gradient-to-br from-zinc-700 via-slate-700 to-zinc-900 text-zinc-100",
      },
    ],
  },
  {
    title: "Operations",
    items: [
      {
        name: "MS Office",
        mark: "MS",
        className: "bg-gradient-to-br from-orange-400 via-red-500 to-rose-600 text-white",
      },
      {
        name: "Smartsheet",
        mark: "SS",
        className: "bg-gradient-to-br from-emerald-300 via-green-400 to-lime-500 text-slate-950",
      },
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
