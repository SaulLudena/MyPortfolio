import { FaBriefcase } from "react-icons/fa";
import ProjectItem from "./projectItems";
export default function project() {
  return (
    <div className="col-span-6 text-white max-xl:col-span-12">
      <div className="grid gap-2">
        <h1 className="text-[#FF5053] flex items-center gap-2">
          <FaBriefcase />
          Portfolio
        </h1>
        <div className="relative">
          <div className=" w-24 h-[1px] bg-[#FF5053] z-10 absolute"></div>
          <div className=" w-full h-[1px] bg-[#4B4B4B] z-0"></div>
        </div>
      </div>
      <div className="py-4 ">
        <p className="pb-2 text-[#EDEDED]">+ Look at me now !</p>
        <ul className="grid w-full gap-2">
          {aboutmedata.map((item, index) => (
            <ProjectItem item={item} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

const aboutmedata = [
  {
    projectName: "Moshonku",
    description: "Build your favorite band poster in seconds",
    repo: "https://github.com/SaulLudena/Moshonku",
    urldemo: "https://moshonku.vercel.app",
  },
  {
    projectName: "Shipunk",
    description: "Wiki for everything about cyberpunk edgerunners",
    repo: "https://github.com/SaulLudena/shipunk",
    urldemo: "https://shipunk.vercel.app",
  },
  {
    projectName: "Nuevamente",
    description: "Nice landing page for a marketing agency",
    repo: "https://github.com/SaulLudena/nuevamntlp",
    urldemo: "https://nuevamnt.com",
  },
];
