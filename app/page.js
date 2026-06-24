import AboutSection from "./components/section/AboutSection";
import CTASection from "./components/section/CTASection";
import FeaturedMenuSection from "./components/section/FeaturedMenuSection";
import Footer from "./components/common/Footer";
import HeroSection from "./components/section/HeroSection";
import Navbar from "./components/common/Navbar";
import PackagesSection from "./components/section/PackagesSection";
import GallerySection from "./components/section/GallerySection";
import TestimonialsSection from "./components/section/TestimonialsSection";
import WhyChooseSection from "./components/section/WhyChooseSection";
import FloatingCTA from "./components/common/FloatingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedMenuSection />
        <PackagesSection />
        <WhyChooseSection />
        <GallerySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
