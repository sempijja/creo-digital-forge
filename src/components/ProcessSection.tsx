
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We dive deep into your business to understand your goals, users, and market position."
  },
  {
    step: "02",
    title: "Design",
    description: "Our team crafts beautiful, intuitive interfaces tailored to your brand and user needs."
  },
  {
    step: "03",
    title: "Development",
    description: "We build robust, scalable solutions using cutting-edge technologies and best practices."
  },
  {
    step: "04",
    title: "Launch",
    description: "We deploy your product and ensure a seamless transition to the market."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-indigo-950">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-indigo-600 text-white hover:bg-indigo-700">Our Process</Badge>
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
              How We Bring Ideas to Life
            </h2>
            <p className="mt-4 text-gray-300">
              Our proven methodology ensures we deliver exceptional results on time and on budget.
            </p>
          </div>
          
          <div className="space-y-8">
            {process.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600/20 flex items-center justify-center">
                  <span className="text-indigo-400 font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                  {index < process.length - 1 && (
                    <div className="mt-4 ml-6 border-l-2 border-dashed border-indigo-600/30 h-6"></div>
                  )}
                </div>
              </div>
            ))}
            
            <div className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer">
              <span>Learn more about our process</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
