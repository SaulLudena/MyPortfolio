import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";

export default function Contact() {
  return (
    <div className="flex gap-10 py-20 max-lg:text-sm ">
      <div className="grid items-center w-full gap-5 text-white rounded-xl">
        <h1 className="text-3xl font-bold container_down">Contact me</h1>

        <div className="">
          <ul className="grid grid-cols-2 gap-10 max-xl:grid-cols-1 max-lg:pb-20">
            <li className="">
              <a
                href="https://www.linkedin.com/in/wilson-cornejo/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0C0C0C] flex max-sm:flex-col w-full h-full transition duration-300 hover:shadow-2xl rounded-xl"
              >
                <div className="grid items-center w-full h-full gap-4 p-10 max-sm:text-center">
                  <h1 className="text-3xl font-bold text-gra-300">Linkedin</h1>
                </div>
                <div className="grid items-center justify-center h-full p-5 text-gray-300 max-sm:pt-0 w-96 max-sm:w-full">
                  <AiFillLinkedin size={100} />
                </div>
              </a>
            </li>
            <li className="">
              <a
                href="https://github.com/SaulLudena"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0C0C0C] flex max-sm:flex-col w-full h-full transition duration-300 hover:shadow-2xl rounded-xl"
              >
                <div className="grid items-center w-full h-full gap-4 p-10 max-sm:text-center">
                  <h1 className="text-3xl font-bold text-gra-300">Github</h1>
                </div>
                <div className="grid items-center justify-center h-full p-5 text-gray-300 max-sm:pt-0 w-96 max-sm:w-full">
                  <AiFillGithub size={100} />
                </div>
              </a>
            </li>
            <li className="">
              <a
                href="mailto:cornejo758@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0C0C0C] flex max-sm:flex-col w-full h-full transition duration-300 hover:shadow-2xl rounded-xl"
              >
                <div className="grid items-center w-full h-full gap-4 p-10 max-sm:text-center">
                  <h1 className="text-3xl font-bold text-gra-300">Email</h1>
                </div>
                <div className="grid items-center justify-center h-full p-5 text-gray-300 max-sm:pt-0 w-96 max-sm:w-full">
                  <AiFillMail size={100} />
                </div>
              </a>
            </li>
            <li className="">
              <a
                href="https://www.instagram.com/okinawa2k77/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0C0C0C] flex max-sm:flex-col w-full h-full transition duration-300 hover:shadow-2xl rounded-xl"
              >
                <div className="grid items-center w-full h-full gap-4 p-10 max-sm:text-center">
                  <h1 className="text-3xl font-bold text-gra-300">Instagram</h1>
                </div>
                <div className="grid items-center justify-center h-full p-5 text-gray-300 max-sm:pt-0 w-96 max-sm:w-full">
                  <AiFillInstagram size={100} />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
