import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
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
    <html lang="en"  
      data-theme="motivora"
      className={`${poppins.variable} ${playfair.variable} bg-secondary  h-full`}  
    >
      <body className="bg-secondary h-screen">
        <header>
          <TopNavBar />
        </header>
        <main className="pt-16">
          {children}
        </main>
        <footer>
          <Footer/>

        </footer>
      </body>
    </html>
  );
}
