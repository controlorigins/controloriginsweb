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
              alt="Control Origins - Portfolio of Microsoft Azure & ASP.NET Solutions"
              className="h-12 w-auto mx-auto md:mx-0 mb-4 filter invert"
              data-testid="footer-logo"
            />
            <p className="text-background/80 mb-4">
              Remote-based Microsoft Azure consulting and ASP.NET development services
              specializing in regulatory compliance. All inquiries through LinkedIn.
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
        
        <div className="border-t border-background/20 pt-8">
          {/* Trust and Security Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-background/70 text-xs">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>HTTPS Secure</span>
            </div>
            <div className="flex items-center gap-2 text-background/70 text-xs">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Azure Hosted</span>
            </div>
            <div className="flex items-center gap-2 text-background/70 text-xs">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>LinkedIn Verified</span>
            </div>
            <div className="flex items-center gap-2 text-background/70 text-xs">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Privacy Protected</span>
            </div>
          </div>

          {/* Copyright and Links */}
          <div className="text-center">
            <p className="text-background/60 text-sm mb-2" data-testid="footer-copyright">
              © 2025 Control Origins. All rights reserved.
            </p>
            <p className="text-background/50 text-xs mb-3">
              Remote-Based Portfolio | ASP.NET Specialists | SOX, HIPAA, PCI Compliance Experts
            </p>
            <p className="text-background/50 text-xs">
              <Link href="/terms" className="hover:text-accent transition-colors">Terms and Conditions</Link>
              {" | "}
              <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              {" | "}
              <a 
                href="https://www.linkedin.com/company/control-origins" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
