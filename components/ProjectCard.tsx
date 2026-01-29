
import React from 'react';
import { CaseStudy } from '../types';

interface ProjectCardProps {
  project: CaseStudy;
  onClick: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="group cursor-pointer space-y-4"
      onClick={() => onClick(project.id)}
    >
      <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-stone-100">
        <img 
          src={project.image} 
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500" />
      </div>
      
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest font-semibold text-amber-700 px-2 py-0.5 border border-amber-200 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-serif leading-tight group-hover:text-amber-700 transition-colors">
          {project.title}
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed max-w-md">
          {project.subtitle}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
