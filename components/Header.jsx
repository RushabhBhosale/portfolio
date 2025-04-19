'use client'

import { useEffect, useState } from "react"
import Logo from "./Logo"
import MobileNav from "./MobileNav"
import Nav from "./Nav"
import ThemeToggler from "./ThemeToggler"
import { usePathname } from "next/navigation"

const Header = () => {

   const [header, setHeader] = useState(false);
   const pathname = usePathname();

   useEffect(() => {
      const scrollYPosition = window.addEventListener("scroll", () => {
         window.scrollY > 50 ? setHeader(true) : setHeader(false);
      });

      return () => window.removeEventListener("scroll", scrollYPosition);
   }, []);

   return (
      <header className=
         {`${header ? 'py-3 bg-white shadow-lg dark:bg-accent/40 dark:backdrop-blur-sm' : 'py-4 dark:bg-transparent'}
       sticky top-0 transition-all z-50 ${pathname === '/' && 'bg-[#fef9f7]'}`} >
         <div className="container mx-auto">
            <div className="flex justify-between items-center">
               <Logo bg='dark:bg-white/30' />
               <div className="flex items-center gap-x-6">
                  <Nav
                     containerStyles='hidden xl:flex gap-x-8 itmes-center'
                     linkStyles='relative hover:text-primary transition-all'
                     underLineStyles='absolute left-0 top-full h-[2px] w-full bg-primary'
                  />
                  <ThemeToggler />
                  <div className="xl:hidden">
                     <MobileNav />
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header