'use client'

import ProjectCard from "@/components/ProjectCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

const projectData = [
  {
    image: '/work/3.png',
    category: "react js",
    name: "Nexa Website",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nisi at numquam blanditiis dolorum quas.",
    link: "/",
    github: "/",
  },
  {
    image: '/work/4.png',
    category: "next js",
    name: "Nexa Website",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nisi at numquam blanditiis dolorum quas.",
    link: "/",
    github: "/",
  },
  {
    image: '/work/2.png',
    category: "fullstack",
    name: "Nexa Website",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nisi at numquam blanditiis dolorum quas.",
    link: "/",
    github: "/",
  },
  {
    image: '/work/1.png',
    category: "react js",
    name: "Nexa Website",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nisi at numquam blanditiis dolorum quas.",
    link: "/",
    github: "/",
  },
  {
    image: '/work/3.png',
    category: "fullstack",
    name: "Nexa Website",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nisi at numquam blanditiis dolorum quas.",
    link: "/",
    github: "/",
  },
  {
    image: '/work/4.png',
    category: "next js",
    name: "Nexa Website",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nisi at numquam blanditiis dolorum quas.",
    link: "/",
    github: "/",
  },
  {
    image: '/work/2.png',
    category: "next js",
    name: "Nexa Website",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nisi at numquam blanditiis dolorum quas.",
    link: "/",
    github: "/",
  },
  {
    image: '/work/1.png',
    category: "fullstack",
    name: "Nexa Website",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nisi at numquam blanditiis dolorum quas.",
    link: "/",
    github: "/",
  },
]


const uniqueCategories = ['all projects', ...new Set(projectData.map((item) => item.category))]

const Projects = () => {

  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filterProjects = projectData.filter((project) => (
    category === 'all projects' ? project : project.category === category
  ))

  return (
    <section className="min-h-screen pt-12 mb-24 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        <Tabs defaultValue={category}>
          <TabsList className='w-full h-full flex flex-wrap lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => (
              <TabsTrigger
                value={category}
                onClick={() => setCategory(category)}
                className='capitalize  w-[142px] md:w-auto'
                key={index}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filterProjects.map((project, index) => (
              <TabsContent value={category} key={index}>
                <ProjectCard project={project} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects