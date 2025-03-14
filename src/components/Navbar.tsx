
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-semibold flex items-center"
        >
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded mr-1">AI</span>
          <span>CareerAssist</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks isActive={isActive} />
          
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/signup">Sign up</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 p-4 shadow-md animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <NavLinks isActive={isActive} vertical />
            
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ isActive, vertical = false }: { isActive: (path: string) => boolean, vertical?: boolean }) => {
  return (
    <div className={cn("flex", vertical ? "flex-col space-y-4" : "space-x-6 items-center")}>
      <Link
        to="/"
        className={cn(
          "text-sm transition-colors hover:text-primary",
          isActive("/") ? "font-medium text-primary" : "text-foreground/80"
        )}
      >
        Home
      </Link>
      <Link
        to="/features"
        className={cn(
          "text-sm transition-colors hover:text-primary",
          isActive("/features") ? "font-medium text-primary" : "text-foreground/80"
        )}
      >
        Features
      </Link>
      <Link
        to="/chat"
        className={cn(
          "text-sm transition-colors hover:text-primary",
          isActive("/chat") ? "font-medium text-primary" : "text-foreground/80"
        )}
      >
        AI Chat
      </Link>
      <Link
        to="/dashboard"
        className={cn(
          "text-sm transition-colors hover:text-primary",
          isActive("/dashboard") ? "font-medium text-primary" : "text-foreground/80"
        )}
      >
        Dashboard
      </Link>
    </div>
  );
};

export default Navbar;
