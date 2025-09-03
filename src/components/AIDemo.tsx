import { Bot } from "lucide-react";

const AIDemo = () => {
  return (
    <section className="bg-surface py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="font-geist text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-geist text-primary mb-4">
            Habla con Lili AI ahora
          </h2>
          <p className="text-lg font-geist text-text-secondary max-w-2xl mx-auto">
            Prueba cómo Lili AI se puede integrar a tu práctica profesional
          </p>
        </div>
        
        {/* AI Agent Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="bg-muted rounded-xl min-h-96 lg:min-h-[500px] flex flex-col items-center justify-center">
              {/* Placeholder for AI Agent Embed */}
              <div className="font-geist text-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bot className="w-10 h-10 font-geist text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold font-geist text-primary mb-2">
                  Integración de Agente AI
                </h3>
                <p className="font-geist text-text-secondary mb-6">
                  Este espacio será integrado con el agente conversacional
                </p>
                
                {/* Sample conversation starters */}
                <div className="flex flex-wrap gap-3 justify-center">
                  <span className="bg-tertiary px-4 py-2 rounded-full text-sm font-geist text-tertiary-foreground">
                    "Quiero agendar una cita"
                  </span>
                  <span className="bg-tertiary px-4 py-2 rounded-full text-sm font-geist text-tertiary-foreground">
                    "¿Cuáles son sus servicios?"
                  </span>
                  <span className="bg-tertiary px-4 py-2 rounded-full text-sm font-geist text-tertiary-foreground">
                    "¿Aceptan mi seguro?"
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;