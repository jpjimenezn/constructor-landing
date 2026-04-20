import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoCobay from "@/assets/logo-clasico-cobay.png";

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Urbanización", path: "/urbanizacion" },
  { name: "Desarrollos", path: "/desarrollos" },
  { name: "Bolsa de Trabajo", path: "/bolsa-trabajo" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-border/30 transition-all duration-500 py-3",
        // En el Hero la navbar arranca translúcida; en las demás páginas siempre sólida
        location.pathname === "/"
          ? isScrolled
            ? "bg-white/90 shadow-elegant backdrop-blur-md"
            : "bg-white/40 backdrop-blur-sm"
          : "bg-white shadow-elegant"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <img 
              src={logoCobay} 
              alt="COBAY - Edificaciones Estructurales" 
              className="h-20 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-semibold tracking-wider text-muted-foreground">
                GRUPO
              </span>
              <span className="-mt-1 text-2xl font-bold text-primary">
                COBAY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "group relative px-4 py-2 font-medium text-foreground/85 transition-all duration-300 hover:text-accent",
                  location.pathname === item.path && "text-accent"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent transition-all duration-300",
                    location.pathname === item.path ? "w-3/4" : "w-0 group-hover:w-3/4"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground transition-colors duration-300 hover:text-accent"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 animate-fade-in" />
            ) : (
              <Menu className="h-6 w-6 animate-fade-in" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-out",
            isMobileMenuOpen ? "max-h-64 mt-4" : "max-h-0"
          )}
        >
          <div className="space-y-2 rounded-lg border border-border/60 bg-white/90 p-4 backdrop-blur-md">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "block rounded-lg px-4 py-3 font-medium text-foreground/85 transition-all duration-300 hover:bg-accent/15 hover:text-accent",
                  location.pathname === item.path && "bg-accent/15 text-accent",
                  "animate-slide-in-right"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
