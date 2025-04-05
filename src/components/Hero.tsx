
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24 sm:px-6 relative">
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className="block">We craft digital</span>
          <span className="block text-indigo-400">experiences that matter</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
          CREO is a premium software design studio that transforms ideas into 
          exceptional digital products. We design, develop, and market software 
          solutions that drive business growth.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
            See our work
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Contact us <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div 
        className="absolute inset-0 bg-gradient-to-b from-indigo-900/70 via-purple-900/50 to-black z-0"
        aria-hidden="true"
      />
    </div>
  );
};

export default Hero;
