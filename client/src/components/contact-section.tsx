import { Linkedin, User, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactMethods = [
  {
    icon: Linkedin,
    title: "Connect on LinkedIn",
    description: "Control Origins Company Page",
    href: "https://www.linkedin.com/company/control-origins",
  },
  {
    icon: User,
    title: "Contact Mark Hazleton",
    description: "Founder & Technology Director",
    href: "https://www.linkedin.com/in/markhazleton",
  },
  {
    icon: MapPin,
    title: "Enterprise Solutions",
    description: "Microsoft Azure & .NET Platform",
    href: "#solutions",
  },
];

export default function ContactSection() {
  const handleScrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Business with Microsoft Azure?
          </h2>
          <h3 className="text-2xl font-semibold mb-6 text-primary-foreground/90">
            Expert ASP.NET Development & Regulatory Compliance Solutions
          </h3>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Let's discuss how Control Origins can help drive your organization's
            digital transformation, Microsoft Azure migration, and regulatory compliance initiatives
            including SOX, HIPAA, and PCI compliance frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-300 transform hover:-translate-y-1"
              data-testid={`contact-method-${index}`}
            >
              <CardContent className="p-8">
                <method.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-primary-foreground">
                  {method.title}
                </h3>
                <p className="text-primary-foreground/80">{method.description}</p>
                {method.href && (
                  <div className="mt-4">
                    {method.href.startsWith("mailto:") ? (
                      <a
                        href={method.href}
                        className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
                        data-testid={`contact-link-${index}`}
                      >
                        Contact Us
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    ) : method.href.startsWith("#") ? (
                      <button
                        onClick={() => handleScrollTo(method.href)}
                        className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
                        data-testid={`contact-scroll-${index}`}
                      >
                        Learn More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </button>
                    ) : (
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
                        data-testid={`contact-external-${index}`}
                      >
                        Visit Site
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button
            asChild
            className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover-scale"
            data-testid="cta-get-started"
          >
            <a href="https://www.linkedin.com/company/control-origins" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
