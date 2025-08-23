import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "ZeloxIndustries",
  description: "Premium software solutions: Apartment Management & Sales Tracking.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">{children}</body>
    </html>
  );
}
