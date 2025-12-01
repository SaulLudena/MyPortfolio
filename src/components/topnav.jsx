import DecryptedText from "../animations/decryptedText";
import { IoHome, IoSkull } from "react-icons/io5";
import { FaBriefcase, FaCamera } from "react-icons/fa";
import { GiBootPrints } from "react-icons/gi";

export default function Presentation() {
  return (
    <div className="grid pt-14 gap-36 max-lg:gap-20">
      <div className="flex gap-4 text-[#DDDDDD] ">
        <div className="w-4 gap-3 bg-white h-[1px]"></div>
        <div className="w-full flex justify-between ">
          <div className="grid text-sm  ">
            <span>
              <DecryptedText
                text="[ 00.00_alpha ]"
                animateOn="view"
                revealDirection="start"
                speed={50}
                maxIterations={30}
                sequential={"false"}
                characters="01<>/\\#$%*"
                className=" text-[#DDDDDD] pt-5 revealed max-lg:text-xs "
                parentClassName="all-letters"
                encryptedClassName="text-zinc-800"
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
                characters="01<>/\\#$%*"
                className=" text-[#DDDDDD] pt-5 revealed max-lg:text-xs"
                parentClassName="all-letters"
                encryptedClassName="text-zinc-800"
              />
            </span>
          </div>
          <ul className="flex items-center">
            {/* Opción EN */}
            <li>
              <input
                type="radio"
                id="lang-en"
                name="language"
                value="en"
                className="hidden peer/lang-en"
                defaultChecked
              />
              <label
                htmlFor="lang-en"
                className="cursor-pointer text-[#7e7e7e] p-2 transition
                 peer-checked/lang-en:bg-zinc-800 
                 peer-checked/lang-en:text-white
      "
              >
                <DecryptedText
                  text="English"
                  animateOn="view"
                  revealDirection="start"
                  speed={50}
                  maxIterations={30}
                  sequential={"false"}
                  characters="0$#45@M5>?/[]{}^*"
                  className=" text-[#DDDDDD] pt-5 revealed max-lg:text-xs"
                  parentClassName="all-letters"
                  encryptedClassName="text-zinc-800"
                />
              </label>
            </li>

            {/* Opción ESP */}
            <li>
              <input
                type="radio"
                id="lang-es"
                name="language"
                value="es"
                className="hidden peer/lang-es"
              />
              <label
                htmlFor="lang-es"
                className="cursor-pointer text-gray-400 p-2 transition
                 peer-checked/lang-es:bg-zinc-800 
                 peer-checked/lang-es:text-white
      "
              >
                Spanish
              </label>
            </li>
          </ul>
        </div>
      </div>

      <div className="">
        <div className="flex items-end gap-2">
          <h1 className="flex flex-col gap-2">
            <DecryptedText
              text="Hi, I am Saul"
              animateOn="view"
              revealDirection="start"
              speed={50}
              maxIterations={30}
              sequential={"false"}
              characters="0$#45@M5>?/[]{}^*"
              className="text-5xl text-[#DDDDDD] revealed max-lg:text-4xl tracking-[0.5rem] max-lg:tracking-[0.3rem]"
              encryptedClassName="encrypted"
            />
          </h1>
          <div>
            <ul className="grid grid-cols-2 gap-2 -translate-y-2 ">
              <li className="w-3 h-3 bg-[#00DF82] rounded-full"></li>
              <li className="w-3 h-3 opacity-0"></li>
              <li className="w-3 h-3 bg-[#00DF82] rounded-full"></li>
              <li className="w-3 h-3 bg-[#00DF82] rounded-full"></li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className=" w-full h-[1px] bg-[#DDDDDD] "></div>
          <span className="text-[#AAAAAA] text-2xl">+-</span>
        </div>
        <ul className="flex items-center gap-4 text-[#747474] mt-3 text-md max-lg:hidden  ">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-1 hover:text-[#00DF82] cursor-pointer "
            >
              <p className="text-xl group-hover:text-emerald-500">
                {item.icon}
              </p>
              <DecryptedText
                text={item.text}
                animateOn="view"
                revealDirection="start"
                speed={40}
                maxIterations={90}
                className=""
                sequential={"false"}
                characters="0}^*"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
const navItems = [
  { icon: <IoHome />, text: "[Home]" },
  { icon: <IoSkull />, text: "[Experience]" },
  { icon: <FaBriefcase />, text: "[Portfolio]" },
  { icon: <GiBootPrints />, text: "[Contact me]" },
  { icon: <FaCamera />, text: "[Misc]" },
];
