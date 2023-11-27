export default function Presentation() {
  return (
    <div className="container">
      <div className="grid col-span-8 gap-4 text-xl text-white ">
        <p className="max-lg:text-sm">Welcome, I am</p>
        <span className="font-light text-9xl max-lg:text-8xl text-[#00FFB2]">
          WiDev
        </span>
        <p className="max-lg:text-sm">
          I am a web developer located in Lima - Peru, cats, photography and
          programming i would say.
        </p>
        <div className="mt-5 w-72">
          <a
            href="mailto:cornejo758@gmail.com"
            className="px-14 py-4 bg-[#080808] flex rounded-lg hover:-translate hover: transition duration-300 ease-in-out hover:shadow-xl items-center justify-center group max-lg:w-52"
          >
            <p className="max-lg:text-sm">Get in touch</p>
          </a>
        </div>
      </div>
    </div>
  );
}
