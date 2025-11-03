import { useEffect, useRef } from "react";
import { Search, BarChart3, FileText, Palette, Settings, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import greekTheatreImage from "@assets/content/greek-theatre.jpg";

const methodologySteps = [
  {
    id: 1,
    title: "Discover",
    description:
      "Developing a detailed understanding of business goals, objectives, and organizational alignment to drive strategic transformation.",
    icon: Search,
  },
  {
    id: 2,
    title: "Assess",
    description:
      "Evaluating service delivery quality, process maturity, and cost effectiveness to establish a comprehensive baseline.",
    icon: BarChart3,
  },
  {
    id: 3,
    title: "Define",
    description:
      "Detailed definition of all transformation components and optimization alternatives prioritized for implementation.",
    icon: FileText,
  },
  {
    id: 4,
    title: "Design",
    description:
      "Developing detailed specifications for building transformation and optimization components from the Define process.",
    icon: Palette,
  },
  {
    id: 5,
    title: "Implement",
    description:
      "Constructing and building the transformation components that were specified in the Design phase.",
    icon: Settings,
  },
  {
    id: 6,
    title: "Optimize",
    description:
      "Continuous improvement of transformation components delivered in the Implementation phase for sustained value.",
    icon: Zap,
  },
];

export default function MethodologySection() {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="methodology" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Past Project Methodology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The proven six-phase approach used in past projects, based on industry best practices 
            for implementing transformation and optimization.
          </p>
        </div>

        {/* Methodology Visual */}
        <div className="relative mb-16 animate-fade-in">
          <img
            src={greekTheatreImage}
            alt="Ancient Greek Theatre representing our structured methodology"
            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            data-testid="methodology-hero-image"
          />
          <div className="absolute inset-0 bg-primary/80 rounded-2xl flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Structured Excellence
              </h3>
              <p className="text-xl max-w-2xl">
                Just as ancient Greek theatres were built with precision and
                purpose, our methodology provides a structured foundation for
                transformation success.
              </p>
            </div>
          </div>
        </div>

        {/* Methodology Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methodologySteps.map((step, index) => (
            <Card
              key={step.id}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className="methodology-step bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              data-testid={`methodology-step-${step.id}`}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
