import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react"
import Nav from "./Nav"
import Logo from "./Logo"

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="ps-4">
          <div>
            <Logo hidden='dark:hidden' />
            <Nav
            dark='mt-12'
              containerStyles='flex mt-6 flex-col gap-y-6'
              linkStyles='text-2xl'
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav