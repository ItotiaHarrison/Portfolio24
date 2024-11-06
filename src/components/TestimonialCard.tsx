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
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <Quote className="h-8 w-8 text-indigo-600 mb-4" />
      <p className="text-gray-600 mb-6 italic">{content}</p>
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;