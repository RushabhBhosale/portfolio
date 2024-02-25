import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader } from './ui/card';
import { Github, Link2Icon } from 'lucide-react';
import { Badge } from './ui/badge';

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0 select-none">
        <div className='relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:dark:bg-work_project_bg_dark xl:bg-no-repeat overflow-hidden'>
          <Image
            className='absolute bottom-0 shadow-2xl'
            src={project.image}
            width={247}
            height={250}
            alt='Project'
            priority
          />
          <div className='relative'>
            <Link
              className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center xl:scale-0 xl:opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-150 absolute -bottom-[8rem] -left-[8.5rem]'
              href={project.link}>
              <Link2Icon className='text-white' />
            </Link>
            <Link
              className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center xl:scale-0 xl:opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 absolute -bottom-[8rem] -left-[4rem]'
              href={project.github}>
              <Github className='text-white' />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className='h-full py-6 px-8'>
        <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>{project.category}</Badge>
        <h4 className='h4 mb-1'>{project.name}</h4>
        <p className='text-muted-foreground text-lg'>{project.description}</p>
      </div>
    </Card>
  )
}

export default ProjectCard