import { Switch, Route, Router } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/hooks/use-theme";
import Home from "@/pages/home";
import Portfolio from "@/pages/portfolio";
import Solutions from "@/pages/solutions";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Terms from "@/pages/terms";
import NotFound from "@/pages/not-found";

function AppRouter() {
  return (
    <Router base="/">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/terms" component={Terms} />
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
