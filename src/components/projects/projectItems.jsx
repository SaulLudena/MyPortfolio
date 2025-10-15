import React from "react";

export default function projectItems({ index, item }) {
  return (
    <li
      key={index}
      className="grid items-center justify-between grid-cols-12 bg-zinc-900"
    >
      <div className="flex flex-col col-span-10 p-4 ">
        <span className="flex items-center gap-2 px-2 py-1 text-white">
          <span className="w-2 h-2 rounded-full  bg-[#FF5053]"></span>
          <span className="text-lg">{item.projectName}</span>
        </span>
        <span className="px-2 py-1 text-[#A7A7A7]  w-[80%]">
          {item.description}
        </span>
      </div>
      <div className="grid h-full grid-cols-1 col-span-2 ">
        <a
          href={item.repo}
          target="_blank"
          rel="noreferrer"
          className="grid items-center justify-center col-span-1 bg-zinc-900"
        >
          + Github
        </a>
        <a
          href={item.urldemo}
          target="_blank"
          rel="noreferrer"
          className="grid items-center justify-center col-span-1 bg-[#121212] "
        >
          + Demo
        </a>
      </div>
    </li>
  );
}
