import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Zelox — Premium Property & Sales Software",
  description: "We build minimalist software that runs your properties and pipeline. Scalable, secure, offline-first.",
  keywords: ["property management software", "sales tracking system", "Zelox", "real estate tech", "enterprise SaaS"],
  metadataBase: new URL("https://zelox.space"),
  alternates: {
    canonical: "https://zelox-web-app.vercel.app/.",
  },
  openGraph: {
    title: "Zelox — Property & Sales Software",
    description: "Enterprise-grade software made simple. Try Zelox today.",
    url: "https://zelox.space",
    siteName: "Zelox",
    images: ["/og-image.png"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zelox — Software That Runs Your Properties",
    description: "Minimalist UX. Enterprise depth. Zelox has you covered.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">{children}</body>
    </html>
  );
}
