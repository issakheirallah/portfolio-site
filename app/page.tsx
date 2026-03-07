export default function PortfolioWebsite() {
  const featuredWork = [
    {
      title: "BBC World Service Investigations",
      category: "Investigative Journalism",
      description:
        "Long-form reporting focused on uncovering complex global stories with clarity, rigour, and human depth.",
    },
    {
      title: "4Tech",
      category: "Technology Storytelling",
      description:
        "Broadcast storytelling at the intersection of innovation, culture, and public understanding.",
    },
    {
      title: "Documentary Development",
      category: "Producer / Presenter",
      description:
        "Development of compelling factual narratives built around access, character, and strong editorial framing.",
    },
  ];

  const strengths = [
    "Investigative storytelling",
    "Broadcast producing",
    "On-screen presentation",
    "Script development",
    "Documentary research",
    "Editorial leadership",
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
     <section className="relative overflow-hidden border-b border-white/10">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-35" />
    <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/40" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_28%)]" />
  </div>

  <div className="relative mx-auto grid min-h-[88vh] max-w-7xl gap-12 px-6 py-16 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-24">
    <div className="max-w-4xl self-center">
      <p className="mb-5 text-sm uppercase tracking-[0.38em] text-stone-300">
        BBC Producer • Investigations • Documentary Storytelling
      </p>
      <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl lg:text-8xl">
        TEST HERO UPDATE
      </h1>
      <p className="mt-6 max-w-3xl text-xl leading-8 text-stone-200 md:text-2xl md:leading-10">
        Stories about power, conflict, and the people living behind the headlines.
      </p>
      <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300 md:text-lg">
        Producer and journalist working across investigations, documentaries, and
        factual storytelling for global audiences.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#work"
          className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-stone-950 shadow-lg transition hover:-translate-y-0.5"
        >
          View selected work
        </a>
        <a
          href="#contact"
          className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
        >
          Get in touch
        </a>
      </div>
    </div>

    <div className="self-end lg:justify-self-end">
      <div className="max-w-md rounded-[2rem] border border-white/10 bg-black/30 p-3 shadow-2xl backdrop-blur-md">
        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-[0.32em] text-stone-400">
            Current focus
          </p>
          <div className="mt-6 space-y-6">
            <div>
              <p className="text-sm text-stone-400">Role</p>
              <p className="mt-1 text-xl font-medium text-white">
                Producer / Journalist
              </p>
            </div>
            <div>
              <p className="text-sm text-stone-400">Specialisms</p>
              <p className="mt-1 text-base leading-7 text-stone-200">
                Investigations, documentary development, technology storytelling,
                and presenter-led factual work.
              </p>
            </div>
            <div>
              <p className="text-sm text-stone-400">Available for</p>
              <p className="mt-1 text-base leading-7 text-stone-200">
                Commissions, collaborations, and on-screen storytelling opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10" id="about">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              A portfolio built around journalism, depth, and presence.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-stone-300">
            <p>
              My background spans technology coverage, investigative production,
              and documentary development. I am especially interested in stories
              where reporting, character, and editorial ambition meet.
            </p>
            <p>
              This site is designed to present selected work, highlight my
              editorial strengths, and create a clear platform for future
              presenting opportunities, commissions, and collaborations.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]" id="work">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
                Selected work
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Featured projects and editorial experience
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-stone-400">
              Replace these placeholders with project pages, embedded clips,
              documentary summaries, awards, or case studies.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredWork.map((item) => (
              <article
                key={item.title}
                className="group rounded-[2rem] border border-white/10 bg-stone-900/70 p-7 transition hover:-translate-y-1 hover:border-white/20"
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
                <div className="mt-8 text-sm font-medium text-stone-200">
                  Case study coming soon →
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10" id="expertise">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
              Expertise
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              What I bring to a story
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((strength) => (
              <div
                key={strength}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-5 text-base text-stone-200 shadow-lg"
              >
                {strength}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10" id="contact">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Open to documentaries, presenting opportunities, and collaborations.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
              Add your preferred contact details, social links, showreel, and
              professional biography here.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:yourname@example.com"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-stone-950"
            >
              Email me
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
