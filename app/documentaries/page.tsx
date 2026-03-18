import { DocumentaryArchive } from "@/components/documentary-archive";
import { SiteShell } from "@/components/site-shell";

export default function DocumentariesPage() {
  return (
    <SiteShell
      eyebrow="Documentaries"
      title="Selected Africa Eye investigations"
      intro="A dedicated project archive for localisation work delivered across BBC Africa Eye investigations, with individual pages for each documentary."
    >
      <DocumentaryArchive />
    </SiteShell>
  );
}
