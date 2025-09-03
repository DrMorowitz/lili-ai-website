import { MessageSquare, Clock, Moon, DollarSign } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      icon: MessageSquare,
      title: "Chats Sin Responder",
      description: "WhatsApp sin contestar durante consultas médicas"
    },
    {
      icon: Clock,
      title: "Sin Cobertura",
      description: "Mensajes perdidos durante almuerzo y descansos"
    },
    {
      icon: Moon,
      title: "Después de Horario",
      description: "Pacientes perdidos en horario nocturno y fines de semana"
    },
    {
      icon: DollarSign,
      title: "Oportunidades Perdidas",
      description: "Ingresos perdidos por respuestas tardías"
    }
  ];

  return (
    <section className="bg-muted py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="font-geist text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-geist text-primary mb-4">
            ¿Te identificas con estos desafíos diarios?
          </h2>
          <p className="text-lg font-geist text-text-secondary max-w-2xl mx-auto">
            Estos son los problemas más comunes que enfrentan los especialistas médicos
          </p>
        </div>
        
        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 font-geist text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 font-geist text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold font-geist text-primary mb-3">{problem.title}</h3>
                <p className="text-text-secondary font-geist text-sm">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;