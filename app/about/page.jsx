import React from "react";

const timeline = [
   {
      year: "1st April 2024 - Present",
      title: "Software Developer @ Peracto Infotect",
      description: "Working on mobile & web apps using React Native, Angular Ionic, and MERN stack."
   },
   {
      year: "October 2023 - March 2024",
      title: "Next.js Developer @ Tchkendr",
      description: "Worked on full-stack projects using Next.js, including frontend UI and backend APIs."
   },
   {
      year: "Feb 2023 - August 2023",
      title: "Digital Marketing Executive @ SNK Web Solutions",
      description: "Focused on SEO, content strategy, and online brand growth."
   },
   {
      year: "Nov 2022 - Jan 2023",
      title: "SEO Intern @ Finplus",
      description: "Worked on website SEO optimization, keyword research, and analytics reporting."
   },
   {
      year: "2020 - 2023",
      title: "BMM - Bachelors in Mass Media @ Khalsa College, Matunga",
      description: "Studied media communication, marketing, and digital content strategy."
   },
   {
      year: "2018 - 2020",
      title: "12th Grade @ Wilson College, Girgaon",
      description: "Completed HSC with an arts and communication focus."
   },
   {
      year: "2017 - 2018",
      title: "10th Grade @ Holy Name High School, Colaba",
      description: "Graduated SSC, beginning foundation in digital marketing and tech curiosity."
   }
];


const technologies = [
   "React", "Next.js", "Redux", "Tailwind CSS", "TypeScript",
   "Node.js", "MongoDB", "React Native", "Ionic"
];

const About = () => {
   return (
      <section className="min-h-screen py-20 px-6 md:px-16 overflow-hidden">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
               <h1 className="text-5xl font-extrabold mb-4 text-primary">
                  About Me
               </h1>
               <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
               <div className="bg-accent p-8 rounded-lg shadow-xl hover:shadow-2xl hover:translate-y-1 transform transition-all duration-300 border border-border">
                  <div className="text-primary mb-4">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                     </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-primary">Who I Am</h2>
                  <p className="text-card-foreground">I'm Rushabh Bhosale, 22 y/o dev passionate about building sleek, high-performing apps with modern tech stacks.</p>
               </div>

               <div className="bg-card p-8 rounded-lg shadow-xl hover:shadow-2xl hover:translate-y-1 transform transition-all duration-300 border border-border">
                  <div className="text-primary mb-4">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                     </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-primary">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                     {technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">
                           {tech}
                        </span>
                     ))}
                  </div>
               </div>

               <div className="bg-accent p-8 rounded-lg shadow-xl hover:shadow-2xl hover:translate-y-1 transform transition-all duration-300 border border-border">
                  <div className="text-primary mb-4">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                     </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-primary">Fun Stuff</h2>
                  <p className="text-card-foreground">Into movies, anime, tech, and traveling to reset the brain and fuel creativity.</p>
               </div>
            </div>

            {/* Timeline */}
            <div className="mb-12">
               <h2 className="text-2xl font-semibold mb-8 text-center text-primary">My Journey</h2>

               <div className="border-l border-primary pl-6 space-y-8 ml-2">
                  {timeline.map((item, index) => (
                     <div key={index} className="relative">
                        <div className="absolute w-3.5 h-3.5 bg-primary rounded-full -left-[31px] top-1" />
                        <div className="absolute w-2 h-2 bg-secondary rounded-full -left-[28px] top-[7.2px]" />
                        <h3 className="text-lg font-semibold text-primary mb-0.5">{item.title}</h3>
                        <p className="text-xs text-muted-foreground mb-1">{item.year}</p>
                        <p className="text-sm text-card-foreground">{item.description}</p>
                     </div>
                  ))}
               </div>
            </div>


            {/* Quote */}
            <div className="bg-accent p-8 rounded-lg shadow-xl border border-border text-center mx-auto max-w-3xl">
               <svg className="h-8 w-8 text-primary mb-4 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
               </svg>
               <p className="text-lg text-card-foreground italic mb-4">Building meaningful applications that solve real problems is what drives me every day.</p>
               <p className="text-primary font-medium">- Rushabh Bhosale</p>
            </div>

            {/* Contact CTA */}
            <div className="mt-20 text-center">
               <h2 className="text-3xl font-bold mb-6 text-primary">Let's Connect</h2>
               <p className="text-card-foreground mb-8 max-w-2xl mx-auto">Interested in working together or just want to say hello? Feel free to reach out!</p>
               <button className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all duration-300">
                  Get In Touch
               </button>
            </div>
         </div>
      </section>
   );
};

export default About;