// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
export default function experienceItem({
  title,
  date,
  description,
  functions,
}) {
  return (
    <li className="flex ">
      <div className="-translate-x-[11.9px] translate-y-2">
        <div className="w-5 h-5 bg-[#EEEEEE] rounded-full"></div>
      </div>
      <div className="text-[#EEEEEE] gap-6 grid pl-5">
        <div className="flex  items-center  justify-between gap-1 font-medium  text-3xl">
          <div className="gap-2 flex">
            <div>
              <span className="text-[#00FFB2]">R</span>eact
            </div>
            <div>
              <span className="text-[#00FFB2]">D</span>eveloper
            </div>
          </div>
          <h3 className="text-lg text-[#bdbdbd]">august 2022 - july 2023</h3>
        </div>
        <h3>
          Building websites using common technologies like Html, Css, Boostrap
          and Tailwind css and evolving them to add new features using libraries
          and frameworks like
        </h3>
        <ul className=" w-[90%] max-w-[1800px] m-auto grid gap-3">
          <li className="bg-[#000000c6] p-6 rounded-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam non
            sribus. Commodi minima alias non velit! Ipsum, placeat impedit.
            {/*
              <span>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={3}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>Slide 1</SwiperSlide>
                  <SwiperSlide>Slide 2</SwiperSlide>
                  <SwiperSlide>Slide 3</SwiperSlide>
                  <SwiperSlide>Slide 4</SwiperSlide>
                  ...
                </Swiper>
              </span>
            */}
          </li>
          <li className="bg-[#000000c6] p-6 rounded-3xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            eum inventore rep luptatem minus! Numquam reprehenderit, amet quam
            autem quas quaerat.
          </li>
          <li className="bg-[#000000c6] p-6 rounded-3xl">
            Building websites using common technologies like Html, Css, Boostrap
            and Tailwind css and evolving them to add new features using
            libraries and frameworks like
          </li>
        </ul>
      </div>
    </li>
  );
}
