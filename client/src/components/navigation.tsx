import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import logoPath from "@assets/branding/logo.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-backdrop border-b border-border/30 ${
        scrolled ? "scrolled" : ""
      } ${theme === 'dark' ? 'nav-bg-dark' : 'nav-bg-light'}`}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img
              src={logoPath}
              alt="Control Origins Logo"
              className="h-8 w-auto"
              data-testid="logo-image"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: "#home", label: "Home" },
              { href: "#portfolio", label: "Portfolio" },
              { href: "#solutions", label: "Solutions" },
              { href: "#methodology", label: "Methodology" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-accent transition-colors font-semibold"
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="theme-toggle"
              className="p-2 rounded-md hover:bg-muted transition-colors"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="mobile-theme-toggle"
              className="p-2 rounded-md hover:bg-muted transition-colors"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="mobile-menu-toggle"
              className="p-2 rounded-md hover:bg-muted transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border animate-slide-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { href: "#home", label: "Home" },
              { href: "#portfolio", label: "Portfolio" },
              { href: "#solutions", label: "Solutions" },
              { href: "#methodology", label: "Methodology" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-accent hover:bg-muted rounded-md transition-colors"
                data-testid={`mobile-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
