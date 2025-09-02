import { Card, CardContent } from "@/components/ui/card";
import greekBeachImage from "@assets/content/greek-beach.jpg";

const approachCards = [
  {
    title: "Unified Repository",
    description: "Logical relationships between policies, procedures, and industry standards.",
  },
  {
    title: "Best Practices",
    description: "Leveraging proven frameworks for transformation and optimization.",
  },
  {
    title: "Unified Analytics",
    description: "Cross-referencing processes against regulatory requirements efficiently.",
  },
  {
    title: "Unified Modeling",
    description: "Comprehensive framework addressing varied business requirements.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-2xl font-semibold text-foreground/80 mb-6">
              Proven Business Technology Consulting Approach
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Control Origins was founded on a unique approach to building
              logical relationships between an organization's policies,
              procedures, standards, roles, and skills to industry best practices
              using cutting-edge Microsoft technology stack.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We leverage enterprise frameworks like <strong>COSO, COBIT, ISO, and ITIL</strong>, as well as
              critical regulatory requirements including <strong>SOX, HIPAA, Basel II, SSAE 16,
              PCI, and CISP</strong> compliance, all powered by Microsoft Azure cloud infrastructure
              and ASP.NET application development expertise.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {approachCards.map((card, index) => (
                <Card
                  key={index}
                  className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  data-testid={`approach-card-${index}`}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <img
              src={greekBeachImage}
              alt="Serene Greek island beach representing clarity and vision"
              className="rounded-2xl shadow-2xl w-full"
              data-testid="about-hero-image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent rounded-2xl flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Clear Vision</h3>
                <p className="text-gray-200">
                  Like the crystal-clear waters of the Greek islands, our
                  approach provides transparency and clarity in complex business
                  transformations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
