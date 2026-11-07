import Navbar from "./components/common/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Menu from "./components/sections/Menu";
import HowToOrder from "./components/sections/HowToOrder";
import WhyUs from "./components/sections/WhyUs";
import Gallery from "./components/sections/Gallery";
import Testimonials from "./components/sections/Testimonials";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/common/Footer";
import FloatingCTA from "./components/common/FloatingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="w-full flex-1">
        <Hero />
        <About />
        <Menu />
        <HowToOrder />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
