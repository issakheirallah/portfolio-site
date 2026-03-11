import { SiteShell } from "@/components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell
      eyebrow="Contact"
      title="Collaborations, documentaries and editorial work"
      intro="Open to documentary projects, presenting opportunities, video editing roles and international editorial collaborations."
    >
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400">Email</p>
            <a
              href="mailto:issakheirallah@gmail.com"
              className="mt-4 block text-2xl text-white hover:text-stone-300"
            >
              issakheirallah@gmail.com
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400">LinkedIn</p>
            <a
              href="https://www.linkedin.com"
              className="mt-4 block text-2xl text-white hover:text-stone-300"
            >
              Connect on LinkedIn
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400">CV</p>
            <a
              href="/Issa-Kheirallah-CV.pdf"
              className="mt-4 block text-2xl text-white hover:text-stone-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
