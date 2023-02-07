import ProjectCard from "@/components/ProjectCard";
import ProjectsNavbar from "@/components/ProjectsNavbar";
import { projects } from "data";
import { useState } from "react";
import { Category } from "types";

const Projects = () => {
  const [projectItem, setProjectItem] = useState(projects);
  const [active, setActive] = useState("all");

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjectItem(projects);
      setActive(category);
      return;
    }

    const newArray = projects.filter((item) => {
      return item.category.includes(category);
    });

    setProjectItem(newArray);
    setActive(category);
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
      <ProjectsNavbar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projectItem.map((project) => (
          <div
            className="col-span-12 p-2 bg-gray-200 rounded sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            key={project.name}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
