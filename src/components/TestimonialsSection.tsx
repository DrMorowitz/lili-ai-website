import { User, Users, Eye, Building } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Orlando Díaz",
      practice: "Orlando PDex",
      quote: "Implementando tecnología IA para optimizar atención al paciente",
      specialty: "Medicina Especializada",
      icon: User,
      featured: false
    },
    {
      name: "GineClinic",
      practice: "Dr. Roberto Luis & Dr. Diana Pitti",
      quote: "Ya implementando esta tecnología en nuestra práctica ginecológica",
      specialty: "Ginecología",
      icon: Users,
      featured: false
    },
    {
      name: "Dr. Javier Del Rosario",
      practice: "Urología",
      quote: "Implementando esta tecnología para mejorar la experiencia del paciente",
      specialty: "Urología",
      icon: User,
      featured: false
    },
    {
      name: "Clínica Bernadette",
      practice: "Centro de Medicina General",
      quote: "Implementando esta tecnología en nuestro centro médico",
      specialty: "Medicina General",
      icon: Building,
      featured: false
    },
    {
      name: "Clear Vision & Optimal",
      practice: "Centro Oftalmológico Avanzado",
      quote: "Implementando IA con programación para 6 profesionales",
      specialty: "Oftalmología",
      professionals: "6 Profesionales",
      icon: Eye,
      featured: true
    }
  ];

  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="font-geist text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-geist text-primary mb-4">
            Especialistas líderes ya implementan Lili AI
          </h2>
          <p className="text-lg font-geist text-text-secondary">
            Conoce a algunos de nuestros clientes que ya están transformando sus prácticas
          </p>
        </div>
        
        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const IconComponent = testimonial.icon;
            
            if (testimonial.featured) {
              return (
                <div 
                  key={index}
                  className="md:col-span-2 bg-secondary rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 font-geist text-primary-foreground" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold font-geist text-secondary-foreground">{testimonial.name}</h3>
                      <p className="font-geist text-secondary-foreground/90 font-geist">{testimonial.practice}</p>
                    </div>
                  </div>
                  <p className="text-secondary-foreground font-geist text-lg italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-card text-primary px-4 py-2 rounded-full font-geist text-sm font-semibold">
                      {testimonial.specialty}
                    </span>
                    {testimonial.professionals && (
                      <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-geist text-sm font-semibold">
                        {testimonial.professionals}
                      </span>
                    )}
                  </div>
                </div>
              );
            }
            
            return (
              <div 
                key={index}
                className="bg-tertiary rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 font-geist text-primary-foreground" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold font-geist text-primary">{testimonial.name}</h3>
                    <p className="text-text-secondary font-geist text-sm">{testimonial.practice}</p>
                  </div>
                </div>
                <p className="font-geist text-text-secondary font-geist italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-geist text-xs font-medium">
                    {testimonial.specialty}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;