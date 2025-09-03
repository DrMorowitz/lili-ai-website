import { Users, Database, MessageSquare, Calendar } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Captura de Leads",
      description: "Captura automática de leads desde todas las conversaciones de WhatsApp y otros canales"
    },
    {
      icon: Database,
      title: "Integración a Base de Datos",
      description: "Gestión centralizada de datos de pacientes con integración a sistemas existentes"
    },
    {
      icon: MessageSquare,
      title: "Responde Preguntas 24/7",
      description: "Respuestas automatizadas profesionales las 24 horas del día, los 7 días de la semana"
    },
    {
      icon: Calendar,
      title: "Agendamiento",
      description: "Sistema inteligente de programación de citas con sincronización automática"
    }
  ];

  return (
    <section className="bg-surface py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="font-geist text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-geist text-primary mb-4">
            Características Principales de Lili AI
          </h2>
          <p className="text-lg font-geist text-text-secondary max-w-2xl mx-auto">
            Todo lo que necesitas para transformar tu práctica médica
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 font-geist text-center shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 font-geist text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold font-geist text-primary mb-4">{feature.title}</h3>
                <p className="text-text-secondary font-geist text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;