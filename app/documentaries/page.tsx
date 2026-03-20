import { DocumentaryArchive } from "@/components/documentary-archive";
import { SiteShell } from "@/components/site-shell";

export default function DocumentariesPage() {
  return (
    <SiteShell
      eyebrow="Documentaries"
      title="Selected Africa Eye investigations"
      intro="A selection from the 30+ Africa Eye investigations that I have localised."
    >
      <DocumentaryArchive />
    </SiteShell>
  );
}
