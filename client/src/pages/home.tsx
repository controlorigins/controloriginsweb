import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import PortfolioSection from "@/components/portfolio-section";
import SolutionsSection from "@/components/solutions-section";
import MethodologySection from "@/components/methodology-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import BackToTop from "@/components/back-to-top";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead />
      <Navigation />
      <main role="main">
        <HeroSection />
        <PortfolioSection />
        <SolutionsSection />
        <MethodologySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
