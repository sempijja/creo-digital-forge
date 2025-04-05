
import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: string;
}

const FeatureCard = ({ title, description, icon: Icon, delay = "0s" }: FeatureCardProps) => {
  return (
    <div 
      className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:border-creo-purple transition-all hover:shadow-xl reveal"
      style={{ animationDelay: delay }}
    >
      <div className="bg-creo-soft-purple h-14 w-14 rounded-lg flex items-center justify-center mb-6">
        <Icon className="h-7 w-7 text-creo-purple" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
