import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
export default function Contact() {
  return (
    <div className="fixed right-12 bottom-14">
      <ul className="grid gap-3">
        <li className=" bg-[#00000085] text-[#00FFB2] p-4 rounded-full text-3xl">
          <FaGithub />
        </li>
        <li className="bg-[#00000085] text-[#00FFB2] p-4 rounded-full text-3xl">
          <FaLinkedinIn />
        </li>
        <li className="bg-[#00000085] text-[#00FFB2] p-4 rounded-full text-3xl">
          <IoMdMail />
        </li>
      </ul>
    </div>
  );
}
