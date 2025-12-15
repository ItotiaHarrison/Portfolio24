import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, image, content }) => {
  return (
    <div className="fintech-card group relative">
      <Quote className="h-8 w-8 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
      <blockquote className="text-slate-300 mb-6 italic leading-relaxed font-serif text-lg">
        "{content}"
      </blockquote>
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-slate-600"
        />
        <div>
          <h4 className="font-serif font-semibold text-slate-100">{name}</h4>
          <p className="text-slate-400 text-sm font-mono">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;