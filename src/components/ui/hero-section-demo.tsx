import { HeroSection } from "@/components/ui/hero-section-dark";

function HeroSectionDemo() {
  return (
    <HeroSection
      title="Solución de IA para Especialistas Médicos en Panamá"
      subtitle={{
        regular: "Deja de perder citas por no contestar chats de pacientes a tiempo",
        gradient: "",
      }}
      description="Lili AI captura cada consulta mientras te enfocas en brindar atención médica excepcional. Respuestas automatizadas 24/7 que convierten consultas en citas agendadas."
      ctaText="Agenda tu Demo Gratuita"
      ctaHref="#"
      bottomImage={{
        light: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&h=700&fit=crop&crop=center",
        dark: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&h=700&fit=crop&crop=center&auto=format&blend=000000&sat=-100&exp=15&blend-mode=overlay",
      }}
      gridOptions={{
        angle: 65,
        opacity: 0.2,
        cellSize: 80,
        lightLineColor: "#e5e7eb",
        darkLineColor: "#374151",
        speed: 25,
      }}
    />
  );
}
export { HeroSectionDemo }