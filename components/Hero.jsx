import Link from "next/link"
import { Send, Download } from "lucide-react"
import { RiArrowDownSLine } from "react-icons/ri";
import { Button } from "./ui/button";
import { MdMobileFriendly } from "react-icons/md";
import Socials from "./Socials";
import DevImg from "./DevImg";
import Badge from "./Badge";

const Hero = () => {
   return (
      <div className="py-12 mb-4 md:my-0 xl:py-24 h-[84vh] overflow-hidden xl:pt-11 bg-hero bg-no-repeat dark:bg-none bg-cover">
         <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
               <div className=" flex max-w-[720px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                  <div className="text-sm tracking-[4px] uppercase text-primary font-semibold mb-4">Front End Developer</div>
                  <h1 className="h1 mb-4">Hi, I'm Rushabh Bhosale let's connect!</h1>
                  <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                     Experienced frontend developer proficient with Next.js, React, Redux, and popular CSS frameworks like Bootstrap, and Tailwind CSS.
                  </p>
                  <div className="flex flex-col gap-y-3 gap-x-3 md:flex-row mx-auto xl:mx-0 mb-12">
                     <Link href='/'>
                        <Button className="gap-x-2">Contact Me <Send size={18} /></Button>
                     </Link>
                     <Link href='/projects'>
                        <Button variant='secondary' className="gap-x-2">Projects<Download size={18} /></Button>
                     </Link>
                  </div>

                  <Socials
                     containerStyles='flex gap-x-6 mx-auto xl:mx-0'
                     iconStyles='text-foreground text-[22px] hover:text-primary transition-all'
                  />

               </div>
               <div className="hidden xl:flex relative -mt-12">
                  <Badge
                     icon={<MdMobileFriendly />}
                     badgeText='Responsive Designs'
                     containerStyle='w-[250px] absolute top-[300px] bg-white dark:bg-accent'
                  />
                  <div className="bg-hero_shape_light dark:bg-hero_shape_dark scale-75 w-[500px] h-[500px] absolute -top-1 -right-2 bg-no-repeat"></div>
                  <DevImg
                     containerStyles='bg-hero_shape w-[510px] h-[462px] scale-75 relative bg-no-repeat bg-bottom'
                     imgSrc='/hero/dev2.png'
                  />
               </div>
            </div>
            <div className="hidden md:flex absolute bottom-44 left-2/4 xl:bottom-12">
               <RiArrowDownSLine className="text-3xl text-primary animate-bounce" />
            </div>
         </div>
      </div>
   )
}

export default Hero