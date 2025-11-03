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
        {/* Portfolio Disclaimer Banner */}
        <div className="bg-accent/10 border-b border-accent/30 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-foreground">
              <strong>Portfolio Website:</strong> This site showcases past professional work by Mark Hazleton. 
              Not currently accepting new clients or business inquiries. 
              <a href="/about" className="underline ml-1 hover:text-accent">Learn more</a>
            </p>
          </div>
        </div>
        
        <HeroSection />
        
        {/* Call-to-Action Section */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Professional Technology Portfolio
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Explore the Control Origins portfolio showcasing enterprise Microsoft Azure solutions, 
              ASP.NET development projects, and regulatory compliance implementations. Not currently 
              accepting new engagements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/portfolio"
                className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
              >
                View Portfolio
              </a>
              <a
                href="https://www.linkedin.com/company/control-origins"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Connect on LinkedIn
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
