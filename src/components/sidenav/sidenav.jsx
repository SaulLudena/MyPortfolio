import SidenavItem from "./sidenavItem";
import {
  BsFillHouseDoorFill,
  BsFillBriefcaseFill,
  BsFillPersonFill,
} from "react-icons/bs";

import { AiFillContacts } from "react-icons/ai";
export default function Sidenav() {
  const iconsStyles = {
    icon: "w-full translate-y-5 max-lg:translate-y-6 group-hover:text-zinc-900 group-hover:-translate-y-[-7px] max-lg:group-hover:-translate-y-[-15px] transition duration-300 text-[#00FFB2] ",
    iconSize: 25,
  };
  return (
    <div className="flex items-center ">
      <div className="bottom-0 left-0 flex flex-col w-24 text-white shadow-2xl max-lg:fixed  max-lg:w-full max-lg:flex-row max-lg:[&>*:nth-child(1)]:rounded-none max-lg:[&>*:nth-child(4)]:rounded-none max-lg:bg-[#0f0f0f]">
        <SidenavItem
          icon={
            <BsFillHouseDoorFill
              className={iconsStyles.icon}
              size={iconsStyles.iconSize}
            />
          }
          rounded="rounded-t-xl"
          route="/"
          label="Home"
        />
        <SidenavItem
          icon={
            <BsFillBriefcaseFill
              className={iconsStyles.icon}
              size={iconsStyles.iconSize}
            />
          }
          rounded=""
          route="/work"
          label="Portfolio"
        />
        <SidenavItem
          icon={
            <BsFillPersonFill
              className={iconsStyles.icon}
              size={iconsStyles.iconSize}
            />
          }
          rounded=""
          route="/about"
          label="About"
        />
        <SidenavItem
          icon={
            <AiFillContacts
              className={iconsStyles.icon}
              size={iconsStyles.iconSize}
            />
          }
          rounded="rounded-b-xl"
          route="/contact"
          label="Contact"
        />
      </div>
    </div>
  );
}
