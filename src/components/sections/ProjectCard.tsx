
import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  delay?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  category, 
  image, 
  delay = "0s" 
}: ProjectCardProps) => {
  return (
    <div 
      className="group rounded-xl overflow-hidden shadow-lg reveal"
      style={{ animationDelay: delay }}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-creo-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 text-white">
            <span className="text-sm font-medium bg-creo-purple/80 px-3 py-1 rounded-full">
              {category}
            </span>
            <button className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="h-5 w-5 text-creo-dark" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-creo-purple transition-colors">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
