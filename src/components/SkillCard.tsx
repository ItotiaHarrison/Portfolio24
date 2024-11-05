import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  Icon: LucideIcon;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, Icon, skills }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="h-6 w-6 text-indigo-600" />
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium hover:bg-indigo-100 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;