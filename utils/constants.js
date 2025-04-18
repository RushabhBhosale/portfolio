import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { FaRegCalendar } from "react-icons/fa6";

export const projects = [
  {
    image: "bg-movie",
    category: "next js",
    name: "Movie DB",
    description:
      "Next.js movie website, integrating TMDB API for a vast collection. Tailwind CSS brings modern styling, creating a user-friendly platform where movie lovers can explore, discover, and share their favorites..",
    link: "https://sparkly-babka-1f1489.netlify.app/",
    github: "https://github.com/RushabhBhosale/nextjs-movie",
  },
  {
    image: "bg-react-ecom",
    category: "react js",
    name: "The Sofa Store",
    description:
      "React.js Firebase Sofa Store, where modern design meets comfort. With responsive design powered by Tailwind CSS, explore our curated collection, personalize your space, and elevate your home decor with ease.",
    link: "https://firebase-react-redux-app.netlify.app/",
    github:
      "https://github.com/RushabhBhosale/Firebase-react-ecommerce/tree/main/firebase-ecommerce-app",
  },
  {
    image: "bg-sneaker",
    category: "javascript",
    name: "Fashion City",
    description:
      "Our sleek and responsive design, tailored with Tailwind CSS, offers a seamless shopping experience for fashion enthusiasts. Discover the latest trends, find your signature look, ",
    link: "https://best-ecommerce.netlify.app/",
    github: "https://github.com/RushabhBhosale/Sneakers",
  },
  {
    image: "bg-next-ecom",
    category: "next js",
    name: "Bloggy",
    description:
      "Next.js blog website. Powered by Tailwind CSS, our platform provides an intuitive, responsive interface for readers to explore and engage with insightful content. Experience seamless navigation, discover captivating posts, and join a vibrant community of bloggers, all in one place",
    link: "https://nextjs-blog-delta-swart-83.vercel.app/",
    github: "https://github.com/RushabhBhosale/nextjs-blog",
  },
  {
    image: "bg-next-blog",
    category: "next js",
    name: "Statinary Store",
    description:
      "Next.js Stationary website. Powered by Tailwind CSS, our platform provides a seamless shopping experience, with a vast collection of stationery items for every need. Find the perfect tools to inspire your productivity, whether it's for work, school, or personal projects",
    link: "https://ecommerce-tp1z.vercel.app/",
    github: "",
  },
];

export const info = [
  {
    icon: <User2 size={20} />,
    text: "Rushabh Bhosale",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 9137996317",
  },
  {
    icon: <MailIcon size={20} />,
    text: "bhosalerushabh0@gmail.com",
  },
  {
    icon: <FaRegCalendar size={20} />,
    text: "Born on 23 March, 2003",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bacherlor's in Mass Media",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Nerul, Navi Mumbai",
  },
];

export const qualifications = [
  {
    title: "education",
    data: [
      {
        college: "G N Khalsa",
        qualification: "Bachelor's in Mass Media",
        year: "2020 - 2023",
      },
      {
        college: "Youtube",
        qualification: "Software Development Videos",
        year: "Since 2022",
      },
    ],
  },
  {
    title: "experience",
    data: [
      // {
      //   company: "Finpus",
      //   role: "Digital Marketing Intern",
      //   year: "2022(Apr - July)",
      // },
      // {
      //   company: "Eduvert",
      //   role: "Digital Marketing Executive",
      //   year: "2023(Apr - Aug)",
      // },
      {
        company: "TechKendr",
        role: "Mern Stack Developer",
        year: "2024(Nov - Apr)",
      },
      {
        company: "Peracto Infotech",
        role: "Software Developer",
        year: "Since April 2024",
      },
    ],
  },
];

export const coreSkills = [
  { name: "JavaScript", level: 70 },
  { name: "TypeScript", level: 55 },
  { name: "React.js", level: 80 },
  { name: "Express.js", level: 60 },
  { name: "Node.js", level: 55 },
  { name: "Mongo Db", level: 60 },
  { name: "Angular & Ionic", level: 55 },
  { name: "React Native", level: 45 },
  { name: "Tailwind, Bootstrap & Scss", level: 85 },
  { name: "Java & Kotlin", level: 25 },
  { name: "Swift", level: 15 },
  { name: "SEO", level: 65 },
];
