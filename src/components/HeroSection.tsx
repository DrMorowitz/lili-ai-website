import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section id="inicio" className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto font-geist text-center">
          {/* Main Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold font-geist text-primary mb-6 leading-tight">
            Deja de perder oportunidades por no contestar chats
          </h1>
          
          {/* Sub-headline */}
          <p className="text-lg lg:text-xl font-geist text-text-secondary mb-8 max-w-3xl mx-auto">
            Lili AI captura cada consulta mientras te enfocas en brindar atención médica excepcional
          </p>
          
          {/* Primary CTA */}
          <Button size="lg" className="bg-primary text-primary-foreground px-8 py-4 font-geist text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg mb-16">
            Agenda tu Demo Gratuita
          </Button>
          
          {/* Visual Demo Placeholder */}
          
        </div>
      </div>
    </section>;
};
export default HeroSection;