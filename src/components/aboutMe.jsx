import { FaReact, FaServer, FaDatabase, FaGithubAlt } from "react-icons/fa";

export default function AboutMe() {
  return (
    <div className="flex gap-10 py-20 max-lg:text-sm ">
      <div className="grid items-center w-full gap-5 text-white rounded-xl">
        <div className="container_down">
          <h1 className="mb-2 text-3xl font-bold">About me</h1>
          <p className="text-gray-200 text-md">
            Hello there, I am <strong>Wilson</strong> a web developer based in{" "}
            <strong>Lima, Peru</strong>. I started to learning programming seven
            years ago. I have experience working with:
          </p>
        </div>
        <div className="">
          <ul className="grid grid-cols-2 gap-10 max-xl:grid-cols-1 max-lg:pb-20">
            <li className="">
              <div className="bg-[#0C0C0C] flex max-sm:flex-col w-full h-full transition duration-300 shadow-2xl rounded-xl">
                <div className="grid items-center w-full h-full gap-4 p-10 max-sm:text-center">
                  <h1 className="text-3xl font-bold text-[#04d8f9]">
                    Frontend
                  </h1>
                  <p className="text-sm text-gray-200">
                    Building client side using <strong>React</strong> and{" "}
                    <strong>TypeScript</strong>
                  </p>
                </div>
                <div className="grid items-center justify-center h-full p-5 text-gray-300 max-sm:pt-0 w-96 max-sm:w-full">
                  <FaReact size={100} />
                </div>
              </div>
            </li>
            <li className="">
              <div className="bg-[#0C0C0C]  flex w-full max-sm:flex-col h-full transition duration-300 shadow-2xl rounded-xl">
                <div className="grid items-center w-full h-full gap-4 p-10 max-sm:text-center">
                  <h1 className="text-3xl font-bold text-[#9ec24a]">Backend</h1>
                  <p className="text-sm text-gray-200">
                    Building servers using <strong>Node</strong> and{" "}
                    <strong>Express</strong>
                  </p>
                </div>
                <div className="grid items-center justify-center h-full p-5 text-gray-300 max-sm:pt-0 w-96 max-sm:w-full">
                  <FaServer size={100} />
                </div>
              </div>
            </li>
            <li className="">
              <div className="bg-[#0C0C0C]  flex w-full max-sm:flex-col h-full transition duration-300 shadow-2xl rounded-xl">
                <div className="grid items-center w-full h-full gap-4 p-10 max-sm:text-center">
                  <h1 className="text-3xl font-bold text-[#d8c13e]">
                    Database
                  </h1>
                  <p className="text-sm text-gray-200">
                    Designing accurate databases using <strong>SQL</strong>
                  </p>
                </div>
                <div className="grid items-center justify-center h-full p-5 text-gray-300 max-sm:pt-0 w-96 max-sm:w-full">
                  <FaDatabase size={100} />
                </div>
              </div>
            </li>
            <li className="">
              <div className="bg-[#0C0C0C]  flex w-full max-sm:flex-col h-full transition duration-300 shadow-2xl rounded-xl">
                <div className="grid items-center w-full h-full gap-4 p-10 max-sm:text-center">
                  <h1 className="text-3xl font-bold text-[#c29c4a]">
                    Versioning
                  </h1>
                  <p className="text-sm text-gray-200">
                    Handling versioning using <strong>Git</strong> and{" "}
                    <strong>GitHub</strong>
                  </p>
                </div>
                <div className="grid items-center justify-center h-full p-5 text-gray-300 max-sm:pt-0 w-96 max-sm:w-full">
                  <FaGithubAlt size={100} />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
