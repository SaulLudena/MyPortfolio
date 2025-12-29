import { GiBootPrints } from "react-icons/gi";
export default function Contact() {
  const bgColors = ["#222222", "#2B2B2B", "#383838"];
  return (
    <div className="col-span-12 text-white max-xl:col-span-12 max-xl:mb-8 ">
      <div className="grid gap-2 ">
        <h1 className="text-[#1DFFD2] flex items-center gap-2">
          <GiBootPrints />
          Contact me
        </h1>
        <div className="relative">
          <div className=" w-20 h-[1px] bg-[#1DFFD2] z-10 absolute"></div>
          <div className=" w-full h-[1px] bg-[#4B4B4B] z-0"></div>
        </div>
      </div>
      <div className="pt-4 ">
        <div>
          <p className="pb-2 text-[#EDEDED]">+ I know a man who...</p>
          <p className="text-zinc-400 max-lg:text-sm">
            Some call him Saul — a developer who turns complex ideas into
            seamless digital experiences. Reach out, and maybe we’ll build
            something remarkable.
          </p>
        </div>
        <ul className="grid w-full grid-cols-3 py-5">
          {aboutmedata.map((item, index) => {
            const isGmail = item.data.toLowerCase() === "gmail";
            const link = isGmail ? `mailto:${item.subdata}` : item.subdata;

            return (
              <li
                key={index}
                style={{ backgroundColor: bgColors[index % bgColors.length] }}
                className="flex items-center justify-center hover:bg-zinc-900 transition"
              >
                <a
                  href={link}
                  target={isGmail ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="w-full p-10 text-lg text-center max-lg:text-sm text-[#1DFFD2]"
                >
                  {item.data}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
const aboutmedata = [
  {
    data: "Linkedin",
    subdata: "https://www.linkedin.com/in/wilson-cornejo",
  },
  {
    data: "Gmail",
    subdata: "cornejo758@gmail.com",
  },
  {
    data: "Github",
    subdata: "https://github.com/SaulLudena",
  },
];
