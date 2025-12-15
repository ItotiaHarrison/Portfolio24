import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  Icon: LucideIcon;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, Icon, skills }) => {
  return (
    <div className="fintech-card group">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="h-6 w-6 text-green-500 group-hover:scale-110 transition-transform" />
        <h3 className="font-serif text-lg font-bold text-slate-100">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-slate-700 text-slate-300 rounded-md text-sm font-mono hover:bg-green-500/20 hover:text-green-400 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;