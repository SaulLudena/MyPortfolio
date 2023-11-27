import ProjectItem from "../projects/projectItem";
export default function projects({ projects }) {
  return (
    <div className="grid gap-6 py-20 text-white ">
      <h1 className="text-3xl font-bold max-lg:text-xl container_down">
        My work
      </h1>

      <div className="grid grid-cols-2 gap-10 max-xl:grid-cols-1 max-lg:pb-20">
        {projects.map((project) => (
          <ProjectItem key={project.project_id} project={project} />
        ))}
      </div>
    </div>
  );
}
