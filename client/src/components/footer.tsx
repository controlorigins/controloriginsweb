import { Link } from "wouter";
import LinkedInIntegration from "@/components/linkedin-integration";
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
              <li><Link href="/solutions" className="hover:text-accent transition-colors">Microsoft Azure Consulting</Link></li>
              <li><Link href="/solutions" className="hover:text-accent transition-colors">ASP.NET Development</Link></li>
              <li><Link href="/solutions" className="hover:text-accent transition-colors">SOX Compliance Solutions</Link></li>
              <li><Link href="/solutions" className="hover:text-accent transition-colors">HIPAA & PCI Compliance</Link></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-background">Connect With Us</h4>
            <div className="mb-4">
              <LinkedInIntegration variant="footer" />
            </div>
            <ul className="space-y-2 text-background/80">
              <li><Link href="/portfolio" className="hover:text-accent transition-colors">Our Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm mb-2" data-testid="footer-copyright">
            © 2025 Control Origins. All rights reserved.
          </p>
          <p className="text-background/50 text-xs mb-2">
            Microsoft Azure Partner | ASP.NET Specialists | SOX, HIPAA, PCI Compliance Experts
          </p>
          <p className="text-background/50 text-xs">
            <Link href="/terms" className="hover:text-accent transition-colors">Terms and Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
