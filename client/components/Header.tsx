import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Eye, Zap } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Upload Video", href: "#upload" },
    { name: "Chat Assistant", href: "#chat" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#footer" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 glass-card-dark border-b border-white/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Eye className="h-8 w-8 text-neon-blue transition-all-smooth group-hover:text-neon-purple" />
              <Zap className="absolute -top-1 -right-1 h-4 w-4 text-neon-purple animate-pulse" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              VisionChat AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/80 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-all-smooth hover:bg-white/5"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("#upload")}
              className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-6 py-2 rounded-lg font-medium transition-all-smooth hover:shadow-neon hover:scale-105"
            >
              Try Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-neon-blue p-2 rounded-md transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-card mt-2 rounded-lg">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/80 hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#upload")}
                className="bg-gradient-to-r from-neon-blue to-neon-purple text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left mt-4"
              >
                Try Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
