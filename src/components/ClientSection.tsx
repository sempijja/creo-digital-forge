
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const clients = [
  { name: "TechCorp", logo: "https://via.placeholder.com/150x50?text=TechCorp" },
  { name: "InnovateX", logo: "https://via.placeholder.com/150x50?text=InnovateX" },
  { name: "DigitalFlow", logo: "https://via.placeholder.com/150x50?text=DigitalFlow" },
  { name: "NextWave", logo: "https://via.placeholder.com/150x50?text=NextWave" },
  { name: "FutureScale", logo: "https://via.placeholder.com/150x50?text=FutureScale" },
  { name: "GrowthLabs", logo: "https://via.placeholder.com/150x50?text=GrowthLabs" },
];

const ClientSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-black to-indigo-950">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-white">Trusted by Industry Leaders</h2>
          <p className="mt-2 text-gray-400">Companies that rely on our expertise</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <Card 
              key={index}
              className={`flex items-center justify-center py-6 px-4 bg-gray-900 border-gray-800 transition-all duration-300 ${
                hoveredIndex === index ? "border-indigo-500 shadow-lg shadow-indigo-500/20" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent className="p-0">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-10 opacity-70 hover:opacity-100 transition-opacity" 
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
