// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
export default function experienceItem({ experience }) {
  const { title, date, description, functions } = experience;

  return (
    <li className="flex ">
      <div className="-translate-x-[10px] translate-y-2">
        <div className="w-5 h-5 bg-[#00FFB2] rounded-full"></div>
      </div>
      <div className="text-[#EEEEEE] gap-3 grid pl-5">
        <div className="flex  items-center  justify-between gap-1 font-medium  text-3xl mb-5">
          <div className="gap-2 flex">
            {
              //pick the first letter of the title and make it green and the rest of the letters in the title make them normal

              title.split("").map((letter, index) => (
                <span
                  key={index}
                  className={`tracking-[-8px] select-none ${
                    index === 0 ? "text-[#00FFB2]" : ""
                  } font-medium`}
                >
                  {letter}
                </span>
              ))
            }
          </div>
          <h3 className="text-lg text-[#bdbdbd]">{date}</h3>
        </div>
        <h3>
          Building websites using common technologies like Html, Css, Boostrap
          and Tailwind css and evolving them to add new features using libraries
          and frameworks like
        </h3>

        <ul className=" w-[95%] max-w-[1800px] ml-auto grid gap-3">
          {functions.map((func, index) => (
            <li className="bg-[#000000c6] py-5 px-7 rounded-3xl">{func}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}
