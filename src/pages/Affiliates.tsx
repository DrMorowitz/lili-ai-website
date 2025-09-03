import { DollarSign, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Affiliates = () => {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-background py-20 lg:py-32">
          <div className="container mx-auto px-4 font-geist text-center">
            <h1 className="text-4xl lg:text-5xl font-bold font-geist text-primary mb-6">
              Programa de Afiliados Lili AI
            </h1>
            <p className="text-lg lg:text-xl font-geist text-text-secondary mb-8 max-w-3xl mx-auto">
              Gana comisiones atractivas refiriendo especialistas médicos a la mejor solución de IA para consultas
            </p>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground px-8 py-4 font-geist text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Únete al Programa
            </Button>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="bg-surface py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold font-geist text-primary font-geist text-center mb-16">
              ¿Por Qué Ser Afiliado de Lili AI?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-card rounded-xl p-8 font-geist text-center shadow-md">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 font-geist text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold font-geist text-primary mb-4">Comisiones Atractivas</h3>
                <p className="font-geist text-text-secondary font-geist mb-4">
                  Gana hasta <strong className="font-geist text-primary">20% de comisión recurrente</strong> por cada cliente referido que se mantenga activo
                </p>
                <div className="bg-tertiary rounded-lg p-4">
                  <p className="text-sm font-geist text-text-secondary">
                    Ejemplo: Cliente Plan Premium = <strong>$150/mes recurrente</strong>
                  </p>
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-8 font-geist text-center shadow-md">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 font-geist text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold font-geist text-primary mb-4">Soporte Completo</h3>
                <p className="font-geist text-text-secondary mb-4">
                  Materiales de marketing profesionales, capacitación y soporte técnico incluido
                </p>
                <ul className="text-sm font-geist text-text-secondary space-y-2">
                  <li>• Presentaciones listas para usar</li>
                  <li>• Scripts de venta probados</li>
                  <li>• Soporte técnico dedicado</li>
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-8 font-geist text-center shadow-md">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 font-geist text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold font-geist text-primary mb-4">Mercado en Crecimiento</h3>
                <p className="font-geist text-text-secondary mb-4">
                  El mercado de IA para salud en Panamá está en pleno crecimiento con demanda sin precedentes
                </p>
                <div className="bg-tertiary rounded-lg p-4">
                  <p className="text-sm font-geist text-text-secondary">
                    <strong>Miles de especialistas</strong> buscan estas soluciones
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-background py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold font-geist text-primary font-geist text-center mb-16">
              ¿Cómo Funciona el Programa?
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: 1,
                  title: "Regístrate",
                  description: "Completa el formulario y recibe tu link de afiliado único"
                },
                {
                  step: 2,
                  title: "Promociona",
                  description: "Comparte tu link con especialistas médicos en tu red"
                },
                {
                  step: 3,
                  title: "Conversión",
                  description: "El especialista agenda demo y se convierte en cliente"
                },
                {
                  step: 4,
                  title: "Gana",
                  description: "Recibe comisiones mensuales recurrentes automáticamente"
                }
              ].map((item) => (
                <div key={item.step} className="font-geist text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-geist text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold font-geist text-primary mb-3">{item.title}</h3>
                  <p className="text-text-secondary font-geist text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signup Form */}
        <section className="bg-tertiary py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold font-geist text-primary font-geist text-center mb-8">
                  Únete al Programa de Afiliados
                </h2>
                
                {/* Form placeholder - actual functionality will be added in Cursor */}
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-geist text-primary font-medium mb-2">Nombre Completo</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary bg-background font-geist text-foreground"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block font-geist text-primary font-medium mb-2">Email Profesional</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary bg-background font-geist text-foreground"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block font-geist text-primary font-medium mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary bg-background font-geist text-foreground"
                      placeholder="+507 1234-5678"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-geist text-primary font-medium mb-2">¿Cómo planeas promocionar Lili AI?</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary bg-background font-geist text-foreground"
                      placeholder="Describe tu estrategia de promoción, red de contactos médicos, etc..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-4 font-geist text-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Enviar Solicitud de Afiliado
                  </Button>
                </form>
                
                <div className="mt-6 font-geist text-center">
                  <p className="text-text-secondary font-geist text-sm">
                    Nos pondremos en contacto contigo en menos de 24 horas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Affiliates;