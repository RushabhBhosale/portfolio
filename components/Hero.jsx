import Link from "next/link"
import { Send, Download } from "lucide-react"
import { RiArrowDownSLine } from "react-icons/ri";
import { Button } from "./ui/button";
import { MdMobileFriendly } from "react-icons/md";
import Socials from "./Socials";
import DevImg from "./DevImg";
import Badge from "./Badge";
import Image from "next/image";

const Hero = () => {
   return (
      <div className="py-12 mb-4 md:my-0 xl:py-24 h-[84vh] overflow-hidden xl:pt-11 bg-hero bg-no-repeat dark:bg-none bg-cover">
         <div className="container mx-auto">
            <div className="flex justify-center gap-x-8">
               <div className=" flex max-w-[720px] flex-col justify-center mx-auto text-center">
                  <div className="text-sm tracking-[4px] uppercase text-primary font-semibold mb-4">Software Developer</div>
                  <h1 className="h1 mb-4">Hi, I'm Rushabh Bhosale <br />
                     I write Code.
                  </h1>
                  <div className="relative mb-3 mx-auto w-44 h-24 rounded-3xl overflow-hidden">
                     <Image src="/me-3.jpeg" alt="Rushabh Bhosale" fill className="object-cover object-top" />
                  </div>
                  <p className="subtitle mx-auto">
                     Experienced Software developer proficient with Next.js, React, Redux, and popular CSS frameworks like Bootstrap, and Tailwind CSS and also mobile app in React Native, Java or Ionic
                  </p>
                  <div className="flex flex-col gap-y-3 gap-x-3 md:flex-row mx-auto mb-12">
                     <Link href='/'>
                        <Button className="gap-x-2">Contact Me <Send size={18} /></Button>
                     </Link>
                     <Link href='/projects'>
                        <Button variant='secondary' className="gap-x-2">Projects</Button>
                     </Link>
                  </div>

                  <Socials
                     containerStyles='flex gap-x-2 mx-auto'
                     iconStyles='text-foreground hover:bg-secondary/80 p-3 rounded-md text-[22px] hover:text-primary transition-all'
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Hero
