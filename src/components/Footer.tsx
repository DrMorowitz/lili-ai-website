import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center mr-3">
                  <span className="text-primary font-bold font-geist text-sm">L</span>
                </div>
                <span className="text-2xl font-bold font-geist text-primary-foreground">Lili AI</span>
              </div>
            </div>
            <p className="font-geist text-primary-foreground/80 font-geist mb-6 max-w-md">
              La solución de IA más avanzada para especialistas médicos en Panamá. 
              Transforma tu práctica y no pierdas ni una sola oportunidad de paciente.
            </p>
            <div className="text-primary-foreground/60 font-geist text-sm">
              <p>Especializado para el sistema de salud panameño</p>
              <p>Soporte técnico en español</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-geist text-primary-foreground font-semibold font-geist mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-primary-foreground/80 hover:font-geist text-primary-foreground transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#precios" className="text-primary-foreground/80 hover:font-geist text-primary-foreground transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="/afiliados" className="text-primary-foreground/80 hover:font-geist text-primary-foreground transition-colors">
                  Programa de Afiliados
                </a>
              </li>
              <li>
                <a href="#demo" className="text-primary-foreground/80 hover:font-geist text-primary-foreground transition-colors">
                  Demo Gratuita
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-geist text-primary-foreground font-semibold font-geist mb-4">Contacto</h4>
            <ul className="space-y-3 font-geist text-primary-foreground/80">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3" />
                <span className="font-geist">contacto@liliai.io</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3" />
                <span className="font-geist">+507 6000-0000</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-3" />
                <span className="font-geist">Ciudad de Panamá</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/60 font-geist text-sm mb-4 md:mb-0">
            <p>&copy; 2025 Lili AI. Todos los derechos reservados.</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="/privacidad" className="text-primary-foreground/60 hover:text-primary-foreground/80 font-geist text-sm transition-colors">
              Política de Privacidad
            </a>
            <a href="/terminos" className="text-primary-foreground/60 hover:text-primary-foreground/80 font-geist text-sm transition-colors">
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;