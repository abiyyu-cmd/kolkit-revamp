import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import WhyUsSection from "./components/WhyUsSection";
import FeaturesSection from "./components/FeaturesSection";
import BrandSection from "./components/BrandSection";
import WhoSection from "./components/WhoSection";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <FeaturesSection />
      <BrandSection />
      <WhoSection />
      <Pricing />
      <Faq />
      <Footer />
    </main>
  );
}
