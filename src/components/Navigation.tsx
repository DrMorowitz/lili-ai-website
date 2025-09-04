

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('es');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle smooth scrolling
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId.replace('#', ''));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/98 backdrop-blur-md shadow-lg border-b border-border/50' 
        : 'bg-background/95 backdrop-blur-sm border-b border-border/30'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#inicio" 
              onClick={(e) => handleSmoothScroll(e, '#inicio')}
              className="flex items-center hover:opacity-80 transition-opacity duration-200"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-2 transition-transform duration-200 hover:scale-105">
                <span className="text-primary-foreground font-bold font-geist text-sm">L</span>
              </div>
              <span className="text-xl font-bold font-geist text-primary">Lili AI</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#inicio" 
              onClick={(e) => handleSmoothScroll(e, '#inicio')}
              className="relative text-text-secondary hover:text-primary transition-colors duration-300 font-geist py-2 group"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#precios" 
              onClick={(e) => handleSmoothScroll(e, '#precios')}
              className="relative text-text-secondary hover:text-primary transition-colors duration-300 font-geist py-2 group"
            >
              Precios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="/afiliados" 
              className="relative text-text-secondary hover:text-primary transition-colors duration-300 font-geist py-2 group"
            >
              Programa de Afiliados
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          {/* Theme Toggle, Language Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <div className="flex bg-surface rounded-lg p-1 border border-border/20">
              <button 
                onClick={() => setLanguage('es')}
                className={`px-3 py-1.5 text-sm font-geist rounded transition-all duration-200 ${
                  language === 'es' 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-text-secondary hover:text-primary hover:bg-background/50'
                }`}
              >
                ES
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-sm font-geist rounded transition-all duration-200 ${
                  language === 'en' 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-text-secondary hover:text-primary hover:bg-background/50'
                }`}
              >
                EN
              </button>
            </div>
            
            <Button className="bg-primary font-geist text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-sm">
              Agenda Demo
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button 
              className="p-2 text-text-secondary hover:text-primary transition-colors duration-200 rounded-lg hover:bg-surface/50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
                  <Menu className="w-6 h-6" />
                </span>
                <span className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`}>
                  <X className="w-6 h-6" />
                </span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'max-h-96 opacity-100 border-t border-border' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-background/98 backdrop-blur-sm">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <a 
                href="#inicio" 
                onClick={(e) => handleSmoothScroll(e, '#inicio')}
                className="block px-4 py-3 text-text-secondary hover:text-primary hover:bg-surface/50 transition-all duration-200 rounded-lg font-geist"
              >
                Inicio
              </a>
              <a 
                href="#precios" 
                onClick={(e) => handleSmoothScroll(e, '#precios')}
                className="block px-4 py-3 text-text-secondary hover:text-primary hover:bg-surface/50 transition-all duration-200 rounded-lg font-geist"
              >
                Precios
              </a>
              <a 
                href="/afiliados" 
                className="block px-4 py-3 text-text-secondary hover:text-primary hover:bg-surface/50 transition-all duration-200 rounded-lg font-geist"
                onClick={() => setMobileMenuOpen(false)}
              >
                Programa de Afiliados
              </a>
              
              {/* Language Toggle Mobile */}
              <div className="px-4 py-2">
                <div className="flex bg-surface rounded-lg p-1 border border-border/20 mb-4">
                  <button 
                    onClick={() => setLanguage('es')}
                    className={`flex-1 py-2 text-sm font-geist rounded transition-all duration-200 ${
                      language === 'es' 
                        ? 'bg-primary text-primary-foreground shadow-sm' 
                        : 'text-text-secondary hover:text-primary hover:bg-background/50'
                    }`}
                  >
                    ES
                  </button>
                  <button 
                    onClick={() => setLanguage('en')}
                    className={`flex-1 py-2 text-sm font-geist rounded transition-all duration-200 ${
                      language === 'en' 
                        ? 'bg-primary text-primary-foreground shadow-sm' 
                        : 'text-text-secondary hover:text-primary hover:bg-background/50'
                    }`}
                  >
                    EN
                  </button>
                </div>
                <Button className="w-full bg-primary font-geist text-primary-foreground hover:opacity-90 transition-opacity shadow-sm">
                  Agenda Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;