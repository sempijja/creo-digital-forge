
import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/sections/ProjectCard";
import { ChevronDown } from "lucide-react";

const Products = () => {
  const [filter, setFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

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
    setTimeout(handleScroll, 300);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    {
      title: "HealthSync Platform",
      description: "A comprehensive healthcare management system for hospitals and clinics.",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: true,
      clientName: "MediCorp Health",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
    },
    {
      title: "Fintech Dashboard",
      description: "An intuitive financial analytics platform for investment professionals.",
      category: "Finance",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: true,
      clientName: "InvestPro Capital",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Docker"],
    },
    {
      title: "EcoTrack Mobile App",
      description: "Helping users reduce their carbon footprint through daily tracking and suggestions.",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: false,
      clientName: "GreenLife Foundation",
      technologies: ["React Native", "Firebase", "Redux", "Google Cloud"],
    },
    {
      title: "RetailPro POS System",
      description: "A modern point-of-sale system designed for small and medium-sized retailers.",
      category: "Retail",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: false,
      clientName: "RetailTech Solutions",
      technologies: ["Angular", "Java Spring Boot", "MySQL", "Elasticsearch"],
    },
    {
      title: "LearnHub LMS",
      description: "A feature-rich learning management system for educational institutions.",
      category: "Education",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: true,
      clientName: "Global Education Network",
      technologies: ["Next.js", "GraphQL", "MongoDB", "Azure"],
    },
    {
      title: "WorkFlow Project Management",
      description: "A collaborative project management tool designed for remote teams.",
      category: "Productivity",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: false,
      clientName: "RemoteWork Inc.",
      technologies: ["React", "Node.js", "Socket.io", "Redis", "AWS"],
    },
  ];

  const filteredProducts = filter === "all" 
    ? products 
    : filter === "featured" 
      ? products.filter(product => product.featured) 
      : products.filter(product => product.category.toLowerCase() === filter.toLowerCase());

  const categories = ["All", "Featured", "Healthcare", "Finance", "Environment", "Retail", "Education", "Productivity"];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-creo-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal">Our Products</h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg reveal" style={{ animationDelay: "0.1s" }}>
            Explore our portfolio of innovative digital products designed to solve real-world problems.
          </p>
        </div>
      </section>
      
      {/* Product Filters */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative mb-8">
            <div className="md:hidden">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-between w-full py-3 px-4 bg-white border border-gray-300 rounded-md shadow-sm"
              >
                <span className="font-medium">Filter: {filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${showFilters ? "transform rotate-180" : ""}`} />
              </button>
              
              {showFilters && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setFilter(category.toLowerCase());
                        setShowFilters(false);
                      }}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                        filter === category.toLowerCase() ? "bg-creo-soft-purple text-creo-purple" : ""
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="hidden md:flex space-x-2 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setFilter(category.toLowerCase())}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    filter === category.toLowerCase()
                      ? "bg-creo-purple text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <ProjectCard
                  title={product.title}
                  description={product.description}
                  category={product.category}
                  image={product.image}
                  delay={`0.${index + 1}s`}
                />
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-gray-500"><span className="font-medium">Client:</span> {product.clientName}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {product.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-creo-soft-purple text-xs text-creo-purple px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center reveal">Featured Case Study</h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 reveal-left">
                <span className="bg-creo-soft-purple text-creo-purple px-3 py-1 rounded-full text-xs font-medium">Healthcare</span>
                <h3 className="text-2xl font-bold mt-4 mb-4">HealthSync Platform</h3>
                <p className="text-gray-600 mb-6">
                  MediCorp Health needed a comprehensive solution to streamline patient management, billing, and electronic medical records. We developed a scalable, secure platform that reduced administrative overhead by 35% and improved patient satisfaction scores.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold mb-2">Challenge</h4>
                    <p className="text-gray-600">
                      Integrating various legacy systems while ensuring HIPAA compliance and providing a user-friendly interface for medical staff.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Solution</h4>
                    <p className="text-gray-600">
                      A modular architecture using React for the frontend and Node.js microservices on the backend, with robust security measures and comprehensive training for staff.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Results</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>35% reduction in administrative overhead</li>
                      <li>22% increase in patient satisfaction scores</li>
                      <li>98.7% system uptime</li>
                      <li>Successful integration with 5 third-party systems</li>
                    </ul>
                  </div>
                </div>
                
                <button className="flex items-center font-medium text-creo-purple hover:underline">
                  Read Full Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>
              
              <div className="bg-gray-100 p-6 lg:p-0 reveal-right">
                <div className="h-full relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="HealthSync Platform Interface"
                    className="object-cover h-full w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <div className="flex items-center text-white">
                      <div className="w-10 h-10 bg-white rounded-full mr-3 flex items-center justify-center">
                        <img src="https://via.placeholder.com/40" alt="Client logo" className="rounded-full" />
                      </div>
                      <div>
                        <p className="font-medium">MediCorp Health</p>
                        <p className="text-sm opacity-80">Leading healthcare provider</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 reveal">What Our Clients Say</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-creo-purple/20 mb-6 mx-auto reveal">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
              </svg>
              
              <blockquote className="text-2xl font-medium mb-8 reveal" style={{ animationDelay: "0.1s" }}>
                Working with CREO has been transformative for our business. Their team not only delivered an exceptional product but also provided strategic insights that helped us better serve our customers.
              </blockquote>
              
              <div className="flex items-center justify-center reveal" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div className="text-left">
                  <p className="font-bold">Dr. Emily Chen</p>
                  <p className="text-gray-600">CTO, MediCorp Health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-creo-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">Ready to Build Something Amazing?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 reveal" style={{ animationDelay: "0.1s" }}>
            Let's discuss how we can help transform your ideas into successful digital products.
          </p>
          <button className="bg-white text-creo-purple px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors reveal" style={{ animationDelay: "0.2s" }}>
            Start a Project
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
