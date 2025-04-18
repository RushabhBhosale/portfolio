import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Briefcase } from "lucide-react"
import { FaRegCalendar } from "react-icons/fa6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { coreSkills, info, qualifications, skills } from "@/utils/constants";

const About = () => {

   const getData = (arr, title) => {
      return arr.find((item) => item.title === title);
   };

   return (
      <section className="xl:h-[860px] pb-12 xl:py-24">
         <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About Me</h2>
         </div>
         <div className="flex justify-center mx-auto xl:w-[700px] md:w-[500px]">
            <Tabs defaultValue="personal" className="w-full">
               <TabsList className="w-full grid-cols-3 p-1 justify-between border-2">
                  <TabsTrigger className='w-[162px]' value='personal'>Personal Info</TabsTrigger>
                  <TabsTrigger className='w-[162px]' value='qualifications'>Qualifications</TabsTrigger>
                  <TabsTrigger className='w-[162px]' value='skills'>Skills</TabsTrigger>
               </TabsList>
               <div className="text-lg mt-12 xl:mt-8">
                  <TabsContent value='personal'>
                     <div className="text-center">
                        <h3>Personal Info</h3>
                        <p className="subtitle mx-auto xl:mx-0">I Specialize in crafting inituitive websites with cutting egde technologies & frameworks, delivering dynamic and engaging user experiences.</p>

                        <div className="grid xl:grid-cols-2 gap-x-44 gap-5 mb-12">
                           {info.map((item, index) => (
                              <div key={index} className="flex items-center gap-x-4 mx-auto xl:mx-0">
                                 <div className="text-primary">{item.icon}</div>
                                 <div>{item.text}</div>
                              </div>
                           ))}
                        </div>
                        <div className="flex flex-col gap-y-2">
                           <div className="text-primary">Languages</div>
                           <div className="border-b border-border"></div>
                           <div>Marathi, Hindi, English, Japanese N5</div>
                        </div>
                     </div>
                  </TabsContent>
                  <TabsContent value='qualifications'>
                     <div>
                        <h3 className="h3 mb-8 text-center">My Journey</h3>
                        <div className="flex flex-col xl:flex-row px-7 xl:px-0 justify-between">
                           <div className="mb-10 xl:mb-0">
                              <div className="flex gap-x-4 items-center text-primary text-[22px]">
                                 <GraduationCap size={28} />
                                 <div className="capitalize font-medium">
                                    {getData(qualifications, 'education').title}
                                 </div>
                              </div>
                              <div>
                                 {getData(qualifications, 'education').data.map((item, index) => {
                                    const { qualification, college, year } = item;
                                    return (
                                       <div key={index} className="flex mt-6 gap-x-8 group">
                                          <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                             <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-1000"></div>
                                          </div>
                                          <div className="flex flex-col gap-y-2">
                                             <div className="text-xl font-semibold leading-none mb-1">{college}</div>
                                             <div className="text-lg leading-none text-muted-foreground">{qualification}</div>
                                             <div className="text-base font-medium">{year}</div>
                                          </div>
                                       </div>
                                    )
                                 })}
                              </div>
                           </div>
                           <div>
                              <div className="flex gap-x-4 items-center text-primary text-[22px]">
                                 <Briefcase size={28} />
                                 <div className="capitalize font-medium">
                                    {getData(qualifications, 'experience').title}
                                 </div>
                              </div>
                              <div>
                                 {getData(qualifications, 'experience').data.map((item, index) => {
                                    const { company, role, year } = item;
                                    return (
                                       <div key={index} className="flex mt-6 gap-x-8 group">
                                          <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                             <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-1000"></div>
                                          </div>
                                          <div className="flex flex-col gap-y-2">
                                             <div className="text-xl font-semibold leading-none mb-1">{company}</div>
                                             <div className="text-lg leading-none text-muted-foreground">{role}</div>
                                             <div className="text-base font-medium">{year}</div>
                                          </div>
                                       </div>
                                    )
                                 })}
                              </div>
                           </div>
                        </div>
                     </div>
                  </TabsContent>
                  <TabsContent value="skills">
                     <div className="text-center">
                        <h3 className="h3 mb-8 xl:mb-12">Core Skills</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                           {coreSkills.map((skill, index) => (
                              <div key={index} className="p-3 rounded-lg border border-border bg-muted/20 shadow-sm">
                                 <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
                                    <span className="text-xs text-primary font-semibold">{skill.level}%</span>
                                 </div>
                                 <div className="w-full bg-border h-2 rounded-full">
                                    <div
                                       className="h-2 rounded-full bg-primary"
                                       style={{ width: `${skill.level}%` }}
                                    />
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                  </TabsContent>


               </div>
            </Tabs>
         </div>
      </section>
   )
}

export default About