
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "CREO transformed our outdated platform into a modern, user-friendly system that our customers love. The attention to detail and technical expertise were exceptional.",
    author: "Sarah Johnson",
    position: "CTO, TechCorp"
  },
  {
    quote: "Working with CREO was a game-changer for our startup. They not only delivered a beautiful product but also provided strategic insights that helped us grow our user base.",
    author: "Michael Rodriguez",
    position: "Founder, InnovateX"
  },
  {
    quote: "The team at CREO exceeded our expectations in every way. Their design-first approach and technical execution created an application that stands out in our competitive market.",
    author: "Lisa Chen",
    position: "Product Director, NextWave"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Don't take our word for it. Here's what our clients have to say about working with CREO.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 text-white">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-indigo-400 mb-4" />
                <p className="mb-6 text-gray-300">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
