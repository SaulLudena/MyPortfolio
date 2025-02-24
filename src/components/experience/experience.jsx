import React from "react";
import ExperienceItem from "./experienceItem";
export default function Experience() {
  return (
    <div className="pb-10 grid gap-20">
      <div className="grid gap-10">
        <div className="flex gap-1 font-medium text-[#EEEEEE] text-3xl">
          <div>
            <span className="text-[#00FFB2]">W</span>orking
          </div>
          <div>
            <span className="text-[#EEEEEE]">experience</span>
          </div>
        </div>
        <div className="grid gap-3">
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
      <div className="flex w-[75%] max-w-[1600px] m-auto">
        <div className="translate-y-5">
          <div className="w-1 h-full bg-[#bdbdbd] rounded-full"></div>
        </div>
        <ul className="grid gap-20">
          <ExperienceItem />
          <ExperienceItem />
          <ExperienceItem />
        </ul>
      </div>
    </div>
  );
}
