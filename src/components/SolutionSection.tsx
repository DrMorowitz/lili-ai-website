import { Target, MessageCircle, Calendar } from "lucide-react";

const SolutionSection = () => {
  const steps = [
    {
      icon: Target,
      title: "Captura",
      description: "Cada chat y mensaje es capturado 24/7, sin excepción ni pérdida de oportunidades"
    },
    {
      icon: MessageCircle,
      title: "Responde",
      description: "Respuestas automatizadas profesionales y calificación inteligente de leads"
    },
    {
      icon: Calendar,
      title: "Agenda",
      description: "Programación inteligente de citas sin intervención manual"
    }
  ];

  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="font-geist text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold font-geist text-primary mb-6">
            Cómo Lili AI transforma tu práctica médica
          </h2>
          <p className="text-lg font-geist text-text-secondary max-w-3xl mx-auto">
            Un proceso simple de tres pasos para capturar cada oportunidad de paciente
          </p>
        </div>
        
        {/* Solution Steps */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="font-geist text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-tertiary rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10 font-geist text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold font-geist text-sm">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold font-geist text-primary mb-4">{step.title}</h3>
                <p className="font-geist text-text-secondary font-geist">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;