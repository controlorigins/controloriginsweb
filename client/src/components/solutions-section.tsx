import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import solutionsData from "@/data/solutions.json";
import compassImage from "@assets/solutions/compass.jpg";
import capitolImage from "@assets/solutions/capitol.jpg";
import teamImage from "@assets/solutions/team.jpg";
import businessImage from "@assets/solutions/business.jpg";

// Image mapping since JSON can't directly import images
const getImageForSolution = (id: number) => {
  const imageMap: { [key: number]: string } = {
    1: compassImage,
    2: capitolImage,
    3: teamImage,
    4: businessImage,
  };
  return imageMap[id] || compassImage;
};

export default function SolutionsSection() {
  const { sectionInfo, solutions } = solutionsData;
  
  // Ensure solutions is an array
  const solutionsList = Array.isArray(solutions) ? solutions : [];

  return (
    <section id="solutions" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            {sectionInfo.subtitle}
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-4xl mx-auto">
            {sectionInfo.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {solutionsList.map((solution) => (
            <Card
              key={solution.id}
              className="bg-card rounded-2xl shadow-xl overflow-hidden card-hover animate-fade-in group"
              data-testid={`solution-${solution.id}`}
            >
              <img
                src={getImageForSolution(solution.id)}
                alt={solution.imageAlt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                data-testid={`solution-image-${solution.id}`}
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {solution.detailedDescription}
                </p>
                
                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-card-foreground mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {solution.features.slice(0, 4).map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center"
                        data-testid={`solution-feature-${solution.id}-${index}`}
                      >
                        <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industries & Technologies */}
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-card-foreground">Industries: </span>
                    <span className="text-sm text-muted-foreground">
                      {solution.industries.join(", ")}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-card-foreground">Technologies: </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {solution.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md"
                          data-testid={`solution-tech-${solution.id}-${index}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
