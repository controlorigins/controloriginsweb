import Navigation from "@/components/navigation";
import SolutionsSection from "@/components/solutions-section";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import BackToTop from "@/components/back-to-top";
import Breadcrumb from "@/components/breadcrumb";

export default function Solutions() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions", active: true }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Past Business Technology Solutions & Projects | Control Origins"
        description="Control Origins portfolio showcasing past business technology solutions including Microsoft Azure consulting, regulatory compliance (SOX, HIPAA, PCI), and strategic transformation projects. Not accepting new clients."
        keywords="business technology solutions, Microsoft Azure consulting, regulatory compliance, SOX compliance, HIPAA compliance, PCI compliance, strategic consulting, digital transformation, enterprise technology"
        url="https://controlorigins.com/solutions"
      />
      <Navigation />
      <main role="main" className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb items={breadcrumbItems} />
          
          {/* Page Header with H1 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Past Technology <span className="text-accent">Solutions</span> & 
              Project <span className="text-accent">Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Examples of past technology solutions developed for innovation, compliance, 
              and digital transformation. Portfolio showcase only - not accepting new client work.
            </p>
          </div>
        </div>
        
        {/* Solutions Content */}
        <SolutionsSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
