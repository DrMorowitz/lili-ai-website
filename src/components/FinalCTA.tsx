import { Check, Clock, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const trustSignals = [
    {
      icon: Check,
      text: "Sin compromiso"
    },
    {
      icon: Clock,
      text: "30 minutos"
    },
    {
      icon: Shield,
      text: "Consulta gratuita"
    },
    {
      icon: Users,
      text: "Especializado para médicos"
    }
  ];

  return (
    <section className="bg-primary py-20 lg:py-32">
      <div className="container mx-auto px-4 font-geist text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold font-geist text-primary-foreground mb-6">
            ¿Listo para transformar tu práctica médica?
          </h2>
          <p className="text-lg lg:text-xl font-geist text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
            Agenda tu demo gratuita y descubre cómo Lili AI puede capturar cada oportunidad de paciente mientras tú te enfocas en lo que mejor sabes hacer
          </p>
          
          <Button 
            size="lg"
            className="bg-card text-primary px-10 py-5 font-geist text-lg font-semibold hover:bg-card/90 transition-colors shadow-lg mb-12"
          >
            Agenda tu Demo Gratuita
          </Button>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-8 font-geist text-primary-foreground/80">
            {trustSignals.map((signal, index) => {
              const IconComponent = signal.icon;
              return (
                <div key={index} className="flex items-center">
                  <IconComponent className="w-5 h-5 mr-3" />
                  <span className="font-geist">{signal.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;