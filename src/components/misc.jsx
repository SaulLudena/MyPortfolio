import { FaCamera } from "react-icons/fa";
import DecryptedText from "../animations/decryptedText";
export default function misc() {
  return (
    <div className="col-span-12 pb-10 text-white">
      <div className="grid gap-2 ">
        <h1 className="text-[#E9E9E9] flex items-center gap-2">
          <FaCamera />
          Miscellaneous
        </h1>
        <div className="relative">
          <div className=" w-20 h-[1px] bg-[#E9E9E9] z-10 absolute"></div>
          <div className=" w-full h-[1px] bg-[#4B4B4B] z-0"></div>
        </div>
      </div>
      <div className="pt-4 ">
        <div>
          <p className="pb-2 text-[#EDEDED]">+ What i love of life</p>
          <p className="mb-4 text-zinc-400">
            When i was young i always was someone that never has an
            understanding of how life works, a lot of things i had to learn to
            be the man who i am now were necessary. Learning new things, getting
            feedback from people and how to impove my work has gave sense to my
            life
          </p>
        </div>

        <ul class="grid grid-cols-3 gap-2 w-full  text-white mb-2">
          <li class="bg-neutral-800 p-4 grid gap-5">
            <div class="text-xs mb-1 flex items-center gap-1">
              <span class="text-sm">+</span>
            </div>
            <div class="text-sm flex flex-col">
              <span className="opacity-70">Favorite artist</span>
              <span className="text-lg">WISP</span>
            </div>
          </li>

          <li class="bg-neutral-800 p-4 grid gap-5">
            <div class="text-xs mb-1 flex items-center gap-1">
              <span class="text-sm">+</span>
            </div>
            <div class="text-sm flex flex-col">
              <span className="opacity-70">Best feeling</span>
              <span className="text-lg">NOSTALGIA</span>
            </div>
          </li>

          <li class="bg-neutral-800 p-4 grid gap-5">
            <div class="text-xs mb-1 flex items-center gap-1">
              <span class="text-sm">+</span>
            </div>
            <div class="text-sm flex flex-col">
              <span className="opacity-70">Hobby</span>
              <span className="text-lg">LIFTING WEIGHTS</span>
            </div>
          </li>
        </ul>

        <ul class="grid grid-cols-2 gap-2 w-full  text-white">
          <li class="bg-neutral-800 p-4 grid gap-5">
            <div class="text-xs mb-1 flex items-center gap-1">
              <span class="text-sm">+</span>
            </div>
            <div class="text-sm flex flex-col">
              <span className="opacity-70">Favorite webpage</span>
              <span className="text-lg">CLIC HERE</span>
            </div>
          </li>

          <li class="bg-neutral-800 p-4 grid gap-5">
            <div class="text-xs mb-1 flex items-center gap-1">
              <span class="text-sm">+</span>
            </div>
            <div class="text-sm flex flex-col">
              <span className="opacity-70">Favorite music gender</span>
              <span className="text-lg">MATH ROCK</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex gap-4 text-[#DDDDDD] pt-16">
        <div className="w-4 gap-3 bg-white h-[1px]"></div>
        <div className="grid text-sm">
          <span>
            <DecryptedText
              text="[ 00.00_alpha ]"
              animateOn="view"
              revealDirection="start"
              speed={50}
              maxIterations={30}
              sequential={"false"}
              characters="0$#45@M5>?/[]{}^*"
              className=" text-[#DDDDDD] pt-5 revealed "
              parentClassName="all-letters"
              encryptedClassName="encrypted"
            />
          </span>
          <span>
            <DecryptedText
              text="[ 127.0.0.1_alpha ]"
              animateOn="view"
              revealDirection="start"
              speed={50}
              maxIterations={30}
              sequential={"false"}
              characters="0$#45@M5>?/[]{}^*"
              className=" text-[#DDDDDD] pt-5 revealed "
              parentClassName="all-letters"
              encryptedClassName="encrypted"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
