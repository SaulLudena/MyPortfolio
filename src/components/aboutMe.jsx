import { FaReact, FaServer, FaDatabase } from "react-icons/fa";
import { GiArtificialHive } from "react-icons/gi";
import { motion } from "framer-motion";
export default function AboutMe() {
  const texto =
    "Hello there, I am Wilson a web developer based in Lima, Peru. I started to learning programming seven years ago. I have experience working with:";

  return (
    <div className="flex gap-10 py-20 max-lg:text-sm ">
      <div className="grid items-center w-full gap-5 text-white rounded-xl">
        <div className="">
          <h1 className="mb-2 text-3xl font-bold">About me</h1>
          {texto.split("").map((letra, index) => (
            <motion.span
              key={index}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.05, duration: 0.1 }}
            >
              {letra}
            </motion.span>
          ))}
        </div>
        <div className="">
          <ul className="grid grid-cols-2 gap-10 max-xl:grid-cols-1 max-lg:pb-20">
            {knowledges.map((knowledge, index) => (
              <li key={index} className="">
                <div className="bg-[#0C0C0C] flex max-sm:flex-col w-full h-full transition duration-300 shadow-2xl rounded-xl">
                  <div className="grid items-center w-full h-full gap-4 p-10 max-sm:text-center">
                    <h1
                      className={`text-3xl font-bold text-[${knowledge.color}] `}
                    >
                      {knowledge.title}
                    </h1>
                    <p className="text-sm text-gray-200">
                      {knowledge.description}
                    </p>
                  </div>
                  <div
                    className={`grid items-center justify-center h-full p-5 text-gray-300 max-sm:pt-0 w-96 max-sm:w-full text-[${knowledge.color}]`}
                  >
                    {knowledge.icon}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const knowledges = [
  {
    title: "Frontend",
    description: "Building client side using React and TypeScript",
    icon: <FaReact size={100} />,
    color: "#04d8f9",
  },
  {
    title: "Backend",
    description: "Building servers using Node and Express",
    icon: <FaServer size={100} />,
    color: "#9ec24a",
  },
  {
    title: "Database",
    description: "Designing accurate databases using SQL",
    icon: <FaDatabase size={100} />,
    color: "#d8c13e",
  },
  {
    title: "Machine learning",
    description: "Handling versioning using Git and GitHub",
    icon: <GiArtificialHive size={100} />,
    color: "#c29c4a",
  },
];
