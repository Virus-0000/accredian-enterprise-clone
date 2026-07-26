import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accredian | Next-Gen Enterprise Learning & Upskilling",
  description:
    "Cultivate high-performance enterprise teams through expert learning, tailored solutions, industry insights, and domain expertise.",
  keywords: ["Enterprise Learning", "Upskilling", "Gen-AI Mastery", "Leadership Training", "Accredian"],
  authors: [{ name: "Accredian" }],
};

export const viewport: Viewport = {
  themeColor: "#1B76FF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900 selection:bg-blue-100 selection:text-[#1B76FF]">
        {children}
      </body>
    </html>
  );
}


