'use client'
import { RiFacebookFill, RiGithubFill, RiInstagramFill, RiLinkedinFill } from "react-icons/ri"
import Link from 'next/link'

const icons = [
  { path: "https://www.linkedin.com/in/rushabh-bhosale-frontend-developer/?originalSubdomain=in", name: <RiLinkedinFill /> },
  { path: "https://github.com/RushabhBhosale", name: <RiGithubFill /> },
  { path: "https://www.instagram.com/r_ushabh_/", name: <RiInstagramFill /> },
  { path: "https://www.facebook.com/rushabh.bhosale.56", name: <RiFacebookFill /> },
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link key={index} href={icon.path}>
          <div className={`${iconStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  )
}

export default Socials