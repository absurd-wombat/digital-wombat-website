// src/components/ui/ProjectCard.tsx
import Link from 'next/link';
import { Project } from '@/app/lib/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className={`h-48 ${project.gradient} flex items-center justify-center`}>
        <div className="text-white text-6xl">{project.icon}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link 
          href={project.href} 
          className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}