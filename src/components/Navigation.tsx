import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('es');

  return (
    <nav className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-2">
                <span className="text-primary-foreground font-bold font-geist text-sm">L</span>
              </div>
              <span className="text-xl font-bold font-geist text-primary">Lili AI</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#inicio" 
              className="text-text-secondary hover:font-geist text-primary transition-colors duration-300"
            >
              Inicio
            </a>
            <a 
              href="#precios" 
              className="text-text-secondary hover:font-geist text-primary transition-colors duration-300"
            >
              Precios
            </a>
            <a 
              href="/afiliados" 
              className="text-text-secondary hover:font-geist text-primary transition-colors duration-300"
            >
              Programa de Afiliados
            </a>
          </div>
          
          {/* Theme Toggle, Language Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <div className="flex bg-surface rounded-lg p-1">
              <button 
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  language === 'es' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                ES
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  language === 'en' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                EN
              </button>
            </div>
            
            <Button className="bg-primary font-geist text-primary-foreground hover:opacity-90 transition-opacity">
              Agenda Demo
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-text-secondary hover:font-geist text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#inicio" 
                className="block px-3 py-2 text-text-secondary hover:font-geist text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#precios" 
                className="block px-3 py-2 text-text-secondary hover:font-geist text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Precios
              </a>
              <a 
                href="/afiliados" 
                className="block px-3 py-2 text-text-secondary hover:font-geist text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Programa de Afiliados
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-primary font-geist text-primary-foreground">
                  Agenda Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;