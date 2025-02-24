import React from "react";
import ExperienceItem from "./experienceItem";
export default function Experience() {
  return (
    <div className="pb-10 grid gap-20 pt-20 -translate-y-20" id="Experience">
      <div className="grid gap-10">
        <div className="flex gap-3 font-medium text-[#EEEEEE] text-5xl">
          <div>
            <span className="text-[#00FFB2]">W</span>orking
          </div>
          <div>experience</div>
        </div>
        <div className="grid gap-3 text-lg">
          <h3 className="text-[#EEEEEE]">
            Hi, I’m <span className="text-[#00FFB2]">W</span>ilson{" "}
            <span className="text-[#00FFB2]">S</span>aul , a Web Developer
            passionate about crafting sleek, high-performance websites and
            applications. With expertise in front-end and back-end development,
          </h3>
          <h3 className="text-[#EEEEEE]">
            My experience in outsourcing has allowed me to work with diverse
            clients and industries, delivering efficient and innovative web
            experiences. When I’m not coding, you’ll find me immersed in
            photography, jamming to math rock, or hanging out with my cats.
            Let’s create something awesome together!
          </h3>
        </div>
      </div>
      <div className="flex w-[70%] max-w-[1600px] m-auto">
        <div className="translate-y-5">
          <div className="w-[1px] h-full bg-[#4a4a4a] rounded-full"></div>
        </div>
        <ul className="grid gap-20">
          {workingexperience.map((experience) => (
            <ExperienceItem key={experience.title} experience={experience} />
          ))}
        </ul>
      </div>
    </div>
  );
}

const workingexperience = [
  {
    title: "React developer",
    date: "july 2022 - august 2022",
    description:
      "Building websites using common technologies like Html, Css, Boostrap and Tailwind css and evolving them to add new features using libraries and frameworks like",
    functions: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam non sribus. Commodi minima alias non velit! Ipsum, placeat impedit.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eum inventore rep luptatem minus! Numquam reprehenderit, amet quam autem quas quaerat.",
      "Building websites using common technologies like Html, Css, Boostrap and Tailwind css and evolving them to add new features using libraries and frameworks like",
    ],
  },
  {
    title: "FullStack Developer",
    date: "august 2022 - july 2023",
    description:
      "Building websites using common technologies like Html, Css, Boostrap and Tailwind css and evolving them to add new features using libraries and frameworks like",
    functions: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam non sribus. Commodi minima alias non velit! Ipsum, placeat impedit.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eum inventore rep luptatem minus! Numquam reprehenderit, amet quam autem quas quaerat.",
      "Building websites using common technologies like Html, Css, Boostrap and Tailwind css and evolving them to add new features using libraries and frameworks like",
    ],
  },
  {
    title: "Freelance Developer",
    date: "august 2022 - july 2023",
    description:
      "Building websites using common technologies like Html, Css, Boostrap and Tailwind css and evolving them to add new features using libraries and frameworks like",
    functions: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam non sribus. Commodi minima alias non velit! Ipsum, placeat impedit.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eum inventore rep luptatem minus! Numquam reprehenderit, amet quam autem quas quaerat.",
      "Building websites using common technologies like Html, Css, Boostrap and Tailwind css and evolving them to add new features using libraries and frameworks like",
    ],
  },
];
