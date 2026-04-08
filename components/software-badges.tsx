const software = [
  {
    name: "Final Cut Pro X",
    mark: "FCP",
    className: "from-sky-400 via-cyan-400 to-emerald-300 text-slate-950",
  },
  {
    name: "Adobe Premiere Pro",
    mark: "Pr",
    className: "from-violet-700 via-fuchsia-700 to-violet-900 text-violet-100",
  },
  {
    name: "AVID",
    mark: "A",
    className: "from-zinc-100 via-slate-200 to-zinc-300 text-zinc-950",
  },
  {
    name: "DaVinci Resolve",
    mark: "DR",
    className: "from-orange-400 via-amber-300 to-cyan-300 text-slate-950",
  },
] as const;

const softwareGroups = [
  {
    label: "Newsroom & Editorial Systems",
    mark: "NE",
    tools: ["OpenMedia", "Jupiter/Q-Edit"],
  },
  {
    label: "Localisation Tools",
    mark: "LT",
    tools: ["Agora", "OOONA", "ZOO Digital", "SDVI Rally"],
  },
  {
    label: "Cloud & Transfer",
    mark: "CT",
    tools: ["Aspera", "Signiant"],
  },
  {
    label: "Analytics & OSINT",
    mark: "AO",
    tools: ["Chartbeat", "CrowdTangle", "InVID", "WeVerify", "YouTube Analytics"],
  },
  {
    label: "Editing & Creative",
    mark: "EC",
    tools: ["After Effects", "Photoshop", "Illustrator", "Audition"],
  },
  {
    label: "Operations",
    mark: "OP",
    tools: ["MS Office", "Smartsheet"],
  },
] as const;

export function SoftwareBadges() {
  return (
    <div className="mt-12 space-y-12">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {software.map((item) => (
          <div
            key={item.name}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
          >
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-lg font-semibold tracking-[0.08em] ${item.className}`}
            >
              {item.mark}
            </div>
            <p className="mt-5 text-lg font-medium text-white">{item.name}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {softwareGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-stone-900 text-lg font-semibold tracking-[0.08em] text-white">
              {group.mark}
            </div>
            <p className="mt-5 text-lg font-medium text-white">{group.label}</p>
            <p className="mt-4 leading-7 text-stone-200">{group.tools.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
