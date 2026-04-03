import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { WorkSections } from "@/components/work-sections";
import { workSections } from "@/lib/work-data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Presenter-led reporting, segments, digitised reports and other editorial video work by Issa Kheirallah.",
};

export default function WorkPage() {
  return (
    <SiteShell
      eyebrow="Work"
      title="Investigations, reporting and factual production"
      intro="A cross-section of presenter-led reporting, short-form journalism and editorial video formats organised by output type."
    >
      <WorkSections sections={workSections} />
    </SiteShell>
  );
}
