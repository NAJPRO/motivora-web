import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavBar from "@/components/layout/TopNavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Motivora",
  description: "Une motivation peut changer ta journée",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  data-theme="motivora">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          {/* <TopNavBar /> */}
          <TopNavBar />
        </header>

        {children}

        <footer>

        </footer>
      </body>
    </html>
  );
}
