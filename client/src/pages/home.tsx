import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
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
        
        {/* Call-to-Action Section */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover how Control Origins can help accelerate your digital transformation 
              with expert Microsoft Azure and ASP.NET consulting services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/portfolio"
                className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
              >
                View Our Portfolio
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
