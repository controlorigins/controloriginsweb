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
        description="Explore Control Origins' portfolio of past Microsoft Azure cloud solutions, ASP.NET applications, and enterprise technology implementations. Portfolio showcase - not accepting new clients."
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
              Portfolio: Past <span className="text-accent">Microsoft Azure</span> & 
              <span className="text-accent"> ASP.NET</span> Projects
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A showcase of past technology solutions demonstrating expertise in business 
              transformation and regulatory compliance. This is a portfolio site - not currently 
              accepting new client engagements.
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
