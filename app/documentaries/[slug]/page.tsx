import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { documentaries } from "@/lib/portfolio-data";

export function generateStaticParams() {
  return documentaries.map((doc) => ({ slug: doc.slug }));
}

export default async function DocumentaryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const documentary = documentaries.find((doc) => doc.slug === slug);

  if (!documentary) {
    notFound();
  }

  return (
    <SiteShell
      eyebrow="Project Page"
      title={documentary.title}
      intro={documentary.summary}
    >
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/70 shadow-2xl">
            <div className="relative h-[30rem] overflow-hidden bg-stone-950">
              <Image
                src={documentary.image}
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="absolute inset-0 h-full w-full scale-110 object-cover blur-3xl opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-stone-950/30" />
              <video
                src={documentary.preview}
                controls
                playsInline
                className="relative z-10 h-full w-full object-contain p-4"
              />
            </div>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-stone-400">Role</p>
                <p className="mt-2 text-base text-white">{documentary.role}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-stone-400">Strand</p>
                <p className="mt-2 text-base text-white">{documentary.strand}</p>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                My contribution
              </p>
              <p className="mt-3 leading-7 text-stone-300">{documentary.contribution}</p>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-stone-400">Process</p>
              <div className="mt-4 space-y-3">
                {documentary.process.map((step) => (
                  <div
                    key={step}
                    className="rounded-xl border border-white/10 bg-stone-950/40 px-4 py-3 text-sm leading-6 text-stone-300"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={documentary.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-stone-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Watch documentary
              </a>
              <Link
                href="/documentaries"
                className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 hover:shadow-2xl"
              >
                Back to documentaries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
