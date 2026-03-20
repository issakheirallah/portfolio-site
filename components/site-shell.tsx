import Link from "next/link";
import { ReactNode } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Portfolio" },
  { href: "/documentaries", label: "Localisation" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({
  children,
  eyebrow,
  title,
  intro,
}: {
  children: ReactNode;
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.3em] text-white"
          >
            Issa Kheirallah
          </Link>

          <nav className="flex flex-wrap items-center justify-end gap-4 text-sm text-stone-300 md:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {(eyebrow || title || intro) && (
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
            {eyebrow && (
              <p className="text-sm uppercase tracking-[0.35em] text-stone-400">
                {eyebrow}
              </p>
            )}
            {title && (
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                {title}
              </h1>
            )}
            {intro && (
              <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
                {intro}
              </p>
            )}
          </div>
        </section>
      )}

      <main>{children}</main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-stone-400 md:flex-row md:items-center md:justify-between md:px-10">
          <p>Producer, journalist and video editor currently based in London.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/documentaries" className="hover:text-white">
              Documentary work
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
