import DecryptedText from "../animations/decryptedText";
import { IoHome, IoSkull } from "react-icons/io5";
import { FaBriefcase, FaCamera } from "react-icons/fa";
import { GiBootPrints } from "react-icons/gi";

export default function Presentation() {
  return (
    <div className="grid pt-14 gap-36">
      <div className="flex gap-4 text-[#DDDDDD] ">
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

      <div className="">
        <div className="flex items-end gap-2">
          <h1 className="tracking-[0.5rem] text-5xl text-[#DDDDDD] pt-5">
            <DecryptedText
              text="Hi, I am Saul"
              animateOn="view"
              revealDirection="start"
              speed={50}
              maxIterations={30}
              sequential={"false"}
              characters="0$#45@M5>?/[]{}^*"
              className="text-5xl text-[#DDDDDD] pt-5 revealed"
              parentClassName="all-letters"
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
          <div className=" w-full h-[1px] bg-[#DDDDDD]"></div>
          <span className="text-[#AAAAAA] text-2xl">+-</span>
        </div>
        <ul className="flex items-center gap-7  text-[#747474] mt-3 text-md">
          <li className="flex items-center gap-1 hover:text-[#00DF82] cursor-pointer">
            <p className="text-xl">
              <IoHome />
            </p>
            <DecryptedText
              text="[Home]"
              animateOn="view"
              revealDirection="start"
              speed={40}
              maxIterations={90}
              sequential={"false"}
              characters="0}^*"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
            />
          </li>
          <li className="flex items-center gap-1">
            <p className="text-xl">
              <IoSkull />
            </p>
            <DecryptedText
              text="[Experience]"
              animateOn="view"
              revealDirection="start"
              speed={40}
              maxIterations={90}
              sequential={"false"}
              characters="0}^*"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
            />
          </li>
          <li className="flex items-center gap-1">
            <p className="text-xl">
              <FaBriefcase />
            </p>
            <DecryptedText
              text="[Portfolio]"
              animateOn="view"
              revealDirection="start"
              speed={40}
              maxIterations={90}
              sequential={"false"}
              characters="0}^*"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
            />
          </li>
          <li className="flex items-center gap-1">
            <p className="text-xl">
              <GiBootPrints />
            </p>
            <DecryptedText
              text="[Contact me]"
              animateOn="view"
              revealDirection="start"
              speed={40}
              maxIterations={90}
              sequential={"false"}
              characters="0}^*"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
            />
          </li>
          <li className="flex items-center gap-1">
            <p className="text-xl">
              <FaCamera />
            </p>
            <DecryptedText
              text="[Misc]"
              animateOn="view"
              revealDirection="start"
              speed={40}
              maxIterations={90}
              sequential={"false"}
              characters="0}!!!!!%%1awdawdv12d12vd12d^*"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
