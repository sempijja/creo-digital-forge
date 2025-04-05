
import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTAButton from "@/components/ui/CTAButton";
import { Code, Database, Layout, Server, Smartphone } from "lucide-react";

const Technologies = () => {
  const [activeTab, setActiveTab] = useState("frontend");

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

  const technologies = {
    frontend: [
      { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png", expertise: 95 },
      { name: "Vue.js", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png", expertise: 85 },
      { name: "Angular", logo: "https://angular.io/assets/images/logos/angular/angular.svg", expertise: 80 },
      { name: "Next.js", logo: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png", expertise: 90 },
      { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png", expertise: 92 },
      { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png", expertise: 95 },
    ],
    backend: [
      { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", expertise: 95 },
      { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png", expertise: 90 },
      { name: "Java", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png", expertise: 85 },
      { name: "Ruby on Rails", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png", expertise: 80 },
      { name: "GraphQL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png", expertise: 88 },
      { name: "Django", logo: "https://cdn.worldvectorlogo.com/logos/django.svg", expertise: 82 },
    ],
    mobile: [
      { name: "React Native", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png", expertise: 90 },
      { name: "Flutter", logo: "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png", expertise: 85 },
      { name: "Swift", logo: "https://developer.apple.com/swift/images/swift-og.png", expertise: 80 },
      { name: "Kotlin", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png", expertise: 82 },
    ],
    database: [
      { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", expertise: 95 },
      { name: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png", expertise: 90 },
      { name: "MySQL", logo: "https://www.mysql.com/common/logos/logo-mysql-170x115.png", expertise: 88 },
      { name: "Firebase", logo: "https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png", expertise: 92 },
      { name: "Redis", logo: "https://cdn.worldvectorlogo.com/logos/redis.svg", expertise: 85 },
    ],
    devops: [
      { name: "Docker", logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png", expertise: 90 },
      { name: "Kubernetes", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png", expertise: 85 },
      { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png", expertise: 92 },
      { name: "Google Cloud", logo: "https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png", expertise: 88 },
      { name: "CI/CD", logo: "https://cdn.iconscout.com/icon/free/png-256/free-jenkins-1-282385.png", expertise: 90 },
    ],
  };

  const tabIcons = {
    frontend: Layout,
    backend: Server,
    mobile: Smartphone,
    database: Database,
    devops: Code,
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-creo-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal">Our Technologies</h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg reveal" style={{ animationDelay: "0.1s" }}>
            We use cutting-edge technologies to build modern, scalable, and performant digital products.
          </p>
        </div>
      </section>
      
      {/* Technology Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.keys(technologies).map((tab) => {
              const Icon = tabIcons[tab];
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    activeTab === tab
                      ? "bg-creo-purple text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <Icon size={18} />
                  <span className="capitalize">{tab}</span>
                </button>
              );
            })}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies[activeTab].map((tech, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center transition-all hover:shadow-lg hover:-translate-y-1 reveal"
                style={{ animationDelay: `0.${index + 1}s` }}
              >
                <div className="h-20 w-20 flex items-center justify-center mb-3">
                  <img src={tech.logo} alt={tech.name} className="max-h-full max-w-full object-contain" />
                </div>
                <h3 className="font-semibold text-center mb-3">{tech.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                  <div 
                    className="bg-creo-purple h-2 rounded-full" 
                    style={{ width: `${tech.expertise}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500">Expertise: {tech.expertise}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Tech Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center reveal">Our Technology Philosophy</h2>
            
            <div className="space-y-6 reveal-left" style={{ animationDelay: "0.1s" }}>
              <p className="text-gray-600">
                At CREO, we believe in using the right technology for each project, rather than forcing a one-size-fits-all approach. Our technology choices are guided by several key principles:
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">Scalability</h3>
                <p className="text-gray-600">
                  We build solutions that can grow with your business, handling increased loads and expanding functionality without requiring a complete rebuild.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">Performance</h3>
                <p className="text-gray-600">
                  We optimize every aspect of your application to ensure fast load times, smooth interactions, and efficient resource usage.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">Maintainability</h3>
                <p className="text-gray-600">
                  Our code is clean, well-documented, and follows best practices, making it easy to maintain and extend over time.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">Security</h3>
                <p className="text-gray-600">
                  We implement robust security measures at every level of your application, protecting your data and your users' privacy.
                </p>
              </div>
              
              <p className="text-gray-600">
                Our team stays up-to-date with the latest technological advancements, continuously evaluating new tools and frameworks to ensure we're using the most effective solutions for our clients' needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Development Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center reveal">Our Development Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            <div className="reveal" style={{ animationDelay: "0.1s" }}>
              <div className="bg-creo-soft-purple h-14 w-14 rounded-lg flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-creo-purple">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Technology Assessment</h3>
              <p className="text-gray-600">
                We analyze your requirements and select the most appropriate technology stack for your specific needs.
              </p>
            </div>
            
            <div className="reveal" style={{ animationDelay: "0.2s" }}>
              <div className="bg-creo-soft-purple h-14 w-14 rounded-lg flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-creo-purple">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Architecture Design</h3>
              <p className="text-gray-600">
                We design a robust, scalable architecture that serves as the foundation for your application.
              </p>
            </div>
            
            <div className="reveal" style={{ animationDelay: "0.3s" }}>
              <div className="bg-creo-soft-purple h-14 w-14 rounded-lg flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-creo-purple">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Agile Development</h3>
              <p className="text-gray-600">
                We follow agile methodologies, working in sprints and delivering incremental functionality with regular feedback loops.
              </p>
            </div>
            
            <div className="reveal" style={{ animationDelay: "0.4s" }}>
              <div className="bg-creo-soft-purple h-14 w-14 rounded-lg flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-creo-purple">04</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Automated Testing</h3>
              <p className="text-gray-600">
                We implement comprehensive testing strategies, including unit tests, integration tests, and end-to-end tests to ensure quality.
              </p>
            </div>
            
            <div className="reveal" style={{ animationDelay: "0.5s" }}>
              <div className="bg-creo-soft-purple h-14 w-14 rounded-lg flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-creo-purple">05</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">CI/CD Implementation</h3>
              <p className="text-gray-600">
                We set up continuous integration and deployment pipelines to streamline development and release processes.
              </p>
            </div>
            
            <div className="reveal" style={{ animationDelay: "0.6s" }}>
              <div className="bg-creo-soft-purple h-14 w-14 rounded-lg flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-creo-purple">06</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Monitoring & Support</h3>
              <p className="text-gray-600">
                We implement monitoring solutions and provide ongoing support to ensure your application runs smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 reveal">Our Technology Partners</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Placeholder partner logos */}
            {[...Array(6)].map((_, index) => (
              <div 
                key={index}
                className="bg-white h-24 rounded-md flex items-center justify-center reveal"
                style={{ animationDelay: `0.${index + 1}s` }}
              >
                <div className="h-12 w-36 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
          
          <p className="mt-12 text-gray-600 max-w-2xl mx-auto reveal" style={{ animationDelay: "0.7s" }}>
            We partner with leading technology providers to ensure we deliver the best solutions for our clients. These partnerships give us early access to new features, dedicated support, and specialized training.
          </p>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-creo-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">Ready to Leverage Our Technical Expertise?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 reveal" style={{ animationDelay: "0.1s" }}>
            Contact us to discuss how our technical capabilities can help solve your business challenges.
          </p>
          <CTAButton 
            size="lg" 
            className="bg-white text-creo-purple hover:bg-gray-100 reveal" 
            style={{ animationDelay: "0.2s" }}
          >
            Schedule a Technical Consultation
          </CTAButton>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Technologies;
