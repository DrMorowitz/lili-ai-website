import Navigation from "@/components/Navigation";
import { HeroSectionDemo } from "@/components/ui/hero-section-demo";
import AIDemo from "@/components/AIDemo";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        <HeroSectionDemo />
        <AIDemo />
        <TestimonialsSection />
        <ProblemsSection />
        <SolutionSection />
        <FeaturesSection />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
