'use client'
import Link from "next/link"
import { Button } from "./ui/button"
import ProjectCard from "./ProjectCard"
import { projects } from "@/utils/constants"

const Work = () => {
   return (
      <section className="relative my-24">
         <div className="container mx-auto flex flex-col lg:flex-row">
            <div className="w-full lg:w-[30vw]">
               <h2 className="section-title mb-4">Latest Projects</h2>
               <p className="subtitle mb-8">Here are some of my recent projects</p>
               <Link className="hidden lg:block" href='/projects'>
                  <Button>All Projects</Button>
               </Link>
            </div>
            <div className="w-full lg:w-[70vw]">
               <div className="flex flex-wrap gap-4">
                  {projects.map((project, index) => (
                     <ProjectCard project={project} />
                  ))}
               </div>
            </div>
            <Link className="lg:hidden block mt-10" href='/projects'>
               <Button>All Projects</Button>
            </Link>
         </div>
      </section>
   )
}

export default Work