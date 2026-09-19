import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Space_Mono, Italiana } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italiana",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Agency Starter — Built with Antigravity",
  description: "Next.js App Router starter with pre-configured Antigravity skills, rules, and typography systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Cabinet Grotesk (Option 1 Headline Font) via Fontshare CDN */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@700,800,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${jetbrainsMono.variable} ${spaceMono.variable} ${italiana.variable} font-sans antialiased`}
        style={{
          // Default to Option 1: Cabinet Grotesk for headlines, Plus Jakarta Sans for body
          ["--font-headline" as string]: "'Cabinet Grotesk', sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
