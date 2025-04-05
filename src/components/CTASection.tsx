
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-indigo-950 to-black">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="mt-6 text-xl text-gray-300">
            Let's create something extraordinary together. Our team is ready to bring your vision to life.
          </p>
          <div className="mt-10">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-6 h-auto">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
