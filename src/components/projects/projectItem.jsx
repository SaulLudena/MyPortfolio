export default function Project({ project }) {
  console.log(project.project_demo_status);
  return (
    <div className="bg-[#0C0C0C] max-sm:flex-col  flex w-full h-56 max-sm:h-full transition duration-300 shadow-2xl rounded-xl">
      <div className="grid items-center w-full h-full gap-4 p-10 max-sm:p-5 max-sm:pb-0 max-sm:text-center ">
        <h1 className="text-3xl font-bold max-lg:text-2xl ">
          {project.project_name}
        </h1>
        <p className="text-sm text-gray-200 max-lg:text-sm">
          {project.project_description}
        </p>
        <div className="flex gap-2 max-sm:justify-center">
          <a
            href={project.project_url_github}
            className="px-3 py-2 bg-black rounded-lg shadow-lg text-[#00FFB2] hover:bg-[#00FFB2] hover:text-black transition duration-200 max-lg:text-sm"
          >
            source
          </a>
          {project.project_demo_status ? (
            <a
              href={project.project_url_demo}
              className="px-3 py-2 bg-black rounded-lg shadow-lg text-[#00FFB2] hover:bg-[#00FFB2] hover:text-black transition duration-200 max-lg:text-sm relative"
            >
              demo
              <div className="absolute top-0 w-3 h-3 p-1 translate-x-11 -translate-y-1 rounded-full bg-[#00FFB2]"></div>
            </a>
          ) : (
            <div className="px-3 py-2 bg-black rounded-lg shadow-lg text-[#8f287e] max-lg:text-sm relative">
              demo
              <div className="absolute top-0  w-3 h-3 p-1 translate-x-11 -translate-y-1 rounded-full bg-[#8f287e]"></div>
            </div>
          )}
        </div>
      </div>
      <div className="h-full p-5 max-sm:p-5 w-96 max-sm:w-full">
        <img
          src={project.project_image}
          className="object-cover w-full h-full max-sm:w-full max-sm:h-40 rounded-xl "
        />
      </div>
    </div>
  );
}
