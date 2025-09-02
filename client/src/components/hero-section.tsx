import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import LinkedInIntegration from "@/components/linkedin-integration";
import heroBgImage from "@assets/hero/hero-background.jpg";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-white relative hero-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${heroBgImage})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Expert <span className="text-accent">Microsoft Azure</span> &{" "}
            <span className="text-accent">ASP.NET</span> Consulting Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
            Control Origins delivers cutting-edge business technology solutions,
            regulatory compliance expertise, and strategic transformation consulting
            for enterprise organizations.
          </p>
          <div className="text-lg md:text-xl text-gray-300 mb-8 flex flex-wrap justify-center gap-x-8 gap-y-2">
            <span className="inline-flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Microsoft Azure Cloud Solutions
            </span>
            <span className="inline-flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              SOX & HIPAA Compliance
            </span>
            <span className="inline-flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Enterprise ASP.NET Development
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/portfolio">
              <Button
                className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
                data-testid="cta-view-work"
              >
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/solutions">
              <Button
                className="inline-flex items-center px-8 py-4 border-2 border-white bg-transparent text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
                data-testid="cta-our-solutions"
              >
                Our Solutions
              </Button>
            </Link>
          </div>
          
          <div className="flex justify-center">
            <LinkedInIntegration variant="content" showFollowerCount={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
