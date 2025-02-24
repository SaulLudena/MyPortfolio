import Logo from "../../../public/favicon.svg";
import Image from "next/image";
import NavBarMenuItem from "./navbarMenuItem";
export default function Sidenav() {
  return (
    <div className="flex items-center gap-20 h-[20vh] text-white max-xl:py-10 z-50 relative">
      <div className="flex items-center gap-3">
        <Image src={Logo} alt="logo" width={30} height={30} />
        <h1>Saul Dev</h1>
      </div>
      <div>
        <ul className="flex items-center  bg-black border-2 border-black rounded-3xl text-[#EEEEEE] shadow-2xl-xl">
          <NavBarMenuItem route="/" label="Home" />
          <NavBarMenuItem route="/" label="Experience" />
          <NavBarMenuItem route="/" label="Portfolio" />
          <NavBarMenuItem route="/" label="About me" />
        </ul>
      </div>
    </div>
  );
}
