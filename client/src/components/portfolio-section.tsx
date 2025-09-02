import { useState } from "react";
import { ExternalLink, BarChart3, Briefcase, User, Database, Code, Globe, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Breadcrumb from "@/components/breadcrumb";
import projectsData from "@/data/projects.json";

// Icon mapping for different project types
const getProjectIcon = (id: number, category: string) => {
  const iconMap: { [key: number]: any } = {
    1: Code, // MVC Demo
    2: BarChart3, // Data Analysis
    3: Briefcase, // Project Mechanics
    4: Globe, // Project Portal
    5: User, // Mark Hazleton
    6: Code, // Async Demo  
    7: Database, // TexEcon
    8: FileText, // Documents
  };
  
  // Ensure we always return a valid icon component
  const icon = iconMap[id];
  if (icon) return icon;
  
  // Fallback based on category
  if (category === "app") return Code;
  if (category === "web") return Globe;
  
  // Ultimate fallback
  return Globe;
};

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const { projects, categories } = projectsData;

  const filteredItems = projects.filter((item) =>
    activeFilter === "all" ? true : item.category === activeFilter
  );

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Portfolio", active: true }]} />
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our innovative technology solutions and successful project
            implementations.
          </p>
        </div>

        {/* Portfolio Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-muted rounded-lg p-1">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={activeFilter === category.key ? "default" : "ghost"}
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setActiveFilter(category.key);
                    setIsLoading(false);
                  }, 300);
                }}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeFilter === category.key
                    ? "bg-accent text-accent-foreground"
                    : ""
                }`}
                data-testid={`filter-${category.key}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading Skeletons
            Array.from({ length: 6 }).map((_, index) => (
              <Card key={`skeleton-${index}`} className="bg-card rounded-xl shadow-lg overflow-hidden">
                <Skeleton className="aspect-video w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-4" />
                  <div className="flex gap-1 mb-4">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-14" />
                  </div>
                  <Skeleton className="h-5 w-24" />
                </CardContent>
              </Card>
            ))
          ) : (
            filteredItems.map((item) => {
              const IconComponent = getProjectIcon(item.id, item.category);
              return (
                <Card
                  key={item.id}
                  className="bg-card rounded-xl shadow-lg overflow-hidden card-hover animate-fade-in"
                  data-testid={`portfolio-item-${item.id}`}
                >
                  <div className="aspect-video bg-muted flex items-center justify-center group overflow-hidden">
                    {item.images && item.images.length > 0 ? (
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to icon if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const iconContainer = target.nextElementSibling as HTMLElement;
                          if (iconContainer) {
                            iconContainer.style.display = 'flex';
                          }
                        }}
                      />
                    ) : null}
                    <div 
                      className={`w-full h-full flex items-center justify-center ${
                        item.images && item.images.length > 0 ? 'hidden' : 'flex'
                      }`}
                    >
                      <IconComponent className="w-16 h-16 text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:text-accent" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    {item.technology && item.technology.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {item.technology.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md hover:bg-accent/20 transition-colors"
                            data-testid={`tech-tag-${item.id}-${index}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-all hover:translate-x-1"
                      data-testid={`portfolio-link-${item.id}`}
                    >
                      View Project
                      <ExternalLink className="ml-1 w-4 h-4 transition-transform group-hover:scale-110" />
                    </a>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
