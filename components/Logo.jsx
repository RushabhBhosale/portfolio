import Link from "next/link"
import Image from "next/image"

const Logo = ({ bg, hidden }) => {
   return (
      <Link href='/'>
         <Image
            src='/logo.png'
            width={39}
            height={36}
            priority
            className={`dark:py-1 dark:scale-125 dark:rounded-full dark:bg-white/15 ${bg} ${hidden}`}
            alt="Logo"
         />
      </Link>
   )
}

export default Logo