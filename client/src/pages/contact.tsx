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
        title="Contact Control Origins for Expert Microsoft Azure & Technology Consulting"
        description="Get in touch with Control Origins for Microsoft Azure consulting, ASP.NET development, regulatory compliance, and strategic technology transformation services. Free consultation available."
        keywords="contact Control Origins, Microsoft Azure consulting quote, technology consulting services, ASP.NET development inquiry, regulatory compliance consultation, business transformation support"
        url="https://controlorigins.com/contact"
      />
      <Navigation />
      <main role="main" className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb items={breadcrumbItems} />
          
          {/* Page Header with H1 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Contact <span className="text-accent">Control Origins</span> for 
              Expert <span className="text-accent">Consulting Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge Microsoft technology solutions? 
              Let's discuss your project and explore how we can help achieve your goals.
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
