import ProjectItem from "../projects/projectItem";
export default function Projects() {
  return (
    <div className="grid py-20 mt-20 text-white gap-28 ">
      <div className="flex text-4xl">
        <h1 className="font-medium max-lg:text-xl text-[#FF002E]">T</h1>
        <h1 className="font-medium max-lg:text-xl">
          ake a look to my state of the art projects
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-32 max-xl:grid-cols-1 max-lg:pb-20">
        {projects.map((project) => (
          <ProjectItem key={project.project_id} project={project} />
        ))}
      </div>
    </div>
  );
}
const projects = [
  {
    project_id: 1,
    project_name: "Shipunk",
    project_description: "Wiki site of cyberpunk edgerunners",
    project_url_demo: "https://shipunk.vercel.app",
    project_demo_status: true,
    project_url_github: "https://github.com/SaulLudena/shipunk",
    project_image:
      "https://res.cloudinary.com/dbtzbuew2/image/upload/v1691617734/Frame_103_daqlxd.png",
    project_tech_used: ["NextJS", "TailwindCss", "Vercel"],
  },
  {
    project_id: 2,
    project_name: "Necoco",
    project_description: "Social media app to post with the world",
    project_url_demo: "http://www.google.com",
    project_demo_status: false,
    project_url_github: "https://github.com/SaulLudena/Necoco",
    project_image:
      "https://res.cloudinary.com/dbtzbuew2/image/upload/v1691617734/Frame_101_wmtlat.png",
    project_tech_used: ["NextJs", "TailwindCss", "Vercel"],
  },
  {
    project_id: 3,
    project_name: "NecocoAPI",
    project_description: "API backend server for necoco frontend",
    project_url_demo: "http://www.google.com",
    project_demo_status: false,
    project_url_github: "https://github.com/SaulLudena/NecocoBackend",
    project_image:
      "https://res.cloudinary.com/dbtzbuew2/image/upload/v1701051504/Frame_159_zg9fi5.png",
    project_tech_used: ["ExpressJs", "PrismaORM", "MySql"],
  },
  {
    project_id: 4,
    project_name: "ChatBot",
    project_description: "A little chatbot to talk with",
    project_demo_status: false,
    project_url_demo: "http://www.google.com",
    project_url_github: "https://github.com/SaulLudena/chatbot",
    project_image:
      "https://res.cloudinary.com/dbtzbuew2/image/upload/v1701324877/Frame_160_vas7a6.png",
    project_tech_used: ["Python", "RiverScript", "tkinter"],
  },
];
