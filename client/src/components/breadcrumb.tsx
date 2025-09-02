import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const handleScrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8" data-testid="breadcrumb">
      <button
        onClick={() => handleScrollTo("#home")}
        className="flex items-center hover:text-accent transition-colors"
        data-testid="breadcrumb-home"
      >
        <Home className="w-4 h-4" />
      </button>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4" />
          {item.href && !item.active ? (
            <button
              onClick={() => item.href && handleScrollTo(item.href)}
              className="hover:text-accent transition-colors"
              data-testid={`breadcrumb-item-${index}`}
            >
              {item.label}
            </button>
          ) : (
            <span
              className={item.active ? "text-foreground font-medium" : ""}
              data-testid={`breadcrumb-item-${index}`}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}