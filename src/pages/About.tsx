
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTAButton from "@/components/ui/CTAButton";

const About = () => {
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

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-creo-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal">About CREO</h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg reveal" style={{ animationDelay: "0.1s" }}>
            We are a team of passionate designers and developers creating exceptional digital experiences.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-left">Our Story</h2>
              <div className="space-y-4 reveal-left" style={{ animationDelay: "0.1s" }}>
                <p className="text-gray-600">
                  CREO was founded in 2012 with a simple mission: to create digital products that people love to use. What started as a small team of designers and developers has grown into a full-service software design studio working with clients across the globe.
                </p>
                <p className="text-gray-600">
                  Our name, CREO, comes from the Latin word for "create," reflecting our passion for building innovative solutions that solve real problems. We believe that great design is not just about aesthetics but about creating experiences that are intuitive, accessible, and delightful.
                </p>
                <p className="text-gray-600">
                  Over the years, we've helped startups launch successful products, worked with enterprise clients to transform their digital offerings, and partnered with organizations of all sizes to create software that makes a difference.
                </p>
              </div>
            </div>
            <div className="relative reveal-right">
              <div className="absolute inset-0 bg-creo-purple rounded-xl opacity-10 transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="CREO team working together"
                className="relative z-10 rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal">Our Mission & Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md reveal" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-creo-soft-purple rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-creo-purple"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M14 2v6h6"/><path d="m8.3 15 2-2 5 5"/><path d="m8.3 10 2 2 5-5"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from the code we write to the designs we create and the service we provide to our clients.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md reveal" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-creo-soft-purple rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-creo-purple"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/><path d="M17 17h.01"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and approaches to solve complex problems and create better user experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md reveal" style={{ animationDelay: "0.3s" }}>
              <div className="w-16 h-16 bg-creo-soft-purple rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-creo-purple"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork, both within our team and in our partnerships with clients.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md reveal" style={{ animationDelay: "0.4s" }}>
              <div className="w-16 h-16 bg-creo-soft-purple rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-creo-purple"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m14.5 9-5 5"/><path d="m9.5 9 5 5"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust</h3>
              <p className="text-gray-600">
                We build relationships based on trust, transparency, and open communication.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md reveal" style={{ animationDelay: "0.5s" }}>
              <div className="w-16 h-16 bg-creo-soft-purple rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-creo-purple"><path d="M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/><path d="M14 2v6h6"/><path d="M4.5 13.5 9 18"/><path d="m5 12 9.5 9.5"/><path d="M8.5 8.5 11 11"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Impact</h3>
              <p className="text-gray-600">
                We measure our success by the positive impact our work has on users and businesses.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md reveal" style={{ animationDelay: "0.6s" }}>
              <div className="w-16 h-16 bg-creo-soft-purple rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-creo-purple"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                We design and develop with inclusivity in mind, creating products that are accessible to all users.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal">Our Process</h2>
          
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center reveal">
              <div className="w-full md:w-1/3">
                <div className="bg-creo-purple h-20 w-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto md:mx-0">
                  01
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-semibold mb-3">Discovery</h3>
                <p className="text-gray-600">
                  We start by understanding your business, your users, and your goals. Through workshops, interviews, and research, we gather insights that inform our approach.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center reveal" style={{ animationDelay: "0.1s" }}>
              <div className="w-full md:w-1/3">
                <div className="bg-creo-purple h-20 w-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto md:mx-0">
                  02
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-semibold mb-3">Strategy & Design</h3>
                <p className="text-gray-600">
                  Based on our findings, we develop a strategy and create wireframes, prototypes, and visual designs that address user needs and align with your business objectives.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center reveal" style={{ animationDelay: "0.2s" }}>
              <div className="w-full md:w-1/3">
                <div className="bg-creo-purple h-20 w-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto md:mx-0">
                  03
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-semibold mb-3">Development</h3>
                <p className="text-gray-600">
                  Our engineers bring the designs to life using modern, scalable technologies. We follow agile methodologies to ensure flexibility and continuous improvement.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center reveal" style={{ animationDelay: "0.3s" }}>
              <div className="w-full md:w-1/3">
                <div className="bg-creo-purple h-20 w-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto md:mx-0">
                  04
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-semibold mb-3">Testing & Quality Assurance</h3>
                <p className="text-gray-600">
                  We rigorously test all aspects of your product to ensure it's robust, secure, and delivers an exceptional user experience.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center reveal" style={{ animationDelay: "0.4s" }}>
              <div className="w-full md:w-1/3">
                <div className="bg-creo-purple h-20 w-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto md:mx-0">
                  05
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-semibold mb-3">Launch & Growth</h3>
                <p className="text-gray-600">
                  We support you through the launch process and beyond, providing ongoing maintenance, optimization, and enhancements to ensure your product continues to grow and succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">Let's Work Together</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 reveal" style={{ animationDelay: "0.1s" }}>
            Ready to start your next project with us? Get in touch and let's discuss how we can help bring your ideas to life.
          </p>
          <CTAButton size="lg" className="reveal" style={{ animationDelay: "0.2s" }}>
            Contact Us
          </CTAButton>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
