
import React, { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import FeatureCard from "@/components/sections/FeatureCard";
import ProjectCard from "@/components/sections/ProjectCard";
import CTAButton from "@/components/ui/CTAButton";
import { Code, Lightbulb, Rocket, Users } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
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

  const features = [
    {
      title: "Innovative Design",
      description: "We create beautiful, intuitive interfaces that engage users and drive business goals.",
      icon: Lightbulb,
      delay: "0.1s"
    },
    {
      title: "Expert Development",
      description: "Our engineers build scalable, performant applications using cutting-edge technologies.",
      icon: Code,
      delay: "0.2s"
    },
    {
      title: "User-Centered Approach",
      description: "Every product we create is designed with the user's needs and experiences in mind.",
      icon: Users,
      delay: "0.3s"
    },
    {
      title: "Result-Driven Solutions",
      description: "We focus on delivering solutions that achieve measurable business outcomes.",
      icon: Rocket,
      delay: "0.4s"
    },
  ];

  const projects = [
    {
      title: "HealthSync Platform",
      description: "A comprehensive healthcare management system for hospitals and clinics.",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      delay: "0.1s"
    },
    {
      title: "Fintech Dashboard",
      description: "An intuitive financial analytics platform for investment professionals.",
      category: "Finance",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      delay: "0.2s"
    },
    {
      title: "EcoTrack Mobile App",
      description: "Helping users reduce their carbon footprint through daily tracking and suggestions.",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      delay: "0.3s"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">Our Services</h2>
            <p className="text-gray-600 reveal">
              We offer a comprehensive range of services to help businesses thrive in the digital world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                delay={feature.delay}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="max-w-2xl mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Featured Projects</h2>
              <p className="text-gray-600 reveal" style={{ animationDelay: "0.1s" }}>
                Explore our latest work and see how we've helped clients achieve their business goals.
              </p>
            </div>
            <CTAButton variant="outline" className="reveal" style={{ animationDelay: "0.2s" }}>
              View All Projects
            </CTAButton>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                category={project.category}
                image={project.image}
                delay={project.delay}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-creo-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">What Clients Say</h2>
            <p className="text-gray-300 reveal" style={{ animationDelay: "0.1s" }}>
              Don't just take our word for it. Here's what our clients have to say about working with CREO.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl reveal" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-creo-purple">
                  <path d="M11.0489 3.92705C11.3483 3.00574 12.6517 3.00574 12.9511 3.92705L14.0206 7.21885C14.1545 7.63087 14.5385 7.90983 14.9717 7.90983H18.4329C19.4016 7.90983 19.8044 9.14945 19.0207 9.71885L16.2205 11.7533C15.87 12.0079 15.7234 12.4593 15.8572 12.8713L16.9268 16.1631C17.2261 17.0844 16.1717 17.8506 15.388 17.2812L12.5878 15.2467C12.2373 14.9921 11.7627 14.9921 11.4122 15.2467L8.61204 17.2812C7.82833 17.8506 6.77385 17.0844 7.07324 16.1631L8.14277 12.8713C8.27665 12.4593 8.12999 12.0079 7.7795 11.7533L4.97933 9.71885C4.19562 9.14945 4.59839 7.90983 5.56712 7.90983H9.02832C9.46154 7.90983 9.8455 7.63087 9.97937 7.21885L11.0489 3.92705Z" fill="currentColor"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-creo-purple">
                  <path d="M11.0489 3.92705C11.3483 3.00574 12.6517 3.00574 12.9511 3.92705L14.0206 7.21885C14.1545 7.63087 14.5385 7.90983 14.9717 7.90983H18.4329C19.4016 7.90983 19.8044 9.14945 19.0207 9.71885L16.2205 11.7533C15.87 12.0079 15.7234 12.4593 15.8572 12.8713L16.9268 16.1631C17.2261 17.0844 16.1717 17.8506 15.388 17.2812L12.5878 15.2467C12.2373 14.9921 11.7627 14.9921 11.4122 15.2467L8.61204 17.2812C7.82833 17.8506 6.77385 17.0844 7.07324 16.1631L8.14277 12.8713C8.27665 12.4593 8.12999 12.0079 7.7795 11.7533L4.97933 9.71885C4.19562 9.14945 4.59839 7.90983 5.56712 7.90983H9.02832C9.46154 7.90983 9.8455 7.63087 9.97937 7.21885L11.0489 3.92705Z" fill="currentColor"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-creo-purple">
                  <path d="M11.0489 3.92705C11.3483 3.00574 12.6517 3.00574 12.9511 3.92705L14.0206 7.21885C14.1545 7.63087 14.5385 7.90983 14.9717 7.90983H18.4329C19.4016 7.90983 19.8044 9.14945 19.0207 9.71885L16.2205 11.7533C15.87 12.0079 15.7234 12.4593 15.8572 12.8713L16.9268 16.1631C17.2261 17.0844 16.1717 17.8506 15.388 17.2812L12.5878 15.2467C12.2373 14.9921 11.7627 14.9921 11.4122 15.2467L8.61204 17.2812C7.82833 17.8506 6.77385 17.0844 7.07324 16.1631L8.14277 12.8713C8.27665 12.4593 8.12999 12.0079 7.7795 11.7533L4.97933 9.71885C4.19562 9.14945 4.59839 7.90983 5.56712 7.90983H9.02832C9.46154 7.90983 9.8455 7.63087 9.97937 7.21885L11.0489 3.92705Z" fill="currentColor"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-creo-purple">
                  <path d="M11.0489 3.92705C11.3483 3.00574 12.6517 3.00574 12.9511 3.92705L14.0206 7.21885C14.1545 7.63087 14.5385 7.90983 14.9717 7.90983H18.4329C19.4016 7.90983 19.8044 9.14945 19.0207 9.71885L16.2205 11.7533C15.87 12.0079 15.7234 12.4593 15.8572 12.8713L16.9268 16.1631C17.2261 17.0844 16.1717 17.8506 15.388 17.2812L12.5878 15.2467C12.2373 14.9921 11.7627 14.9921 11.4122 15.2467L8.61204 17.2812C7.82833 17.8506 6.77385 17.0844 7.07324 16.1631L8.14277 12.8713C8.27665 12.4593 8.12999 12.0079 7.7795 11.7533L4.97933 9.71885C4.19562 9.14945 4.59839 7.90983 5.56712 7.90983H9.02832C9.46154 7.90983 9.8455 7.63087 9.97937 7.21885L11.0489 3.92705Z" fill="currentColor"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-creo-purple">
                  <path d="M11.0489 3.92705C11.3483 3.00574 12.6517 3.00574 12.9511 3.92705L14.0206 7.21885C14.1545 7.63087 14.5385 7.90983 14.9717 7.90983H18.4329C19.4016 7.90983 19.8044 9.14945 19.0207 9.71885L16.2205 11.7533C15.87 12.0079 15.7234 12.4593 15.8572 12.8713L16.9268 16.1631C17.2261 17.0844 16.1717 17.8506 15.388 17.2812L12.5878 15.2467C12.2373 14.9921 11.7627 14.9921 11.4122 15.2467L8.61204 17.2812C7.82833 17.8506 6.77385 17.0844 7.07324 16.1631L8.14277 12.8713C8.27665 12.4593 8.12999 12.0079 7.7795 11.7533L4.97933 9.71885C4.19562 9.14945 4.59839 7.90983 5.56712 7.90983H9.02832C9.46154 7.90983 9.8455 7.63087 9.97937 7.21885L11.0489 3.92705Z" fill="currentColor"/>
                </svg>
              </div>
              <p className="mb-4">
                "CREO transformed our digital presence. Their team designed an intuitive platform that perfectly captured our brand and significantly improved user engagement."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-sm">Sarah Johnson</p>
                  <p className="text-gray-400 text-xs">CEO, TechVision</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl reveal" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-creo-purple">
                  <path d="M11.0489 3.92705C11.3483 3.00574 12.6517 3.00574 12.9511 3.92705L14.0206 7.21885C14.1545 7.63087 14.5385 7.90983 14.9717 7.90983H18.4329C19.4016 7.90983 19.8044 9.14945 19.0207 9.71885L16.2205 11.7533C15.87 12.0079 15.7234 12.4593 15.8572 12.8713L16.9268 16.1631C17.2261 17.0844 16.1717 17.8506 15.388 17.2812L12.5878 15.2467C12.2373 14.9921 11.7627 14.9921 11.4122 15.2467L8.61204 17.2812C7.82833 17.8506 6.77385 17.0844 7.07324 16.1631L8.14277 12.8713C8.27665 12.4593 8.12999 12.0079 7.7795 11.7533L4.97933 9.71885C4.19562 9.14945 4.59839 7.90983 5.56712 7.90983H9.02832C9.46154 7.90983 9.8455 7.63087 9.97937 7.21885L11.0489 3.92705Z" fill="currentColor"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-creo-purple">
                  <path d="M11.0489 3.92705C11.3483 3.00574 12.6517 3.00574 12.9511 3.92705L14.0206 7.21885C14.1545 7.63087 14.5385 7.90983 14.9717 7.90983H18.4329C19.4016 7.90983 19.8044 9.14945 19.0207 9.71885L16.2205 11.7533C15.87 12.0079 15.7234 12.4593 15.8572 12.8713L16.9268 16.1631C17.2261 17.0844 16.1717 17.8506 15.388 17.2812L12.5878 15.2467C12.2373 14.9921 11.7627 14.9921 11.4122 15.2467L8.61204 17.2812C7.82833 17.8506 6.77385 17.0844 7.07324 16.1631L8.14277 12.8713C8.27665 12.4593 8.12999 12.0079 7.7795 11.7533L4.97933 9.71885C4.19562 9.14945 4.59839 7.90983 5.56712 7.90983H9.02832C9.46154 7.90983 9.8455 7.63087 9.97937 7.21885L11.0489 3.92705Z" fill="currentColor"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-creo-purple">
                  <path d="M11.0489 3.92705C11.3483 3.00574 12.6517 3.00574 12.9511 3.92705L14.0206 7.21885C14.1545 7.63087 14.5385 7.90983 14.9717 7.90983H18.4329C19.4016 7.90983 19.8044 9.14945 19.0207 9.71885L16.2205 11.7533C15.87 12.0079 15.7234 12.4593 15.8572 12.8713L16.9268 16.1631C17.2261 17.0844 16.1717 17.8506 15.388 17.2812L12.5878 15.2467C12.2373 14.9921 11.7627 14.9921 11.4122 15.2467L8.61204 17.2812C7.82833 17.8506 6.77385 17.0844 7.07324 16.1631L8.14277 12.8713C8.27665 12.4593 8.12999 12.0079 7.7795 11.7533L4.97933 9.71885C4.19562 9.14945 4.59839 7.90983 5.56712 7.90983H9.02832C9.46154 7.90983 9.8455 7.63087 9.97937 7.21885L11.0489 3.92705Z" fill="currentColor"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-creo-purple">
                  <path d="M11.0489 3.92705C11.3483 3.00574 12.6517 3.00574 12.9511 3.92705L14.0206 7.21885C14.1545 7.63087 14.5385 7.90983 14.9717 7.90983H18.4329C19.4016 7.90983 19.8044 9.14945 19.0207 9.71885L16.2205 11.7533C15.87 12.0079 15.7234 12.4593 15.8572 12.8713L16.9268 16.1631C17.2261 17.0844 16.1717 17.8506 15.388 17.2812L12.5878 15.2467C12.2373 14.9921 11.7627 14.9921 11.4122 15.2467L8.61204 17.2812C7.82833 17.8506 6.77385 17.0844 7.07324 16.1631L8.14277 12.8713C8.27665 12.4593 8.12999 12.0079 7.7795 11.7533L4.97933 9.71885C4.19562 9.14945 4.59839 7.90983 5.56712 7.90983H9.02832C9.46154 7.90983 9.8455 7.63087 9.97937 7.21885L11.0489 3.92705Z" fill="currentColor"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-creo-purple">
                  <path d="M11.0489 3.92705C11.3483 3.00574 12.6517 3.00574 12.9511 3.92705L14.0206 7.21885C14.1545 7.63087 14.5385 7.90983 14.9717 7.90983H18.4329C19.4016 7.90983 19.8044 9.14945 19.0207 9.71885L16.2205 11.7533C15.87 12.0079 15.7234 12.4593 15.8572 12.8713L16.9268 16.1631C17.2261 17.0844 16.1717 17.8506 15.388 17.2812L12.5878 15.2467C12.2373 14.9921 11.7627 14.9921 11.4122 15.2467L8.61204 17.2812C7.82833 17.8506 6.77385 17.0844 7.07324 16.1631L8.14277 12.8713C8.27665 12.4593 8.12999 12.0079 7.7795 11.7533L4.97933 9.71885C4.19562 9.14945 4.59839 7.90983 5.56712 7.90983H9.02832C9.46154 7.90983 9.8455 7.63087 9.97937 7.21885L11.0489 3.92705Z" fill="currentColor"/>
                </svg>
              </div>
              <p className="mb-4">
                "Working with CREO was a game-changer for our startup. Their expertise in both design and development delivered a product that exceeded our expectations and delighted our users."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-sm">Michael Chen</p>
                  <p className="text-gray-400 text-xs">Founder, Apptivate</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl reveal" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-creo-purple">
                  <path d="M11.0489 3.92705C11.3483 3.00574 12.6517 3.00574 12.9511 3.92705L14.0206 7.21885C14.1545 7.63087 14.5385 7.90983 14.9717 7.90983H18.4329C19.4016 7.90983 19.8044 9.14945 19.0207 9.71885L16.2205 11.7533C15.87 12.0079 15.7234 12.4593 15.8572 12.8713L16.9268 16.1631C17.2261 17.0844 16.1717 17.8506 15.388 17.2812L12.5878 15.2467C12.2373 14.9921 11.7627 14.9921 11.4122 15.2467L8.61204 17.2812C7.82833 17.8506 6.77385 17.0844 7.07324 16.1631L8.14277 12.8713C8.27665 12.4593 8.12999 12.0079 7.7795 11.7533L4.97933 9.71885C4.19562 9.14945 4.59839 7.90983 5.56712 7.90983H9.02832C9.46154 7.90983 9.8455 7.63087 9.97937 7.21885L11.0489 3.92705Z" fill="currentColor"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-creo-purple">
                  <path d="M11.0489 3.92705C11.3483 3.00574 12.6517 3.00574 12.9511 3.92705L14.0206 7.21885C14.1545 7.63087 14.5385 7.90983 14.9717 7.90983H18.4329C19.4016 7.90983 19.8044 9.14945 19.0207 9.71885L16.2205 11.7533C15.87 12.0079 15.7234 12.4593 15.8572 12.8713L16.9268 16.1631C17.2261 17.0844 16.1717 17.8506 15.388 17.2812L12.5878 15.2467C12.2373 14.9921 11.7627 14.9921 11.4122 15.2467L8.61204 17.2812C7.82833 17.8506 6.77385 17.0844 7.07324 16.1631L8.14277 12.8713C8.27665 12.4593 8.12999 12.0079 7.7795 11.7533L4.97933 9.71885C4.19562 9.14945 4.59839 7.90983 5.56712 7.90983H9.02832C9.46154 7.90983 9.8455 7.63087 9.97937 7.21885L11.0489 3.92705Z" fill="currentColor"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-creo-purple">
                  <path d="M11.0489 3.92705C11.3483 3.00574 12.6517 3.00574 12.9511 3.92705L14.0206 7.21885C14.1545 7.63087 14.5385 7.90983 14.9717 7.90983H18.4329C19.4016 7.90983 19.8044 9.14945 19.0207 9.71885L16.2205 11.7533C15.87 12.0079 15.7234 12.4593 15.8572 12.8713L16.9268 16.1631C17.2261 17.0844 16.1717 17.8506 15.388 17.2812L12.5878 15.2467C12.2373 14.9921 11.7627 14.9921 11.4122 15.2467L8.61204 17.2812C7.82833 17.8506 6.77385 17.0844 7.07324 16.1631L8.14277 12.8713C8.27665 12.4593 8.12999 12.0079 7.7795 11.7533L4.97933 9.71885C4.19562 9.14945 4.59839 7.90983 5.56712 7.90983H9.02832C9.46154 7.90983 9.8455 7.63087 9.97937 7.21885L11.0489 3.92705Z" fill="currentColor"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-creo-purple">
                  <path d="M11.0489 3.92705C11.3483 3.00574 12.6517 3.00574 12.9511 3.92705L14.0206 7.21885C14.1545 7.63087 14.5385 7.90983 14.9717 7.90983H18.4329C19.4016 7.90983 19.8044 9.14945 19.0207 9.71885L16.2205 11.7533C15.87 12.0079 15.7234 12.4593 15.8572 12.8713L16.9268 16.1631C17.2261 17.0844 16.1717 17.8506 15.388 17.2812L12.5878 15.2467C12.2373 14.9921 11.7627 14.9921 11.4122 15.2467L8.61204 17.2812C7.82833 17.8506 6.77385 17.0844 7.07324 16.1631L8.14277 12.8713C8.27665 12.4593 8.12999 12.0079 7.7795 11.7533L4.97933 9.71885C4.19562 9.14945 4.59839 7.90983 5.56712 7.90983H9.02832C9.46154 7.90983 9.8455 7.63087 9.97937 7.21885L11.0489 3.92705Z" fill="currentColor"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                  <path d="M11.0489 3.92705C11.3483 3.00574 12.6517 3.00574 12.9511 3.92705L14.0206 7.21885C14.1545 7.63087 14.5385 7.90983 14.9717 7.90983H18.4329C19.4016 7.90983 19.8044 9.14945 19.0207 9.71885L16.2205 11.7533C15.87 12.0079 15.7234 12.4593 15.8572 12.8713L16.9268 16.1631C17.2261 17.0844 16.1717 17.8506 15.388 17.2812L12.5878 15.2467C12.2373 14.9921 11.7627 14.9921 11.4122 15.2467L8.61204 17.2812C7.82833 17.8506 6.77385 17.0844 7.07324 16.1631L8.14277 12.8713C8.27665 12.4593 8.12999 12.0079 7.7795 11.7533L4.97933 9.71885C4.19562 9.14945 4.59839 7.90983 5.56712 7.90983H9.02832C9.46154 7.90983 9.8455 7.63087 9.97937 7.21885L11.0489 3.92705Z" fill="currentColor"/>
                </svg>
              </div>
              <p className="mb-4">
                "The team at CREO understood our business needs from day one. The custom software solution they developed has streamlined our operations and increased our revenue by 35%."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-sm">Jessica Miller</p>
                  <p className="text-gray-400 text-xs">Operations Director, LogiTech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-creo-purple to-creo-accent rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 reveal">Ready to Transform Your Digital Experience?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 reveal" style={{ animationDelay: "0.1s" }}>
              Let's work together to create software solutions that drive your business forward and delight your users.
            </p>
            <div className="flex flex-wrap justify-center gap-4 reveal" style={{ animationDelay: "0.2s" }}>
              <CTAButton size="lg" className="bg-white text-creo-purple hover:bg-gray-100">
                Get in Touch
              </CTAButton>
              <CTAButton variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                View Our Process
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
