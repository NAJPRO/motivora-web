import AppDownloadSection from "@/components/home/AppDownloadSection";
import DailyQuote from "@/components/home/DailyQuote";
import HeroSection from "@/components/home/HeroSection";
import NewsLetterSection from "@/components/home/NewsLetterSection";
import ThemeSection from "@/components/home/ThemeSection";


export default function Home() {
  return (
    <div className="text-secondary-content">
      <HeroSection />
      <DailyQuote />
      <ThemeSection/>
      <AppDownloadSection/>
      <NewsLetterSection/>
    </div>
  );
}
