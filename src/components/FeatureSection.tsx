
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Zap, Globe } from "lucide-react";

const features = [
  {
    title: "Stunning UI/UX Design",
    description: "Beautiful, intuitive interfaces that delight users and boost engagement.",
    icon: Palette,
  },
  {
    title: "Modern Development",
    description: "Cutting-edge tech stacks that ensure your application is fast, secure, and scalable.",
    icon: Code,
  },
  {
    title: "Performance Optimization",
    description: "Lightning-fast experiences that keep users engaged and conversion rates high.",
    icon: Zap,
  },
  {
    title: "Global Reach",
    description: "Multilingual and accessible solutions that connect with audiences worldwide.",
    icon: Globe,
  },
];

const FeatureSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Our Expertise
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            We combine design thinking with technical excellence to create software that stands out.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 text-white hover:border-indigo-500 transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-indigo-600/20 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-indigo-400" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
