
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PersonCard from "@/components/sections/PersonCard";

const People = () => {
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

  const executiveTeam = [
    {
      name: "Alex Morgan",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sarah Johnson",
      role: "Chief Design Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const designTeam = [
    {
      name: "Emily Davis",
      role: "Lead UX Designer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "James Wilson",
      role: "Senior UI Designer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Olivia Lee",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Marcus Thompson",
      role: "Motion Designer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const developmentTeam = [
    {
      name: "David Kim",
      role: "Lead Frontend Developer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sophia Patel",
      role: "Backend Engineer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Ryan Garcia",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Aisha Jones",
      role: "Mobile Developer",
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-creo-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal">Our Team</h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg reveal" style={{ animationDelay: "0.1s" }}>
            Meet the talented individuals who make CREO a leading software design studio.
          </p>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center reveal">Leadership</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executiveTeam.map((person, index) => (
              <PersonCard
                key={index}
                name={person.name}
                role={person.role}
                image={person.image}
                delay={`0.${index + 1}s`}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal-left">
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <p className="text-gray-600 mb-8">
                At CREO, our people are our greatest asset. We foster a culture that values creativity, collaboration, and continuous growth. Each team member brings unique perspectives and skills that help us deliver exceptional results for our clients.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 h-10 w-10 bg-creo-soft-purple rounded-full flex items-center justify-center">
                    <span className="text-creo-purple font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Excellence</h3>
                    <p className="text-gray-600">We strive for excellence in everything we do.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 h-10 w-10 bg-creo-soft-purple rounded-full flex items-center justify-center">
                    <span className="text-creo-purple font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Collaboration</h3>
                    <p className="text-gray-600">We believe in the power of teamwork and diverse perspectives.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 h-10 w-10 bg-creo-soft-purple rounded-full flex items-center justify-center">
                    <span className="text-creo-purple font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Innovation</h3>
                    <p className="text-gray-600">We embrace new ideas and approaches to solve complex problems.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 h-10 w-10 bg-creo-soft-purple rounded-full flex items-center justify-center">
                    <span className="text-creo-purple font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">User-Centered</h3>
                    <p className="text-gray-600">We place users at the heart of everything we design and build.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative reveal-right">
              <div className="absolute inset-0 bg-creo-purple opacity-10 transform rotate-3 rounded-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="CREO team working together"
                className="relative z-10 rounded-xl shadow-lg object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Design Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center reveal">Design Team</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto reveal" style={{ animationDelay: "0.1s" }}>
            Our designers create intuitive, beautiful, and functional interfaces that users love.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {designTeam.map((person, index) => (
              <PersonCard
                key={index}
                name={person.name}
                role={person.role}
                image={person.image}
                delay={`0.${index + 1}s`}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Development Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center reveal">Development Team</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto reveal" style={{ animationDelay: "0.1s" }}>
            Our developers build robust, scalable, and performant applications using cutting-edge technologies.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentTeam.map((person, index) => (
              <PersonCard
                key={index}
                name={person.name}
                role={person.role}
                image={person.image}
                delay={`0.${index + 1}s`}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-creo-purple to-creo-accent rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-16 text-white reveal-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
                <p className="mb-8">
                  We're always looking for talented individuals who are passionate about creating exceptional digital experiences. Join us in our mission to design and develop software that people love to use.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><path d="M17.25 10c0 3-1.79 5-4.25 5s-4.25-2-4.25-5 1.79-5 4.25-5 4.25 2 4.25 5Z"/><path d="M9 15c-2.8 0-5 2.2-5 5v2h16v-2c0-2.8-2.2-5-5-5"/><path d="M22 5V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2"/></svg>
                    <span>Collaborative environment</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
                    <span>Professional growth opportunities</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                    <span>Work on challenging projects</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>
                    <span>Remote-friendly culture</span>
                  </div>
                </div>
                
                <button className="bg-white text-creo-purple px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                  View Open Positions
                </button>
              </div>
              
              <div className="hidden lg:block relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="CREO office space"
                  className="object-cover h-full w-full"
                />
                <div className="absolute inset-0 bg-black opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default People;
