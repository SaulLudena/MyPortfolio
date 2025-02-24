import { FaRegCopy } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import background_1 from "../../public/backgrounds/bg_1.png";
import Image from "next/image";
export default function Presentation() {
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("cornejo758@gmail.com");
  const handleCopy = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 10000);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };
  return (
    <>
      <div className=" grid items-center  h-[70vh] z-10 absolute">
        <div className="grid gap-1">
          <h3 className="text-xl text-[#EEEEEE]">Hello, I am</h3>
          <div className="flex gap-5 font-medium text-[#EEEEEE] text-[10rem]">
            <div>
              <span className="text-[#00FFB2]">W</span>ilson
            </div>
            <div>
              <span className="text-[#00FFB2]">S</span>aul
            </div>
          </div>
          <div className="text-[#EEEEEE] text-xl">
            <h3>
              Full-Stack Developer & UI/UX Designer passionate about web
              development, photography, math rock, and cats.
            </h3>
            <h3>Let’s create something awesome</h3>
          </div>

          <div className="flex translate-y-4">
            <div className="relative bg-gradient-to-r from-zinc-700 to-zinc-900 p-[1px] rounded-2xl">
              <div className="flex items-center gap-3  bg-[#080808] rounded-2xl  mask mask-squircle text-white">
                <p className="bg-[#080808] py-6 pl-8 pr-16 rounded-2xl   text-[#838383] shadow-xl ">
                  cornejo758@gmail.com
                </p>
                <div className="flex items-center gap-2 -translate-x-4 ">
                  {copied ? (
                    <div className="p-3 text-white transition duration-200 rounded-lg ">
                      <FaCheck />
                    </div>
                  ) : (
                    <div
                      onClick={handleCopy}
                      target="_blank"
                      className="p-3 transition duration-200 rounded-lg cursor-pointer hover:text-black text-zinc-500 hover:bg-white"
                    >
                      <FaRegCopy />
                    </div>
                  )}
                  <a
                    href={`mailto:${email}`}
                    className="p-3 transition duration-200 rounded-lg cursor-pointer hover:text-black text-zinc-500 hover:bg-white"
                  >
                    <CiLocationArrow1 />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={background_1}
        className="blur-2xl -translate-y-[20%] rounded-full "
      />
    </>
  );
}
