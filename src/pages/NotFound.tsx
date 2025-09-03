import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="font-geist text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 bg-tertiary rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl font-bold font-geist text-primary">404</span>
          </div>
          <h1 className="text-3xl font-bold font-geist text-primary mb-4">Página no encontrada</h1>
          <p className="text-lg font-geist text-text-secondary mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <Button 
            onClick={() => window.location.href = "/"}
            className="bg-primary font-geist text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Regresar al Inicio
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
