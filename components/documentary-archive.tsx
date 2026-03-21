import Link from "next/link";
import Image from "next/image";
import { BbcBadge } from "@/components/bbc-badge";
import { documentaries } from "@/lib/portfolio-data";

export function DocumentaryArchive() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          {documentaries.map((doc) => (
            <article
              key={doc.slug}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/70 shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden bg-stone-950">
                <BbcBadge />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,72,32,0.18),transparent_58%),linear-gradient(180deg,rgba(28,25,23,0.96),rgba(17,17,17,1))]" />
                <div className="absolute inset-0 ring-1 ring-white/10" />

                <Image
                  src={doc.image}
                  alt={doc.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="relative z-10 h-full w-full object-contain object-center p-4"
                />
              </div>

              <div className="p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
                  Documentary spotlight
                </p>

                <h2 className="mt-4 text-3xl font-semibold text-white">
                  {doc.title}
                </h2>

                <p className="mt-6 text-lg leading-8 text-stone-300">
                  {doc.summary}
                </p>

                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                    Year of release
                  </p>
                  <p className="mt-2 text-base text-white">{doc.releaseYear}</p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                      Role
                    </p>
                    <p className="mt-2 text-base text-white">{doc.role}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                      Strand
                    </p>
                    <p className="mt-2 text-base text-white">{doc.strand}</p>
                  </div>
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                    Contribution
                  </p>
                  <p className="mt-3 leading-7 text-stone-300">
                    {doc.contribution}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-stone-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    Watch documentary
                  </a>
                  <Link
                    href={`/documentaries/${doc.slug}`}
                    className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 hover:shadow-2xl"
                  >
                    View project page
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
