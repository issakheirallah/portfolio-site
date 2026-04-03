import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { redirect } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { WorkSections } from "@/components/work-sections";
import { brandWorkPages, getBrandWorkPage } from "@/lib/work-data";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return brandWorkPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;

  if (slug === "eye-investigations") {
    return {
      title: "Localisation",
      description: "Selected Africa Eye investigations localised for international audiences.",
    };
  }

  const brandPage = getBrandWorkPage(slug);

  if (!brandPage) {
    return { title: "Brand portfolio" };
  }

  return {
    title: `${brandPage.title} | Portfolio`,
    description: brandPage.intro,
  };
}

export default async function BrandWorkPage({ params }: { params: Params }) {
  const { slug } = await params;

  if (slug === "eye-investigations") {
    redirect("/documentaries");
  }

  const brandPage = getBrandWorkPage(slug);

  if (!brandPage) {
    notFound();
  }

  return (
    <SiteShell eyebrow={brandPage.eyebrow} title={brandPage.title} intro={brandPage.intro}>
      <WorkSections
        sections={brandPage.sections}
        emptyMessage={brandPage.emptyMessage}
        ctaHref={brandPage.ctaHref}
        ctaLabel={brandPage.ctaLabel}
      />
    </SiteShell>
  );
}
