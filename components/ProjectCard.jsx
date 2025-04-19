import Link from 'next/link'
import { Github, Link2Icon } from 'lucide-react'
import { Badge } from './ui/badge'

const ProjectCard = ({ project }) => {
  return (
    <div className="relative group rounded-xl overflow-hidden w-full lg:w-72 h-44">
      <div className={`absolute inset-0 bg-cover bg-center ${project.image} bg-tertiary dark:bg-secondary/40`} />

      <div className="absolute inset-0 bg-black/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 z-10 flex flex-col items-center justify-center text-white px-4 text-center">
        <div className="text-lg font-bold mb-2">{project.name}</div>
        <div className="flex gap-4">
          <Link href={project.link}>
            <div className="bg-secondary w-10 h-10 rounded-full flex justify-center items-center hover:scale-110 transition">
              <Link2Icon size={18} />
            </div>
          </Link>
          <Link href={project.github}>
            <div className="bg-secondary w-10 h-10 rounded-full flex justify-center items-center hover:scale-110 transition">
              <Github size={18} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
