import Socials from "./Socials"

const Footer = () => {
  return (
    <footer className="bg-secondary py-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials
            containerStyles='flex gap-x-6 mx-auto mb-4'
            iconStyles='text-primary text-[20px] hover:text-white'
          />
          <div className="text-muted-foreground">
            Copyright &copy; Rushabh Bhosale. All rights reserved</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer