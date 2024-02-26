'use client'
import Link from "next/link"
import { Button } from "./ui/button"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import ProjectCard from "./ProjectCard"

const projectData = [
   {
      image: 'bg-movie',
      category: "next js",
      name: "Movie DB",
      description: "Next.js movie website, integrating TMDB API for a vast collection. Tailwind CSS brings modern styling, creating a user-friendly platform where movie lovers can explore, discover, and share their favorites..",
      link: "https://sparkly-babka-1f1489.netlify.app/",
      github: "https://github.com/RushabhBhosale/nextjs-movie",
   },
   {
      image: 'bg-react-ecom',
      category: "react js",
      name: "The Sofa Store",
      description: "React.js Firebase Sofa Store, where modern design meets comfort. With responsive design powered by Tailwind CSS, explore our curated collection, personalize your space, and elevate your home decor with ease.",
      link: "https://firebase-react-redux-app.netlify.app/",
      github: "https://github.com/RushabhBhosale/Firebase-react-ecommerce/tree/main/firebase-ecommerce-app",
   },
   {
      image: 'bg-sneaker',
      category: "javascript",
      name: "Fashion City",
      description: "Our sleek and responsive design, tailored with Tailwind CSS, offers a seamless shopping experience for fashion enthusiasts. Discover the latest trends, find your signature look, ",
      link: "https://best-ecommerce.netlify.app/",
      github: "https://github.com/RushabhBhosale/Sneakers",
   },
   {
      image: 'bg-next-ecom',
      category: "next js",
      name: "Bloggy",
      description: "Next.js blog website. Powered by Tailwind CSS, our platform provides an intuitive, responsive interface for readers to explore and engage with insightful content. Experience seamless navigation, discover captivating posts, and join a vibrant community of bloggers, all in one place",
      link: "https://nextjs-blog-delta-swart-83.vercel.app/",
      github: "https://github.com/RushabhBhosale/nextjs-blog",
   },
   {
      image: 'bg-next-blog',
      category: "next js",
      name: "Statinary Store",
      description: "Next.js Stationary website. Powered by Tailwind CSS, our platform provides a seamless shopping experience, with a vast collection of stationery items for every need. Find the perfect tools to inspire your productivity, whether it's for work, school, or personal projects",
      link: "https://ecommerce-tp1z.vercel.app/",
      github: "",
   },  
]

const Work = () => {
   return (
      <section className="relative mb-16 xl:mb-48">
         <div className="container mx-auto">
            <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
               <h2 className="section-title mb-4">Latest Projects</h2>
               <p className="subtitle mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, consequuntur.</p>
               <Link href='/projects'>
                  <Button>All Projects</Button>
               </Link>
            </div>
            <div className="xl:absolute xl:max-w-[1000px] right-0 top-0">
               <Swiper
                  className="h-[480px]"
                  slidesPerView={1}
                  breakpoints={{
                     640: {
                        slidesPerView: 2,
                     },
                  }}
                  spaceBetween={30}
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
               >
                  {projectData.map((project, index) => (
                     <SwiperSlide key={index}>
                        <ProjectCard project={project} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </section>
   )
}

export default Work