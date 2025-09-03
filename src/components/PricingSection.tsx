import { User, Users, Building, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section id="precios" className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="font-geist text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold font-geist text-primary mb-6">
            Planes Diseñados Para Tu Práctica
          </h2>
          <p className="text-lg font-geist text-text-secondary max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a las necesidades de tu consulta médica
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Plan Básico */}
          <div className="bg-tertiary rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="font-geist text-center mb-8">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 font-geist text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold font-geist text-primary mb-2">Plan Básico</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold font-geist text-primary">$500</span>
                <span className="font-geist text-text-secondary">/mes</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 font-geist text-secondary mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-geist text-sm">Base de Conocimientos Personalizada</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 font-geist text-secondary mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-geist text-sm">Agente Omnicanal con respuesta 24/7 a preguntas frecuentes</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 font-geist text-secondary mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-geist text-sm">Agendamiento de Citas para #1 profesional</span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 font-geist text-muted-foreground mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground font-geist text-sm line-through">Sin Captura de Base de Datos</span>
              </li>
            </ul>
            
            <Button className="w-full bg-primary font-geist text-primary-foreground py-4 font-semibold hover:opacity-90 transition-opacity">
              Seleccionar Plan
            </Button>
          </div>
          
          {/* Plan Premium - Most Popular */}
          <div className="bg-secondary rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow relative transform lg:scale-105">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-geist text-sm font-semibold shadow-lg">
                Más Popular
              </span>
            </div>
            
            <div className="font-geist text-center mb-8">
              <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 font-geist text-secondary" />
              </div>
              <h3 className="text-2xl font-bold font-geist text-secondary-foreground mb-2">Plan Premium</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold font-geist text-secondary-foreground">$750</span>
                <span className="font-geist text-secondary-foreground/80">/mes</span>
              </div>
              <p className="text-secondary-foreground/90 font-geist text-sm">Precio con #1 Calendario</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 font-geist text-secondary-foreground mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-secondary-foreground font-geist text-sm">Todo lo anterior MÁS</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 font-geist text-secondary-foreground mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-secondary-foreground font-geist text-sm">+$250 por calendario EXTRA: desarrollo de automatización personalizada para manejo de múltiples agendas</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 font-geist text-secondary-foreground mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-secondary-foreground font-geist text-sm">Captura de Leads en Database</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 font-geist text-secondary-foreground mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-secondary-foreground font-geist text-sm">$250 Extra por profesional añadido</span>
              </li>
            </ul>
            
            <Button className="w-full bg-card font-geist text-secondary py-4 font-semibold hover:bg-card/90 transition-colors">
              Seleccionar Plan
            </Button>
          </div>
          
          {/* Plan Enterprise */}
          <div className="bg-accent-light rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="font-geist text-center mb-8">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 font-geist text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold font-geist text-primary mb-2">Plan Enterprise</h3>
              <div className="mb-6">
                <span className="text-2xl font-bold font-geist text-primary">Cotizar Precio</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 font-geist text-secondary mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-geist text-sm">Todo lo anterior +</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 font-geist text-secondary mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-geist text-sm">Integración con Software Personalizado: Centros que desean integrar Lili AI a un software interno</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 font-geist text-secondary mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-geist text-sm">Desarrollo de MCP server local para comunicar ambas plataformas</span>
              </li>
            </ul>
            
            <Button className="w-full bg-primary font-geist text-primary-foreground py-4 font-semibold hover:opacity-90 transition-opacity">
              Cotizar Ahora
            </Button>
          </div>
        </div>
        
        {/* Pricing Notes */}
        <div className="mt-16 font-geist text-center">
          <div className="bg-tertiary rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="mb-4">
              <p className="font-geist text-text-secondary">
                <span className="font-semibold">Al finalizar el desarrollo del agente, comienza </span>
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-semibold font-geist text-sm">
                  un mes de prueba gratuito
                </span>
                <span className="font-semibold"> de soporte técnico.</span>
              </p>
            </div>
            <p className="font-geist text-text-secondary">
              <span className="font-semibold">
                Posterior a esto tiene un costo de $150 para soporte técnico, actualizaciones y mejora de flujos.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;