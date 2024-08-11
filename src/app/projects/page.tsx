
import { IoFolderOpen } from "react-icons/io5";
// components
import LayoutAnimation from "@/components/layout-animation"
import { ProjectWrapper } from "./project-wrapper";
import { ProjectDetail } from "@/lib/Project";

const Projects = () => {
  return (
    <div className="min-h-screen pt-14">
      <LayoutAnimation>
      <section className="w-3/4 m-auto">
        <div className="flex space-x-2 items-center">
          <h1 className="text-2xl font-bold text-blue-600">Projects</h1>
          <IoFolderOpen />
        </div>
        <div className="w-11/12 m-auto mt-2 grid grid-cols-3 gap-4">
          <ProjectDetails />
        </div>
      </section>
      </LayoutAnimation>
    </div>
  )
}

export default Projects

const ProjectDetails = () => {
  return (
    <>
      {ProjectDetail.map((project, index) => (
        <ProjectWrapper
          key={index}
          src={project.src}
          title={project.title}
          href={project.href}
        />
      ))}
    </>
  )
}