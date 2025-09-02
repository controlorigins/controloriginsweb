import Navigation from "@/components/navigation";
import PortfolioSection from "@/components/portfolio-section";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import BackToTop from "@/components/back-to-top";
import Breadcrumb from "@/components/breadcrumb";

export default function Portfolio() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio", active: true }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Portfolio: Enterprise Microsoft Azure & ASP.NET Solutions | Control Origins"
        description="Explore Control Origins' portfolio of successful Microsoft Azure cloud solutions, ASP.NET applications, and enterprise technology implementations for clients across industries."
        keywords="Microsoft Azure portfolio, ASP.NET projects, enterprise solutions, cloud implementations, technology case studies, business applications, Control Origins work examples"
        url="https://controlorigins.com/portfolio"
      />
      <Navigation />
      <main role="main" className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb items={breadcrumbItems} />
          
          {/* Page Header with H1 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Portfolio: Enterprise <span className="text-accent">Microsoft Azure</span> & 
              <span className="text-accent"> ASP.NET</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover our track record of delivering cutting-edge technology solutions 
              that drive business transformation and regulatory compliance for enterprise clients.
            </p>
          </div>
        </div>
        
        {/* Portfolio Content */}
        <PortfolioSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
