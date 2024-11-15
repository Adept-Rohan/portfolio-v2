import { HeaderIcon } from "@/assest/HeaderIcon";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Headline } from "@/components/Headline";
import { HeroSection } from "@/components/HeroSection";
import { Technology } from "@/components/Technology";


export default function Home() {
  return (
    <div className="w-screen flex justify-center">
      <div className="w-[90%] max-w-[1200px]">
        <Header />
        <HeroSection />
        <Headline />
        <Technology />
        <Footer />
      </div>
    </div>
  );
}
