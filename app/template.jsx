'use client'

import UseScrollProgress from "@/hooks/UseScrollProgress"
import { motion } from "framer-motion"

const variants = {
   hidden: { opacity: 0 },
   enter: { opacity: 1 },
}

const Template = ({ children }) => {
   const completion = UseScrollProgress();
   return (
      <>
         <motion.main
            variants={variants}
            initial='hidden'
            animate='enter'
            transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
         >
            {children}
        
         <span
            style={{ transform: `translateY(${completion - 100}%)` }}
            className="fixed z-50 w-1 bg-primary top-0 bottom-0 right-0 transition-all duration-700"
         ></span>
          </motion.main>
      </>
   )
}

export default Template