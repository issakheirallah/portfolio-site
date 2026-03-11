import Link from "next/link";
import Image from "next/image";
import { DocumentaryShowcase } from "@/components/documentary-showcase";
import { SiteShell } from "@/components/site-shell";
import { profileImage, featuredWork } from "@/lib/portfolio-data";

export default function HomePage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full scale-105 object-cover animate-[heroZoom_18s_ease-in-out_infinite_alternate] opacity-40"
          >
            <source src="/videos/hero/hero-background.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/50" />
        </div>

        <div className="relative mx-auto grid min-h-[85vh] max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm uppercase tracking-[0.38em] text-stone-300">
              Producer • Video Journalist • On-screen Reporter
            </p>

            <div className="relative inline-block">
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="h-24 w-72 animate-[pulseGlow_6s_ease-in-out_infinite] rounded-full bg-white/20 blur-3xl" />
              </div>
              <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
                Issa Kheirallah
              </h1>
            </div>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-stone-200">
              Producer specialising in video journalism, digital storytelling,
              investigations, documentary localisation, and presenter-led reporting
              for global audiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/work"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-stone-950"
              >
                Explore work
              </Link>
              <Link
                href="/documentaries"
                className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white"
              >
                Browse documentaries
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-white/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/70 shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-950">
                <Image
                  src={profileImage}
                  alt="Issa Kheirallah"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />
              </div>

              <div className="grid gap-4 border-t border-white/10 bg-stone-900/80 p-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-stone-400">Based in</p>
                  <p className="mt-2 text-white">London</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-stone-400">Focus</p>
                  <p className="mt-2 text-white">Investigations & factual storytelling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-stone-400">Overview</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
              Reporting, investigations and localisation across multiple formats
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-stone-300">
            <p>
              I am a BBC producer and journalist with more than nine years of
              experience delivering broadcast, digital and on-location productions.
            </p>
            <p>
              My recent work centres on Africa Eye documentary localisation while my
              wider background spans presenter-led reporting, digital storytelling and
              factual production.
            </p>
            <p>
              The site now separates that work into dedicated pages so projects,
              biography and contact details are easier to browse.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-stone-400">Featured work</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
              Selected formats and editorial projects
            </h2>
          </div>
          <Link href="/work" className="text-sm uppercase tracking-[0.28em] text-stone-300 hover:text-white">
            View all work
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {featuredWork.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/70 shadow-xl"
            >
              <div className="relative h-80 overflow-hidden bg-stone-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="h-full w-full object-contain p-3"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-stone-400">{item.category}</p>
                <h3 className="mt-3 text-2xl font-medium text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-stone-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <DocumentaryShowcase />

      <section className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-20 md:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-stone-400">Next step</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
              Explore the rest of the portfolio
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-stone-950"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
