import Project from "../components/Project";
import { myProjects } from "../constants";
import SectionHeading from "../components/SectionHeading";

const Projects = () => {
  return (
    <section id="work" className="relative pb-20 mt-20 c-space md:mt-30">
      <SectionHeading>Selected Projects</SectionHeading>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {myProjects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
