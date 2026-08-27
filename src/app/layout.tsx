import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dipanshu Kumar — Full Stack Developer, GenAI Engineer & Forex Trader",
  description: "I build AI-powered trading systems, data extraction pipelines, and network security tools. Founder of CONSOUL. B.Tech CSE at GGU.",
  keywords: [
    "Dipanshu Kumar",
    "Full Stack Developer",
    "GenAI Engineer",
    "Forex Trader",
    "CONSOUL",
    "Portfolio",
  ],
  authors: [{ name: "Dipanshu Kumar", url: "https://github.com/raidipanshu25-ops" }],
  creator: "Dipanshu Kumar",
  openGraph: {
    title: "Dipanshu Kumar — Full Stack Developer, GenAI Engineer & Forex Trader",
    description: "I build AI-powered trading systems, data extraction pipelines, and network security tools.",
    siteName: "Dipanshu Kumar",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
