import { SoftwareBadges } from "@/components/software-badges";
import { SiteShell } from "@/components/site-shell";
import { expertise, timeline } from "@/lib/portfolio-data";

export default function AboutPage() {
  return (
    <SiteShell
      eyebrow="About"
      title="Producer working across investigations and global factual storytelling"
      intro="BBC producer and journalist with more than nine years of experience delivering broadcast, digital and on-location productions across investigations, documentary localisation and presenter-led reporting."
    >
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-5xl">Editorial background</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-stone-300">
            <p>
              I currently lead localisation operations for Eye Investigations&apos;
              Africa Eye, adapting flagship documentaries for new international
              audiences while managing editorial workflows, translation, dubbing and
              production delivery.
            </p>
            <p>
              Alongside investigations, I have been involved in the production of
              hundreds of episodes of BBC Arabic&apos;s technology programme, 4Tech and
              worked across newsroom journalism, digital video production and culture
              show production.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-stone-400">Timeline</p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">Career timeline</h2>
        <div className="mt-12 space-y-6 border-l border-white/10 pl-6 md:pl-10">
          {timeline.map((item) => (
            <div key={`${item.year}-${item.title}`} className="relative">
              <div className="absolute -left-[2.05rem] top-2 h-3 w-3 rounded-full bg-white md:-left-[2.6rem]" />
              <p className="text-sm uppercase tracking-[0.25em] text-stone-400">{item.year}</p>
              {item.role && (
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-stone-400">
                  {item.role}
                </p>
              )}
              <h3 className="mt-2 text-2xl font-medium text-white">{item.title}</h3>
              <p className="mt-3 max-w-3xl leading-7 text-stone-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-stone-400">Expertise</p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
          Editorial and production expertise
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {expertise.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
            Editing software
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-white md:text-4xl">
            Editing and post-production tools
          </h3>
          <SoftwareBadges />
        </div>
      </section>
    </SiteShell>
  );
}
