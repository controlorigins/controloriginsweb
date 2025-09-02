import { ChevronRight, Home } from "lucide-react";
import { Link } from "wouter";

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8" data-testid="breadcrumb">
      <Link href="/">
        <button
          className="flex items-center hover:text-accent transition-colors"
          data-testid="breadcrumb-home"
          aria-label="Home"
          title="Go to Home"
        >
          <Home className="w-4 h-4" />
        </button>
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4" />
          {item.href && !item.active ? (
            <Link href={item.href}>
              <button
                className="hover:text-accent transition-colors"
                data-testid={`breadcrumb-item-${index}`}
              >
                {item.label}
              </button>
            </Link>
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