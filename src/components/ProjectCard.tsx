import React from 'react';
//import { Github } from 'lucide-react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  //githubUrl: string;
  liveUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  //githubUrl,
  liveUrl,
}) => {
  return (
    <div className="fintech-card group overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-slate-100 mb-3">{title}</h3>
        <p className="text-slate-300 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-mono uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors font-mono text-sm uppercase tracking-wider"
          >
            <ExternalLink className="h-4 w-4" />
            <span>View Project</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;