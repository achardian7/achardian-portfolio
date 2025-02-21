import projects from "@/lib/constant";
import ScrollReveal from "./scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import StackTag from "./stack-tag";

const ProjectSection = () => {
  return (
    <ScrollReveal name="projects">
      <section id="projects" className="section-container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>

        <div className="flex flex-col space-y-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex space-x-5 rounded-md p-5 hover:bg-white/5 hover:shadow-md"
            >
              <div className="flex-1">
                <div className="relative h-[100px] w-full overflow-clip rounded">
                  <Image src={project.images[0]} alt={project.title} fill />
                </div>
              </div>
              <div className="flex-[2]">
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-lg font-semibold text-gray-200 hover:text-emerald-500">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-[14px]">{project.description}</p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  {project.techStacks.map((stack) => (
                    <StackTag key={stack} stack={stack} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
};

export default ProjectSection;
