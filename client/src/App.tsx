import { Switch, Route, Router } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/hooks/use-theme";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// Determine base path for GitHub Pages project sites (e.g., /controlorigins-site/)
function getBasePath(): string {
  const { hostname, pathname } = window.location;
  // On GitHub Pages project sites, host ends with github.io and pathname starts with /<repo>/
  if (hostname.endsWith("github.io")) {
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length > 0) {
      return `/${parts[0]}`; // e.g., "/controlorigins-site"
    }
  }
  return "/";
}

function AppRouter() {
  const base = getBasePath();
  return (
    <Router base={base}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="control-origins-theme">
      <TooltipProvider>
  <Toaster />
  <AppRouter />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
