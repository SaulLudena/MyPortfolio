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
          <p className="mb-4 text-zinc-400 max-lg:text-sm">
            When I was younger, I never really understood how life worked. There
            were so many things I had to learn to become the person I am today.
            Learning new things, receiving feedback, and finding ways to improve
            my work have given my life real meaning.
          </p>
        </div>

        <ul className="grid w-full grid-cols-3 gap-2 mb-2 text-white">
          {infoItems.map((item, index) => (
            <li key={index} className="grid gap-5 p-4 bg-neutral-800">
              <div className="flex items-center gap-1 mb-1 text-xs">
                <span className="text-sm">+</span>
              </div>
              <div className="flex flex-col text-sm">
                <span className="opacity-70 max-lg:text-sm">{item.label}</span>
                <span className="text-lg">{item.value}</span>
              </div>
            </li>
          ))}
        </ul>

        <ul className="grid w-full grid-cols-2 gap-2 text-white">
          <li className="relative group">
            <div className="absolute w-full h-full pointer-events-none">
              <div className="h-[0.5px] bg-white w-0 group-hover:w-full transition-all duration-200 ease-in-out"></div>
              <div className="w-[0.5px] h-0 bg-white group-hover:h-full transition-all duration-200 ease-in-out"></div>
            </div>
            <div className="absolute w-full h-full pointer-events-none">
              {/* Línea vertical: de arriba hacia abajo */}
              <div className="absolute bottom-0 right-0 w-[1px] h-0 bg-zinc-300 group-hover:h-full transition-all duration-500 ease-in-out"></div>

              {/* Línea horizontal: de izquierda a derecha */}
              <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-500 ease-in-out"></div>
            </div>
            <div className="absolute w-full h-full pointer-events-none">
              {/* Línea vertical: de arriba hacia abajo */}
              <div className=" absolute left-8 top-[1.6rem] w-0 h-[1px] bg-white group-hover:w-52 transition-all duration-500 ease-in-out"></div>
            </div>
            <a
              href="https://musicforprogramming.net/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="grid gap-5 p-4 bg-neutral-800"
            >
              <div className="flex items-center gap-1 mb-1 text-xs">
                <span className="text-sm">+</span>
              </div>
              <div className="flex flex-col text-sm">
                <span className="opacity-70">Favorite webpage</span>
                <span className="text-lg">CLICK HERE</span>
              </div>
            </a>
          </li>

          <li className="grid gap-5 p-4 bg-neutral-800">
            <div className="flex items-center gap-1 mb-1 text-xs">
              <span className="text-sm">+</span>
            </div>
            <div className="flex flex-col text-sm">
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
              text="[ 00.00_alpha_end ]"
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
              text="[ 127.0.0.1_alpha_end ]"
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

const infoItems = [
  { label: "Favorite artist", value: "WISP" },
  { label: "Best feeling", value: "NOSTALGIA" },
  { label: "Hobby", value: "LIFTING WEIGHTS" },
];
