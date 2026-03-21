import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Issa Kheirallah",
    template: "%s | Issa Kheirallah",
  },
  description:
    "Portfolio website for Issa Kheirallah, featuring investigations, factual production, documentary localisation and presenter-led reporting.",
  openGraph: {
    title: "Issa Kheirallah",
    description:
      "Portfolio website for Issa Kheirallah, featuring investigations, factual production, documentary localisation and presenter-led reporting.",
    type: "website",
    siteName: "Issa Kheirallah",
  },
  twitter: {
    card: "summary_large_image",
    title: "Issa Kheirallah",
    description:
      "Portfolio website for Issa Kheirallah, featuring investigations, factual production, documentary localisation and presenter-led reporting.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
