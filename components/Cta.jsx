import Link from 'next/link'
import { Button } from './ui/button'

const Cta = () => {
   return (
      <section className='py-12 bg-tertiary dark:bg-secondary/40'>
         <div className="container mx-auto">
            <div className="flex flex-col items-center">
               <h2 className='xl:h2 text-[24px] text-center max-w-xl mb-8'>
                  Prepared to turn your ideas into reality? I'm here to help
               </h2>
               <Link href='/'>
                  <Button>Contact me</Button>
               </Link>
            </div>
         </div>
      </section>
   )
}

export default Cta