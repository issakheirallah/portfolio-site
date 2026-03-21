import type { Metadata } from "next";
import { DocumentaryArchive } from "@/components/documentary-archive";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Localisation",
  description:
    "Featured Africa Eye investigations and other localised titles delivered by Issa Kheirallah.",
};

const otherLocalisedTitles = [
  "Shadow War: Islamic State Group In Africa (2026)",
  "White Asylum: America's South African Refugees (2025)",
  "A City Held Hostage: Johannesburg (2025)",
  "Blood In The Earth: Life and Death In Congo's Coltan Mines (2025)",
  "Shadow Healers: South Africa's Psychedelic Journey (2025)",
  "The Friendship Bench (2025)",
  "The Battle for Laikipia (2025)",
  "Inside Cape Town's Gang Wars (2025)",
  "Sing, Freetown (2025)",
  "The Land That Bleeds (2025)",
  "Inside Darfur: Siege and Massacres (2025)",
  "African Apocalypse (2025)",
  "Liked, Lured, Livestreamed (2025)",
  "Our Land, Our Life (2025)",
  "My Faith, My Truth (2024)",
  "Life at 50°C: South Sudan's Poisoned Floods (2024)",
  "The Homecoming (2024)",
];

export default function DocumentariesPage() {
  return (
    <SiteShell
      eyebrow="Documentaries"
      title="Selected Africa Eye investigations"
      intro="A selection from the 30+ Africa Eye investigations that I have localised."
    >
      <DocumentaryArchive />

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
          Other localised titles
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
          Other localised titles
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
          Additional titles localised across recent years that are not included in the
          featured spotlight selection above.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {otherLocalisedTitles.map((title) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-stone-200"
            >
              {title}
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
