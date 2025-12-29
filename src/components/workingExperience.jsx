import React from "react";
import { IoSkull } from "react-icons/io5";

export default function workingExperience() {
  return (
    <div className="col-span-12 text-white max-xl:col-span-12">
      <div className="grid gap-2">
        <h1 className="text-[#FF9000] flex items-center gap-2">
          <IoSkull />
          Experience
        </h1>
        <div className="relative">
          <div className=" w-24 h-[1px] bg-[#FF9000] z-10 absolute"></div>
          <div className=" w-full h-[1px] bg-[#4B4B4B] z-0"></div>
        </div>
      </div>
      <div className="py-4 ">
        <p className="pb-2 text-[#EDEDED]">+ Once upon a time</p>
        <p className="text-zinc-400 max-lg:text-sm">
          I was working in personal and bussiness projects where i learned a lot
          and i gave a strong end-to-end solutions, lemme explain
        </p>
        <ul className="grid w-full gap-2 py-5">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-300 border-collapse">
              <thead className="text-[#A7A7A7] border-b border-zinc-700">
                <tr>
                  <th scope="col" className="pb-2 font-light">
                    Role
                  </th>
                  <th scope="col" className="pb-2 font-light">
                    Company
                  </th>
                  <th scope="col" className="pb-2 font-light max-md:hidden">
                    Period
                  </th>
                  <th scope="col" className="pb-2 font-light">
                    Tech
                  </th>
                  <th scope="col" className="pb-2 font-light">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {chambadata.map((item, index) => {
                  const firstword = item.company.split("")[0];
                  return (
                    <tr
                      key={index}
                      className="transition-colors hover:bg-zinc-900 "
                    >
                      {/* Role */}
                      <td className="p-3 border-b border-r border-zinc-700 whitespace-nowrap ">
                        {item.role}
                      </td>

                      {/* Company */}
                      <td className="p-3 border-b border-r border-zinc-700">
                        <div className="inline-flex items-center gap-2">
                          <div className="w-5 h-5 bg-[#FF9000] rounded-md flex items-center justify-center">
                            <p className="text-xs font-semibold text-black">
                              {firstword}
                            </p>
                          </div>
                          <span>{item.company}</span>
                        </div>
                      </td>

                      {/* Period */}
                      <td className="p-3 border-b border-r border-zinc-700 whitespace-nowrap max-md:hidden">
                        {item.period}
                      </td>

                      {/* Tech */}
                      <td className="p-3 border-b border-r border-zinc-700">
                        {item.tech}
                      </td>

                      {/* Notes */}
                      <td className="p-3 border-b border-zinc-700">
                        {item.notes}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </ul>
        <p className="pt-5 text-[#EDEDED] mb-2">+ Enough in 2025 ?</p>
        <p className="mb-2 text-zinc-400 max-lg:text-sm">
          Lemme show you me favorites tech for development
        </p>
        <ul className="grid w-full grid-cols-4 gap-2 mb-2 text-[#FF9000] max-lg:text-sm">
          <li className="flex items-center justify-center w-full col-span-1 px-5 py-1 text-center bg-zinc-800 ">
            + Next.js
          </li>
          <li className="flex items-center justify-center w-full col-span-1 px-5 py-1 text-center bg-zinc-800 ">
            + React.js
          </li>
          <li className="flex items-center justify-center w-full col-span-1 px-5 py-1 text-center bg-zinc-800 ">
            + Node.js
          </li>
          <li className="flex items-center justify-center w-full col-span-1 px-5 py-1 text-center bg-zinc-800 ">
            + Tailwind
          </li>
        </ul>
        <ul className="grid w-full grid-cols-3 gap-2 text-[#FF9000] max-lg:text-sm">
          <li className="flex items-center justify-center w-full col-span-1 px-5 py-1 text-center bg-zinc-800 ">
            + SQL Server
          </li>
          <li className="flex items-center justify-center w-full col-span-1 px-5 py-1 text-center bg-zinc-800 ">
            + MySQL
          </li>
          <li className="flex items-center justify-center w-full col-span-1 px-5 py-1 text-center bg-zinc-800 ">
            + Oracle
          </li>
        </ul>
      </div>
    </div>
  );
}

const chambadata = [
  {
    role: "Freelance Frontend",

    company: "Nuevamnt SAC",
    period: "Jan 2024 - April 2024",
    tech: "React, Tailwind, Swiper.js",
    notes: "Worked on a landing page ",
  },
  {
    role: "Fullstack lead",
    company: "Nuevamnt SAC",
    period: "Nov 2022 - Aug 2023",
    tech: "NextJs, ExpressJs , Tailwind, SQL",
    notes: "I built a web app for manage courses and students",
  },
  {
    role: "Frontend Dev",
    company: "GS Agency",
    period: "Sep 2022 - Oct 2022",
    tech: "React, Tailwind, Node, SQL",
    notes: "Worked on an internal web app for manage finances and sales",
  },
];
