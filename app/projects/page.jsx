'use client'

import ProjectCard from "@/components/ProjectCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

const projectData = [
  {
     image: 'bg-movie',
     category: "next js",
     name: "Movie DB",
     description: "Next.js movie website, integrating TMDB API for a vast collection. Tailwind CSS brings modern styling, creating a user-friendly platform where movie lovers can explore, discover, and share their favorites..",
     link: "/",
     github: "/",
  },
  {
     image: 'bg-react-ecom',
     category: "react js",
     name: "The Sofa Store",
     description: "React.js Firebase Sofa Store, where modern design meets comfort. With responsive design powered by Tailwind CSS, explore our curated collection, personalize your space, and elevate your home decor with ease.",
     link: "/",
     github: "/",
  },
  {
     image: 'bg-sneaker',
     category: "javascript",
     name: "Fashion City",
     description: "Our sleek and responsive design, tailored with Tailwind CSS, offers a seamless shopping experience for fashion enthusiasts. Discover the latest trends, find your signature look, ",
     link: "/",
     github: "/",
  },
  {
     image: 'bg-next-ecom',
     category: "next js",
     name: "Bloggy",
     description: "Next.js blog website. Powered by Tailwind CSS, our platform provides an intuitive, responsive interface for readers to explore and engage with insightful content. Experience seamless navigation, discover captivating posts, and join a vibrant community of bloggers, all in one place",
     link: "/",
     github: "/",
  },
  {
     image: 'bg-next-blog',
     category: "next js",
     name: "Statinary Store",
     description: "Next.js Stationary website. Powered by Tailwind CSS, our platform provides a seamless shopping experience, with a vast collection of stationery items for every need. Find the perfect tools to inspire your productivity, whether it's for work, school, or personal projects",
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