import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const links = [
   { path: "/", name: "Home" },
   { path: "/projects", name: "My Projects" },
]

const Nav = ({ containerStyles, linkStyles, underLineStyles, dark }) => {
   const path = usePathname();
   return (
      <nav className={`${containerStyles} ${dark}`}>
         {links.map((link) => (
            <Link
               key={link.name}
               href={link.path}
               className={linkStyles}
            >
               {link.path === path && (
                  <motion.span
                     initial={{ y: "-100%" }}
                     animate={{ y: 0 }}
                     transition={{ type: "tween" }}
                     layoutId='underline'
                     className={underLineStyles}
                  >
                  </motion.span>
               )}
               {link.name}
            </Link>
         ))}
      </nav>
   )
}

export default Nav