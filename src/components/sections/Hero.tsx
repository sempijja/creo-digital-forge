
import React, { useEffect } from "react";
import CTAButton from "../ui/CTAButton";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight reveal-left">
              We Design <span className="text-creo-purple">Digital Products</span> That People Love
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg reveal-left" style={{ animationDelay: "0.2s" }}>
              CREO is a leading software design studio creating innovative digital solutions that transform businesses and delight users.
            </p>
            <div className="flex flex-wrap gap-4 reveal-left" style={{ animationDelay: "0.4s" }}>
              <CTAButton size="lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </CTAButton>
              <CTAButton variant="outline" size="lg">
                View Our Work
              </CTAButton>
            </div>
            <div className="mt-12 flex items-center space-x-6 reveal-left" style={{ animationDelay: "0.6s" }}>
              <div>
                <div className="text-3xl font-bold text-creo-dark">50+</div>
                <div className="text-gray-600">Clients</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-creo-dark">120+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-creo-dark">10+</div>
                <div className="text-gray-600">Years</div>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center reveal-right">
            <div className="bg-gradient-to-br from-creo-purple to-creo-accent rounded-full w-[450px] h-[450px] opacity-10 absolute"></div>
            <div className="relative z-10 w-full max-w-lg">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Software Development" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg">CREO Digital Platform</h3>
                    <span className="bg-creo-soft-purple text-creo-purple px-3 py-1 rounded-full text-xs font-medium">Featured</span>
                  </div>
                  <p className="text-gray-600 mb-4">A comprehensive solution for modern businesses.</p>
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                    </div>
                    <span className="text-gray-500 text-sm ml-3">+8 team members</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-64 animate-float" style={{animationDelay: "1s"}}>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">Project Milestone</p>
                    <p className="text-xs text-gray-500">UI Design completed</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-56 animate-float" style={{animationDelay: "2s"}}>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-creo-soft-blue flex items-center justify-center text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">Development</p>
                    <p className="text-xs text-gray-500">React, Node.js, AWS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
