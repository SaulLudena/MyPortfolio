import { IoHome } from "react-icons/io5";

export default function Home() {
  return (
    <div className="col-span-6 text-white max-xl:col-span-12">
      <div className="grid gap-2 ">
        <h1 className="text-[#00DF82] flex items-center gap-2">
          <IoHome />
          <span>Home</span>
        </h1>
        <div className="relative">
          <div className=" w-20 h-[1px] bg-[#00DF82] z-10 absolute"></div>
          <div className=" w-full h-[1px] bg-[#4B4B4B] z-0"></div>
        </div>
      </div>
      <div className="pt-4 ">
        <div>
          <p className="pb-2 text-[#EDEDED]">+ Overview</p>
          <p className="text-zinc-400">
            Hi, I’m{" "}
            <span className="border-b border-b-[#00DF82] text-[#00DF82] ">
              Saul
            </span>
            . I’m a software developer passionate about different areas of
            programming, including web and mobile development. I also have
            experience working with databases, version control, and{" "}
            <span>
              <span className="border-b border-b-[#33ff66] text-[#33ff66] ">
                {"   "}
                UX{" "}
              </span>
              <span>/ </span>
              <span className="border-b border-b-[#33ffc2] text-[#33ffc2] ">
                UI {"   "}
              </span>
            </span>
            design.
          </p>
        </div>
        <p className="pt-5 pb-2 text-[#EDEDED]">+ Facts</p>
        <ul className="grid w-full gap-2">
          {aboutmedata.map((item, index) => (
            <li key={index} className="flex items-center justify-between">
              <span className="px-2 py-1 text-white bg-zinc-800">
                + {item.data}
              </span>
              <span className="text-zinc-500">{item.subdata}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const aboutmedata = [
  {
    data: "year started: 2017",
    subdata: "The year everything began (chaos and curiosity)",
  },
  {
    data: "first language: Java",
    subdata: "Where I learned to break (and fix) everything",
  },
  {
    data: "Favorite tech: Next.js",
    subdata: "Clean, fast and full of possibilities",
  },
  {
    data: "Current vibe: dak mode",
    subdata: "Vitamin D not included",
  },
  {
    data: "motto: build. break. learn.",
    subdata: "The real fuel behind every line of code",
  },
];
