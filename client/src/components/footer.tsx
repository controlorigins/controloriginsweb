import logoPath from "@assets/branding/logo.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <img
              src={logoPath}
              alt="Control Origins - Microsoft Azure & ASP.NET Consulting Services Logo"
              className="h-12 w-auto mx-auto md:mx-0 mb-4 filter invert"
              data-testid="footer-logo"
            />
            <p className="text-background/80 mb-4">
              Leading Microsoft Azure consulting and ASP.NET development firm
              specializing in regulatory compliance and business transformation.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-background">Our Services</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#solutions" className="hover:text-accent transition-colors">Microsoft Azure Consulting</a></li>
              <li><a href="#solutions" className="hover:text-accent transition-colors">ASP.NET Development</a></li>
              <li><a href="#solutions" className="hover:text-accent transition-colors">SOX Compliance Solutions</a></li>
              <li><a href="#solutions" className="hover:text-accent transition-colors">HIPAA & PCI Compliance</a></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#portfolio" className="hover:text-accent transition-colors">Our Portfolio</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="https://www.linkedin.com/company/control-origins" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn Company Page</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm mb-2" data-testid="footer-copyright">
            © 2024 Control Origins. All rights reserved.
          </p>
          <p className="text-background/50 text-xs">
            Microsoft Azure Partner | ASP.NET Specialists | SOX, HIPAA, PCI Compliance Experts
          </p>
        </div>
      </div>
    </footer>
  );
}
