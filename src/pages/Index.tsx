
import ThreeBackground from "@/components/ThreeBackground";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import ClientSection from "@/components/ClientSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="relative">
      <ThreeBackground />
      <Hero />
      <FeatureSection />
      <ClientSection />
      <ProcessSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
};

export default Index;
