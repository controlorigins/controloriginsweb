import Navigation from "@/components/navigation";
import AboutSection from "@/components/about-section";
import TeamSection from "@/components/team-section";
import MethodologySection from "@/components/methodology-section";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import BackToTop from "@/components/back-to-top";
import Breadcrumb from "@/components/breadcrumb";

export default function About() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about", current: true }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="About Control Origins: Microsoft Technology Experts & Strategic Consultants"
        description="Learn about Control Origins' expertise in Microsoft Azure, ASP.NET development, regulatory compliance, and strategic technology consulting. Meet our expert team with LinkedIn profiles showcasing decades of enterprise consulting experience."
        keywords="about Control Origins, Microsoft technology experts, Azure consultants, ASP.NET developers, regulatory compliance experts, technology consulting team, business transformation specialists, Mark Hazleton LinkedIn, enterprise consultants"
        url="https://controlorigins.com/about"
      />
      <Navigation />
      <main role="main" className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb items={breadcrumbItems} />
          
          {/* Page Header with H1 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About <span className="text-accent">Control Origins</span>: 
              Microsoft Technology <span className="text-accent">Experts</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Dedicated technology professionals with deep expertise in Microsoft Azure, 
              regulatory compliance, and strategic business transformation.
            </p>
          </div>
        </div>
        
        {/* About Content */}
        <AboutSection />
        <TeamSection />
        <MethodologySection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
