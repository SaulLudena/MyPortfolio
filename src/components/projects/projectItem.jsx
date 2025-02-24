export default function Project({ project }) {
  console.log(project);
  return (
    <a
      className="flex items-center w-full h-56 gap-20 max-sm:flex-col max-sm:h-full rounded-xl group"
      href={project.project_url_github}
      target="_blank"
      rel="noopener noreferrer "
    >
      <h1 className="text-[#252525] text-9xl group-hover:text-white transition duration-200">
        {project.project_id}
      </h1>
      <img
        src={
          project.project_image
            ? project.project_image
            : "https://via.placeholder.com/300"
        }
        alt=""
        className="w-[30rem] h-[20rem] object-cover rounded-xl opacity-20 group-hover:opacity-100 transition duration-200"
      />
      <div className="grid items-center">
        <div className="bg-[#080808]  w-[35rem] h-auto p-10 rounded-xl -translate-x-[32%] grid gap-5">
          <h1 className="text-4xl">{project.project_name}</h1>
          <p className="text-sm">{project.project_description}</p>
          <ul className="flex gap-5">
            {project.project_tech_used.map((tech, index) => (
              <li
                key={index}
                className="bg-black text-[#00FFB2] px-4 py-2 rounded-xl"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
}
