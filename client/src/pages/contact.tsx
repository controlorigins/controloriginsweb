import Navigation from "@/components/navigation";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import BackToTop from "@/components/back-to-top";
import Breadcrumb from "@/components/breadcrumb";

export default function Contact() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact", active: true }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Connect with Control Origins on LinkedIn - Portfolio Brand"
        description="Control Origins is a remote-based portfolio brand maintained by Mark Hazleton. Not currently accepting new business. Connect professionally through LinkedIn to learn about past technology projects."
        keywords="contact Control Origins, LinkedIn connection, portfolio brand, Mark Hazleton, Microsoft Azure portfolio, technology consulting portfolio"
        url="https://controlorigins.com/contact"
      />
      <Navigation />
      <main role="main" className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb items={breadcrumbItems} />
          
          {/* Page Header with H1 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Connect with <span className="text-accent">Control Origins</span> on 
              <span className="text-accent">LinkedIn</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Control Origins is a remote-based portfolio brand maintained by Mark Hazleton. 
              While we're not currently accepting new business engagements, you can connect 
              professionally through our LinkedIn company page to learn more about our experience 
              in Microsoft technology solutions and regulatory compliance.
            </p>
          </div>
        </div>
        
        {/* Contact Content */}
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
